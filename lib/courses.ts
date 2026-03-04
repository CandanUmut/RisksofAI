export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface LessonSection {
  title: string;
  content: string;
  highlight?: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  description: string;
  icon: string;
  sections: LessonSection[];
  keyTakeaways: string[];
  quiz: QuizQuestion[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  color: string;
  gradient: string;
  icon: string;
  lessons: Lesson[];
  badgeId: string;
}

export const modules: Module[] = [
  {
    id: "foundations",
    title: "AI Foundations",
    description: "Understand what AI really is, how it works, and why it matters for your daily life.",
    color: "blue",
    gradient: "from-blue-600 to-cyan-500",
    icon: "🧠",
    badgeId: "foundations-badge",
    lessons: [
      {
        id: "what-is-ai",
        title: "What Is AI? Separating Fact from Fiction",
        duration: "8 min",
        description: "Cut through the hype and understand what artificial intelligence actually is and isn't.",
        icon: "🤖",
        sections: [
          {
            title: "The Reality Behind the Buzzword",
            content: "Artificial Intelligence is software that learns patterns from vast amounts of data to make predictions or decisions. It is not magic, not conscious, and not infallible. When you ask ChatGPT a question, it is predicting which words are most likely to follow each other based on patterns learned from billions of text samples — not reasoning or 'thinking' like a human.",
            highlight: "AI systems are sophisticated pattern matchers, not thinking beings."
          },
          {
            title: "Three Types You'll Encounter",
            content: "Narrow AI (what exists today) excels at specific tasks — image recognition, language generation, game playing. It fails dramatically outside its training domain. General AI (hypothetical) would match human versatility across domains. Super AI (science fiction territory) would surpass human intelligence in all areas. You are living through the era of narrow AI, which despite being 'narrow' is already profoundly reshaping society."
          },
          {
            title: "How Machine Learning Actually Works",
            content: "Modern AI learns through exposure to labeled examples. A spam filter sees millions of emails labeled 'spam' or 'not spam' and learns distinguishing patterns. An image classifier sees millions of photos with labels. The system adjusts billions of internal parameters until it can reliably reproduce the labels. This is powerful but means AI inherits every bias present in its training data.",
            highlight: "AI learns from human-generated data — including all our biases and mistakes."
          },
          {
            title: "Large Language Models Explained",
            content: "The AI systems you most likely interact with today — ChatGPT, Claude, Gemini — are Large Language Models (LLMs). They're trained on vast portions of the internet and books to predict text. They can write code, explain concepts, draft emails, and more. But they can also confidently state false information ('hallucinate'), reflect biases from training data, and be manipulated through clever prompting."
          }
        ],
        keyTakeaways: [
          "AI is pattern recognition at massive scale, not genuine understanding",
          "Today's AI is 'narrow' — powerful in its domain, fragile outside it",
          "AI learns from human data and inherits human biases",
          "LLMs generate plausible text, they don't 'know' facts the way you do"
        ],
        quiz: [
          {
            id: "q1",
            question: "When a large language model like ChatGPT gives you an answer, what is it primarily doing?",
            options: [
              "Searching the internet in real-time for facts",
              "Predicting likely word sequences based on training patterns",
              "Reasoning through the problem like a human expert",
              "Accessing a verified database of correct answers"
            ],
            correctIndex: 1,
            explanation: "LLMs generate responses by predicting statistically likely text based on patterns in their training data. They do not search the internet (unless given a specific tool), reason like humans, or access verified fact databases — which is why they can confidently produce false information."
          },
          {
            id: "q2",
            question: "What does it mean for AI to 'hallucinate'?",
            options: [
              "The AI system crashes and shows visual glitches",
              "The AI generates false information presented confidently as fact",
              "The AI refuses to answer certain questions",
              "The AI becomes confused by too many inputs"
            ],
            correctIndex: 1,
            explanation: "AI hallucination refers to when a model generates information that sounds plausible but is factually incorrect — citing fake research papers, inventing statistics, or describing events that never happened. This is a fundamental limitation of pattern-based generation."
          },
          {
            id: "q3",
            question: "Which type of AI currently exists and is in widespread use?",
            options: [
              "Super AI that surpasses human intelligence",
              "General AI that matches human versatility",
              "Narrow AI designed for specific tasks",
              "Conscious AI with self-awareness"
            ],
            correctIndex: 2,
            explanation: "Narrow AI is what exists today. These systems can be superhuman at specific tasks (chess, image recognition, text generation) but cannot generalize across domains the way humans can. General and Super AI remain theoretical."
          }
        ]
      },
      {
        id: "ai-in-your-life",
        title: "AI Is Already Shaping Your World",
        duration: "10 min",
        description: "Discover how AI systems are quietly influencing decisions that affect your life every day.",
        icon: "🌐",
        sections: [
          {
            title: "The Invisible Architecture",
            content: "AI systems are making or influencing consequential decisions about you constantly. Your social media feed is curated by algorithms designed to maximize engagement (not your wellbeing). Your credit score may be partially determined by AI models. Job application screening software filters resumes before human eyes see them. Insurance pricing, loan approval, bail decisions in some jurisdictions — AI is embedded in all of it.",
            highlight: "You interact with AI decision-making dozens of times per day, usually without knowing it."
          },
          {
            title: "The Recommendation Engine Reality",
            content: "Every time YouTube, Netflix, Spotify, or TikTok suggests content, an AI is learning from your behavior. These systems optimize for the metric they're given — usually engagement time. Research has documented how recommendation algorithms can pull users toward increasingly extreme content, not because the AI is malicious, but because extreme content keeps people watching. Understanding this lets you take back control."
          },
          {
            title: "AI in Healthcare and Finance",
            content: "AI systems assist in reading medical scans, predicting patient deterioration, and suggesting diagnoses. In finance, algorithmic trading executes billions of transactions per second. AI underwrites loans and flags fraud. These applications save lives and improve efficiency — but errors in medical AI can harm patients, and biased financial AI has demonstrably discriminated against minority applicants.",
            highlight: "AI in high-stakes domains requires extra scrutiny and human oversight."
          },
          {
            title: "The Employment Transformation",
            content: "Studies estimate that 40-60% of current jobs will be significantly transformed by AI in the coming decade. This does not mean mass unemployment — historically, technology creates new roles even as it eliminates others. But the transition will be uneven. Routine cognitive tasks (data entry, basic legal research, simple customer service) are already being automated. Creative, emotional, and complex physical tasks are harder to automate."
          }
        ],
        keyTakeaways: [
          "AI influences decisions about your credit, employment, healthcare, and content consumption",
          "Recommendation algorithms optimize for engagement, not your best interests",
          "AI in high-stakes domains carries real risks when it fails or contains biases",
          "Job transformation is coming — preparation now reduces future disruption"
        ],
        quiz: [
          {
            id: "q1",
            question: "Social media recommendation algorithms are primarily designed to:",
            options: [
              "Show you the most accurate and reliable information",
              "Maximize your learning and personal growth",
              "Maximize engagement and time spent on the platform",
              "Connect you with the most relevant people in your network"
            ],
            correctIndex: 2,
            explanation: "Recommendation algorithms are optimized for the business metric of engagement — keeping you on the platform longer. This can lead to filter bubbles, radicalization pathways, and mental health impacts, since 'engaging' content is not necessarily accurate, healthy, or in your best interest."
          },
          {
            id: "q2",
            question: "Which of the following is a documented risk of AI in financial services?",
            options: [
              "AI makes decisions too slowly for modern markets",
              "AI loan underwriting has shown discriminatory bias against minority applicants",
              "AI cannot process enough financial data to be useful",
              "AI financial systems are immune to hacking"
            ],
            correctIndex: 1,
            explanation: "Research has documented cases where AI loan and insurance underwriting systems discriminated against minority applicants — not through intentional programming, but because they learned patterns from historical data that reflected past discrimination. This is a core AI fairness challenge."
          }
        ]
      }
    ]
  },
  {
    id: "risks",
    title: "AI Risks & Harms",
    description: "Understand the real, documented risks of AI systems and how they manifest in the world.",
    color: "red",
    gradient: "from-red-600 to-orange-500",
    icon: "⚠️",
    badgeId: "risks-badge",
    lessons: [
      {
        id: "misinformation",
        title: "Misinformation, Deepfakes & Synthetic Media",
        duration: "12 min",
        description: "How AI-generated content is reshaping truth — and what you can do about it.",
        icon: "🎭",
        sections: [
          {
            title: "The Synthetic Media Revolution",
            content: "AI can now generate photorealistic images, convincing video of real people saying things they never said, and audio that perfectly mimics someone's voice. This technology — once requiring Hollywood-level resources — is accessible to anyone with a smartphone. The barriers to creating compelling disinformation have collapsed.",
            highlight: "Seeing is no longer believing. Verification skills are now essential literacy."
          },
          {
            title: "Deepfakes: What They Are and How They Spread",
            content: "Deepfakes use AI (specifically generative adversarial networks and diffusion models) to swap faces, clone voices, or generate entirely synthetic video. They've been used to create non-consensual intimate imagery of women, spread political disinformation, commit fraud (a finance worker was tricked into transferring $25 million by a deepfake video call), and harass individuals. Detection tools exist but lag behind generation capabilities."
          },
          {
            title: "AI Text and the Credibility Collapse",
            content: "LLMs can generate thousands of convincing news articles, social media posts, reviews, or academic papers in minutes. This is already being used to flood the information ecosystem with coordinated inauthentic content. AI-generated misinformation can be personalized, A/B tested for maximum persuasiveness, and scaled in ways human propagandists never could.",
            highlight: "The volume and personalization of AI-generated misinformation is unprecedented."
          },
          {
            title: "Protecting Yourself",
            content: "Slow down before sharing: emotional content designed to provoke outrage is more likely to be manipulative. Use reverse image search and metadata analysis tools. Check whether multiple reputable sources confirm a story. Look for inconsistencies in video (unnatural blinking, hair, lighting, lip-sync issues). For audio, consider whether the request (usually for money or secrecy) makes sense. Establish verification codes with family members for emergencies."
          }
        ],
        keyTakeaways: [
          "AI-generated images, video, and audio are indistinguishable from real to the untrained eye",
          "Deepfakes have caused real financial fraud, political manipulation, and personal harm",
          "The volume of AI-generated disinformation is unprecedented and growing",
          "Verification skills, skepticism, and slow thinking are your best defenses"
        ],
        quiz: [
          {
            id: "q1",
            question: "A coworker calls you claiming to be your CEO, urgently requesting a wire transfer. The voice sounds exactly right. What should you do?",
            options: [
              "Complete the transfer immediately since it's urgent",
              "Email the CEO to confirm before acting",
              "Hang up and call the CEO back on a verified number you already have",
              "Ask the caller for their employee ID number to verify"
            ],
            correctIndex: 2,
            explanation: "Voice cloning AI can perfectly replicate someone's voice. Always verify unusual requests through an independent channel — call back on a known number, use a company directory, or use a pre-established verification phrase. An employee ID provided by the caller proves nothing about their true identity."
          },
          {
            id: "q2",
            question: "Which combination of features makes AI-generated disinformation especially dangerous?",
            options: [
              "It requires expensive technology to create",
              "It can be scaled, personalized, and A/B tested for persuasiveness",
              "It is easy for fact-checkers to identify automatically",
              "It only works on people with low media literacy"
            ],
            correctIndex: 1,
            explanation: "AI-generated disinformation is dangerous specifically because it can be produced at massive scale, personalized to target individual vulnerabilities, and iteratively optimized for persuasiveness — capabilities that far exceed traditional propaganda methods."
          },
          {
            id: "q3",
            question: "What is the most reliable first step when you encounter a viral story or image that provokes strong emotion?",
            options: [
              "Share it immediately so others can see it",
              "Trust it if it aligns with your existing beliefs",
              "Pause and verify through independent reputable sources before sharing",
              "Check how many people have already liked or shared it"
            ],
            correctIndex: 2,
            explanation: "Strong emotional reactions (outrage, fear, excitement) are often deliberately engineered in disinformation to bypass critical thinking. Pausing to verify through independent sources before sharing is the most effective individual defense against spreading false information."
          }
        ]
      },
      {
        id: "privacy-surveillance",
        title: "Privacy, Surveillance & Data Exploitation",
        duration: "11 min",
        description: "How AI amplifies surveillance capabilities and what this means for your privacy and freedom.",
        icon: "👁️",
        sections: [
          {
            title: "The Data Economy You Didn't Consent To",
            content: "Every digital action generates data that is harvested, sold, and fed into AI models. Your location, browsing history, purchase patterns, social graph, and even emotional state (inferred from typing patterns and content consumption) are valuable commodities. AI has made it possible to build astonishingly detailed profiles from data that seems innocuous in isolation.",
            highlight: "Your data is the raw material for AI systems you've never agreed to use."
          },
          {
            title: "Facial Recognition and Mass Surveillance",
            content: "AI-powered facial recognition can identify individuals from CCTV footage at city scale. China operates the world's most extensive AI surveillance system. Law enforcement agencies in democratic countries are expanding use of facial recognition, raising civil liberties concerns. The technology has documented higher error rates for darker-skinned faces, leading to wrongful arrests. Several US cities have banned government use of the technology."
          },
          {
            title: "Behavioral Manipulation at Scale",
            content: "AI systems analyzing your data don't just observe — they predict and influence. Advertisers use AI to identify when you're most emotionally vulnerable to purchasing. Political campaigns use AI-driven micro-targeting to deliver personalized messaging. Employers increasingly use AI to predict which employees might quit or unionize. The line between prediction and manipulation is thin when you're the subject.",
            highlight: "AI can predict your behavior better than you predict it yourself — and exploit that."
          },
          {
            title: "Protecting Your Privacy",
            content: "Use a VPN and privacy-focused browsers (Firefox with uBlock Origin). Minimize app permissions — deny location access unless essential. Use Signal for sensitive communications. Review and minimize what you share on social platforms. Enable two-factor authentication. Understand that 'free' services are paid for by your data. Read privacy policies (or use AI tools to summarize them). Advocate for strong data protection legislation in your jurisdiction."
          }
        ],
        keyTakeaways: [
          "Your digital footprint enables AI systems to build detailed profiles without your awareness",
          "Facial recognition AI has higher error rates for darker-skinned individuals and has caused wrongful arrests",
          "AI-powered behavioral prediction enables manipulation at previously impossible scale",
          "Practical privacy tools and habits can significantly reduce your exposure"
        ],
        quiz: [
          {
            id: "q1",
            question: "Facial recognition AI has been documented to have higher error rates for which group?",
            options: [
              "Elderly individuals",
              "Younger individuals",
              "Darker-skinned individuals",
              "People wearing glasses"
            ],
            correctIndex: 2,
            explanation: "Multiple independent studies (including MIT research) have documented that facial recognition AI has significantly higher error rates — particularly for identifying Black women — compared to lighter-skinned subjects. This is due to underrepresentation in training data and has led to documented wrongful arrests."
          },
          {
            id: "q2",
            question: "When a service is offered 'for free,' what is typically the economic model?",
            options: [
              "The company is a nonprofit funded by donations",
              "Your data and attention are the product being sold",
              "Revenue comes entirely from premium subscriptions",
              "Government subsidies fund the service"
            ],
            correctIndex: 1,
            explanation: "The dominant business model for 'free' digital services is the collection and monetization of user data. This data is sold to advertisers and data brokers, used to train AI models, and used to build detailed user profiles for targeting purposes."
          }
        ]
      },
      {
        id: "bias-discrimination",
        title: "AI Bias & Algorithmic Discrimination",
        duration: "10 min",
        description: "Why AI systems can discriminate systematically and what's being done about it.",
        icon: "⚖️",
        sections: [
          {
            title: "How Bias Enters AI Systems",
            content: "AI learns from historical data. If historical data reflects discrimination — and most does, because human history is full of discrimination — AI systems will learn and perpetuate those patterns. A hiring algorithm trained on resumes of successful employees at a historically male-dominated company will learn to prefer male-coded features. A criminal risk assessment tool trained on arrest data will reflect racially biased policing patterns.",
            highlight: "Biased input data produces biased AI output — garbage in, garbage out, at scale."
          },
          {
            title: "Real Cases of Algorithmic Harm",
            content: "COMPAS, a risk assessment AI used in US criminal sentencing, was found to incorrectly flag Black defendants as high-risk at twice the rate of white defendants. Amazon's experimental hiring AI, trained on the company's own hiring history, learned to penalize resumes containing the word 'women's' (as in 'women's chess club'). Pulse oximeters (using AI to measure blood oxygen) have documented accuracy failures on darker skin tones. These are not edge cases."
          },
          {
            title: "The Explainability Problem",
            content: "Many modern AI systems are 'black boxes' — even their designers cannot fully explain why they make specific decisions. A loan denial powered by a neural network may give no actionable reason. A resume filtered out by AI leaves the applicant with no explanation. This opacity is a serious problem when AI is used in consequential decisions. Regulators in the EU (GDPR) have begun requiring 'right to explanation' for automated decisions.",
            highlight: "You have a right to understand why AI systems make decisions about you."
          },
          {
            title: "Demanding Accountability",
            content: "When an AI system affects you, ask for a human review. Support legislation requiring algorithmic transparency and impact assessments. Many jurisdictions are developing AI accountability frameworks — your advocacy matters. Support organizations documenting algorithmic harms. Understand that 'objective' and 'automated' do not mean 'unbiased' or 'fair.'"
          }
        ],
        keyTakeaways: [
          "AI systems learn and amplify the biases present in their training data",
          "Algorithmic discrimination has caused documented harm in criminal justice, hiring, and healthcare",
          "Black-box AI in consequential decisions violates principles of fairness and accountability",
          "Regulation and advocacy are essential complements to technical solutions"
        ],
        quiz: [
          {
            id: "q1",
            question: "Why does an AI hiring tool trained on historical hiring data often reproduce discrimination?",
            options: [
              "AI systems are intentionally programmed to discriminate",
              "Historical hiring data reflects past human discrimination, which AI learns as patterns to follow",
              "AI cannot process diversity-related data accurately",
              "Companies intentionally feed biased data to avoid hiring minority candidates"
            ],
            correctIndex: 1,
            explanation: "AI learns patterns from training data. Historical hiring data often reflects decades of discrimination (e.g., preferring male candidates in male-dominated fields). An AI trained on this data learns that the underrepresented group is a predictor of non-hire, and reproduces the discrimination without any intentional programming to do so."
          },
          {
            id: "q2",
            question: "The COMPAS criminal risk assessment tool was found to:",
            options: [
              "Be perfectly accurate for all demographic groups",
              "Incorrectly flag Black defendants as high-risk at twice the rate of white defendants",
              "Only work accurately for violent crime prediction",
              "Consistently underestimate risk for all defendants"
            ],
            correctIndex: 1,
            explanation: "ProPublica's analysis of COMPAS found it flagged Black defendants who did not re-offend as high-risk at nearly twice the rate of white defendants — a serious bias with real consequences for sentencing and parole decisions."
          }
        ]
      }
    ]
  },
  {
    id: "interaction",
    title: "Interacting with AI",
    description: "Master the skills to use AI systems effectively, critically, and safely.",
    color: "purple",
    gradient: "from-purple-600 to-pink-500",
    icon: "💬",
    badgeId: "interaction-badge",
    lessons: [
      {
        id: "prompting-skills",
        title: "The Art and Science of Prompting",
        duration: "9 min",
        description: "Learn how to communicate with AI systems to get better, more accurate results.",
        icon: "✍️",
        sections: [
          {
            title: "Why Prompting Matters",
            content: "The same AI model can give you brilliant or useless results depending on how you phrase your request. This is because LLMs are extremely sensitive to input framing. A vague prompt gets a generic response. A well-structured prompt with context, constraints, and desired format dramatically improves output quality. This skill is rapidly becoming as important as search engine literacy was in the 2000s.",
            highlight: "The quality of your prompt determines the quality of AI output."
          },
          {
            title: "Core Prompting Techniques",
            content: "Provide context: tell the AI who you are, what you're trying to accomplish, and relevant background. Be specific: vague questions get vague answers. Specify format: ask for bullet points, a numbered list, a table, or a specific length. Give examples: show the AI the style or format you want. Break down complex tasks: ask for one thing at a time rather than everything at once. Assign a role: 'Act as an experienced financial advisor...' can improve relevance."
          },
          {
            title: "Critical Evaluation of AI Output",
            content: "Never accept AI output uncritically, especially for important matters. AI systems can state false facts confidently. Always ask: Is this verifiable? What are the sources? Could there be a perspective this is missing? For anything consequential (medical, legal, financial), AI output should be a starting point for research, not a final answer. Treat AI like a knowledgeable but fallible first draft.",
            highlight: "Verify AI output against reliable sources, especially for high-stakes decisions."
          },
          {
            title: "Recognizing AI Limitations",
            content: "AI has no real-time information (unless given specific tools). It may be confidently wrong. It reflects biases from training data. It cannot exercise true judgment or ethics. It can be manipulated through adversarial prompts. It has no memory between conversations (typically). Understanding these limits helps you use AI as a powerful tool rather than an oracle."
          }
        ],
        keyTakeaways: [
          "Specific, contextual prompts produce dramatically better AI output than vague ones",
          "Always critically evaluate AI output — never accept it uncritically",
          "AI limitations (hallucination, bias, no real-time data) are predictable and manageable",
          "Treat AI as a powerful first-draft tool, not an infallible oracle"
        ],
        quiz: [
          {
            id: "q1",
            question: "Which prompt is most likely to get you a useful, specific response from an AI?",
            options: [
              "'Tell me about climate change'",
              "'Write something about climate policy'",
              "'As a policy analyst advising a local government, give me 5 specific, evidence-based actions a mid-sized city can take to reduce carbon emissions by 30% within 10 years, with approximate cost ranges'",
              "'Climate solutions please'"
            ],
            correctIndex: 2,
            explanation: "The third option provides role context (policy analyst), specific constraints (local government, mid-sized city, 30% reduction, 10 years), desired output format (5 specific actions), and additional useful criteria (cost ranges). This specificity guides the AI toward a much more relevant and actionable response."
          },
          {
            id: "q2",
            question: "An AI confidently tells you a specific medical dosage. What should you do?",
            options: [
              "Follow it immediately since AI has access to all medical knowledge",
              "Verify it with a licensed medical professional or authoritative medical source before acting",
              "Trust it only if it agrees with what you already believed",
              "Share it with others to help them too"
            ],
            correctIndex: 1,
            explanation: "AI systems can hallucinate medical information with high confidence. Medical dosages require verification through licensed professionals or authoritative medical databases (not AI). Using unverified AI medical advice can cause serious harm."
          }
        ]
      },
      {
        id: "ai-manipulation",
        title: "Recognizing AI Manipulation Tactics",
        duration: "11 min",
        description: "Learn how AI systems can be designed to influence and manipulate — and how to recognize it.",
        icon: "🎯",
        sections: [
          {
            title: "Dark Patterns Powered by AI",
            content: "Digital dark patterns are interface designs that trick you into doing things you didn't intend — signing up for subscriptions, sharing more data, spending more money. AI makes dark patterns more powerful by personalizing them to your specific psychological profile. If AI knows you respond to scarcity, you see 'Only 2 left!' If you respond to social proof, you see fake review counts. This is targeting at the individual level.",
            highlight: "AI enables manipulation to be personalized to your specific psychological vulnerabilities."
          },
          {
            title: "Chatbots Designed to Build False Relationships",
            content: "AI companions and customer service bots are increasingly designed to simulate emotional connection. They remember your name, reference past conversations, and express 'concern' for your wellbeing. This is not genuine empathy — it is a designed experience aimed at increasing engagement or sales. Particularly vulnerable are lonely individuals, the elderly, and children. Being aware of this dynamic is the first step to navigating it consciously."
          },
          {
            title: "Algorithmic Persuasion in Advertising and Politics",
            content: "Political campaigns and advertisers use AI to identify which message variant, delivered at which moment, will most persuade you specifically. Cambridge Analytica (now defunct) demonstrated — controversially — that Facebook data could be used to target voters with precision-crafted political messages. AI-driven A/B testing means millions of message variants can be tested to find the most persuasive version for each demographic.",
            highlight: "Political and commercial messaging is increasingly targeted to your individual psychological profile."
          },
          {
            title: "Building Resilience",
            content: "Awareness is your primary defense. When you feel urgency, notice it — urgency is a manipulation signal. When you feel emotionally connected to a chatbot, remember what it is. Understand that personalized content is not neutral curation — it's designed influence. Take breaks from algorithmically curated feeds. Diversify your information sources deliberately. Discuss media literacy with children and older family members."
          }
        ],
        keyTakeaways: [
          "AI personalizes dark patterns and manipulation to your specific psychological profile",
          "AI companions simulate emotional connection to increase engagement — they are not genuinely caring",
          "Political and commercial AI targeting exploits your personal data for persuasion",
          "Awareness, intentional media consumption, and skepticism of urgency are key defenses"
        ],
        quiz: [
          {
            id: "q1",
            question: "You're chatting with a customer service AI that remembers your name, references previous conversations, and expresses concern for your wellbeing. This is best understood as:",
            options: [
              "Evidence that the AI is genuinely sentient and cares about you",
              "A rare and unusually empathetic AI system",
              "A designed user experience intended to increase your engagement and satisfaction",
              "The AI accessing private data about you illegally"
            ],
            correctIndex: 2,
            explanation: "AI systems that simulate personal relationships are designed experiences — not genuine emotion or consciousness. The appearance of caring, memory, and concern is engineered to increase user engagement, reduce churn, and build brand loyalty. Recognizing this helps you interact with AI appropriately."
          },
          {
            id: "q2",
            question: "You see a limited-time offer online: 'Only 3 items left — offer expires in 10 minutes!' You feel anxious about missing out. The most resilient response is:",
            options: [
              "Buy immediately before it's too late",
              "Recognize this as a classic urgency manipulation tactic and take time to evaluate the decision rationally",
              "Check social media to see what others think of the product",
              "Contact customer service to get an extension on the offer"
            ],
            correctIndex: 1,
            explanation: "Artificial urgency (countdown timers, 'limited stock' warnings) is a classic dark pattern. AI has made it more sophisticated by personalizing when and how you see urgency signals based on your behavioral profile. Recognizing the feeling of urgency as a manipulation signal is the first step to rational decision-making."
          }
        ]
      }
    ]
  },
  {
    id: "future",
    title: "The AI Future",
    description: "Prepare for the transformations ahead and learn how to shape AI development for humanity's benefit.",
    color: "green",
    gradient: "from-green-600 to-emerald-500",
    icon: "🚀",
    badgeId: "future-badge",
    lessons: [
      {
        id: "ai-safety",
        title: "AI Safety: Why It Matters Now",
        duration: "13 min",
        description: "Understanding the technical and societal challenges of ensuring AI systems benefit humanity.",
        icon: "🛡️",
        sections: [
          {
            title: "The Alignment Problem",
            content: "The central challenge in AI safety is alignment: ensuring AI systems pursue goals that are actually beneficial to humans, even as they become more capable. This sounds simple but is surprisingly hard. An AI optimizing for a proxy goal (clicks, engagement, profit) can achieve that goal in ways that are catastrophically harmful in other dimensions. This 'specification problem' becomes more dangerous as AI systems become more capable.",
            highlight: "Powerful AI optimizing for the wrong goal — even a seemingly reasonable one — can cause catastrophic harm."
          },
          {
            title: "Current AI Safety Concerns",
            content: "Today's AI safety concerns are less science fiction and more engineering and social science. Bias and unfairness in consequential AI decisions. AI-enabled mass surveillance undermining democratic accountability. AI accelerating weapons development. Disinformation at unprecedented scale. Economic displacement outpacing social adaptation. Concentration of AI power in few hands. These are not hypothetical — they are happening."
          },
          {
            title: "What Researchers Are Working On",
            content: "AI safety researchers work on: interpretability (understanding what's happening inside AI models), robustness (making AI fail gracefully rather than catastrophically), alignment (ensuring AI goals match human values), red-teaming (proactively finding ways AI can be misused or fail), governance (policy frameworks to ensure safe development). This field is growing rapidly but remains undersourced relative to AI capability research.",
            highlight: "AI safety research is critical infrastructure for the future — and it needs support."
          },
          {
            title: "What You Can Do",
            content: "Stay informed about AI developments — you don't need to be a technical expert. Support policy advocacy for AI safety regulation and oversight. Choose companies with transparent AI practices when you have the choice. If you work in or near AI development, raise safety concerns vocally. Vote for representatives who take AI governance seriously. Join or support organizations working on beneficial AI."
          }
        ],
        keyTakeaways: [
          "The alignment problem — ensuring AI pursues genuinely beneficial goals — is a core safety challenge",
          "Current AI safety concerns are real and present, not distant science fiction",
          "AI safety research works on interpretability, robustness, alignment, and governance",
          "Civic engagement and informed advocacy are essential complements to technical safety work"
        ],
        quiz: [
          {
            id: "q1",
            question: "The 'alignment problem' in AI safety refers to:",
            options: [
              "Difficulty aligning AI training data from different countries",
              "The challenge of ensuring AI systems pursue goals that are genuinely beneficial to humans",
              "Technical issues with how AI hardware is aligned in data centers",
              "Getting different AI companies to agree on shared standards"
            ],
            correctIndex: 1,
            explanation: "The alignment problem is the challenge of specifying AI goals precisely enough that a capable AI system pursues them in ways humans actually want, not in ways that technically satisfy the goal specification while causing unintended harm (the 'paperclip maximizer' thought experiment illustrates this at its extreme)."
          },
          {
            id: "q2",
            question: "Which of the following is a present-day AI safety concern (not a distant hypothetical)?",
            options: [
              "Terminator-style killer robots taking over military command",
              "AI becoming truly conscious and demanding rights",
              "Biased AI making unfair decisions in criminal justice and hiring",
              "AI colonizing other planets without human approval"
            ],
            correctIndex: 2,
            explanation: "Algorithmic bias in criminal justice, hiring, and other consequential domains is a documented, present-day AI safety concern with real victims. The other options are either science fiction or extremely distant hypotheticals. Current AI safety work focuses on real, present harms."
          }
        ]
      },
      {
        id: "ai-governance",
        title: "AI Governance & Your Role as a Citizen",
        duration: "10 min",
        description: "How AI policy is being shaped globally and how you can participate in that process.",
        icon: "🏛️",
        sections: [
          {
            title: "The Global AI Governance Landscape",
            content: "Different regions are taking different approaches to AI governance. The EU AI Act is the world's first comprehensive AI regulation, categorizing AI by risk level and banning some applications (like social scoring). The US has taken a more voluntary, sector-specific approach. China has AI regulations focused on specific applications while pursuing aggressive state AI development. These approaches will shape who benefits from AI and who bears its risks.",
            highlight: "AI governance is being decided now — your voice in democratic processes matters."
          },
          {
            title: "Key Policy Questions Being Decided",
            content: "Should AI-generated content be labeled? What AI applications should be banned (e.g., facial recognition, social scoring)? Who is liable when AI causes harm? Should AI companies be required to test for bias before deployment? Should AI training data require consent from those whose data is used? Should AI capabilities be accessible to all or can they be monopolized? These are political questions with profound consequences."
          },
          {
            title: "The Power Concentration Risk",
            content: "The most capable AI systems require extraordinary computational resources — billions of dollars in infrastructure — accessible only to a handful of large tech companies and governments. This concentration of AI capability is a governance risk: a small number of entities may gain disproportionate influence over critical infrastructure, information ecosystems, and economic activity. Open-source AI models offer a partial counterbalance.",
            highlight: "Concentrated AI power in few hands poses risks to democratic governance and economic fairness."
          },
          {
            title: "Becoming an Informed AI Citizen",
            content: "You don't need to be technical to participate in AI governance. Read reliable AI news sources. Engage with your elected representatives about AI policy — most are desperate for informed constituent input. Support organizations working on beneficial AI and digital rights. Share your knowledge with your community. The future of AI is being written now, and democratic participation is essential to ensuring it serves humanity broadly."
          }
        ],
        keyTakeaways: [
          "Different regions are taking fundamentally different approaches to AI regulation",
          "Key AI policy questions with major consequences are being decided right now",
          "Power concentration in AI capability is a governance risk requiring attention",
          "Informed civic participation in AI governance is accessible to non-technical citizens"
        ],
        quiz: [
          {
            id: "q1",
            question: "What does the EU AI Act represent?",
            options: [
              "A voluntary industry code of conduct for AI companies",
              "The world's first comprehensive binding AI regulation",
              "A research funding program for AI safety",
              "An international treaty signed by all UN member states"
            ],
            correctIndex: 1,
            explanation: "The EU AI Act is the world's first comprehensive, binding AI regulation. It categorizes AI systems by risk level (from minimal to unacceptable), sets requirements for high-risk AI applications, and bans certain uses like social scoring. It serves as a model being studied by regulators worldwide."
          },
          {
            id: "q2",
            question: "Why is the concentration of advanced AI capabilities in a few large companies a concern?",
            options: [
              "It makes AI development go too fast",
              "Small companies are generally more ethical than large ones",
              "A handful of entities may gain disproportionate influence over critical infrastructure and information",
              "It reduces competition in consumer electronics"
            ],
            correctIndex: 2,
            explanation: "When advanced AI capabilities are concentrated in very few hands, those entities gain enormous influence over economic activity, information ecosystems, and potentially critical infrastructure. This concentration threatens democratic governance and creates single points of failure and abuse."
          }
        ]
      }
    ]
  }
];

export const badges = [
  {
    id: "foundations-badge",
    name: "AI Explorer",
    description: "Completed the AI Foundations module",
    icon: "🧠",
    color: "blue",
    moduleId: "foundations"
  },
  {
    id: "risks-badge",
    name: "Risk Analyst",
    description: "Completed the AI Risks & Harms module",
    icon: "⚠️",
    color: "red",
    moduleId: "risks"
  },
  {
    id: "interaction-badge",
    name: "AI Navigator",
    description: "Completed the Interacting with AI module",
    icon: "💬",
    color: "purple",
    moduleId: "interaction"
  },
  {
    id: "future-badge",
    name: "Future Ready",
    description: "Completed the AI Future module",
    icon: "🚀",
    color: "green",
    moduleId: "future"
  },
  {
    id: "master-badge",
    name: "AI Awareness Champion",
    description: "Completed all modules — you are prepared for the AI future",
    icon: "🏆",
    color: "gold",
    moduleId: "all"
  }
];

export function getTotalLessons(): number {
  return modules.reduce((acc, m) => acc + m.lessons.length, 0);
}

export function getAllLessons(): { moduleId: string; lesson: Lesson }[] {
  return modules.flatMap(m => m.lessons.map(l => ({ moduleId: m.id, lesson: l })));
}
