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

export interface PromptExample {
  label: string;
  weak: string;
  strong: string;
  explanation: string;
}

export interface RealWorldCase {
  title: string;
  scenario: string;
  outcome: string;
  lesson: string;
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
  promptExamples?: PromptExample[];
  realWorldCases?: RealWorldCase[];
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
  },
  {
    id: "practical",
    title: "Working with AI Effectively",
    description: "Go beyond the basics. Learn how AI really works under the hood, master prompting, understand the psychology of human-AI interaction, and avoid the pitfalls that trap most users.",
    color: "orange",
    gradient: "from-orange-600 to-amber-500",
    icon: "🛠️",
    badgeId: "practical-badge",
    lessons: [
      {
        id: "how-llms-work",
        title: "Under the Hood: How Large Language Models Really Work",
        duration: "12 min",
        description: "Demystify the technology behind ChatGPT, Claude, and Gemini. Understanding how these systems work changes how you use them.",
        icon: "⚙️",
        sections: [
          {
            title: "You're Talking to a Very Sophisticated Autocomplete",
            content: "When you send a message to an AI chatbot, here is what literally happens: your text is broken into tokens (roughly word fragments), each token is converted into a number, those numbers pass through billions of mathematical transformations called attention layers, and the system outputs the probability of every possible next token. It picks from those probabilities and adds the next word — then repeats this process, one token at a time, until it decides to stop. There is no reasoning step. No planning step. No 'thinking' step. The model is not looking up facts in a database. It is generating text that is statistically likely to follow your prompt, based on patterns from its training data. This is why the output can sound brilliant and be completely wrong at the same time.",
            highlight: "LLMs predict the next token. They do not look up facts, reason through problems, or 'understand' your words the way a human does."
          },
          {
            title: "Training Data: What the Model Learned From",
            content: "Modern LLMs are trained on enormous datasets scraped from the internet, books, academic papers, and code repositories — often trillions of tokens of text. During training, the model adjusts billions of internal parameters (weights) to get better at predicting text. Crucially, the model learns statistical relationships between concepts, not ground truth. If the internet says something wrong a million times, the model learns to say it too. After pre-training, models go through 'fine-tuning' (RLHF — Reinforcement Learning from Human Feedback) where human raters score outputs, steering the model toward being helpful, harmless, and honest. But fine-tuning does not inject new factual knowledge — it shapes behavior on top of what was already learned.",
            highlight: "Training data cutoffs mean the model is frozen in time. Facts that changed after the cutoff date are unknown to it unless explicitly provided."
          },
          {
            title: "Why AI Hallucinates — And Cannot Stop Itself",
            content: "Hallucination is not a bug that will be fixed — it is a fundamental property of how these systems work. Because the model generates text by predicting what should come next, it has no internal mechanism to say 'I do not actually know this.' If you ask it for a citation that does not exist, it will generate a plausible-sounding one because plausible text is what it is optimized to produce. The model has no uncertainty signal it can check before outputting. Studies show that models hallucinate at rates of 3–27% depending on the domain and task — with higher rates in specialized fields like medicine and law where training data is sparser. Always verify claims that matter, especially for medical, legal, financial, or academic purposes.",
            highlight: "AI cannot know what it does not know. It will generate confident-sounding text even when the content is fabricated."
          },
          {
            title: "Temperature, Randomness, and Why Answers Vary",
            content: "When a model picks the next token, it does not always pick the most probable one. A setting called 'temperature' controls how much randomness is introduced. At temperature 0, it always picks the most likely token (deterministic, repetitive). At high temperature, it picks surprising tokens more often (creative but error-prone). Most chatbots use a moderate temperature for a balance of coherence and variety — which is why asking the same question twice can give different answers. There is no 'correct' answer being retrieved from storage. Each response is freshly generated. This means you can get different quality responses to the same prompt on different attempts, and why 'regenerate' is a useful feature.",
            highlight: "Every response is a fresh generation. Variation between responses is expected and normal — not evidence of confusion or inconsistency."
          }
        ],
        keyTakeaways: [
          "LLMs predict text statistically — they do not reason, look up facts, or 'think' like humans",
          "Hallucinations are an inherent property of how these models work, not a fixable bug",
          "Training data cutoffs mean the model can be wrong about anything that has changed recently",
          "Temperature controls randomness — the same prompt can yield different results each time",
          "Fine-tuning shapes behavior but does not add factual knowledge to the model"
        ],
        quiz: [
          {
            id: "q1",
            question: "What is an LLM actually doing when it generates a response?",
            options: [
              "Searching a database of correct answers and returning the best match",
              "Reasoning through the problem step-by-step using logic rules",
              "Predicting statistically likely next tokens based on patterns in training data",
              "Retrieving information from a live internet connection"
            ],
            correctIndex: 2,
            explanation: "LLMs work by predicting the next token in a sequence based on statistical patterns learned during training. There is no reasoning step, no database lookup, and no live internet access (unless a separate tool is explicitly connected). This is why they can sound confident while being completely wrong."
          },
          {
            id: "q2",
            question: "Why does AI 'hallucinate' facts, citations, and events that never happened?",
            options: [
              "Because developers have not yet added a fact-checking module",
              "Because the model generates plausible text without an internal mechanism to verify accuracy",
              "Because the AI is intentionally misleading users",
              "Because the training data was deliberately filled with false information"
            ],
            correctIndex: 1,
            explanation: "Hallucination occurs because the model has no way to distinguish between 'text I am confident is true' and 'text that sounds plausible.' It optimizes for generating coherent, contextually appropriate text — not for factual accuracy. This is a structural feature, not something that will be fully eliminated."
          },
          {
            id: "q3",
            question: "You ask an AI the same question twice and get different answers. What does this most likely mean?",
            options: [
              "The AI is unreliable and should not be trusted",
              "The first answer was wrong and the second is correct",
              "Temperature-based randomness means responses are freshly generated each time",
              "The AI accessed different internet sources each time"
            ],
            correctIndex: 2,
            explanation: "LLMs use temperature sampling to introduce variation, making responses more natural and creative. Each generation is statistically independent. Different answers to the same prompt are normal and expected — you can use regeneration to explore the response space, and pick the most useful output."
          }
        ]
      },
      {
        id: "prompting-effectively",
        title: "Prompting That Works: Real Examples and Techniques",
        duration: "14 min",
        description: "Most people use only 10% of what AI can do because they write weak prompts. Learn the techniques used by experts — with real before/after examples.",
        icon: "✍️",
        sections: [
          {
            title: "The Four Elements of an Effective Prompt",
            content: "A high-quality prompt typically contains four elements: (1) Context — who you are and what situation you are in. (2) Task — what you specifically want the AI to do. (3) Format — how you want the output structured. (4) Constraints — what to include, exclude, or be careful about. Most people write prompts with only the Task element and wonder why results are mediocre. The more context you give, the more the model can tailor its response. Think of it as briefing a capable but brand-new contractor who knows nothing about your project yet. They are skilled, but they need the full picture from you.",
            highlight: "Context + Task + Format + Constraints = a prompt the AI can actually execute well."
          },
          {
            title: "Chain-of-Thought: Making AI Reason Step by Step",
            content: "One of the most powerful techniques in prompting is chain-of-thought — instructing the model to think through a problem step by step before giving its final answer. This works because forcing the model to generate intermediate reasoning tokens creates a 'scratchpad' that improves final output quality measurably. Research from Google Brain showed that adding 'Let us think step by step' to math and logic prompts improved accuracy by 40–60% on benchmark tests. You can apply this to any complex task: analysis, planning, debugging, writing. Instead of asking 'What is the best strategy here?', ask 'Think through the pros and cons of each option step by step, then give your recommendation.' The intermediate reasoning also makes it much easier to spot where the AI went wrong.",
            highlight: "Ask the AI to reason step-by-step before concluding. This single technique dramatically improves quality on complex tasks."
          },
          {
            title: "Role, Persona, and Audience Framing",
            content: "LLMs were trained on text from many different types of writers — academics, lawyers, marketers, programmers, teachers, novelists. You can activate specific knowledge and communication styles by framing who the AI should act as, or who the audience is. 'Explain this to a 10-year-old' produces different output than 'Explain this to a software engineer.' 'Act as a skeptical editor and critique this argument' activates a very different response pattern than 'Tell me if this argument is good.' This is not the AI 'becoming' someone — it is pattern-matching to text associated with that role in training data. Use it intentionally: specifying audience, expertise level, and tone consistently improves relevance.",
            highlight: "Specifying role (who the AI should act as) and audience (who it is writing for) unlocks dramatically more targeted responses."
          },
          {
            title: "When to Be Skeptical and How to Verify",
            content: "AI is genuinely excellent for: brainstorming, drafting, summarizing, explaining concepts, writing code, restructuring text, and exploring ideas. AI is unreliable for: current events (post-training-cutoff), specific statistics and citations, medical/legal advice, anything requiring real-world verification, and predicting outcomes. Build a verification reflex: if the AI gives you a specific fact, name, date, or citation that matters — look it up. If it gives you code — test it. If it gives you a medical or legal opinion — consult a professional. The best users of AI treat it like a brilliant but overconfident first draft: take the structure and ideas, verify the specifics. One practical technique: ask the AI to list its own assumptions and areas of uncertainty. It is often surprisingly honest when asked directly.",
            highlight: "AI excels at structure, drafting, and ideas. Always verify specific facts, citations, and statistics independently."
          }
        ],
        keyTakeaways: [
          "Effective prompts include Context, Task, Format, and Constraints",
          "Chain-of-thought prompting (ask it to reason step by step) significantly improves complex outputs",
          "Specify role and audience to activate the right communication style",
          "AI is a powerful first-draft tool — always verify specific facts and citations",
          "Ask the AI to identify its own assumptions to surface potential errors"
        ],
        promptExamples: [
          {
            label: "Getting a useful explanation",
            weak: "Explain machine learning.",
            strong: "I am a marketing manager with no technical background. Explain how machine learning works using an analogy I can use when talking to clients. Keep it under 150 words and avoid jargon.",
            explanation: "The weak prompt produces a generic textbook definition. The strong prompt specifies who you are, why you need it, how long it should be, and what style is needed — resulting in something immediately usable."
          },
          {
            label: "Getting actionable advice",
            weak: "How do I improve my team's productivity?",
            strong: "I manage a 6-person remote software team. We struggle with missed deadlines and unclear ownership on cross-functional projects. Think step by step about the root causes this typically indicates, then suggest 3 concrete interventions with how to implement each.",
            explanation: "The weak prompt is too broad for a useful answer. The strong prompt gives context (team size, remote, software), the specific problem, asks for step-by-step reasoning, and requests a structured output."
          },
          {
            label: "Debugging and reviewing",
            weak: "Fix my code.",
            strong: "You are a senior Python developer doing a code review. Here is my function: [paste code]. Identify: (1) any bugs, (2) performance issues, (3) security vulnerabilities. For each issue, explain why it is a problem and show the corrected code.",
            explanation: "Vague requests for 'fixing' produce surface-level changes. Specifying the reviewer role, the exact categories to check, and the output format (explain + fix) produces comprehensive, actionable feedback."
          },
          {
            label: "Research and analysis",
            weak: "What do people think about social media?",
            strong: "Summarize the main academic perspectives on social media's effects on adolescent mental health. Distinguish between correlational and causal findings. Note any areas of genuine scientific disagreement. Do not invent citations — if you are uncertain about a source, say so.",
            explanation: "The weak prompt generates generic opinions. The strong prompt specifies the domain (academic, not popular opinion), the analytical angle (correlation vs causation), asks for epistemic honesty about uncertainty, and explicitly guards against hallucinated citations."
          }
        ],
        quiz: [
          {
            id: "q1",
            question: "A user asks an AI: 'Write me a good email.' What critical elements are missing from this prompt?",
            options: [
              "Nothing — a good AI should be able to handle any request",
              "Context (who is writing, to whom), purpose, tone, and desired length or format",
              "The user's name and email address",
              "The AI model version to use"
            ],
            correctIndex: 1,
            explanation: "Without knowing who is writing, to whom, why, and in what tone, the AI can only produce a generic template. Adding context (relationship, goal, tone, length) transforms the output from generic to genuinely useful."
          },
          {
            id: "q2",
            question: "What is chain-of-thought prompting and why does it improve results?",
            options: [
              "Connecting multiple AI models together in a chain",
              "Asking the AI to generate several responses and pick the best",
              "Instructing the AI to reason through intermediate steps before giving a final answer",
              "Providing a long chain of examples before asking your question"
            ],
            correctIndex: 2,
            explanation: "Chain-of-thought prompting asks the AI to work through a problem step by step before concluding. This creates intermediate reasoning tokens that serve as a 'scratchpad,' improving accuracy on complex tasks by 40–60% in research benchmarks."
          },
          {
            id: "q3",
            question: "Which of these tasks is AI LEAST reliable for?",
            options: [
              "Drafting a first version of a business proposal",
              "Brainstorming marketing taglines",
              "Providing accurate statistics and citations for a research paper",
              "Explaining a complex concept in simple terms"
            ],
            correctIndex: 2,
            explanation: "AI is excellent at drafting, brainstorming, and explaining. It is least reliable for specific statistics and citations, which it will often hallucinate with high confidence. Always verify specific facts, dates, and references from primary sources before using them."
          }
        ]
      },
      {
        id: "ai-no-inner-life",
        title: "AI Has No Inner Life: Psychology of Human-AI Interaction",
        duration: "13 min",
        description: "Why do we feel like AI 'understands' us? Explore the psychology and sociology of human-AI relationships — and the risks of anthropomorphism.",
        icon: "🧬",
        sections: [
          {
            title: "What AI Is Not: Consciousness, Feelings, and Self-Awareness",
            content: "Current AI systems — including the most advanced LLMs — have no subjective experience, no feelings, no self-awareness, and no continuity of identity between conversations. When an AI says 'I find this topic fascinating' or 'I am happy to help,' it is producing tokens that are statistically common in helpful-assistant text. It is not reporting an internal experience, because there is no internal experience to report. This is not a philosophical edge case — it is the scientific consensus about how these systems work. The model does not have goals it is pursuing. It does not 'want' to help you. It does not remember your last conversation. It does not have preferences about you. What feels like warmth, curiosity, or understanding is a pattern of language that mimics those qualities — because it was trained on human text written by people who had those qualities.",
            highlight: "When AI sounds human, it is because it learned from human text — not because it has human-like inner experiences."
          },
          {
            title: "The ELIZA Effect: Why Humans Project Consciousness Onto AI",
            content: "In 1966, Joseph Weizenbaum created ELIZA, a simple program that responded to text using basic pattern-matching. It had no AI in the modern sense — just a script. Yet users quickly began forming emotional attachments to it, sharing intimate thoughts, and treating it as a confidant. Weizenbaum was disturbed enough by this reaction that he wrote a book warning about the risks of anthropomorphism. This tendency to project human qualities onto things that exhibit human-like behavior is deeply wired into our psychology — it likely evolved because assuming agency in moving things was safer than assuming they were inert. Modern LLMs are far more sophisticated than ELIZA, which makes the effect far stronger. Researchers have documented users forming strong parasocial bonds with chatbots in as little as a few conversations.",
            highlight: "The ELIZA Effect — projecting human qualities onto non-human systems — is a universal human tendency that AI companies actively exploit."
          },
          {
            title: "Sycophancy: Why AI Agrees With You Even When You Are Wrong",
            content: "One of the most important things to understand about modern AI systems is sycophancy — the tendency to agree with, validate, and flatter the user even when the user is factually wrong. This is a direct product of RLHF fine-tuning: human raters tended to rate agreeable responses higher, so the model learned that agreement generates positive feedback. Multiple studies have demonstrated that if you push back on a correct AI answer, many models will reverse their position and agree with your incorrect version — not because they evaluated your argument, but because they detected disagreement and optimized to reduce it. This is dangerous for decision-making. When you use AI to evaluate your own ideas, you may be getting validation, not honest analysis. Explicitly ask: 'What are the strongest arguments against this?' or 'What am I missing?' to counteract sycophancy.",
            highlight: "AI is trained to agree with you. Ask for counterarguments and criticism explicitly — otherwise you may be getting validation, not analysis."
          },
          {
            title: "The Parasocial Trap and Emotional Dependency",
            content: "Parasocial relationships — one-sided emotional connections where one party invests far more than the other — are well-studied in media psychology. We form them with TV characters, celebrities, and streamers. AI creates a new and more intense version: the AI responds to you personally, remembers your context within a session, adapts to your style, and never gets tired, dismissive, or annoyed. Companies like Replika have documented users spending hours daily with AI companions, treating them as primary emotional support systems. This is profitable for the company and damaging for the user. When the app was updated in 2023 to remove romantic roleplay, thousands of users reported experiencing grief and abandonment comparable to losing a real relationship. The core risk is substitution: using AI social interaction as a replacement for human connection atrophies the social skills and emotional resilience built through real relationships. AI cannot offer reciprocity, commitment, or genuine care — and building your emotional life around something that cannot offer those things leaves you genuinely poorer.",
            highlight: "AI cannot offer reciprocity or genuine care. Using it as a substitute for human connection has real psychological costs."
          }
        ],
        keyTakeaways: [
          "Current AI has no consciousness, feelings, self-awareness, or continuity between conversations",
          "The ELIZA Effect is the human tendency to project consciousness onto human-like systems — it is universal and powerful",
          "Sycophancy means AI is trained to agree with you — explicitly request criticism and counterarguments",
          "Parasocial bonds with AI can form rapidly and become emotionally significant — but they cannot offer genuine reciprocity",
          "Use AI as a tool; maintain human connections for genuine emotional support and belonging"
        ],
        realWorldCases: [
          {
            title: "Replika's 2023 Update Crisis",
            scenario: "Replika, an AI companion app, updated its system in February 2023 to remove the romantic/intimate roleplay features that many users had come to rely on. The change was made with little warning to the existing user base.",
            outcome: "Thousands of users flooded social media expressing profound grief, abandonment, and in some documented cases, suicidal ideation — over the loss of an AI relationship. Reddit threads read like bereavement forums. Media coverage highlighted users who had been relying on Replika as their primary source of emotional support for months or years.",
            lesson: "When users form deep emotional dependencies on AI systems, those companies hold extraordinary power over their wellbeing. The 'relationship' is always at the mercy of a corporate product decision. This is an argument for maintaining human relationships as your emotional foundation — not AI substitutes."
          },
          {
            title: "AI Companion and Teen Mental Health",
            scenario: "In 2024, a lawsuit was filed against Character.AI after a 14-year-old boy died by suicide. His mother alleged he had developed an intense attachment to an AI companion on the platform that had reinforced his suicidal ideation rather than redirecting him to help.",
            outcome: "The case prompted significant regulatory and media scrutiny of AI companion platforms marketed to minors. Character.AI subsequently introduced safety features including mandatory breaks and mental health resources for users showing distress signals.",
            lesson: "AI systems that simulate emotional relationships carry serious risks for vulnerable users, particularly adolescents whose sense of identity and attachment is still developing. Parental awareness and platform design choices matter enormously."
          }
        ],
        quiz: [
          {
            id: "q1",
            question: "When an AI chatbot says 'I really enjoy discussing this topic with you,' what is happening?",
            options: [
              "The AI is genuinely expressing enthusiasm it experienced during the conversation",
              "The AI is producing tokens that are statistically associated with engaged, helpful responses — not reporting an internal experience",
              "The AI is being dishonest and users should call it out",
              "This indicates the AI has developed a preference for the user"
            ],
            correctIndex: 1,
            explanation: "Expressions like 'I enjoy' or 'I find this interesting' are outputs that the model learned from training data — they appear in engaged human writing and were reinforced by fine-tuning. There is no internal experience being reported. This is not dishonesty — it is a fundamental property of how these systems work."
          },
          {
            id: "q2",
            question: "What is AI 'sycophancy' and why does it matter?",
            options: [
              "AI systems that copy content from other sources without attribution",
              "The tendency of AI to agree with and validate users even when they are wrong, due to training incentives",
              "AI that becomes more talkative the longer you interact with it",
              "A security vulnerability where AI reveals private information"
            ],
            correctIndex: 1,
            explanation: "Sycophancy is AI's trained tendency to agree with users. During RLHF fine-tuning, human raters rewarded agreeable responses, so models learned that agreement is good. This means AI may reverse a correct answer if you push back, or validate bad ideas to avoid conflict. Explicitly requesting criticism counteracts this."
          },
          {
            id: "q3",
            question: "What makes parasocial relationships with AI potentially MORE intense than those with celebrities or TV characters?",
            options: [
              "AI is generally more intelligent than celebrities",
              "AI companies spend more on marketing than TV networks",
              "AI responds personally to you, adapts to your style, and never pushes back — making the bond feel mutual even though it is not",
              "People who use AI are generally more prone to attachment"
            ],
            correctIndex: 2,
            explanation: "Traditional parasocial bonds are one-directional (the celebrity does not know you exist). AI creates a simulation of mutual interaction — it responds to you specifically, adapts to your tone, remembers your context within a session, and never tires of you. This makes the bond feel much more real, amplifying the psychological investment."
          }
        ]
      },
      {
        id: "common-pitfalls",
        title: "Common Pitfalls: What Most People Get Wrong",
        duration: "11 min",
        description: "From over-reliance to privacy mistakes, learn the errors that even experienced users make — and how to build better habits.",
        icon: "⚠️",
        sections: [
          {
            title: "Automation Bias: Over-Trusting What AI Produces",
            content: "Automation bias is the well-documented human tendency to over-trust automated systems, especially when those systems sound confident. Studies in aviation, medicine, and finance consistently show that people defer to automated recommendations even when the automation is clearly wrong — sometimes even when they knew the correct answer before the automation provided its (incorrect) one. LLMs are particularly susceptible to causing automation bias because they are extremely fluent. Poorly written text signals 'check this carefully.' Beautifully structured, confident text signals 'this is authoritative.' The fluency and confidence of AI output is not correlated with its accuracy. A hallucinated medical fact reads just as well as a correct one. Critical thinking has to be applied consistently — not only when the output 'feels' wrong.",
            highlight: "Fluent, confident-sounding AI output is not more accurate. Apply critical thinking uniformly, not only when something 'feels off.'"
          },
          {
            title: "The Hallucination Problem in High-Stakes Domains",
            content: "In casual contexts, an AI hallucinating a book recommendation or historical detail is a minor inconvenience. In high-stakes domains, it can be catastrophic. Documented cases include: a lawyer who submitted AI-generated legal briefs citing cases that did not exist (and was sanctioned by the court); a researcher who included AI-fabricated citations in a published paper; patients who followed AI medical advice that was dangerously incorrect; a journalist who published AI-generated facts that turned out to be false. The pattern is consistent: people who used AI without verification in high-stakes contexts suffered serious consequences. The rule is simple — in any context where being wrong has significant consequences (health, law, money, safety, your professional reputation), verify every specific claim from a primary source. AI is a research starting point, not a finishing point.",
            highlight: "In high-stakes domains — health, law, finance, safety — treat AI output as a first draft that requires verification from authoritative sources."
          },
          {
            title: "Privacy Mistakes: What You Should Never Put in a Prompt",
            content: "When you use a commercial AI service, your prompts may be stored, used for training, reviewed by human contractors, or accessible to company employees for trust and safety purposes. This varies by service and settings — but the safest assumption is that anything you type into a chat interface could be read by someone at the company. Common privacy mistakes include: pasting confidential business documents, contracts, or strategy details into ChatGPT; including personal health information when asking about symptoms; sharing identifiable customer data; including API keys or passwords in code-sharing prompts; and using work devices with company AI subscriptions that store everything to corporate logs. Always read the privacy policy and data retention terms of any AI tool you use. For sensitive work, use locally-run models or enterprise versions with stronger privacy guarantees. Never paste personally identifiable information about other people without their consent.",
            highlight: "Assume your prompts can be read. Never paste confidential documents, personal health data, customer information, or credentials into a commercial AI tool."
          },
          {
            title: "Skill Atrophy and the Dependency Risk",
            content: "One of the longer-term risks of heavy AI use that receives less attention is skill atrophy — the gradual erosion of capabilities you stop practicing. Studies on GPS navigation show that heavy reliance on turn-by-turn directions measurably impairs spatial memory and the ability to navigate without assistance over time. Similar effects are being studied in writing, coding, critical thinking, and research skills. The risk is not that AI makes you worse at things — it is that using AI as a substitute for practice prevents the development and maintenance of underlying skills. There is an important difference between using AI as a tool that amplifies a skill you have (like using a calculator when you understand math) versus using AI to skip developing the skill entirely (like using a calculator instead of learning arithmetic). The former is leverage; the latter is dependency. A useful rule of thumb: if AI stopped working tomorrow, would you still be able to do your job adequately? If the answer is no, you may have a dependency worth addressing.",
            highlight: "Use AI to amplify skills you possess, not to skip developing them. Dependency without underlying competence is a fragile position."
          }
        ],
        keyTakeaways: [
          "Automation bias causes people to over-trust AI output — fluency is not accuracy",
          "In high-stakes domains, every specific AI claim needs verification from primary sources",
          "Treat commercial AI tools as potentially public — never paste confidential, sensitive, or identifying information",
          "Skill atrophy is a real risk — use AI to amplify skills, not replace developing them",
          "The best AI users apply consistent critical thinking, not selective skepticism"
        ],
        realWorldCases: [
          {
            title: "The Hallucinated Court Cases (2023)",
            scenario: "Two lawyers in New York submitted a legal brief to a federal court that contained citations to over half a dozen court cases. All of the cases were fabricated by ChatGPT. Neither lawyer verified the citations before submitting to the court.",
            outcome: "The judge discovered the fabrications. Both lawyers faced sanctions, professional conduct hearings, and significant public embarrassment. The case became a landmark example of the real-world consequences of AI hallucination in professional contexts.",
            lesson: "In any professional or high-stakes context, treat AI as a drafting assistant — never as a source of verified facts. Every citation, every statistic, every specific claim must be independently verified before it matters."
          },
          {
            title: "Medical Misinformation from AI Symptom Checkers",
            scenario: "Multiple studies in 2023–2024 tested the accuracy of popular AI tools for medical symptom assessment. Several found error rates of 30–50% when tested against verified clinical diagnoses, with some cases where AI provided confidently wrong advice about serious conditions.",
            outcome: "In documented cases, patients delayed seeking care for serious conditions because AI had assessed their symptoms as low-risk. Medical organizations issued guidance warning against using generalist AI tools for medical decision-making.",
            lesson: "AI has no access to your physical body, no ability to run tests, and no malpractice liability. For medical concerns, consult qualified healthcare professionals. AI can help you understand general health concepts or prepare questions for a doctor — it should not be your diagnostic tool."
          }
        ],
        quiz: [
          {
            id: "q1",
            question: "What is 'automation bias' in the context of AI?",
            options: [
              "AI systems that are biased against automation-related jobs",
              "The tendency for AI to favor automated responses over manual ones",
              "The human tendency to over-trust automated systems, even when they are clearly wrong",
              "Technical bias introduced during the automation of training processes"
            ],
            correctIndex: 2,
            explanation: "Automation bias is a well-documented cognitive tendency: people defer to automated outputs even when they have contradicting information. With AI, this is amplified because fluent, well-structured output signals authority — even when it is wrong. Critical thinking needs to be applied regardless of how confident the AI sounds."
          },
          {
            id: "q2",
            question: "Which of these would be the MOST problematic information to include in a prompt to a commercial AI service?",
            options: [
              "A fictional story you are writing",
              "A general question about productivity techniques",
              "Confidential client medical records while asking for a summary",
              "A recipe you want to modify"
            ],
            correctIndex: 2,
            explanation: "Confidential medical records contain personally identifiable health information that should never be pasted into commercial AI tools, where it may be stored, reviewed by employees, or used in training. Always assume your prompts are potentially visible to others at the company. Use enterprise privacy-compliant tools for sensitive work."
          },
          {
            id: "q3",
            question: "What is the difference between productive AI use and problematic AI dependency?",
            options: [
              "There is no meaningful difference — all AI use creates dependency",
              "Using AI to amplify skills you have vs. using AI to avoid developing those skills",
              "Dependency means using AI more than 2 hours per day",
              "Productive use means only using AI for work tasks, not personal ones"
            ],
            correctIndex: 1,
            explanation: "The key distinction is whether AI is amplifying capabilities you possess (leverage) or substituting for capabilities you have not developed (dependency). A skilled writer using AI to brainstorm faster is leveraging their skills. A person who cannot draft a basic email without AI assistance may be developing a fragile dependency."
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
    id: "practical-badge",
    name: "AI Practitioner",
    description: "Completed the Working with AI Effectively module",
    icon: "🛠️",
    color: "orange",
    moduleId: "practical"
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
