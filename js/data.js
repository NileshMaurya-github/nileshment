// =============================================
// NILESHMENT — Book Data
// 5 Categories × 5 Books = 25 Books Total
// =============================================

const BOOKS = [
  // ─────── SELF-HELP ───────
  {
    id: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    category: "self-help",
    year: 2018,
    pages: 320,
    readTime: "12 min read",
    rating: 4.9,
    color: "#1e3a5f",
    image: "images/book_atomic_habits_1773640582610.png",
    tagline: "Tiny changes, remarkable results.",
    summary: "Atomic Habits reveals how small, 1% improvements compound into extraordinary life changes. Clear argues that habits are the backbone of success — not goals. By tweaking your identity, environment, and daily cues, you can make good behaviours automatic and bad ones invisible.",
    keyInsights: [
      "The 1% rule: 1% better every day = 37× better in a year",
      "Identity-based habits: 'I am a reader' beats 'I want to read'",
      "The 4 Laws: Make it Obvious, Attractive, Easy, Satisfying",
      "Environment design beats willpower every single time",
      "Habit stacking: attach new habits to existing routines"
    ],
    quotes: [
      "You do not rise to the level of your goals. You fall to the level of your systems.",
      "Every action you take is a vote for the type of person you wish to become.",
      "The most effective form of motivation is progress.",
      "Habits are the compound interest of self-improvement."
    ],
    chapters: [
      { title: "The Surprising Power of Atomic Habits", summary: "A 1% improvement every day compounds to 37× better in a year. Systems — not goals — are what produce lasting change; winners and losers share the same goals, but different systems." },
      { title: "How Your Habits Shape Your Identity", summary: "Every action you take is a vote for the type of person you wish to become. Change starts at the identity level: ask 'who is the person I want to be?' before asking 'what do I want to achieve?'" },
      { title: "How to Build a Habit in 4 Simple Steps", summary: "All habits follow a loop: cue → craving → response → reward. The 4 Laws of Behaviour Change (Make it Obvious, Attractive, Easy, Satisfying) map directly onto these four stages." },
      { title: "The Man Who Didn't Look Right — Make It Obvious", summary: "Your environment shapes your behaviour more than motivation does. Design your spaces so good habits are visible and bad habits are invisible — willpower is unnecessary when the cue is absent." },
      { title: "The Role of Family and Friends — Make It Attractive", summary: "We are wired to copy the habits of people close to us and society at large. Join a culture where your desired behaviour is normal and the identity you want to build is already the standard." },
      { title: "Walk Slowly, but Never Backward — Make It Easy", summary: "Reduce friction to near-zero for good habits and increase friction for bad ones. The Two-Minute Rule: downscale any new habit to something that takes two minutes or less to get started." },
      { title: "The Cardinal Rule of Behaviour Change — Make It Satisfying", summary: "We repeat behaviours that feel immediately rewarding. Use habit tracking as a visible record of progress — never miss twice, and always give yourself a small reward after completing a habit." },
      { title: "The Secret to Self-Control", summary: "Disciplined people aren't superhuman — they've structured their lives to avoid temptation. Reduce your exposure to bad-habit cues rather than fighting desire through willpower." },
      { title: "How to Find and Fix the Causes of Your Bad Habits", summary: "Every craving is a surface-level manifestation of a deeper motive. Reframe bad habits so you associate the pain of breaking them with freedom, not deprivation." },
      { title: "Advanced Tactics — The Goldilocks Rule", summary: "Motivation peaks when working on challenges at the edge of your ability. Boredom is the greatest threat to long-term habits — learning to show up even when it's boring separates professionals from amateurs." }
    ],
    bigIdea: "Success is not about breakthroughs — it's about the daily accumulation of tiny, almost invisible improvements."
  },
  {
    id: "4-hour-workweek",
    title: "The 4-Hour Workweek",
    author: "Tim Ferriss",
    category: "self-help",
    year: 2007,
    pages: 418,
    readTime: "15 min read",
    rating: 4.5,
    color: "#b45309",
    image: "images/book_four_hour_workweek_1773640671752.png",
    tagline: "Escape 9-5, live anywhere, join the New Rich.",
    summary: "Tim Ferriss dismantles the 40-year career and offers the DEAL framework (Definition, Elimination, Automation, Liberation) for designing a life where you work fewer hours on things you love, earn more, and spend your time on adventures and experiences.",
    keyInsights: [
      "DEAL: Define > Eliminate > Automate > Liberate",
      "Parkinson's Law: work expands to fill the time allowed",
      "The 80/20 rule: 20% of effort produces 80% of results",
      "Fear-setting: visualise the worst case to overcome paralysis",
      "Mini-retirements beat the deferred-life plan"
    ],
    quotes: [
      "What we fear doing most is usually what we most need to do.",
      "Being busy is a form of laziness — lazy thinking and indiscriminate action.",
      "The timing is never right. For anything important, you must start now.",
      "Someday is a disease that will take your dreams to the grave with you."
    ],
    chapters: [
      { title: "D — Definition: Cautions and Comparisons", summary: "Define 'the good life' on your own terms. Most people pursue money as an end, not a means — Ferriss reframes the target: not retirement, but excitement and freedom throughout life." },
      { title: "D — Dodging Bullets: Fear-Setting", summary: "Fear-setting is more important than goal-setting. Write out the worst-case scenario, the probability, the fix — you'll find the downside is rarely as catastrophic as the paralysis suggests." },
      { title: "D — System Reset: Being Unreasonable", summary: "The timing is never right. Waiting for the perfect moment is a form of cowardice in disguise. The question is not whether you can afford to take a risk — it's whether you can afford not to." },
      { title: "E — Elimination: The Art of Selective Ignorance", summary: "Information overload is self-imposed. Practice selective ignorance: a low-information diet means reading only what is immediately actionable. What you don't read can't hurt you." },
      { title: "E — The 80/20 Principle and Parkinson's Law", summary: "20% of your clients produce 80% of your income — and 80% of your headaches. Cut the bottom 80% and shorten your deadlines; work contracts to fill the time allotted." },
      { title: "A — Automation: Outsourcing Life", summary: "Virtual assistants cost $4–$15/hour and can handle email, travel, research, and admin. The goal: remove yourself from the loop for every repetitive task that doesn't require your physical presence." },
      { title: "A — Income Autopilot: Building a Muse", summary: "Create a product or service that generates income without your continuous involvement. Test ideas cheaply, validate demand before building, and only invest when the concept is proven." },
      { title: "L — Liberation: Disappearing Act", summary: "Most bosses won't fire a valuable remote worker — they'll accept it. Negotiate remote arrangements by proving you are more productive away from the office before officially asking." },
      { title: "L — Mini-Retirements", summary: "Take extended travel breaks throughout your working life instead of deferring everything to age 65. A month abroad costs less than you think — and the memories compound like investments." }
    ],
    bigIdea: "The goal isn't to retire early — it's to live a rich life now by designing work around life, not life around work."
  },
  {
    id: "power-of-now",
    title: "The Power of Now",
    author: "Eckhart Tolle",
    category: "self-help",
    year: 1997,
    pages: 236,
    readTime: "9 min read",
    rating: 4.7,
    color: "#0f766e",
    image: "images/book_power_of_now_1773640761861.png",
    tagline: "A guide to spiritual enlightenment.",
    summary: "Eckhart Tolle teaches that the present moment is the only place where life can truly be lived. Most human suffering comes from over-identification with the 'pain-body' (accumulated emotional pain) and incessant mind-chatter. Presence is the doorway to inner peace.",
    keyInsights: [
      "You are not your mind — you are the awareness behind thought",
      "The pain-body feeds on negative emotions and drama",
      "The present moment is the only real moment; past and future are mental constructs",
      "Acceptance of the now dissolves resistance and suffering",
      "Spiritual awakening is recognising the stillness within"
    ],
    quotes: [
      "Realize deeply that the present moment is all you ever have.",
      "The primary cause of unhappiness is never the situation but your thoughts about it.",
      "You find peace not by rearranging the circumstances of your life, but by realizing who you are.",
      "Life is the dancer and you are the dance."
    ],
    chapters: [
      { title: "You Are Not Your Mind", summary: "The compulsive thinker — the voice narrating your life — is not you. You are the awareness behind the thoughts. Observing the mind without judgment is the first step to freedom." },
      { title: "Consciousness: The Way Out of Pain", summary: "Suffering comes from resistance to what is. Surrender — accepting the present moment without wanting it to be different — does not mean passivity; it dissolves the inner conflict that drains energy." },
      { title: "Moving Deeply Into the Now", summary: "The present moment is all you ever have. Watch the breath, feel sensations in the body, notice the silence between sounds — these are portals into presence that bypass the chattering mind." },
      { title: "Mind Strategies for Avoiding the Now", summary: "The ego fills time with past regrets and future anxieties to avoid being present. Recognise psychological time (living in past or future mentally) versus clock time (practical planning)." },
      { title: "The State of Presence", summary: "True presence means no inner commentary, no wanting things to be different, no mental labelling. In this state, your senses sharpen and an underlying peace becomes perceptible beneath all experience." },
      { title: "The Inner Body", summary: "Feel the aliveness inside your body — the tingling, warmth, and subtle energy field. This felt sense of inner being is an anchor to the Now that is always available, even in noise and chaos." },
      { title: "Portals Into the Unmanifested", summary: "Deep sleep, meditation, and the gap between thoughts are portals to the unmanifested — the formless consciousness beneath all phenomena. Tolle calls this the source of creativity and peace." },
      { title: "Enlightened Relationships", summary: "Relationships become a mirror for unconsciousness when used to fill inner emptiness. True love is not need — it is presence shared with another person who is also fully present." },
      { title: "Beyond Happiness and Unhappiness: Peace", summary: "Happiness is conditional; peace is unconditional. When you stop needing situations to be different, an equanimity arises that doesn't depend on external circumstances — this is the goal." }
    ],
    bigIdea: "Inner peace is not found in achieving something — it is found by being fully present with what already is."
  },
  {
    id: "deep-work",
    title: "Deep Work",
    author: "Cal Newport",
    category: "self-help",
    year: 2016,
    pages: 296,
    readTime: "11 min read",
    rating: 4.8,
    color: "#1c1c1e",
    image: "images/book_deep_work_1773640775734.png",
    tagline: "Rules for focused success in a distracted world.",
    summary: "Cal Newport makes the case that deep, focused cognitive work — free from distraction — is the superpower of the 21st century. As shallow work (emails, meetings, social media) proliferates, those who master depth will produce rare, valuable results and find meaning in their work.",
    keyInsights: [
      "Deep work is rare, valuable, and increasingly disappearing",
      "The Monastic, Bimodal, Rhythmic, and Journalistic philosophies of deep work",
      "Schedule every minute of your day to protect depth",
      "Quit social media unless it provides outsized value",
      "Embrace boredom — trained attention is a learnable skill"
    ],
    quotes: [
      "Deep work is the ability to focus without distraction on a cognitively demanding task.",
      "Clarity about what matters provides clarity about what does not.",
      "A nightly shutdown ritual allows your brain to recover for the next day.",
      "The key is to schedule deep work like it is your most important meeting."
    ],
    chapters: [
      { title: "Deep Work Is Valuable", summary: "The new economy rewards two abilities: mastering hard things quickly and producing at elite levels. Both require sustained, uninterrupted cognitive effort — exactly what distractions systematically destroy." },
      { title: "Deep Work Is Rare", summary: "Open offices, instant messaging, and social media have made distraction the default. The busyness-as-proxy-for-productivity trap keeps most knowledge workers perpetually shallow." },
      { title: "Deep Work Is Meaningful", summary: "Craftsmen, scientists, and writers all report the same thing: deep concentration produces flow states, a sense of meaning, and satisfaction that shallow work never can. Depth is not just productive — it is fulfilling." },
      { title: "Rule 1 — Work Deeply", summary: "Choose your deep work philosophy: Monastic (eliminate all else), Bimodal (alternate blocks), Rhythmic (daily habit), or Journalistic (fit depth wherever you can). Add rituals, set location, and protect the blocks." },
      { title: "Rule 2 — Embrace Boredom", summary: "If you check your phone every time you're bored, you've trained your brain to crave stimulation constantly. Schedule boredom — resist digital distraction even outside work hours to strengthen your focus muscle." },
      { title: "Rule 3 — Quit Social Media", summary: "Apply the craftsman approach: only use a tool if its benefits substantially outweigh its harms. For most people, social media fails this test — the benefit is minor; the attentional cost is enormous." },
      { title: "Rule 4 — Drain the Shallows", summary: "Schedule every minute of your workday, even loosely. Identify and minimise shallow work (email, meetings, admin). Put a time budget on shallow activities so they do not silently expand to fill your day." }
    ],
    bigIdea: "The ability to perform deep work is becoming increasingly rare and incredibly valuable. Master it and you will thrive."
  },
  {
    id: "mindset",
    title: "Mindset",
    author: "Carol S. Dweck",
    category: "self-help",
    year: 2006,
    pages: 288,
    readTime: "10 min read",
    rating: 4.6,
    color: "#1d4ed8",
    image: "images/book_mindset_1773640791671.png",
    tagline: "The new psychology of success.",
    summary: "Stanford psychologist Carol Dweck's decades of research shows that the beliefs we hold about our own qualities fundamentally determine our success. People with a growth mindset (who believe abilities can be developed) consistently outperform those with a fixed mindset (who believe abilities are innate).",
    keyInsights: [
      "Fixed mindset: 'I'm either good at it or I'm not'",
      "Growth mindset: 'I can get better at anything through effort'",
      "Praising effort beats praising intelligence for children",
      "Failure is data, not identity — learn and grow from it",
      "Mindsets can be changed — neuroplasticity is real"
    ],
    quotes: [
      "In a growth mindset, challenges are exciting rather than threatening.",
      "Becoming is better than being.",
      "The passion for stretching yourself and sticking to it, even when it's not going well, is the hallmark of the growth mindset.",
      "Why waste time proving over and over how great you are, when you could be getting better?"
    ],
    chapters: [
      { title: "The Mindsets", summary: "Fixed mindset: abilities are carved in stone. Growth mindset: abilities can be cultivated. This single belief drives every aspect of how people handle challenges, setbacks, and feedback." },
      { title: "Inside the Mindsets", summary: "Fixed-mindset people avoid challenges to preserve their self-image. Growth-mindset people seek challenges as opportunities to learn. The same event — a failure, a criticism — means completely different things to each." },
      { title: "The Truth About Ability and Accomplishment", summary: "Neither raw talent nor IQ predicts success as well as relentless effort. Dweck shows — through decades of studies — that praising intelligence creates fragility, while praising effort creates resilience." },
      { title: "Sports: The Mindset of a Champion", summary: "The greatest athletes (Jordan, Ali, Wooden) embraced failures as learning. Many talented athletes with fixed mindsets plateaued or fell apart under pressure because they needed to look good more than grow." },
      { title: "Business: Mindset and Leadership", summary: "Fixed-mindset CEOs surround themselves with yes-people and blame externally. Growth-mindset leaders build learning organisations. Companies reflect the mindset of the person at the top." },
      { title: "Relationships: Mindsets in Love and Friendships", summary: "Fixed-mindset people expect relationships to be perfect effortlessly. Growth-mindset people see relationships as something to work on and improve. Conflict is not a sign of incompatibility — it's an opportunity to communicate." },
      { title: "Parents, Teachers, and Coaches", summary: "Every word a parent or teacher uses sends a message about what is valued. 'You're so smart' creates fixed mindset; 'You worked really hard on that' creates growth mindset. The language we choose shapes children's entire relationship with learning." },
      { title: "Changing Mindsets", summary: "Mindsets are not fixed — they can be changed with awareness and practice. Recognise your fixed-mindset voice, understand what triggers it, talk back to it, and take the growth-mindset action instead." }
    ],
    bigIdea: "Your most fundamental beliefs about yourself — not your intelligence or talent — determine your success."
  },

  // ─────── PRODUCTIVITY ───────
  {
    id: "getting-things-done",
    title: "Getting Things Done",
    author: "David Allen",
    category: "productivity",
    year: 2001,
    pages: 352,
    readTime: "13 min read",
    rating: 4.5,
    color: "#166534",
    image: "images/book_getting_things_done_1773640601093.png",
    tagline: "The art of stress-free productivity.",
    summary: "David Allen's GTD system is the gold standard for personal organisation. The core insight: your brain is for having ideas, not holding them. By capturing everything into a trusted external system, clarifying next actions, and reviewing regularly, you achieve a 'mind like water' — clear, calm, responsive.",
    keyInsights: [
      "The two-minute rule: if it takes less than two minutes, do it now",
      "Capture everything: nothing should live in your head",
      "Next action thinking: always define the very next physical step",
      "Weekly review is the master key to the entire system",
      "Projects are any outcome requiring more than one action"
    ],
    quotes: [
      "Your mind is for having ideas, not holding them.",
      "If you don't pay appropriate attention to what has your attention, it will take more of your attention than it deserves.",
      "The secret of getting ahead is getting started.",
      "Much of the stress that people feel doesn't come from having too much to do. It comes from not finishing what they've started."
    ],
    chapters: [
      { title: "A New Practice for a New Reality", summary: "The amount of information and commitments in modern life has outpaced the brain's ability to manage it. Stress comes not from too much to do, but from poorly managed agreements with yourself." },
      { title: "Getting Control of Your Life: The Five Stages", summary: "Capture everything. Clarify what each thing means. Organise it into the right place. Reflect through regular reviews. Engage with confidence. Each stage has specific tools and criteria." },
      { title: "Getting Projects Creatively Under Way", summary: "The natural planning model mirrors how the brain plans effectively: purpose, principles, vision, brainstorming, organising, identifying next actions. Most people skip steps and get stuck." },
      { title: "Collection: Corralling Your 'Stuff'", summary: "Every open loop — every undone task, unread email, unresolved question — drains mental energy. Capture everything into inboxes and empty them regularly to zero." },
      { title: "Processing: Getting 'In' to Empty", summary: "For every item: What is it? Is it actionable? If yes, do it (2 mins), delegate, or defer. If no, trash, incubate, or file as reference. Never leave something in the inbox unprocessed." },
      { title: "Organising: Setting Up the Right Buckets", summary: "Project lists, next-action lists, calendars, waiting-for lists, and reference files each have a distinct purpose. Keeping these separate prevents the confusion that buries important things." },
      { title: "Reviewing: The Art of the Weekly Review", summary: "The weekly review is the master key. Clear head, update all lists, review projects and goals, identify next actions. Without regular reviews the whole system collapses into unreliable chaos." },
      { title: "Doing: Making the Best Action Choices", summary: "Four criteria for choosing what to do: context (where are you?), time available, energy available, priority. GTD frees you to use these criteria rather than anxiety or habit." }
    ],
    bigIdea: "Get everything out of your head, into a trusted system, and you create the mental clarity to focus fully on whatever you are doing."
  },
  {
    id: "essentialism",
    title: "Essentialism",
    author: "Greg McKeown",
    category: "productivity",
    year: 2014,
    pages: 272,
    readTime: "10 min read",
    rating: 4.7,
    color: "#374151",
    image: "images/book_essentialism_1773640686067.png",
    tagline: "The disciplined pursuit of less.",
    summary: "Essentialism is the disciplined, systematic approach to determining where your highest point of contribution lies and making doing that thing almost effortless. The Essentialist doesn't try to do it all — they do less, but better, to the point of making the highest possible contribution on the things that matter.",
    keyInsights: [
      "If you don't prioritise your life, someone else will",
      "The 'hell yeah or no' filter for decisions",
      "Trade-off thinking: choosing B means NOT choosing A",
      "Play and sleep are essential, not indulgent",
      "The Essentialist creates space to think, not just react"
    ],
    quotes: [
      "If you don't prioritise your life, someone else will.",
      "Less but better.",
      "The way of the Essentialist is the relentless pursuit of less but better.",
      "Almost everything is noise. Very few things are essential."
    ],
    chapters: [
      { title: "The Essentialist Life", summary: "Essentialism is not a time-management strategy — it is a way of being. The Essentialist asks 'Is this essential?' before doing, agreeing, or buying, and acts accordingly every single time." },
      { title: "Choose: The Invincible Power of Choice", summary: "We always have a choice, even when it doesn't feel that way. The first step to an essentialist life is reclaiming the right to choose rather than handing that right to other people's priorities." },
      { title: "Discern: The Unimportance of Practically Everything", summary: "90% of options, requests, and opportunities are noise. Practise extreme selectivity: only a small number of things genuinely deserve your time and energy — the rest are distractions that FEEL important." },
      { title: "Trade-off: Which Problem Do I Want?", summary: "Every yes is a no to everything else. Essentialists don't ask 'How can I do all of this?' They ask 'Which of these is most important?' and accept that choosing means not choosing the rest." },
      { title: "Escape: The Permission to Concentrate", summary: "Create space to think. Block time in your calendar to just read, wonder, and explore. Leadership requires solitude and reflection — busy people who never think deeply keep solving the wrong problems." },
      { title: "Look: See What Really Matters", summary: "Listen for the signal beneath the noise. Keep a journal. Clarify the question. Find the one piece of information that changes everything rather than consuming volume without insight." },
      { title: "Play: Embrace the Wisdom of Your Inner Child", summary: "Play — activities done for their own sake — stimulates creativity, reduces stress, and opens the mind to possibility. It is not a luxury; it is essential to doing your best thinking." },
      { title: "Eliminate: How to Cut Out the Trivial", summary: "The courage to say no gracefully is the most important skill in Essentialism. Use the 90% rule: if it doesn't score 9 or 10 on the priority scale, it's a no. Make your peace with disappointing some people." },
      { title: "Execute: Making Execution Almost Effortless", summary: "Build buffers, create checklists, remove obstacles before they arise. The Essentialist doesn't push harder — they design systems so doing the essential thing requires the least possible friction." }
    ],
    bigIdea: "By doing only what is absolutely essential, you make your highest possible contribution while living a life free of regret."
  },
  {
    id: "make-time",
    title: "Make Time",
    author: "Jake Knapp & John Zeratsky",
    category: "productivity",
    year: 2018,
    pages: 304,
    readTime: "11 min read",
    rating: 4.5,
    color: "#c2410c",
    image: "images/book_make_time_1773640813621.png",
    tagline: "How to focus on what matters every day.",
    summary: "Make Time offers a daily four-step framework to redesign the default and make time for what matters most. Choose a daily Highlight, Laser-focus with tactics, Energise your body to energise your mind, and Reflect each evening. It's lightweight, flexible, and human — no willpower required.",
    keyInsights: [
      "Highlight: choose one priority for the day before starting",
      "Laser: tactics to create focus bubbles (phone-free, distraction-free)",
      "Energise: exercise, sleep, food directly fuel mental energy",
      "Reflect: daily 5-minute retrospective to iterate your system",
      "Infinity pools (social media, news) constantly refill — block them"
    ],
    quotes: [
      "There will always be more to do. There will always be more to see. You do not have to do it all.",
      "Your calendar is the best defence against the default.",
      "Every day, choose one thing that matters and protect time for it.",
      "If busyness is the default, Make Time is the reset button."
    ],
    chapters: [
      { title: "Highlight: The Heart of Make Time", summary: "Each morning, choose the single activity that you'll look back on with satisfaction at day's end. Your Highlight isn't everything you do — it's the anchor that gives the day meaning and direction." },
      { title: "How to Choose Your Highlight", summary: "Three strategies: urgency (what must get done?), satisfaction (what will I look back on with pride?), joy (what would delight me?). Pick one and write it down before opening any screens." },
      { title: "Laser: How to Stay Focused", summary: "Your attention is under assault from infinity pools — apps designed to refill endlessly. Create a focus bubble: phone in a different room, single browser tab, specific music, time limit set. Lock in." },
      { title: "Tactics for Beating Distraction", summary: "Log out of social apps, delete them from your phone, use TV deliberately rather than defaulting to it, set fake deadlines, use an analog watch. These are simple, low-willpower changes that have outsized effect." },
      { title: "Energise: Your Body Charges Your Brain", summary: "Without physical energy, focus is impossible. Move every day (even just a walk), sleep 7–9 hours, avoid the afternoon caffeine crash, eat real food. Your body is the hardware your mind runs on." },
      { title: "Reflect: Tune Your Methods Over Time", summary: "Spend five minutes each evening noting what worked, what distracted you, how satisfied you feel. The system iterates over weeks — what works for you is what the data shows, not what the book says." }
    ],
    bigIdea: "Redesign your day around a single daily Highlight, and you will consistently spend time on what truly matters."
  },
  {
    id: "eat-that-frog",
    title: "Eat That Frog!",
    author: "Brian Tracy",
    category: "productivity",
    year: 2001,
    pages: 144,
    readTime: "5 min read",
    rating: 4.4,
    color: "#15803d",
    image: "images/book_eat_that_frog_1773640830599.png",
    tagline: "Stop procrastinating and get more done in less time.",
    summary: "Brian Tracy shares 21 practical strategies to stop procrastination and get your most important tasks done first. The 'frog' metaphor: tackle your biggest, most impactful task first thing in the morning when willpower is highest. If you must eat two frogs, eat the ugliest one first.",
    keyInsights: [
      "Eat the ugliest frog first — start with your most important task",
      "ABCDE method: rank tasks by consequence before starting",
      "Apply the 80/20 rule to your task list every single day",
      "Prepare everything the night before for a flying morning start",
      "Upgrade your key skill that unlocks the most results"
    ],
    quotes: [
      "If it's your job to eat a frog, eat it first thing in the morning.",
      "A major reason for procrastination is that the task seems overwhelming.",
      "Successful people have the habit of doing the things failures don't like to do.",
      "Set deadlines for everything important to you."
    ],
    chapters: [
      { title: "Set the Table", summary: "Decide exactly what you want, write it down, and set a clear deadline. Clarity about what you want and why you want it is the most powerful antidote to procrastination and confusion." },
      { title: "Plan Every Day in Advance", summary: "Make a list the night before. Organise it. Your subconscious works on it overnight, and you start the morning immediately productive rather than deciding what to do while half-awake." },
      { title: "Apply the 80/20 Rule to Everything", summary: "The top 20% of tasks produce 80% of value. Before you eat any frog, ask: is this actually in my top 20%? Resist the temptation to do easy tasks first just because they feel good to cross off." },
      { title: "Consider the Consequences", summary: "Long-term thinking is the difference between high achievers and everyone else. Ask: what are the long-term consequences of doing or not doing this task? Action has compounding returns; so does avoidance." },
      { title: "Practice Creative Procrastination", summary: "Since you can't do everything, you must procrastinate on something. Deliberately procrastinate on low-value tasks to protect time for high-value ones. Procrastinate with intention." },
      { title: "Use the ABCDE Method", summary: "A — must do (serious consequences), B — should do, C — nice to do, D — delegate, E — eliminate. Never do a B task when an A task is undone, no matter how tempting the B feels." },
      { title: "Focus on Key Result Areas", summary: "Identify the 5–7 results you are paid to produce. Which skills, if improved, would most dramatically increase your output? The weakest key result area sets the ceiling for all your results." },
      { title: "Upgrade Your Key Skills", summary: "The better you are at your most important task, the faster and easier it is to finish. Invest in the specific skill that, if doubled, would most increase your effectiveness." }
    ],
    bigIdea: "Discipline yourself to start your most important task every single morning and your entire life will transform."
  },
  {
    id: "the-one-thing",
    title: "The ONE Thing",
    author: "Gary Keller",
    category: "productivity",
    year: 2013,
    pages: 240,
    readTime: "9 min read",
    rating: 4.7,
    color: "#9b1c1c",
    image: "images/book_the_one_thing_1773640848164.png",
    tagline: "The surprisingly simple truth behind extraordinary results.",
    summary: "Gary Keller argues that the secret to success is ruthless focus on ONE thing — not balance, not multitasking. Ask the Focusing Question: 'What's the ONE Thing I can do such that by doing it, everything else will be easier or unnecessary?' Then block time for that thing every day and protect it.",
    keyInsights: [
      "The Focusing Question cuts through noise to reveal what truly matters",
      "Success is sequential, not simultaneous — domino one thing at a time",
      "Time blocking your ONE Thing every morning is non-negotiable",
      "Multitasking is a myth — task-switching costs up to 28% of your IQ",
      "Willpower is like phone battery — use it on the ONE Thing first"
    ],
    quotes: [
      "What's the ONE Thing I can do such that by doing it everything else will be easier or unnecessary?",
      "Success is actually a short race — a sprint fueled by discipline just long enough for habit to kick in.",
      "Extraordinary results are directly determined by how narrow you can make your focus.",
      "Going small is ignoring all the things you could do and doing what you should do."
    ],
    chapters: [
      { title: "The ONE Thing", summary: "Behind every great achievement is a sequence of narrowing focus: what is the one thing that makes everything else easier or unnecessary? This question is the lens through which all priorities should be filtered." },
      { title: "The Domino Effect", summary: "A single domino can knock over a domino 1.5× its size. Sequential focused actions create compounding momentum — one small win enables a bigger one, which enables a bigger one still." },
      { title: "Success Is Sequential, Not Simultaneous", summary: "The myth of multitasking: we can only do one thing at a time. Success comes from identifying your domino — the one action that starts the chain — and knocking it down every single day." },
      { title: "Everything Matters Equally — The Lies That Mislead", summary: "Equal importance is a trap. To-do lists give false comfort. The power of prioritisation: a to-do list must become a success list, with only what truly matters staying on it." },
      { title: "Multitasking Is a Lie", summary: "Task-switching takes time. Cognitive costs accumulate. Research shows you lose up to 28% of your IQ task-switching. Single-tasking is not just more productive — it produces higher quality work." },
      { title: "A Disciplined Life Is a Myth", summary: "You need very little discipline to be successful — just enough to build a habit for your ONE Thing. Habits require motivation initially but become automatic and require no willpower over time." },
      { title: "Willpower Is Always on Will-Call — The Lie", summary: "Willpower is a finite resource that depletes with use. Use it first, in the morning, on your ONE Thing before anything else steals it. Schedule accordingly and guard your morning ferociously." },
      { title: "The Focusing Question", summary: "'What's the ONE Thing I can do such that by doing it everything else will be easier or unnecessary?' Apply the Big-Picture version (long‑term) and the Small-Focus version (right now) every day." },
      { title: "Live with Purpose", summary: "Without a clear direction, busyness fills the void. Purpose creates clarity and meaning. Your ONE Thing must align with your long-term purpose — otherwise you're building efficiency into the wrong direction." },
      { title: "Time Blocking Your ONE Thing", summary: "Block at least 4 hours every morning for your ONE Thing. Protect the block like a board meeting — before email, before meetings, before anyone else's priorities invade. The calendar is your fortress." }
    ],
    bigIdea: "Extraordinary success comes from passionately and sequentially focusing on ONE Thing at a time until it becomes a habit."
  },

  // ─────── FINANCE ───────
  {
    id: "rich-dad-poor-dad",
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    category: "finance",
    year: 1997,
    pages: 336,
    readTime: "12 min read",
    rating: 4.6,
    color: "#7f1d1d",
    image: "images/book_rich_dad_poor_dad_1773640615973.png",
    tagline: "What the rich teach their kids about money.",
    summary: "Kiyosaki contrasts his biological father (Poor Dad, educated, employee mindset) with his friend's father (Rich Dad, business owner mindset). The central lesson: the rich don't work for money — money works for them. Financial education, assets vs liabilities, and entrepreneurship are the real keys to wealth.",
    keyInsights: [
      "Assets put money IN your pocket; liabilities take money OUT",
      "The rat race: earn → spend → earn → spend, never building wealth",
      "Buy assets that generate cash flow, not liabilities that feel like assets",
      "Financial literacy is never taught in schools — teach yourself",
      "Mind your own business: your real business is your asset column"
    ],
    quotes: [
      "The poor and middle class work for money. The rich have money work for them.",
      "An asset puts money in my pocket. A liability takes money out of my pocket.",
      "It's not how much money you make, but how much money you keep.",
      "Rich people acquire assets. The poor and middle class acquire liabilities that they think are assets."
    ],
    chapters: [
      { title: "Rich Dad, Poor Dad", summary: "Two father figures, two completely different philosophies about money and work. One saw a job as security; the other saw a job as a stepping stone to building assets. The difference in outcomes was enormous." },
      { title: "The Rich Don't Work For Money", summary: "Most people work for money out of fear and greed. The rich work to learn and to build systems. Fear keeps the poor working; greed keeps them spending. Breaking this emotional cycle is the first step." },
      { title: "Why Teach Financial Literacy?", summary: "An asset puts money IN your pocket. A liability takes money OUT. Your house is very likely a liability, not an asset. This simple redefinition is the most important financial lesson most people never learn." },
      { title: "Mind Your Own Business", summary: "Keep your job if you need to, but start building your own asset column alongside it. Real businesses, investment properties, stocks, intellectual property — assets that generate cash flow while you sleep." },
      { title: "The History of Taxes and the Power of Corporations", summary: "The rich use legal entities (corporations) to reduce tax exposure. Earn, spend, then pay tax (corporate) vs earn, pay tax, then spend (employee) — the asymmetry compounds enormously over a lifetime." },
      { title: "The Rich Invent Money", summary: "Opportunity isn't found — it's made. Financial intelligence (accounting, investing, markets, law) gives you the ability to see deals others don't see. Money is an idea, not a thing." },
      { title: "Work to Learn — Don't Work For Money", summary: "Seek jobs that teach you important skills — sales, communication, investing, management. The most dangerous advice is 'specialise': well-rounded financial intelligence is what builds wealth." }
    ],
    bigIdea: "True financial freedom comes from building assets that generate income — not from earning a higher salary."
  },
  {
    id: "psychology-of-money",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "finance",
    year: 2020,
    pages: 256,
    readTime: "10 min read",
    rating: 4.9,
    color: "#78350f",
    image: "images/book_psychology_of_money_1773640702611.png",
    tagline: "Timeless lessons on wealth, greed, and happiness.",
    summary: "Morgan Housel shows that financial success has little to do with intelligence and a lot to do with behaviour. Through 19 short stories, he reveals why smart people make foolish money decisions, why compounding is the single greatest force in finance, and why 'enough' is the most powerful word in wealth-building.",
    keyInsights: [
      "Compounding: time in the market beats timing the market always",
      "'Enough' is more valuable than any investment strategy",
      "Wealth is what you don't see — the cars not bought, the lifestyle not inflated",
      "Saving is the gap between your income and your ego",
      "Reasonable is better than rational — human behaviour always wins"
    ],
    quotes: [
      "Wealth is what you don't see.",
      "The most important financial decision of your life is not which stocks to pick. It's your savings rate.",
      "Compounding doesn't rely on earning great returns. Merely good returns sustained uninterrupted for the longest period of time.",
      "Enough is realizing that the opposite — an insatiable appetite for more — will push you to the point of regret."
    ],
    chapters: [
      { title: "No One's Crazy", summary: "Your financial decisions make complete sense given the experiences you've lived through. Someone raised in poverty and someone raised in wealth have entirely different relationships with risk, spending, and savings." },
      { title: "Luck and Risk", summary: "Individual success stories always involve both luck and risk. Bill Gates attended one of the few US high schools with a computer in 1968. Respect the role of chance before attributing everything to skill or effort." },
      { title: "Never Enough", summary: "The hardest financial skill: getting the goalposts to stop moving. Enough is knowing when to stop — before risking what you have and need for what you want but don't need." },
      { title: "Confounding Compounding", summary: "Warren Buffett's net worth is $84 billion — $81 billion of it came after his 65th birthday. Compounding requires time above all else. The enemy is not low returns; it's interrupting compounding unnecessarily." },
      { title: "Getting Wealthy vs Staying Wealthy", summary: "Getting rich requires optimism and risk-taking. Staying rich requires humility, frugality, and fear — the acknowledgement that some of what made you rich was luck and that it can reverse." },
      { title: "Tails, You Win", summary: "A tiny number of events drive the majority of outcomes. Amazon, Apple, and Netflix account for most of the S&P 500's gain over decades. You don't need to be right often — just not wrong when it matters." },
      { title: "Freedom", summary: "The highest form of wealth is the ability to wake up each morning and do what you want, with whom you want, for as long as you want. Money's greatest value is the control it gives over your time." },
      { title: "Wealth Is What You Don't See", summary: "The cars not bought, the watches not worn, the holidays not taken — that's where wealth hides. Money spent on visible status signals is wealth permanently leaving your balance sheet." },
      { title: "Save Money", summary: "Saving requires no skill, no yield prediction, no market knowledge. It's the gap between your income and your ego. Savings gives you options — the ability to wait, to pivot, to survive." },
      { title: "Reasonable > Rational", summary: "Holding a perfectly diversified index fund is rational. Adding a home-country bias because you understand those companies feels reasonable. Reasonable financial decisions you can stick to beat rational ones you'll abandon." }
    ],
    bigIdea: "Doing well with money is less about what you know and more about how you behave — and behaviour is hard to teach."
  },
  {
    id: "die-with-zero",
    title: "Die With Zero",
    author: "Bill Perkins",
    category: "finance",
    year: 2020,
    pages: 240,
    readTime: "9 min read",
    rating: 4.5,
    color: "#0c4a6e",
    image: "images/book_die_with_zero_1773640862646.png",
    tagline: "Getting all you can from your money and your life.",
    summary: "Bill Perkins challenges the conventional 'save everything for retirement' paradigm. The real goal isn't to accumulate the most money — it's to maximise life experiences. Die with as close to zero as possible by strategically spending on experiences that yield rich memories and compound fulfilment over time.",
    keyInsights: [
      "Net fulfilment is the real measure of a life well-lived",
      "Experiences have a yield — invest in them at the right life stage",
      "Memory dividends: experiences compound into lifelong happiness",
      "There is a 'peak time' for every experience — don't wait too long",
      "Give money to children when they need it most, not at death"
    ],
    quotes: [
      "The goal is not to die with the most money in the bank. It is to die with the most memories.",
      "Delaying gratification indefinitely makes no sense when life has an expiration date.",
      "You have a finite amount of time and a finite amount of energy. Invest both wisely.",
      "Time is the greatest equaliser. Everyone gets 24 hours a day."
    ],
    chapters: [
      { title: "Optimise Your Life, Not Your Death", summary: "The goal is maximum net fulfilment, not maximum net worth. Saving every dollar to die rich means trading experiences you could have had for a number in a bank account no one needs anymore." },
      { title: "Invest in Experiences Early", summary: "A dollar of adventure at 30 yields more joy than the same dollar at 70, when health and mobility are limited. Invest in experiences at the life stage where they generate the highest return." },
      { title: "Why Die With Zero?", summary: "Unconsumed money at death is wasted human potential — experiences not had, joy not felt. The maths is simple: if you don't spend it, you worked those hours for nothing." },
      { title: "How to Spend Your Money Before You Die", summary: "Annuities, systematic drawdowns, and experience budgets. Plan to spend your last penny on your last day. This requires genuine financial planning, not just saving — Perkins gives the tools." },
      { title: "The Importance of Timing: Seasons of Life", summary: "Health, time, and money rarely peak at the same moment. The goal is to maximise the overlap. Know which season of life you're in and invest accordingly — adventure in youth, security in age." },
      { title: "Give Before You Go", summary: "Transfer wealth when your children or loved ones need it most — not years after they've solved the problems money would have helped with. The gift of money at the right moment compounds into a changed life." },
      { title: "Know Your Peak", summary: "Every experience has an optimal age window. Hiking the Himalayas at 70 is possible; at 30 it's transformative. Map out your life experiences and assign them to the decade where they'll mean the most." }
    ],
    bigIdea: "Life is not about amassing the most wealth — it's about maximising the richness of experiences across your entire lifespan."
  },
  {
    id: "i-will-teach-you-rich",
    title: "I Will Teach You To Be Rich",
    author: "Ramit Sethi",
    category: "finance",
    year: 2009,
    pages: 352,
    readTime: "13 min read",
    rating: 4.6,
    color: "#a16207",
    image: "images/book_i_will_teach_you_to_be_rich_1773640582611.jpeg",
    tagline: "No guilt, no excuses — just a 6-week programme to financial success.",
    summary: "Ramit Sethi delivers a practical, no-nonsense 6-week financial programme for young adults. Automate your finances, use credit cards intelligently, max out retirement accounts before investing, and spend lavishly on the things you love by cutting mercilessly on things you don't.",
    keyInsights: [
      "Automate your finances: set it and forget it beats willpower",
      "Max out 401k and Roth IRA before any other investments",
      "Use credit cards for the rewards — but pay in full every month",
      "Conscious spending plan: spend lavishly on priorities, cut ruthlessly elsewhere",
      "Low-cost index funds beat actively managed funds over time"
    ],
    quotes: [
      "Spend extravagantly on the things you love, and cut costs mercilessly on the things you don't.",
      "The single most important thing you can do for your financial future is to start investing now.",
      "Automating your finances is the ultimate lazy strategy for success.",
      "Start with the basics: spend less than you earn and invest the difference."
    ],
    chapters: [
      { title: "Optimise Your Credit Cards", summary: "Credit cards are either working for you or against you — rewards, cash back, and consumer protection are real. The catch: carried balances at 20%+ interest destroy any benefit. Pay in full every month, automatically." },
      { title: "Beat the Banks", summary: "Most bank accounts pay near-zero interest and charge unnecessary fees. Online banks offer 10× more interest. Negotiate your credit card interest rate — half of people who ask get a reduction." },
      { title: "Get Ready to Invest", summary: "Open a Roth IRA and contribute the maximum before investing anywhere else. Tax-free compounding for 30 years is the most powerful legal financial tool most young people ignore completely." },
      { title: "Conscious Spending Plan", summary: "Not a budget — a plan. Fixed costs (50–60%), savings (10%), investments (5–10%), guilt-free spending (20–35%). Automate flows between accounts so the right money goes to the right place without willpower." },
      { title: "Save While Sleeping: Automation", summary: "Set up automatic transfers on payday: to savings, to investments, to bills. The goal is a system that works invisibly so you never have to exercise financial willpower — it just happens." },
      { title: "The Myth of Knowing When to Invest", summary: "Time in the market beats timing the market. Invest a fixed amount monthly regardless of market conditions. Boring, systematic investing consistently beats attempts at clever timing over 20+ years." }
    ],
    bigIdea: "Automate the fundamentals, invest in low-cost index funds, then spend unapologetically on what you love."
  },
  {
    id: "millionaire-next-door",
    title: "The Millionaire Next Door",
    author: "Thomas J. Stanley",
    category: "finance",
    year: 1996,
    pages: 272,
    readTime: "10 min read",
    rating: 4.4,
    color: "#365314",
    image: "images/book_the_millionaire_next_door_1773640582612.jpeg",
    tagline: "The surprising secrets of America's wealthy.",
    summary: "After surveying thousands of millionaires, Stanley and Danko discovered that most wealthy people live well below their means, drive used cars, and avoid status symbols. The real path to wealth is simple: live frugally, invest consistently, and let compounding do the heavy lifting over decades.",
    keyInsights: [
      "Most millionaires are first-generation — they built it themselves",
      "They live below their means: wealth ≠ high consumption",
      "'Prodigious Accumulators of Wealth' vs 'Under Accumulators'",
      "Wealth is silently built — flashy lifestyles signal poverty",
      "Invest early, consistently, in boring index funds"
    ],
    quotes: [
      "Wealth is not the same as income.",
      "Being frugal is the cornerstone of wealth-building.",
      "The more you earn and display, the less you tend to have.",
      "Millionaires tend to answer yes to this question: Were your parents very frugal?"
    ],
    chapters: [
      { title: "Meet the Millionaire Next Door", summary: "The average American millionaire drives a used car, lives in a modest house, and shops at ordinary stores. They look nothing like the wealthy stereotype — because wealth is invisible; spending is visible." },
      { title: "Frugal, Frugal, Frugal", summary: "Living well below your means is the non-negotiable cornerstone of wealth. Most millionaires have a budget, track spending, and have never bought a new car for themselves. Frugality is not deprivation — it is wealth accumulating." },
      { title: "Time, Energy, and Money", summary: "Wealthy people budget both time and money carefully. They spend significantly fewer hours consuming goods and more hours planning financial futures. Wealth is a consequence of investment in knowledge and discipline." },
      { title: "You Aren't What You Drive", summary: "High earners with status-symbol spending habits — luxury cars, designer clothes, big mortgages — typically have low net worth. Status symbols are the opposite of wealth; they are wealth being transferred to sellers." },
      { title: "Economic Outpatient Care", summary: "Giving adult children too much financial support undermines their ability to build discipline and independence. Receiving regular handouts correlates negatively with wealth accumulation — a painful but important finding." },
      { title: "Affluent Adult Children and How They Got That Way", summary: "Children of millionaires who become wealthy share common traits: they were taught the value of money, expected to work, and not given everything they asked for. Love and discipline, not money, is the greatest inheritance." }
    ],
    bigIdea: "Millionaires are not the rich-looking people you see — they are ordinary people with extraordinary savings habits."
  },

  // ─────── PSYCHOLOGY ───────
  {
    id: "thinking-fast-slow",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    category: "psychology",
    year: 2011,
    pages: 499,
    readTime: "18 min read",
    rating: 4.7,
    color: "#5b21b6",
    image: "images/book_thinking_fast_slow_1773640631974.png",
    tagline: "A masterclass in why we think the way we think.",
    summary: "Nobel laureate Daniel Kahneman reveals two systems of thinking: System 1 (fast, intuitive, emotional) and System 2 (slow, deliberate, logical). Our brains default to the effortless System 1, leading to systematic cognitive biases and errors. Understanding these biases is the first step to better decisions.",
    keyInsights: [
      "System 1 is fast and automatic; System 2 is slow and deliberate",
      "Cognitive biases are systematic, predictable errors in thinking",
      "Anchoring: the first number you see disproportionately shapes all judgements",
      "Loss aversion: losses hurt twice as much as equivalent gains feel good",
      "Experiencing self vs remembering self — we evaluate experiences wrongly"
    ],
    quotes: [
      "Nothing in life is as important as you think it is when you are thinking about it.",
      "A reliable way to make people believe in falsehoods is frequent repetition, because familiarity is not easily distinguished from truth.",
      "We are generally overconfident in our opinions and our impressions.",
      "The confidence people have in their beliefs is not a measure of the quality of evidence."
    ],
    chapters: [
      { title: "Two Systems", summary: "System 1 is automatic, fast, and emotional — it runs constantly without effort. System 2 is slow, deliberate, and effortful — it kicks in only when System 1 flags a problem. Most decisions are System 1, for better and worse." },
      { title: "Attention and Effort", summary: "System 2 has a limited budget of attention. When it's busy or depleted, System 1 takes over — leading to more errors and more susceptibility to cognitive biases. Tired minds make worse decisions." },
      { title: "The Lazy Controller", summary: "Most people avoid the cognitive effort of System 2 thinking whenever possible. This cognitive ease leads us to prefer familiar-sounding things, believe repeated claims more readily, and choose the path of least mental resistance." },
      { title: "The Associative Machine", summary: "System 1 works by association — priming one idea automatically activates related ideas. Even irrelevant environmental cues shape our behaviour and judgements without our awareness." },
      { title: "Heuristics and Biases", summary: "When uncertain, System 1 substitutes a hard question for an easier one. The availability heuristic, the representativeness heuristic, and the affect heuristic all create systematic, predictable errors." },
      { title: "Anchoring", summary: "Any number you encounter — even a random one — influences all subsequent estimates and judgements. Negotiators, estate agents, and salespeople all exploit anchoring systematically and powerfully." },
      { title: "Overconfidence", summary: "We are all overconfident about things we know, plans we make, and futures we predict. The planning fallacy — underestimating time and cost, overestimating benefit — is universal and extremely costly." },
      { title: "Choices and Prospect Theory", summary: "We do not evaluate outcomes in absolute terms but relative to a reference point. Losses loom roughly twice as large as equivalent gains — this asymmetry drives most of the puzzling features of economic behaviour." },
      { title: "Two Selves", summary: "The experiencing self lives in the present moment. The remembering self constructs and stores narratives about past experiences. These two selves have different interests — and the remembering self almost always wins." }
    ],
    bigIdea: "We are not as rational as we think — our decisions are driven by fast, automatic System 1 thinking that is riddled with predictable biases."
  },
  {
    id: "influence",
    title: "Influence",
    author: "Robert B. Cialdini",
    category: "psychology",
    year: 1984,
    pages: 336,
    readTime: "12 min read",
    rating: 4.8,
    color: "#4c1d95",
    image: "images/book_influence_1773640721307.png",
    tagline: "The psychology of persuasion.",
    summary: "Cialdini spent three years going undercover in sales, PR, and fundraising to understand the science of influence. He identified six universal principles: Reciprocity, Commitment, Social Proof, Authority, Liking, and Scarcity. Understanding these weapons of influence both protects you from manipulation and makes you more persuasive.",
    keyInsights: [
      "Reciprocity: give first and people feel compelled to return the favour",
      "Commitment: once we commit (especially in writing), we stay consistent",
      "Social proof: we look to others when uncertain ('bestseller' works)",
      "Authority: titles, uniforms, and expertise command compliance",
      "Scarcity: the less available something is, the more we want it"
    ],
    quotes: [
      "Everything should be made as simple as possible, but not simpler.",
      "The truly gifted negotiator turns the other party's strength into a weakness.",
      "We will use the actions of others to decide on proper behavior for ourselves.",
      "Reciprocation rule: we should try to repay, in kind, what another person has provided us."
    ],
    chapters: [
      { title: "Weapons of Influence", summary: "Fixed-action patterns — automatic, near-hypnotic responses — can be triggered by single cues. Compliance professionals study and exploit these triggers systematically in every sale, negotiation, and fundraiser." },
      { title: "Reciprocation: The Old Give and Take", summary: "The obligation to repay what we receive is one of the most deeply rooted social norms. Even small, unsolicited gifts create a powerful sense of debt — and the return favour is often disproportionately large." },
      { title: "Commitment and Consistency", summary: "Once we make a choice or commitment — especially one written down or stated publicly — we work to behave in ways consistent with it. This foot-in-the-door principle is used in sales, politics, and therapy." },
      { title: "Social Proof", summary: "In uncertain situations, we look to the actions of others to determine correct behaviour. 'Bestseller', '5 million sold', and canned laughter all use social proof to guide our decisions automatically." },
      { title: "Liking", summary: "We comply most readily with requests from people we know and like. Physical attractiveness, similarity, compliments, familiarity, and association with good things all increase how much we like someone." },
      { title: "Authority", summary: "We are trained from birth to believe that obedience to authority figures is correct. Titles, uniforms, and trappings of authority trigger automatic deference — even when the authority is fake or irrelevant." },
      { title: "Scarcity", summary: "The less available something is, the more we want it. 'Limited time offer', 'only 3 left', and 'exclusive access' all manufacture scarcity to trigger desire. Loss aversion combines with reactance to make scarcity irresistible." }
    ],
    bigIdea: "Six universal principles of influence drive human behaviour — understanding them helps you persuade ethically and resist manipulation."
  },
  {
    id: "courage-to-be-disliked",
    title: "The Courage to Be Disliked",
    author: "Ichiro Kishimi & Fumitake Koga",
    category: "psychology",
    year: 2013,
    pages: 288,
    readTime: "11 min read",
    rating: 4.6,
    color: "#064e3b",
    image: "images/book_the_courage_to_be_disliked_1773640582613.jpeg",
    tagline: "How to free yourself and live a happy life.",
    summary: "Through a Socratic dialogue between a philosopher and a youth, this book presents Alfred Adler's philosophy: the past does not determine who you are. All problems are interpersonal problems. The separation of tasks — minding your own business — is the key to freedom. Happiness is choosing to contribute to community.",
    keyInsights: [
      "Trauma does not exist — we give meaning to our experiences",
      "All problems are, at their root, interpersonal relationship problems",
      "Separation of tasks: decide what is yours and what belongs to others",
      "The courage to be disliked is the price of freedom",
      "Live in the 'here and now' — not in a linear narrative of past and future"
    ],
    quotes: [
      "The courage to be happy also includes the courage to be disliked.",
      "No experience is in itself a cause of our success or failure.",
      "People are not driven by past causes but move toward goals they themselves set.",
      "The most important thing is not what one is born with but what use one makes of that equipment."
    ],
    chapters: [
      { title: "Night One: Deny Trauma", summary: "Adler argues that trauma does not determine us — we decide what meaning to give our experiences. The past is not a cause; it is a resource we can choose to use or refuse to use." },
      { title: "Night Two: All Problems Are Interpersonal", summary: "Every form of unhappiness, inferiority, or suffering can be traced back to interpersonal relationships. Solve the relationship problem and the personal problem resolves too." },
      { title: "Night Three: Discard Other People's Tasks", summary: "Separate your tasks from other people's tasks. What others think of you, how they react to your choices — those are their tasks, not yours. Interfering in others' tasks is the root of all conflict and anxiety." },
      { title: "Night Four: Where the Centre of the World Is", summary: "The desire for recognition is the desire to place yourself at the centre of others' worlds. Community feeling — the sense of contribution to something larger — is the true foundation of happiness." },
      { title: "Night Five: To Live in Earnest in the Here and Now", summary: "Don't live a 'dot' life focused on distant goals; live a 'line' life, fully engaged in each moment. The meaning of your life is not found at its destination — it is in the dancing itself, the living itself." }
    ],
    bigIdea: "Freedom means taking responsibility for your own choices — regardless of what others think — and that takes genuine courage."
  },
  {
    id: "predictably-irrational",
    title: "Predictably Irrational",
    author: "Dan Ariely",
    category: "psychology",
    year: 2008,
    pages: 304,
    readTime: "11 min read",
    rating: 4.6,
    color: "#1e3a5f",
    image: "images/book_predictably_irrational_1773640582614.jpeg",
    tagline: "The hidden forces that shape our decisions.",
    summary: "MIT professor Dan Ariely reveals through experiments that our irrational behaviours are not random — they are systematic and predictable. From why 'free' is more powerful than cheap, to why ownership inflates our valuation, to how expectations change actual experience — these forces shape every decision we make.",
    keyInsights: [
      "Everything is evaluated in relative terms — anchoring shapes all prices",
      "'FREE' triggers an irrational emotional response that overrides logic",
      "The endowment effect: we overvalue what we own",
      "Social norms and market norms don't mix — money ruins the pleasant",
      "Expectations change actual experience (placebo applies everywhere)"
    ],
    quotes: [
      "Humans rarely choose things in absolute terms. We focus on the relative advantage of one thing over another.",
      "The truth is, small and seemingly insignificant nudges can have a large impact on our behavior.",
      "Once we touch something, we have an endowment relationship with it.",
      "We are not only irrational, but predictably irrational — our irrationality happens the same way, again and again."
    ],
    chapters: [
      { title: "The Truth About Relativity", summary: "We never evaluate anything in isolation — always in comparison. A $30 pen feels cheap next to a $60 pen and expensive next to a $10 pen. Context shapes every perception of price, quality, and value." },
      { title: "The Fallacy of Supply and Demand", summary: "Prices are not determined by the laws of supply and demand — they are anchored by the first price we see. This 'arbitrary coherence' stays with us and shapes every subsequent financial decision we make." },
      { title: "The Cost of Zero Cost", summary: "'FREE' is not just a price — it is an emotion. Zero cost removes all perceived risk, even when the free option is clearly inferior. This is why lines form for free ice cream samples that aren't worth queuing for." },
      { title: "The Cost of Social Norms", summary: "Social norms and market norms operate on different psychological frameworks. Introducing money into a relationship governed by social norms immediately converts it to a market relationship — and the social warmth evaporates." },
      { title: "The Influence of Arousal", summary: "Decision-making in a cold, rational state versus in an emotionally aroused state produces vastly different choices. We systematically underestimate how different we will be in hot states — which causes overconfident predictions about our future behaviour." },
      { title: "The Problem of Procrastination and Self-Control", summary: "We consistently prefer present pleasure over future benefit. Commitment devices — removing future choices, creating penalties for failure — are the most effective way to overcome predictable self-control failure." },
      { title: "The Power of Price", summary: "A more expensive placebo relieves more pain than a cheap one. Our expectations — shaped by price, brand, and presentation — cause neurological changes that alter actual experience. Expectation is not just psychology; it is physiology." }
    ],
    bigIdea: "Our irrationality is not random — it is systematic, predictable, and, once understood, can be designed around."
  },
  {
    id: "mans-search-for-meaning",
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    category: "psychology",
    year: 1946,
    pages: 165,
    readTime: "6 min read",
    rating: 4.9,
    color: "#292524",
    image: "images/book_mans_search_for_meaning_1773640582615.jpeg",
    tagline: "A story of survival, and the search for purpose.",
    summary: "Holocaust survivor and psychiatrist Viktor Frankl recounts his experiences in Nazi concentration camps and introduces logotherapy — the therapeutic approach based on the idea that man's deepest desire is to find meaning in life. Those who found meaning in suffering survived; those who didn't, collapsed.",
    keyInsights: [
      "'He who has a why can bear almost any how' — Nietzsche",
      "The last human freedom is choosing our attitude to any given circumstance",
      "Meaning can be found in work, love, or suffering — always exists",
      "Existential vacuum: the modern mass neurosis of meaninglessness",
      "Logotherapy treats existential crises through confrontation with meaning"
    ],
    quotes: [
      "Between stimulus and response there is a space. In that space is our power to choose our response.",
      "When we are no longer able to change a situation, we are challenged to change ourselves.",
      "Everything can be taken from a man but one thing: the last of the human freedoms — to choose one's attitude.",
      "Those who have a 'why' to live can bear almost any 'how'."
    ],
    chapters: [
      { title: "Experiences in a Concentration Camp", summary: "A first-person account of Auschwitz and other Nazi camps — the dehumanisation, the hunger, the selection ramps. Frankl observes that those who found meaning in their suffering survived longer; those who lost it often perished within days." },
      { title: "How Meaning Is Found in Suffering", summary: "Even in unimaginable conditions, prisoners could choose their inner response to outer circumstances. This last human freedom — the choice of attitude — became Frankl's central insight and the foundation of his entire philosophy." },
      { title: "The Existential Vacuum", summary: "Modern freedom has given us the choice of what to do but no instinct for what we should do. The resulting meaninglessness — the existential vacuum — manifests as boredom, depression, aggression, and addiction." },
      { title: "Logotherapy in a Nutshell", summary: "Logotherapy helps patients find meaning in work (doing something significant), love (caring for others), and suffering (the attitude we take when we cannot avoid pain). Meaning, not pleasure, is the primary human motivator." },
      { title: "The Case for Tragic Optimism", summary: "Frankl argues it is possible — and necessary — to say 'yes to life' despite pain, guilt, and death. Turning suffering into human achievement, guilt into self-improvement, and mortality into fuel for action is the final task of every human life." }
    ],
    bigIdea: "Life is not about avoiding suffering — it is about finding meaning in it, which transforms even the worst circumstances into a reason to live."
  },

  // ─────── BIOGRAPHY ───────
  {
    id: "elon-musk",
    title: "Elon Musk",
    author: "Walter Isaacson",
    category: "biography",
    year: 2023,
    pages: 688,
    readTime: "25 min read",
    rating: 4.7,
    color: "#18181b",
    image: "images/book_elon_musk_1773640647170.png",
    tagline: "The story of the man behind Tesla, SpaceX, and Twitter.",
    summary: "Walter Isaacson spent two years shadowing Elon Musk and interviewed hundreds of people in his orbit. The result: an unflinching portrait of a man driven by a demon — fear of humanity's extinction. Musk's companies (Tesla, SpaceX, Neuralink, X) are all bets on a multi-planetary, sustainable civilisation.",
    keyInsights: [
      "Musk's driving force: genuine fear that humanity will go extinct",
      "The 'idiot index': reject requirements that add cost without reason",
      "Algorithm: question requirements → delete → simplify → accelerate → automate",
      "Surges: Musk injects himself into crises personally to force breakthroughs",
      "Hardcore management style polarises — but delivers results few thought possible"
    ],
    quotes: [
      "I would like to die on Mars. Just not on impact.",
      "If something is important enough, even if the odds are against you, you should still do it.",
      "When something is important enough, you do it even if the odds are not in your favor.",
      "I'm allergic to the word 'impossible'."
    ],
    chapters: [
      { title: "Demons: A Childhood in South Africa", summary: "Musk's difficult childhood — a cold, demanding father and relentless bullying — hardened him into someone who can emotionally detach from pain to concentrate on mission. The wound became the engine." },
      { title: "Canada and College: The Making of a Technologist", summary: "Musk taught himself computer programming, chose physics and economics at Penn, and developed his first great insight: the internet, clean energy, and space would be the most transformative industries of the next century." },
      { title: "Zip2 and X.com: The First Fortunes", summary: "Musk built and sold Zip2 (a maps startup) for $307 million, then founded X.com (later PayPal), which was sold to eBay for $1.5 billion. He invested nearly every dollar into his next bets: rockets and electric cars." },
      { title: "SpaceX: The Rocket Company", summary: "Three consecutive rocket failures nearly destroyed SpaceX. Musk bet everything on a fourth launch — which succeeded. The company then won a NASA contract that saved it. The near-death experience forged SpaceX's relentless culture." },
      { title: "Tesla: The Electric Car Bet", summary: "Conventional wisdom said electric cars couldn't be compelling, profitable, or produced at scale. Tesla proved all three wrong. Musk personally took over production during crises, sleeping on the factory floor until things worked." },
      { title: "The Algorithm and the 'Idiot Index'", summary: "Musk's five-step engineering algorithm: question every requirement, delete everything unnecessary, simplify, accelerate, and only then automate. The 'idiot index' — the ratio of part cost to raw material cost — flags over-engineered waste." },
      { title: "Twitter / X: The Turbulent Takeover", summary: "Musk bought Twitter for $44 billion impulsively, then laid off 80% of staff, slept at the office, and made constant chaotic decisions. A case study in what happens when a force-of-nature operator runs a social media company." }
    ],
    bigIdea: "A single man's demons, vision, and relentless intensity can reshape entire industries and, perhaps, the future of civilisation."
  },
  {
    id: "steve-jobs",
    title: "Steve Jobs",
    author: "Walter Isaacson",
    category: "biography",
    year: 2011,
    pages: 656,
    readTime: "24 min read",
    rating: 4.8,
    color: "#1c1c1e",
    image: "images/book_steve_jobs_1773640735898.png",
    tagline: "The exclusive biography of the tech visionary.",
    summary: "Based on over 40 interviews with Jobs and hundreds with family, friends, and rivals, this is an honest portrait of a creative genius whose passionate perfectionism drove him to build Apple and Pixar — while his interpersonal flaws drove people away. Jobs believed people didn't know what they wanted until he showed them.",
    keyInsights: [
      "Reality distortion field: his belief that normal rules didn't apply to him",
      "Simplicity is the ultimate sophistication — remove everything non-essential",
      "A-players only: mediocrity is a virus that infects the whole team",
      "Products at the intersection of tech and humanities — the liberal arts matter",
      "The journey is the reward — work for love, not money"
    ],
    quotes: [
      "Your time is limited, so don't waste it living someone else's life.",
      "Stay hungry, stay foolish.",
      "Creativity is just connecting things.",
      "Design is not just what it looks like and feels like. Design is how it works."
    ],
    chapters: [
      { title: "Childhood, Adoption, and Reed College", summary: "Jobs was adopted at birth and always felt 'chosen'. Reed College exposed him to calligraphy, which directly shaped the Mac's beautiful typography. He dropped out after one semester but audited courses for 18 months." },
      { title: "Atari and India: The Seeker", summary: "Jobs worked at Atari and travelled to India seeking spiritual awakening. He returned more focused and intense. The blend of Eastern philosophy and Western technology became his defining worldview." },
      { title: "Apple I and II: The Garage", summary: "Wozniak built the computer; Jobs envisioned the product and the company. The Apple II generated $139 million in its first three years. Jobs learned that great engineering needs great packaging to change the world." },
      { title: "The Macintosh: Thinking Different", summary: "Jobs drove the Mac team with a reality distortion field — convincing engineers to do things they believed impossible. The 1984 Super Bowl ad launched not just a product but a brand mythology that persists today." },
      { title: "Exile and NeXT and Pixar", summary: "Fired from Apple in 1985, Jobs founded NeXT (which failed commercially but built the OS that became macOS) and invested in Pixar. Toy Story made Pixar a phenomenon and Jobs a billionaire — before his return to Apple." },
      { title: "The Second Coming: iMac, iPod, iTunes", summary: "Returning to Apple in 1997, Jobs cut 70% of products and focused obsessively on four. The iMac, iPod, and iTunes created the digital music revolution and restored Apple's sense of identity and momentum." },
      { title: "iPhone and iPad: The Post-PC Era", summary: "Jobs called the iPhone 'an iPod, a phone, and an internet communicator' — the most revolutionary product launch since the Mac. The App Store created a new economy. The iPad redefined computing for millions." },
      { title: "The End and the Legacy", summary: "Jobs died in October 2011. His greatest legacy was proving that technology and the humanities are not separate disciplines — that the most powerful products live at their intersection." }
    ],
    bigIdea: "Obsessive perfectionism and an uncompromising belief in the product — not business strategy — built Apple into the world's most valuable company."
  },
  {
    id: "shoe-dog",
    title: "Shoe Dog",
    author: "Phil Knight",
    category: "biography",
    year: 2016,
    pages: 386,
    readTime: "14 min read",
    rating: 4.9,
    color: "#ea580c",
    image: "images/book_shoe_dog_1773640582616.jpeg",
    tagline: "A memoir by the creator of Nike.",
    summary: "Phil Knight recounts with brutal honesty the chaotic, near-bankrupt early years of Nike — which started as Blue Ribbon Sports importing Japanese running shoes in the 1960s. Shoe Dog is a love story about a company, a sport, and the obsessive belief that pushed Knight and his 'Buttfaces' through crisis after crisis.",
    keyInsights: [
      "Follow the crazy dream: logic said quit at every step — they didn't",
      "Cash flow killed companies — Nike nearly died of success multiple times",
      "Hire people more talented than yourself and trust them completely",
      "The mission was always the product — great products are missionaries",
      "Competitors teach you more about your business than any consultant"
    ],
    quotes: [
      "Don't tell people how to do things, tell them what to do and let them surprise you with their results.",
      "The cowards never started and the weak died along the way.",
      "Have faith in yourself, but also have faith in faith itself.",
      "Life is growth. You grow or you die."
    ],
    chapters: [
      { title: "1962: The Crazy Idea", summary: "A 24-year-old Phil Knight believes he can import Japanese running shoes and undercut the dominant German brands. A world trip and a meeting with Onitsuka Tiger in Japan kickstarts everything." },
      { title: "1964–1966: Blue Ribbon Sports", summary: "Knight sells shoes from the boot of his car at track meets, recruits his old coach Bill Bowerman as a partner, and fights a constant battle against cash-flow collapse. Every month feels like the last." },
      { title: "1967–1971: The People", summary: "Knight assembles his 'Buttfaces' — a misfit crew of passionate misfits who work for almost nothing because they believe. Johnson, Woodell, Hayes — each one loyal beyond reason." },
      { title: "1971–1975: Nike Is Born", summary: "The company gets a name (Nike), a logo (the Swoosh, bought for $35), and a first signature athlete. The waffle iron that created the revolutionary waffle sole sole sole — Bowerman literally poured rubber into a waffle iron." },
      { title: "1975–1980: The Battles", summary: "Nike fights legal battles with Onitsuka Tiger, currency crises, and the near-collapse of its banking relationships. The company outgrows crisis after crisis, each time discovering new resilience it didn't know it had." },
      { title: "Going Public: 1980 and Beyond", summary: "The IPO in 1980 made Knight and the Buttfaces paper millionaires overnight. Knight describes the feeling not as triumph but as loss — the company was no longer theirs alone. The bittersweet price of winning." }
    ],
    bigIdea: "The greatest companies are built by people who had no idea what they were doing — but were too stubborn, too in love with the mission, to stop."
  },
  {
    id: "leonardo-da-vinci",
    title: "Leonardo da Vinci",
    author: "Walter Isaacson",
    category: "biography",
    year: 2017,
    pages: 624,
    readTime: "23 min read",
    rating: 4.8,
    color: "#78350f",
    image: "images/book_leonardo_da_vinci_1773640582617.jpeg",
    tagline: "The biography of history's greatest creative genius.",
    summary: "Drawing on Leonardo's thousands of pages of notebooks, Isaacson reveals how curiosity — not genius — was the one quality that made Leonardo exceptional. He was illegitimate, had almost no formal education, and frequently left projects unfinished. But his relentless curiosity led to discoveries that were centuries ahead of their time.",
    keyInsights: [
      "Curiosity is a skill, not a trait — it can be cultivated and practised",
      "Leonardo's notebooks show science and art as one unified inquiry",
      "He studied the unrelated obsessively — and found connections others missed",
      "Perfectionism delayed masterpieces — but the study surpassed the painting",
      "Observe, question, connect — the three habits of a genius mind"
    ],
    quotes: [
      "Learning never exhausts the mind.",
      "Simplicity is the ultimate sophistication.",
      "I have been impressed with the urgency of doing. Knowing is not enough; we must apply.",
      "Art is the queen of all sciences communicating knowledge to all the generations of the world."
    ],
    chapters: [
      { title: "Childhood: The Bastard Who Observed Everything", summary: "Illegitimate and largely self-taught, Leonardo observed nature with an intensity that no classroom could have provided. His notebooks from childhood show a mind already asking questions that no one else thought to ask." },
      { title: "Florence and the Medici Workshop", summary: "Apprenticed to Verrocchio, Leonardo absorbed painting, sculpture, and engineering simultaneously. He was already surpassing his master by 20. Florence was the greatest concentration of creative genius the world had ever seen." },
      { title: "Milan: Engineer and Entertainer", summary: "At the Sforza court in Milan, Leonardo designed weapons, planned canals, painted the Last Supper, and staged elaborate theatrical productions. His energy was unlimited; his ability to switch between disciplines was unparalleled." },
      { title: "Anatomy: The Body as a Machine", summary: "Leonardo dissected over 30 human corpses to understand musculature and movement. His anatomical drawings were 300 years ahead of published medical science. He saw the body as an engineering problem to be solved." },
      { title: "The Mona Lisa and the Obsession with Perfection", summary: "Leonardo worked on the Mona Lisa for 16 years and never considered it finished. He studied how light plays on curved surfaces, painted layer upon translucent layer, and achieved a depth and softness no previous painter had managed." },
      { title: "Science, Birds, and the Dream of Flight", summary: "Leonardo studied birds obsessively and designed ornithopters and gliders in 1490 — 400 years before the Wright brothers. He understood the physics of lift and drag through observation alone, before the mathematics existed to describe them." },
      { title: "The Final Years and the Unfinished Projects", summary: "Leonardo left dozens of great projects incomplete. His notebooks were never organised or published. Yet what he did complete — and what he explored in private — remains the greatest single body of genius the world has ever seen." }
    ],
    bigIdea: "Genius is not innate brilliance — it is the relentless, joyful curiosity to understand everything about the world around you."
  },
  {
    id: "wright-brothers",
    title: "The Wright Brothers",
    author: "David McCullough",
    category: "biography",
    year: 2015,
    pages: 336,
    readTime: "12 min read",
    rating: 4.7,
    color: "#1e40af",
    image: "images/book_the_wright_brothers_1773640582618.jpeg",
    tagline: "The remarkable story of the two brothers who changed the world.",
    summary: "Pulitzer Prize winner David McCullough tells the story of Wilbur and Orville Wright — two self-taught bicycle mechanics from Dayton, Ohio, who solved the problem of powered flight in four years of methodical, scientific work. With no formal training, no government funding, and no investors, they changed every life on Earth.",
    keyInsights: [
      "Self-education and relentless practice beat formal credentials",
      "Systematic iteration: test → fail → learn → repeat, until you fly",
      "Wilbur and Orville complemented each other perfectly — argument was their method",
      "No investor, no university, no government — just resourcefulness and grit",
      "Persistence through ridicule and failure was their true invention"
    ],
    quotes: [
      "If birds can glide for long periods of time, then... why can't I?",
      "It is possible to fly without motors, but not without knowledge and skill.",
      "The desire to fly is an idea handed down to us by our ancestors who looked enviously on the birds.",
      "Success comes from taking the initiative and following up."
    ],
    chapters: [
      { title: "Young Men of Dayton", summary: "Wilbur and Orville Wright are bookish, methodical, and inseparably close. Running a bicycle shop gives them mechanical skill, engineering intuition, and enough income to fund their real obsession: flight." },
      { title: "The Problem of Control", summary: "Where other flight pioneers focused on engine power, the Wrights realised control was the unsolved problem. Wilbur's insight — that wing-warping could steer an aircraft like a bird tilts its wingtips — was the breakthrough." },
      { title: "Kitty Hawk: The First Tests", summary: "The desolate dunes of North Carolina provided steady winds and soft landing ground. Three years of glider experiments taught the brothers what no textbook could: how air actually behaves across a curved wing surface." },
      { title: "December 17, 1903", summary: "Twelve seconds. One hundred and twenty feet. Four flights that day. The world's first powered, controlled, sustained flight — witnessed by five people, reported by almost no one. It didn't matter: it had happened." },
      { title: "The World Catches Up", summary: "For two years after their success, almost no one believed them. The press ignored them; governments dismissed them. The Wrights quietly improved their design while the world slowly caught up to the reality of what had occurred." },
      { title: "Europe and the International Sensation", summary: "Wilbur's 1908 demonstrations in France — graceful, controlled, impossible — electrified Europe. Kings, presidents, and hundreds of thousands saw him fly. Overnight, the century of aviation had begun." }
    ],
    bigIdea: "Two ordinary men with extraordinary persistence — not genius or resources — solved what the greatest minds had failed to solve for centuries."
  }
];

// Helper: get books by category
function getBooksByCategory(cat) {
  if (cat === "all") return BOOKS;
  return BOOKS.filter(b => b.category === cat);
}

// Helper: get single book by id
function getBookById(id) {
  return BOOKS.find(b => b.id === id);
}

// Helper: search books
function searchBooks(query) {
  const q = query.toLowerCase();
  return BOOKS.filter(b =>
    b.title.toLowerCase().includes(q) ||
    b.author.toLowerCase().includes(q) ||
    b.summary.toLowerCase().includes(q) ||
    b.category.toLowerCase().includes(q)
  );
}

const CATEGORIES = [
  { id: "all",        label: "All Books",    icon: "📚", count: 25 },
  { id: "self-help",  label: "Self-Help",    icon: "🧠", count: 5  },
  { id: "productivity",label:"Productivity", icon: "⚡", count: 5  },
  { id: "finance",    label: "Finance",      icon: "💰", count: 5  },
  { id: "psychology", label: "Psychology",   icon: "🔬", count: 5  },
  { id: "biography",  label: "Biography",    icon: "🌟", count: 5  }
];
