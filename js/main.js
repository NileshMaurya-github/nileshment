// =============================================
// NILESHMENT — Main JavaScript (Homepage)
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  /* ─── State ─── */
  let currentCategory = 'all';
  let currentSearch = '';
  let booksExplored = 0;
  let exploredIds = new Set();

  /* ─── DOM Refs ─── */
  const booksGrid     = document.getElementById('booksGrid');
  const searchInput   = document.getElementById('searchInput');
  const searchClear   = document.getElementById('searchClear');
  const resultCount   = document.getElementById('resultCount');
  const catTabsWrap   = document.getElementById('catTabs');
  const modalOverlay  = document.getElementById('modalOverlay');
  const readingCounter = document.getElementById('readingCounter');
  const counterNum    = document.getElementById('counterNum');
  const themeBtn      = document.getElementById('themeBtn');

  /* ─── Theme ─── */
  const saved = localStorage.getItem('nileshment-theme') || 'light';
  document.documentElement.dataset.theme = saved;
  updateThemeBtn(saved);

  themeBtn.addEventListener('click', () => {
    const current = document.documentElement.dataset.theme;
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('nileshment-theme', next);
    updateThemeBtn(next);
  });

  function updateThemeBtn(theme) {
    themeBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
    themeBtn.title = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  }

  /* ─── Build Category Tabs ─── */
  CATEGORIES.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'cat-tab' + (cat.id === 'all' ? ' active' : '');
    btn.dataset.cat = cat.id;
    btn.innerHTML = `
      <span class="tab-emoji">${cat.icon}</span>
      <span>${cat.label}</span>
      <span class="tab-count">${cat.count}</span>
    `;
    btn.addEventListener('click', () => {
      currentCategory = cat.id;
      catTabsWrap.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      renderBooks();
    });
    catTabsWrap.appendChild(btn);
  });

  /* ─── Search ─── */
  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value.trim();
    searchClear.classList.toggle('visible', currentSearch.length > 0);
    renderBooks();
  });
  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    currentSearch = '';
    searchClear.classList.remove('visible');
    searchInput.focus();
    renderBooks();
  });

  /* ─── Get filtered books ─── */
  function getFiltered() {
    let books = getBooksByCategory(currentCategory);
    if (currentSearch) {
      books = books.filter(b =>
        b.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
        b.author.toLowerCase().includes(currentSearch.toLowerCase()) ||
        b.tagline.toLowerCase().includes(currentSearch.toLowerCase())
      );
    }
    return books;
  }

  /* ─── Render Books Grid ─── */
  function renderBooks() {
    const books = getFiltered();
    booksGrid.innerHTML = '';

    // Result count
    resultCount.innerHTML = `<strong>${books.length}</strong> book${books.length !== 1 ? 's' : ''}`;

    if (books.length === 0) {
      booksGrid.innerHTML = `
        <div class="no-results">
          <div class="nr-emoji">📭</div>
          <h3>No books found</h3>
          <p>Try a different search term or category.</p>
        </div>`;
      return;
    }

    books.forEach((book, i) => {
      const card = buildCard(book);
      card.style.animationDelay = `${i * 40}ms`;
      booksGrid.appendChild(card);
    });

    // Trigger reveal animation
    requestAnimationFrame(() => {
      booksGrid.querySelectorAll('.reveal').forEach(el => {
        setTimeout(() => el.classList.add('visible'), parseInt(el.parentElement.style.animationDelay || 0));
      });
    });
  }

  /* ─── Build a Book Card ─── */
  function buildCard(book) {
    const outerDiv = document.createElement('div');
    outerDiv.style.animationDelay = '0ms';

    const catInfo = CATEGORIES.find(c => c.id === book.category) || {};
    const stars = '★'.repeat(Math.floor(book.rating)) + (book.rating % 1 >= 0.5 ? '½' : '');

    // Insights (show 3 on the back)
    const insightHtml = book.keyInsights.slice(0, 3).map(insight => `
      <div class="insight-item">
        <div class="insight-bullet"></div>
        <span>${insight}</span>
      </div>`).join('');

    outerDiv.innerHTML = `
      <div class="book-card reveal" data-id="${book.id}">
        <div class="book-card-inner">
          <!-- FRONT -->
          <div class="book-card-front">
            <div class="book-cover">
              ${buildCoverImg(book)}
              <div class="book-cat-badge">${catInfo.icon || ''} ${catInfo.label || book.category}</div>
            </div>
            <div class="book-info">
              <h3>${book.title}</h3>
              <div class="book-author">${book.author} · ${book.year}</div>
              <div class="book-info-row">
                <div class="book-rating">★ ${book.rating}</div>
                <div class="book-read-time">⏱ ${book.readTime}</div>
              </div>
            </div>
          </div>

          <!-- BACK -->
          <div class="book-card-back">
            <div class="back-eyebrow">Key Insights</div>
            <div class="back-title">${book.title}</div>
            <div class="back-tagline">"${book.tagline}"</div>
            <div class="back-insights">${insightHtml}</div>
            <button class="back-cta" data-id="${book.id}">
              Read Full Summary →
            </button>
          </div>
        </div>
      </div>`;

    // "Read Full Summary" button — navigate to book page
    outerDiv.querySelector('.back-cta').addEventListener('click', (e) => {
      e.stopPropagation();
      window.location.href = `book?id=${book.id}`;
    });

    // Clicking the card front navigates to book page
    // On touch devices: first tap flips card, second tap opens book page
    const cardEl = outerDiv.querySelector('.book-card');
    let flipped = false;
    cardEl.addEventListener('click', (e) => {
      if (e.target.closest('.back-cta')) return;
      if (window.matchMedia('(hover: none)').matches) {
        if (!flipped) {
          cardEl.classList.add('touch-flipped');
          flipped = true;
          return;
        }
        cardEl.classList.remove('touch-flipped');
        flipped = false;
      }
      window.location.href = `book?id=${book.id}`;
    });

    return outerDiv;
  }

  /* ─── Cover image or CSS fallback ─── */
  function buildCoverImg(book) {
    const catEmojis = { 'self-help': '🧠', 'productivity': '⚡', 'finance': '💰', 'psychology': '🔬', 'biography': '🌟' };
    return `<img
      src="${book.image}"
      alt="${book.title} cover"
      onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
      loading="lazy"
    />
    <div class="book-cover-fallback" style="display:none;background:linear-gradient(135deg,${book.color} 0%,${adjustColor(book.color)} 100%);">
      <div class="cover-emoji">${catEmojis[book.category] || '📚'}</div>
      <div class="cover-title">${book.title}</div>
      <div class="cover-author">${book.author}</div>
    </div>`;
  }

  /* Darken/lighten a hex color slightly */
  function adjustColor(hex) {
    try {
      const r = parseInt(hex.slice(1,3),16);
      const g = parseInt(hex.slice(3,5),16);
      const b = parseInt(hex.slice(5,7),16);
      return `rgb(${Math.min(r+40,255)},${Math.min(g+40,255)},${Math.min(b+60,255)})`;
    } catch { return '#2a2a4a'; }
  }

  function capitalise(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  /* ─── Reading Counter ─── */
  function updateCounter() {
    counterNum.textContent = booksExplored;
    readingCounter.classList.add('visible');
  }

  /* ─── Quote Ticker ─── */
  function buildTicker() {
    const allQuotes = BOOKS.flatMap(b => b.quotes.slice(0, 2).map(q => `"${q}" — ${b.author}`));
    const tickerTrack = document.getElementById('tickerTrack');
    // Duplicate for seamless loop
    const combined = [...allQuotes, ...allQuotes];
    tickerTrack.innerHTML = combined.map(q => `<div class="ticker-quote">${q}</div>`).join('');
  }
  buildTicker();

  /* ─── Intersection Observer for scroll animations ─── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  // Observe existing reveals
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Observe new cards as they render
  const gridObserver = new MutationObserver(() => {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
  });
  gridObserver.observe(booksGrid, { childList: true, subtree: true });

  /* ─── Hero Slider Logic ─── */
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.dot');
  const slidePrev = document.getElementById('slidePrev');
  const slideNext = document.getElementById('slideNext');
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    if (!slides.length) return;
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    
    currentSlide = (index + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) dots[currentSlide].classList.add('active');
  }

  function nextSlide() { showSlide(currentSlide + 1); }
  function prevSlide() { showSlide(currentSlide - 1); }

  function startSlider() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 6000);
  }

  if (slides.length > 0) {
    if (slideNext) slideNext.addEventListener('click', () => { nextSlide(); startSlider(); });
    if (slidePrev) slidePrev.addEventListener('click', () => { prevSlide(); startSlider(); });
    
    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => { showSlide(idx); startSlider(); });
    });
    
    startSlider();
  }

  /* ─── Initial Render ─── */
  renderBooks();
});
