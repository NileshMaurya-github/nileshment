// =============================================
// NILESHMENT — Quiz Data (3 questions per book)
// =============================================

const QUIZ_DATA = {
  "atomic-habits": [
    {
      q: "What is the '1% rule' in Atomic Habits?",
      options: ["Work 1% harder every day","Improve 1% each day — compounding to 37× better in a year","Spend 1% of income on self-improvement","Read for 1% of your waking hours"],
      answer: 1,
      explanation: "James Clear shows maths: 1% better daily × 365 days = 37.78× improvement. Small gains compound into extraordinary results."
    },
    {
      q: "Which of the following is NOT one of James Clear's 4 Laws of Behaviour Change?",
      options: ["Make it Obvious","Make it Motivating","Make it Easy","Make it Satisfying"],
      answer: 1,
      explanation: "The 4 Laws are: Obvious, Attractive, Easy, Satisfying. 'Motivating' is not one of them — attraction to a habit is about the craving it creates."
    },
    {
      q: "According to Atomic Habits, what is the most effective form of motivation?",
      options: ["External rewards","Fear of failure","Progress","Accountability partners"],
      answer: 2,
      explanation: "Clear argues that seeing progress — however small — is the single most effective motivator. It proves the system is working."
    }
  ],
  "4-hour-workweek": [
    {
      q: "What does the 'E' stand for in Tim Ferriss's DEAL framework?",
      options: ["Earn","Eliminate","Execute","Engage"],
      answer: 1,
      explanation: "DEAL = Define, Eliminate, Automate, Liberate. Elimination is the act of removing low-value tasks using 80/20 and Parkinson's Law."
    },
    {
      q: "What is Parkinson's Law, as used by Tim Ferriss?",
      options: ["Income rises to meet expenses","Work expands to fill the time available","Tasks shrink when broken into pieces","Productivity doubles with fewer hours"],
      answer: 1,
      explanation: "Parkinson's Law: work expands to fill the time allocated. Setting aggressive deadlines forces you to focus on only what truly matters."
    },
    {
      q: "What does Ferriss call the alternative to the traditional 40-year retirement plan?",
      options: ["Gap years","Mini-retirements","Semi-retirement","Lifestyle design periods"],
      answer: 1,
      explanation: "Ferriss advocates 'mini-retirements' — taking extended breaks throughout life — rather than deferring all leisure to old age."
    }
  ],
  "power-of-now": [
    {
      q: "According to Eckhart Tolle, what is the primary cause of human suffering?",
      options: ["External circumstances","Over-identification with the mind and its thoughts","Lack of purpose","Social isolation"],
      answer: 1,
      explanation: "Tolle teaches that suffering arises from being trapped in compulsive thinking — the mind's incessant chatter — rather than resting in present awareness."
    },
    {
      q: "What does Tolle call the accumulated emotional pain carried from the past?",
      options: ["The ego","The shadow self","The pain-body","Emotional residue"],
      answer: 2,
      explanation: "The 'pain-body' is Tolle's term for the accumulated residue of past hurts. It feeds on negative emotions and drama to sustain itself."
    },
    {
      q: "What is the central practice Tolle recommends for awakening?",
      options: ["Daily journaling","Extended meditation retreats","Bringing full awareness to the present moment","Reducing social contact"],
      answer: 2,
      explanation: "Tolle's core teaching: the present moment is all we ever have. Full, non-judgemental awareness of the Now dissolves the mind's grip and reveals inner peace."
    }
  ],
  "deep-work": [
    {
      q: "How does Cal Newport define 'deep work'?",
      options: ["Working more than 12 hours a day","Professional activities in a state of distraction-free concentration that push cognitive abilities to their limit","Working from a secluded location","Focusing on a single project for more than a month"],
      answer: 1,
      explanation: "Newport's exact definition: cognitively demanding tasks performed in distraction-free concentration — creating new value and improving skills."
    },
    {
      q: "Which of these is NOT one of Newport's four philosophies of deep work scheduling?",
      options: ["Monastic","Bimodal","Relentless","Journalistic"],
      answer: 2,
      explanation: "The four are: Monastic (eliminate shallow work entirely), Bimodal (alternate deep/shallow in large blocks), Rhythmic (daily habit), Journalistic (fit depth wherever possible)."
    },
    {
      q: "Why does Newport recommend embracing boredom?",
      options: ["It builds character","It trains the mind to concentrate without needing constant stimulation","It reduces stress hormones","It improves sleep quality"],
      answer: 1,
      explanation: "Constant stimulation erodes the brain's ability to sustain focus. Embracing boredom is exercise for your attention — it rebuilds the capacity for depth."
    }
  ],
  "mindset": [
    {
      q: "In Carol Dweck's framework, what defines a 'fixed mindset'?",
      options: ["Believing you can never change your personality","Believing your abilities and intelligence are set traits that cannot be developed","Refusing to take risks","Preferring solitary work"],
      answer: 1,
      explanation: "A fixed mindset holds that talent and intelligence are innate and static. This makes challenges feel threatening and failures feel defining."
    },
    {
      q: "What kinds of praise does Dweck's research suggest HARM children's mindset?",
      options: ["Praising effort and strategy","Praising persistence","Praising intelligence and innate talent","Praising creativity"],
      answer: 2,
      explanation: "Praising intelligence ('you're so smart') creates fragility. Children praised for effort see challenges as opportunities to grow rather than threats to their reputation."
    },
    {
      q: "According to Dweck, which statement most reflects a growth mindset?",
      options: ["'I'm not a maths person'","'This is too hard for me'","'I can't do this yet — but I will'","'Some people are just naturally talented'"],
      answer: 2,
      explanation: "The word 'yet' is central to growth mindset — it frames inability as a temporary state on the path to mastery, not a permanent verdict."
    }
  ],
  "getting-things-done": [
    {
      q: "What is the 'two-minute rule' in David Allen's GTD system?",
      options: ["Review your task list every two minutes","If a task takes less than two minutes, do it immediately","Spend two minutes planning each morning","Break every task into two-minute chunks"],
      answer: 1,
      explanation: "If an action takes under two minutes, doing it immediately is faster than filing it in your system. It prevents small tasks from clogging your inbox."
    },
    {
      q: "What are the five stages of mastering workflow in GTD?",
      options: ["Plan, Do, Check, Act, Review","Capture, Clarify, Organise, Reflect, Engage","Collect, Process, Sort, Execute, Review","Write, Delete, Delegate, Defer, Do"],
      answer: 1,
      explanation: "The GTD workflow: Capture (collect everything), Clarify (what is it?), Organise (where does it go?), Reflect (review regularly), Engage (take action)."
    },
    {
      q: "What does Allen mean when he says 'your mind is for having ideas, not holding them'?",
      options: ["You should stop remembering things","Human memory is unreliable for complex tasks","Everything should be captured in an external trusted system so your mind is free to think","You should delegate all thinking to apps"],
      answer: 2,
      explanation: "When your mind holds open loops (undone tasks, unmade decisions), it can't focus on the present. Externalising everything to a trusted system creates a 'mind like water'."
    }
  ],
  "essentialism": [
    {
      q: "What is the Essentialist's core question?",
      options: ["How can I do more with less time?","What is the single most important thing I could do?","How can I be more productive?","What would I do if I had unlimited resources?"],
      answer: 1,
      explanation: "The Essentialist constantly asks what the single most important contribution is — then protects time and energy for only that."
    },
    {
      q: "Greg McKeown uses the 'hell yeah or no' test for decisions. What does this mean?",
      options: ["Only do things you are 100% certain about","If something doesn't excite you completely, say no","Shout 'hell yeah' before starting work each day","Only accept invitations from people you truly like"],
      answer: 1,
      explanation: "If the answer isn't an enthusiastic 'hell yeah!', it's a 'no'. This extreme filter ensures your energy goes only to things you truly value."
    },
    {
      q: "What does McKeown say about the relationship between choices and outcomes?",
      options: ["More choices lead to better outcomes","Everything is a trade-off — saying yes to one thing means saying no to others","Choosing fewer things makes you unproductive","Options should be researched exhaustively before deciding"],
      answer: 1,
      explanation: "Essentialism is fundamentally about trade-offs. Every yes is a no to everything else. Accepting this reality forces us to choose wisely."
    }
  ],
  "make-time": [
    {
      q: "What is the first step in the Make Time framework each day?",
      options: ["Check email and clear your inbox","Write a to-do list","Choose a single Highlight — the one priority for the day","Plan your week in advance"],
      answer: 2,
      explanation: "The Highlight is the anchor of each day. By choosing one meaningful priority before starting work, you ensure at least something important gets done."
    },
    {
      q: "What do Knapp and Zeratsky call apps like social media that constantly refill with new content?",
      options: ["Time traps","Infinity pools","Engagement engines","Digital quicksand"],
      answer: 1,
      explanation: "Infinity pools — like Twitter, Instagram, and news feeds — always have more content. They are the default we need to actively resist to make time for what matters."
    },
    {
      q: "In Make Time, what does 'Energise' refer to?",
      options: ["Drinking more coffee","Using motivational content before work","Caring for your body — exercise, sleep, food — to fuel mental energy","Taking breaks every 25 minutes"],
      answer: 2,
      explanation: "Your brain runs on your body. Moving daily, sleeping enough, and eating real food directly improves focus and creative energy — more than any productivity hack."
    }
  ],
  "eat-that-frog": [
    {
      q: "What does the 'frog' metaphor represent in Brian Tracy's book?",
      options: ["An unpleasant colleague","Your most important, most challenging task of the day","Any task that takes more than an hour","A distraction that must be eliminated"],
      answer: 1,
      explanation: "The 'frog' is your most important, often most dreaded, task. Eating it first (tackling it in the morning) ensures your most productive hours go to your highest-value work."
    },
    {
      q: "What does the ABCDE method help you do?",
      options: ["Categorise emails by sender","Prioritise tasks by their consequences before you begin","Break tasks into alphabetical steps","Rate tasks from easiest to hardest"],
      answer: 1,
      explanation: "A = must do (serious consequences if not done), B = should do, C = nice to do, D = delegate, E = eliminate. Always do A tasks before B, B before C."
    },
    {
      q: "If you must eat two frogs, which should you eat first?",
      options: ["The smaller one, to build momentum","The one due soonest","The ugliest one — the most difficult and impactful","The one you enjoy less"],
      answer: 2,
      explanation: "Tracy's rule: if you have two important tasks, start with the biggest, hardest one. Completing it gives you energy and momentum to tackle everything else."
    }
  ],
  "the-one-thing": [
    {
      q: "What is Gary Keller's Focusing Question?",
      options: ["What should I stop doing?","What's the ONE Thing I can do such that by doing it everything else will be easier or unnecessary?","What matters most to me right now?","How can I achieve more with less?"],
      answer: 1,
      explanation: "The Focusing Question cuts through complexity. It forces you to identify the single domino — the action whose completion makes everything else easier or irrelevant."
    },
    {
      q: "What does the 'domino effect' illustrate in The ONE Thing?",
      options: ["How one bad habit leads to others","How one focused action creates momentum that topples progressively bigger challenges","How decisions cascade through an organisation","How failure in one area affects all others"],
      answer: 1,
      explanation: "A domino can knock over another domino 1.5× its size. Sequential focused actions compound — one small win enables a bigger win, which enables a bigger one still."
    },
    {
      q: "What time-blocking recommendation does Keller make for deep work?",
      options: ["Work in 25-minute Pomodoros","Block 1 hour per day for your ONE Thing","Block at least 4 hours every morning for your most important work","Schedule your ONE Thing for the afternoon"],
      answer: 2,
      explanation: "Keller recommends a minimum 4-hour daily time block for your ONE Thing, in the morning when willpower and focus are highest. Protect this block like a board meeting."
    }
  ],
  "rich-dad-poor-dad": [
    {
      q: "How does Kiyosaki define an 'asset'?",
      options: ["Something you own","Something that puts money in your pocket","Something with a high market value","A property or investment"],
      answer: 1,
      explanation: "Kiyosaki's simple but powerful definition: an asset puts money IN your pocket (generates cash flow). A liability takes money OUT. Most people mistake liabilities for assets."
    },
    {
      q: "Kiyosaki says the middle class primarily buys liabilities they think are assets. Which is his most famous example?",
      options: ["Cars","Jewellery","A primary residence","Education"],
      answer: 2,
      explanation: "Most people think their home is their biggest asset — but Kiyosaki argues it's often a liability: it costs money monthly (mortgage, taxes, maintenance) rather than generating cash flow."
    },
    {
      q: "What does 'minding your own business' mean in Rich Dad Poor Dad?",
      options: ["Don't interfere in others' finances","Keep a journal of your business ideas","Build your own asset column outside of your job","Start a business immediately"],
      answer: 2,
      explanation: "Your 'real business' is your asset column — stocks, real estate, intellectual property. Kiyosaki says keep your day job but start building assets on the side."
    }
  ],
  "psychology-of-money": [
    {
      q: "Morgan Housel says wealth is what you don't see. What does he mean?",
      options: ["Wealthy people hide their assets offshore","True wealth is savings and investments — not visible consumption or status symbols","Rich people shop at discount stores","Wealth is invisible to others unless you display it"],
      answer: 1,
      explanation: "The cars not bought, the holidays not taken — that's where wealth is built. Visible spending is wealth leaving your hands; the Rolex and sports car signal spending, not wealth."
    },
    {
      q: "What does Housel identify as 'the most important financial decision of your life'?",
      options: ["Which stocks to invest in","When to sell your investments","Your savings rate","Whether to own a home"],
      answer: 2,
      explanation: "Not investment returns, not picking the right asset — your savings rate. It's entirely in your control, it compounds, and it's the gap between your income and your ego."
    },
    {
      q: "What is Housel's concept of 'enough'?",
      options: ["Having a specific net worth target","Knowing when to retire","Recognising that the insatiable desire for more leads to regret — defining a sufficient goal and stopping there","Having 12 months of expenses saved"],
      answer: 2,
      explanation: "The hardest financial skill: letting the goalposts stop moving. Enough is the realisation that chasing ever-more eventually pushes you past happiness into risk and regret."
    }
  ],
  "die-with-zero": [
    {
      q: "What is Bill Perkins' core argument in Die With Zero?",
      options: ["Spend all your money before retirement","Die without any savings to leave to family","Optimise for maximum life experiences rather than maximum money accumulated","Invest aggressively to die wealthy"],
      answer: 2,
      explanation: "Perkins argues that unconsumed wealth at death is wasted human potential. The goal is to spend money on peak experiences at the right life stage, not to maximise the number at death."
    },
    {
      q: "What does Perkins call the ongoing joy derived from past experiences?",
      options: ["Happiness dividends","Memory dividends","Experience compound interest","Retrospective joy"],
      answer: 1,
      explanation: "Memory dividends: a great experience at 30 generates joy at 30, plus memories at 40, 50, 60... The experience keeps paying returns long after the money is spent."
    },
    {
      q: "What is Perkins' view on giving inheritance to children?",
      options: ["Give it all to charity instead","Leave it in a will for maximum tax efficiency","Give it when they need it most — not after they're too old to benefit","Set up a trust fund they can't access until 40"],
      answer: 2,
      explanation: "Money given at 70 when children are 45 has less impact than money given at 55 when they're 25 and buying a home or starting a business. Give when the impact is highest."
    }
  ],
  "i-will-teach-you-rich": [
    {
      q: "What is Ramit Sethi's 'conscious spending plan'?",
      options: ["A strict zero-based budget","Tracking every expense in a spreadsheet","Spending extravagantly on things you love while cutting mercilessly on things you don't","Saving 50% of income regardless of lifestyle"],
      answer: 2,
      explanation: "Sethi's approach is guilt-free: automate savings and bills, then spend lavishly on your true priorities and cut everything else without hesitation."
    },
    {
      q: "What investment does Sethi prioritise above all others?",
      options: ["Individual stocks","Cryptocurrency","Maxing out tax-advantaged accounts (401k, Roth IRA) before investing elsewhere","Buying rental property"],
      answer: 2,
      explanation: "The employer match on a 401k is free money. Roth IRA gives tax-free growth. Both compound for decades. Sethi says max these before any other investment."
    },
    {
      q: "What type of investment does Sethi recommend for most people?",
      options: ["Actively managed mutual funds","Individual stock picking","Real estate investment trusts","Low-cost, diversified index funds"],
      answer: 3,
      explanation: "Index funds consistently outperform most actively managed funds over the long term, with much lower fees. Boring but powerful — the cornerstone of Sethi's wealth strategy."
    }
  ],
  "millionaire-next-door": [
    {
      q: "What surprised researchers most about real millionaires in Stanley's study?",
      options: ["They were mostly in finance and law","Most drove luxury cars and lived in expensive homes","Most lived modestly, drove used cars, and didn't flaunt wealth","They typically won their money through inheritance"],
      answer: 2,
      explanation: "The core finding: wealth and high income are not the same. Most wealthy people are quietly frugal, first-generation rich, and save/invest the difference between income and spending."
    },
    {
      q: "Stanley classifies people as either PAW or UAW. What does UAW stand for?",
      options: ["Unique Asset Worker","Under Accumulator of Wealth","Unstable Annual Wage earner","Unrealized Asset Wealth"],
      answer: 1,
      explanation: "UAW = Under Accumulator of Wealth: someone who earns a high income but has little accumulated wealth because they spend too much on visible status symbols."
    },
    {
      q: "According to the book, what is the cornerstone of wealth-building?",
      options: ["Investing in stocks","Entrepreneurship","Starting young","Living well below your means — consistent frugality"],
      answer: 3,
      explanation: "Frugality is the single most consistent trait across millionaires studied. You can't out-invest a lifestyle inflation problem. Spending less than you earn, always, builds wealth."
    }
  ],
  "thinking-fast-slow": [
    {
      q: "What is 'System 1' in Kahneman's framework?",
      options: ["The brain's planning and goal-setting system","Fast, automatic, intuitive thinking that operates below conscious awareness","The prefrontal cortex's rational decision-making","The memory consolidation system"],
      answer: 1,
      explanation: "System 1 is always on: it's fast, effortless, emotional, and automatic. It handles facial recognition, reading tone of voice, and rapid pattern recognition — but it's prone to biases."
    },
    {
      q: "What is the anchoring effect?",
      options: ["The tendency to trust the first piece of information encountered disproportionately","Remembering the beginning and end of a list","Sticking with a decision once made","Preferring familiar options"],
      answer: 0,
      explanation: "The first number you see anchors all subsequent judgements. Whether it's a negotiation price, a salary ask, or a restaurant menu — the anchor shapes the final outcome."
    },
    {
      q: "Kahneman describes 'loss aversion.' What does this mean?",
      options: ["We refuse to take any risks","Losses feel roughly twice as painful as equivalent gains feel pleasurable","We always prefer the safe option in financial decisions","We remember negative events better than positive ones"],
      answer: 1,
      explanation: "Losing £100 feels about twice as bad as gaining £100 feels good. This asymmetry explains why people make irrational decisions to avoid losses, even at the cost of gains."
    }
  ],
  "influence": [
    {
      q: "What is the principle of 'reciprocity' in Cialdini's Influence?",
      options: ["Match every gift with one of equal value","We feel compelled to return favours given to us, often disproportionately","Review products we have received for free","Share information freely with those who share with us"],
      answer: 1,
      explanation: "Reciprocity is deeply wired: receiving something — even something small and unsolicited — creates a powerful psychological obligation to give back. Marketers exploit this constantly."
    },
    {
      q: "How does the principle of 'social proof' influence behaviour?",
      options: ["We buy things endorsed by celebrities","We trust products that have been legally approved","When uncertain, we look at what others are doing to determine the correct course of action","We prefer choices that have been on the market longer"],
      answer: 2,
      explanation: "'Others are doing it' is a powerful shortcut. Bestseller lists, review counts, and 'most popular' labels all leverage social proof — they tell our uncertain minds that something is safe."
    },
    {
      q: "According to Cialdini, why does scarcity increase desirability?",
      options: ["Rare things are always higher quality","Limited availability triggers fear of missing out and we value what we might lose more than what we can easily get","Scarcity creates exclusivity which signals status","Rare items take more effort to produce"],
      answer: 1,
      explanation: "Scarcity activates loss aversion and reactance (we want what we can't have). 'Only 3 left in stock' and 'limited time offer' are engineered scarcity — and they work powerfully."
    }
  ],
  "courage-to-be-disliked": [
    {
      q: "Adler's philosophy (as presented in this book) says that trauma doesn't exist in the way we typically think. What does he argue instead?",
      options: ["Traumatic events have no lasting effect on the brain","We create the meaning of our experiences — the past doesn't determine us","Only childhood trauma is real; adult trauma is not","Trauma resolves itself naturally over time"],
      answer: 1,
      explanation: "Adler's teleological view: we don't move away from past causes, we move toward future goals we set. We choose how to interpret experiences. The past has only the meaning we give it."
    },
    {
      q: "What is the 'separation of tasks' in Adlerian psychology?",
      options: ["Separating work tasks from personal tasks","Identifying which tasks belong to you and which belong to others — and not crossing that boundary","Dividing labour fairly in relationships","Delegating all non-essential work"],
      answer: 1,
      explanation: "What others think of your choices is their task, not yours. Trying to control it is the root of much unhappiness. Focus only on your own tasks — what you choose and how you act."
    },
    {
      q: "What does the book say is the price of genuine freedom?",
      options: ["Wealth and independence","The courage to be disliked — accepting that living authentically will sometimes make others unhappy","Complete solitude","Giving up all social relationships"],
      answer: 1,
      explanation: "To live according to your own values — not performing for others' approval — requires accepting that some people will dislike or disapprove of you. That courage IS freedom."
    }
  ],
  "predictably-irrational": [
    {
      q: "Why is 'FREE' so irrationally powerful according to Dan Ariely?",
      options: ["We always get more value from free things","Free triggers a different emotional circuit — zero cost eliminates all perceived risk, making free things feel disproportionately valuable","We trust things that brands give away","Free items are usually of equal quality to paid ones"],
      answer: 1,
      explanation: "At zero price, the normal cost-benefit calculation shuts off. We take free things we don't need, make irrational switches for free bonuses, and wildly overvalue what's free."
    },
    {
      q: "What is the 'endowment effect'?",
      options: ["We value things given to us by employers more","We overvalue things we own compared to their objective market worth","We value inherited items more than purchased ones","We prefer things we've used for a long time"],
      answer: 1,
      explanation: "Once you own something, it becomes 'yours' and you value it more than its market price. This is why sales return policies work — once people have it home, they keep it."
    },
    {
      q: "Ariely showed that a more expensive placebo pain-reliever is more effective than a cheap one. What does this demonstrate?",
      options: ["Expensive drugs are always better","Price is a signal of quality in the pharmaceutical market","Expectations and price shape actual physical experience — our beliefs literally change what we feel","Patients should always buy premium medication"],
      answer: 2,
      explanation: "The price of a placebo determines its effectiveness. Our expectations — shaped by price, brand, and context — cause real neurological changes that alter the actual experience."
    }
  ],
  "mans-search-for-meaning": [
    {
      q: "What is logotherapy, as developed by Viktor Frankl?",
      options: ["A form of cognitive behavioural therapy developed in the 1970s","Therapy through talking about one's early childhood","A therapeutic approach based on the will to find meaning as the primary human drive","A treatment for post-traumatic stress using writing"],
      answer: 2,
      explanation: "Logotherapy (logos = meaning): Frankl's school of psychotherapy holds that humans are primarily driven by the search for meaning. Finding meaning in any circumstance enables survival and flourishing."
    },
    {
      q: "Frankl observed that prisoners who survived concentration camps shared what quality?",
      options: ["Physical fitness and youth","Connections with guards","A meaningful reason to live — a 'why'","Political connections and useful skills"],
      answer: 2,
      explanation: "Those who survived had a purpose — a person to return to, mission to complete, or suffering to make meaningful. Nietzsche's words proved true: 'He who has a why can bear almost any how.'"
    },
    {
      q: "According to Frankl, in how many ways can a person find meaning in life?",
      options: ["One — through love only","Two — through achievement and love","Three — through work, love, and suffering","Four — through achievement, love, beauty, and service"],
      answer: 2,
      explanation: "Frankl said meaning can be found through: (1) what we give to the world (work/creativity), (2) what we receive from the world (love/beauty), and (3) how we face unavoidable suffering."
    }
  ],
  "elon-musk": [
    {
      q: "What does Musk call his 'algorithm' for making products more efficient?",
      options: ["Lean Manufacturing+","Five Steps: Question → Delete → Simplify → Accelerate → Automate","The Musk Method","Zero-based production thinking"],
      answer: 1,
      explanation: "Musk's 5-step process: (1) Question every requirement, (2) Delete any part or process you can, (3) Simplify and optimise what remains, (4) Accelerate cycle time, (5) Automate — in that exact order."
    },
    {
      q: "What does Musk mean by the 'idiot index'?",
      options: ["A measure of team productivity","The ratio of a finished part's cost to the cost of its raw materials — high ratio means unnecessary complexity","A ranking of employees by critical thinking skills","A metric for testing autonomous driving safety"],
      answer: 1,
      explanation: "If a part costs 10× its raw material cost to produce, the idiot index is 10. A high index signals stupid design, over-engineering, or wasteful process. Musk uses it to challenge every component."
    },
    {
      q: "What fundamental fear drives Elon Musk's work according to Isaacson?",
      options: ["Fear of poverty from his difficult childhood","Fear of being surpassed by competitors","A genuine belief that humanity faces extinction risk and that making it multi-planetary is necessary","Fear of irrelevance and losing public status"],
      answer: 2,
      explanation: "Isaacson concludes that Musk's demon — and his drive — is a sincere existential fear: that humanity will go extinct unless it becomes a multi-planetary species."
    }
  ],
  "steve-jobs": [
    {
      q: "What did Steve Jobs call his ability to convince people that things impossible for others were possible for him?",
      options: ["The Jobs Effect","Reality Distortion Field","Possibility Thinking","Belief Engineering"],
      answer: 1,
      explanation: "The 'Reality Distortion Field' — coined by Jobs' engineers — was his ability to bend reality in conversations. He made people believe the impossible was achievable, often causing them to do it."
    },
    {
      q: "Jobs believed great products result from what intersection?",
      options: ["Science and commerce","Art and engineering — the humanities and technology together","Speed and simplicity","Vision and market research"],
      answer: 1,
      explanation: "Jobs stood at the intersection of technology and liberal arts. He believed deep understanding of humanity — its aesthetics, feelings, and stories — was what made technology truly great."
    },
    {
      q: "What was Jobs' philosophy on design?",
      options: ["Design is about making things look beautiful","Design is not just how something looks and feels — it's how it works","Design should prioritise function over form","Good design always costs more"],
      answer: 1,
      explanation: "Jobs equated design with function: a beautifully designed object that is confusing to use has failed. True design elegance means the experience — not just the appearance — is perfect."
    }
  ],
  "shoe-dog": [
    {
      q: "What was Nike originally called when Phil Knight started it?",
      options: ["Knight Sports","Pacific Running","Blue Ribbon Sports","Tiger USA"],
      answer: 2,
      explanation: "Knight started Blue Ribbon Sports in 1964 as a distributor for Onitsuka Tiger Japanese running shoes. Nike — named after the Greek goddess of victory — came later in 1971."
    },
    {
      q: "What was the almost-fatal problem that nearly killed Nike multiple times?",
      options: ["Product quality failures","Patent disputes with Adidas","Cash flow — growing too fast with too little working capital","A failed public offering"],
      answer: 2,
      explanation: "Nike kept selling out of shoes (a great problem!) — but had to pay manufacturers before receiving payment from retailers. Growing too fast nearly caused bankruptcy multiple times."
    },
    {
      q: "What did Knight mean when he said 'The cowards never started and the weak died along the way'?",
      options: ["Only the most athletic people should run","Business success requires physical fitness","Building something meaningful requires the courage to start despite risk, and the stubbornness to survive its many near-deaths","Competition eliminates inferior companies"],
      answer: 2,
      explanation: "The path to building Nike was obstacle after obstacle — banks pulling credit, legal battles, supply chain failures. The book is a testament to how survival, not genius, builds great companies."
    }
  ],
  "leonardo-da-vinci": [
    {
      q: "What does Isaacson identify as Leonardo's single most important quality — more than his intelligence?",
      options: ["His artistic technique","His scientific rigour","His relentless, joyful curiosity about everything","His ability to work across disciplines"],
      answer: 2,
      explanation: "Isaacson argues that Leonardo's genius was his curiosity — not superhuman intelligence. He obsessively studied things with no clear purpose, and found connections others missed."
    },
    {
      q: "What do Leonardo's famous notebooks reveal about his working method?",
      options: ["He worked in complete secrecy","Science and art were one unified inquiry — he treated painting as a science and science as art","He copied extensively from other Renaissance masters","He had many assistants doing his preliminary work"],
      answer: 1,
      explanation: "The notebooks blur the line between art and science. Anatomy drawings ARE art. Engineering sketches ARE art. Leonardo saw no distinction — understanding and beauty were the same quest."
    },
    {
      q: "What recurring flaw did Leonardo share despite his genius?",
      options: ["Terrible social skills","Poor financial management","He frequently left projects unfinished, driven by curiosity to the next question","He refused to share knowledge with others"],
      answer: 2,
      explanation: "Leonardo left countless masterworks unfinished — including The Adoration of the Magi and Saint Jerome. He was always more interested in the inquiry than the completion."
    }
  ],
  "wright-brothers": [
    {
      q: "What formal educational credentials did Wilbur and Orville Wright have?",
      options: ["Engineering degrees from Ohio State","Self-taught — neither had a high school diploma or college degree","Wilbur had an engineering degree; Orville didn't","Military aviation training"],
      answer: 1,
      explanation: "Neither Wright brother graduated from high school. They were self-educated bicycle mechanics who read everything they could about birds, gliders, and aerodynamics on their own."
    },
    {
      q: "How did the Wright brothers fund their experiments?",
      options: ["A government grant from the US Army","Investment from wealthy patrons","Profits from their bicycle shop — no investors, no government money","A Smithsonian Institution research grant"],
      answer: 2,
      explanation: "Every dollar came from their bicycle business. No government, no university, no investors. Meanwhile, Samuel Langley had $70,000 of government funding and failed — they spent under $1,000 total."
    },
    {
      q: "How long was the first powered flight by the Wright Brothers on December 17, 1903?",
      options: ["12 seconds","3 minutes","37 seconds","59 seconds"],
      answer: 0,
      explanation: "Orville's first flight lasted 12 seconds and covered 120 feet. By the fourth flight that day, Wilbur flew for 59 seconds covering 852 feet. In 12 seconds, human history changed forever."
    }
  ]
};
