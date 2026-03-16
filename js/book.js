// =============================================
// NILESHMENT — Book Detail Page Logic
// =============================================

(function () {

  /* ─── Helpers ─── */
  function qs(sel) { return document.querySelector(sel); }
  function qsa(sel) { return document.querySelectorAll(sel); }

  /* ─── Get book ID from URL ─── */
  const params = new URLSearchParams(window.location.search);
  const bookId = params.get('id');

  /* ─── Theme ─── */
  const saved = localStorage.getItem('nileshment-theme') || 'light';
  document.documentElement.dataset.theme = saved;
  const themeBtn = document.getElementById('themeBtn');
  themeBtn.textContent = saved === 'dark' ? '☀️' : '🌙';
  themeBtn.addEventListener('click', () => {
    const cur = document.documentElement.dataset.theme;
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('nileshment-theme', next);
    themeBtn.textContent = next === 'dark' ? '☀️' : '🌙';
  });

  /* ─── Redirect if no ID ─── */
  if (!bookId) {
    window.location.replace('index.html');
    return;
  }

  /* ─── Load book data ─── */
  const book = typeof getBookById === 'function'
    ? getBookById(bookId)
    : (BOOKS || []).find(b => b.id === bookId);

  if (!book) {
    document.getElementById('heroTitle').textContent = 'Book not found';
    return;
  }

  const catInfo = (CATEGORIES || []).find(c => c.id === book.category) || {};

  /* ════════════════════════
     RENDER PAGE TITLE & META
  ════════════════════════ */
  document.title = `${book.title} — Nileshment Book Notes`;
  qs('meta[name="description"]').content =
    `Complete summary, chapter breakdown, key insights, quotes and quiz for "${book.title}" by ${book.author} on Nileshment.`;

  /* ════════════════════════
     RENDER HERO
  ════════════════════════ */
  // Category badge
  const heroCat = document.getElementById('heroCat');
  heroCat.textContent = `${catInfo.icon || '📚'} ${catInfo.label || book.category}`;

  // Category pill in navbar
  document.getElementById('navCatPill').innerHTML =
    `<span>${catInfo.icon || '📚'} ${catInfo.label || book.category}</span>`;

  // Title & Author
  document.getElementById('heroTitle').textContent = book.title;
  document.getElementById('heroAuthor').innerHTML =
    `<strong>by ${book.author}</strong> &nbsp;·&nbsp; ${book.year}`;
  document.getElementById('heroTagline').textContent = `"${book.tagline}"`;

  // Stats chips
  document.getElementById('heroStats').innerHTML = `
    <span class="hero-stat-chip"><span class="chip-icon">★</span> <strong>${book.rating}</strong> Rating</span>
    <span class="hero-stat-chip"><span class="chip-icon">⏱</span> <strong>${book.readTime}</strong> Read time</span>
    <span class="hero-stat-chip"><span class="chip-icon">📄</span> <strong>${book.pages}</strong> Pages</span>
    <span class="hero-stat-chip"><span class="chip-icon">📅</span> <strong>${book.year}</strong></span>
  `;

  // Cover image with gradient fallback
  const coverImg = document.getElementById('heroCoverImg');
  const catEmojis = { 'self-help':'🧠','productivity':'⚡','finance':'💰','psychology':'🔬','biography':'🌟' };
  coverImg.src = book.image || '';
  coverImg.alt = `${book.title} book cover`;
  coverImg.onerror = function () {
    this.style.display = 'none';
    const wrap = document.getElementById('heroCoverWrap');
    const fallback = document.createElement('div');
    fallback.className = 'book-hero-cover-fallback';
    fallback.style.background = `linear-gradient(135deg, ${book.color}, ${shiftColor(book.color)})`;
    fallback.innerHTML = `
      <div class="fe">${catEmojis[book.category] || '📚'}</div>
      <div class="ft">${book.title}</div>
      <div class="fa">${book.author}</div>`;
    wrap.appendChild(fallback);
  };

  /* ════════════════════════
     SUMMARY & BIG IDEA
  ════════════════════════ */
  document.getElementById('summaryCard').textContent = book.summary;
  document.getElementById('bigIdeaText').textContent = book.bigIdea;

  /* ════════════════════════
     CHAPTERS
  ════════════════════════ */
  const chaptersGrid = document.getElementById('chaptersGrid');
  book.chapters.forEach((ch, i) => {
    const card = document.createElement('div');
    card.className = 'chapter-card';
    card.innerHTML = `
      <div class="chapter-header" aria-expanded="false" aria-controls="chap-body-${i}">
        <div class="chapter-num">${i + 1}</div>
        <div class="chapter-title-wrap">
          <div class="chapter-label">Chapter ${i + 1}</div>
          <div class="chapter-name">${ch.title}</div>
        </div>
        <div class="chapter-toggle" aria-hidden="true">▾</div>
      </div>
      <div class="chapter-body" id="chap-body-${i}" role="region">
        <p class="chapter-summary-text">${ch.summary}</p>
      </div>`;

    const header = card.querySelector('.chapter-header');
    header.addEventListener('click', () => {
      const isOpen = card.classList.toggle('open');
      header.setAttribute('aria-expanded', isOpen);
    });

    chaptersGrid.appendChild(card);
  });

  // Open first chapter automatically
  const firstCard = chaptersGrid.querySelector('.chapter-card');
  if (firstCard) {
    firstCard.classList.add('open');
    firstCard.querySelector('.chapter-header').setAttribute('aria-expanded', 'true');
  }

  /* ════════════════════════
     KEY INSIGHTS
  ════════════════════════ */
  const insightsGrid = document.getElementById('insightsGrid');
  book.keyInsights.forEach((ins, i) => {
    const card = document.createElement('div');
    card.className = 'insight-card';
    card.innerHTML = `
      <div class="insight-icon">${i + 1}</div>
      <div class="insight-text-wrap">
        <div class="insight-label">Insight ${i + 1}</div>
        <div class="insight-body">${ins}</div>
      </div>`;
    insightsGrid.appendChild(card);
  });

  /* ════════════════════════
     QUOTES
  ════════════════════════ */
  const quotesGrid = document.getElementById('quotesGrid');
  book.quotes.forEach(q => {
    const block = document.createElement('div');
    block.className = 'quote-block';
    block.innerHTML = `
      <div class="quote-text">${q}</div>
      <div class="quote-attribution">— ${book.author}, <em>${book.title}</em></div>`;
    quotesGrid.appendChild(block);
  });

  /* ════════════════════════
     QUIZ
  ════════════════════════ */
  const quizData = QUIZ_DATA[bookId] || [];

  if (quizData.length === 0) {
    document.getElementById('quizSection').innerHTML = `
      <div style="text-align:center; padding:40px; color:var(--text-3);">
        <div style="font-size:2.5rem; margin-bottom:12px;">🚧</div>
        <p>Quiz coming soon for this book!</p>
      </div>`;
  } else {
    initQuiz(quizData);
  }

  function initQuiz(questions) {
    let currentQ = 0;
    let score = 0;
    let answered = false;

    const total = questions.length;
    document.getElementById('quizTotal').textContent = total;
    document.getElementById('finalTotal').textContent = total;
    document.getElementById('quizTitle').textContent = `Think you know "${book.title}"?`;

    renderQuestion();

    function renderQuestion() {
      answered = false;
      const q = questions[currentQ];

      // Progress
      const pct = Math.round((currentQ / total) * 100);
      document.getElementById('qProgLabel').textContent = `Question ${currentQ + 1} of ${total}`;
      document.getElementById('qProgPct').textContent = pct + '%';
      document.getElementById('quizProgressFill').style.width = pct + '%';

      // Question text
      document.getElementById('qNum').textContent = `Question ${currentQ + 1}`;
      document.getElementById('qText').textContent = q.q;

      // Hide explanation and results
      const explanationEl = document.getElementById('quizExplanation');
      explanationEl.classList.remove('visible');
      document.getElementById('quizResults').classList.remove('visible');
      document.getElementById('quizQuestionWrap').style.display = 'block';

      // Build options
      const optContainer = document.getElementById('quizOptions');
      optContainer.innerHTML = '';
      const letters = ['A', 'B', 'C', 'D'];
      q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.innerHTML = `<span class="option-letter">${letters[idx]}</span><span>${opt}</span>`;
        btn.addEventListener('click', () => selectAnswer(idx, q));
        optContainer.appendChild(btn);
      });

      // Next button hidden
      const nextBtn = document.getElementById('quizNextBtn');
      nextBtn.classList.remove('visible');
      nextBtn.textContent = currentQ < total - 1 ? 'Next Question →' : 'See Results 🎉';
      nextBtn.onclick = advanceQuiz;
    }

    function selectAnswer(idx, q) {
      if (answered) return;
      answered = true;

      const opts = qsa('#quizOptions .quiz-option');
      opts.forEach(btn => { btn.disabled = true; });

      if (idx === q.answer) {
        opts[idx].classList.add('correct');
        score++;
        document.getElementById('quizScore').textContent = score;
      } else {
        opts[idx].classList.add('wrong');
        opts[q.answer].classList.add('reveal');
      }

      // Show explanation
      const explanationEl = document.getElementById('quizExplanation');
      document.getElementById('explanationText').textContent = q.explanation;
      explanationEl.classList.add('visible');

      // Show next button
      document.getElementById('quizNextBtn').classList.add('visible');
    }

    function advanceQuiz() {
      currentQ++;
      if (currentQ >= total) {
        showResults();
      } else {
        renderQuestion();
      }
    }

    function showResults() {
      // Update progress to 100%
      document.getElementById('quizProgressFill').style.width = '100%';
      document.getElementById('qProgPct').textContent = '100%';

      document.getElementById('quizQuestionWrap').style.display = 'none';
      document.getElementById('quizOptions').innerHTML = '';
      document.getElementById('quizExplanation').classList.remove('visible');
      document.getElementById('quizNextBtn').classList.remove('visible');

      document.getElementById('finalScore').textContent = score;
      document.getElementById('finalTotal').textContent = total;

      // Emoji & message
      const pct = (score / total) * 100;
      let emoji, msg;
      if (pct === 100) {
        emoji = '🏆'; msg = `Perfect score! You have completely absorbed "${book.title}". Impressive!`;
      } else if (pct >= 66) {
        emoji = '🎉'; msg = `Great job! You clearly engaged with the key ideas in "${book.title}". Review the missed questions to lock them in.`;
      } else if (pct >= 33) {
        emoji = '📚'; msg = `Not bad! Going back through the chapters will help reinforce the concepts. Knowledge grows with review.`;
      } else {
        emoji = '💪'; msg = `Keep going! The best time to learn is right now. Re-read the summary above and try again.`;
      }
      document.getElementById('resultsEmoji').textContent = emoji;
      document.getElementById('resultsMessage').textContent = msg;

      document.getElementById('quizResults').classList.add('visible');

      // Restart button
      document.getElementById('quizRestartBtn').onclick = () => {
        currentQ = 0;
        score = 0;
        document.getElementById('quizScore').textContent = 0;
        document.getElementById('quizResults').classList.remove('visible');
        renderQuestion();
      };
    }
  }

  /* ════════════════════════
     READING PROGRESS & TOC
  ════════════════════════ */
  const progressBar = document.getElementById('readingProgressBar');
  const fpFill = document.getElementById('fpFill');
  const fpLabel = document.getElementById('fpLabel');
  const floatingProgress = document.getElementById('floatingProgress');

  window.addEventListener('scroll', () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = Math.min(100, Math.round((window.scrollY / docHeight) * 100));
    const pct = scrolled + '%';
    progressBar.style.width = pct;
    fpFill.style.width = pct;
    fpLabel.textContent = scrolled + '% read';
    floatingProgress.classList.toggle('visible', window.scrollY > 200);

    // Active TOC highlight
    updateToc();
  });

  function updateToc() {
    const sections = ['sec-summary','sec-chapters','sec-insights','sec-quotes','sec-quiz'];
    let active = sections[0];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      if (el.getBoundingClientRect().top <= 140) active = id;
    });
    qsa('.toc-item a').forEach(a => a.classList.remove('active'));
    const tocMap = {
      'sec-summary': 'toc-summary',
      'sec-chapters': 'toc-chapters',
      'sec-insights': 'toc-insights',
      'sec-quotes': 'toc-quotes',
      'sec-quiz': 'toc-quiz'
    };
    const tocEl = document.getElementById(tocMap[active]);
    if (tocEl) tocEl.classList.add('active');
  }

  /* ─── Share button ─── */
  document.getElementById('shareBtn')?.addEventListener('click', async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: `${book.title} — Nileshment`, url });
      } catch {}
    } else {
      await navigator.clipboard.writeText(url).catch(() => {});
      const btn = document.getElementById('shareBtn');
      const orig = btn.textContent;
      btn.textContent = '✅ Copied!';
      setTimeout(() => { btn.textContent = orig; }, 2000);
    }
  });

  /* ─── Colour helper ─── */
  function shiftColor(hex) {
    try {
      const r = parseInt(hex.slice(1,3), 16);
      const g = parseInt(hex.slice(3,5), 16);
      const b = parseInt(hex.slice(5,7), 16);
      return `rgb(${Math.min(r+50,255)},${Math.min(g+50,255)},${Math.min(b+60,255)})`;
    } catch { return '#2a2a5a'; }
  }

  /* ─── Initial TOC ─── */
  updateToc();

})();
