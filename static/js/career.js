// ─────────────────────────────────────────
// CAREER PATHS
// ─────────────────────────────────────────
const careers = {
    software_dev: {
        name: "Software Developer",
        icon: "💻",
        why_template: "You enjoy building systems, solving logical problems, and working independently for long stretches. Software development rewards exactly this kind of deep focused thinking.",
        skills: ["Python", "JavaScript", "Data Structures", "Git", "Problem Solving"],
        roadmap_url: "/assess/python",
        roadmap_label: "Start Python Roadmap",
        available: true
    },
    web_dev: {
        name: "Web Developer",
        icon: "🌐",
        why_template: "You like seeing immediate visual results from your work and enjoy the creative side of building. Web development gives you that instant feedback loop.",
        skills: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"],
        roadmap_url: "/assess/webdev",
        roadmap_label: "Start Web Dev Roadmap",
        available: true
    },
    data_analyst: {
        name: "Data Analyst",
        icon: "📊",
        why_template: "You think in patterns and numbers. You enjoy understanding why things happen, not just what happened. Data analysis turns raw numbers into stories.",
        skills: ["Excel", "SQL", "Python", "Tableau", "Statistics"],
        roadmap_url: null,
        roadmap_label: "Roadmap coming soon",
        available: false
    },
    ui_ux: {
        name: "UI/UX Designer",
        icon: "🎨",
        why_template: "You think about people first — how they feel, what confuses them, what delights them. UI/UX design is fundamentally about empathy combined with visual thinking.",
        skills: ["Figma", "User Research", "Wireframing", "Prototyping", "Psychology"],
        roadmap_url: null,
        roadmap_label: "Roadmap coming soon",
        available: false
    },
    digital_marketer: {
        name: "Digital Marketer",
        icon: "📱",
        why_template: "You understand people and what makes them click, share, and buy. Digital marketing combines psychology, creativity and analytics.",
        skills: ["SEO", "Social Media", "Google Ads", "Content Strategy", "Analytics"],
        roadmap_url: null,
        roadmap_label: "Roadmap coming soon",
        available: false
    },
    content_creator: {
        name: "Content Creator",
        icon: "🎬",
        why_template: "You have ideas worth sharing and enjoy the process of creating. Content creation rewards consistency, authenticity and the ability to connect with an audience.",
        skills: ["Video Editing", "Storytelling", "SEO", "Thumbnails", "Consistency"],
        roadmap_url: null,
        roadmap_label: "Roadmap coming soon",
        available: false
    },
    freelancer: {
        name: "Freelancer",
        icon: "🚀",
        why_template: "You value freedom and hate being told what to do. Freelancing rewards people who can deliver results independently and manage clients.",
        skills: ["Any Technical Skill", "Client Communication", "Self Marketing", "Project Management"],
        roadmap_url: null,
        roadmap_label: "Roadmap coming soon",
        available: false
    },
    product_manager: {
        name: "Product Manager",
        icon: "🗺️",
        why_template: "You see the big picture. You can talk to engineers, designers and business people equally well. Product management is about connecting dots across teams.",
        skills: ["Strategy", "User Research", "Data Analysis", "Communication", "Prioritisation"],
        roadmap_url: null,
        roadmap_label: "Roadmap coming soon",
        available: false
    },
    cybersecurity: {
        name: "Cybersecurity Analyst",
        icon: "🔐",
        why_template: "You think like an attacker to defend like a protector. You enjoy finding what is broken before others do. Cybersecurity rewards curiosity and a hacker mindset.",
        skills: ["Networking", "Linux", "Python", "Ethical Hacking", "Security Tools"],
        roadmap_url: null,
        roadmap_label: "Roadmap coming soon",
        available: false
    },
    ai_ml: {
        name: "AI/ML Engineer",
        icon: "🤖",
        why_template: "You are fascinated by how machines learn and think. You enjoy mathematical thinking combined with real world impact.",
        skills: ["Python", "Mathematics", "Machine Learning", "Deep Learning", "Data"],
        roadmap_url: null,
        roadmap_label: "Roadmap coming soon",
        available: false
    },
    business_analyst: {
        name: "Business Analyst",
        icon: "📈",
        why_template: "You bridge the gap between business problems and technical solutions. You think in processes and improvements.",
        skills: ["Excel", "SQL", "Process Mapping", "Stakeholder Management", "Presentation"],
        roadmap_url: null,
        roadmap_label: "Roadmap coming soon",
        available: false
    },
    graphic_designer: {
        name: "Graphic Designer",
        icon: "✏️",
        why_template: "You see beauty in composition, colour and typography. You communicate through visuals more naturally than words.",
        skills: ["Photoshop", "Illustrator", "Typography", "Colour Theory", "Branding"],
        roadmap_url: null,
        roadmap_label: "Roadmap coming soon",
        available: false
    },
    devops: {
        name: "DevOps Engineer",
        icon: "⚙️",
        why_template: "You enjoy making systems reliable, fast and scalable. You think about infrastructure the way a city planner thinks about roads.",
        skills: ["Linux", "Docker", "CI/CD", "Cloud", "Automation"],
        roadmap_url: null,
        roadmap_label: "Roadmap coming soon",
        available: false
    },
    mobile_dev: {
        name: "Mobile App Developer",
        icon: "📱",
        why_template: "You think about products people carry in their pockets. You want to build things that millions of people use every day.",
        skills: ["React Native", "Flutter", "Android", "iOS", "UI Design"],
        roadmap_url: null,
        roadmap_label: "Roadmap coming soon",
        available: false
    },
    technical_writer: {
        name: "Technical Writer",
        icon: "📝",
        why_template: "You have the rare ability to make complex things simple. You enjoy explaining, documenting and teaching.",
        skills: ["Writing", "Research", "Documentation Tools", "Technical Knowledge", "Clarity"],
        roadmap_url: null,
        roadmap_label: "Roadmap coming soon",
        available: false
    }
};

// ─────────────────────────────────────────
// QUESTIONS
// ─────────────────────────────────────────
const questions = [
    {
        dimension: "How you think",
        text: "A complex problem lands on your desk. What do you do first?",
        options: [
            { text: "Break it into smaller parts and start solving step by step", scores: { software_dev: 3, data_analyst: 2, devops: 2, business_analyst: 2 } },
            { text: "Research how others have solved similar problems before touching it", scores: { ai_ml: 3, data_analyst: 2, technical_writer: 2, business_analyst: 2 } },
            { text: "Sketch out the ideal end result and work backwards", scores: { ui_ux: 3, product_manager: 3, graphic_designer: 2, web_dev: 2 } },
            { text: "Talk to people affected by the problem to understand it deeply", scores: { product_manager: 3, ui_ux: 3, digital_marketer: 2, business_analyst: 2 } }
        ]
    },
    {
        dimension: "How you learn",
        text: "You want to learn a new skill. Which approach feels most natural?",
        options: [
            { text: "Jump straight in and figure it out by breaking things", scores: { software_dev: 3, devops: 3, cybersecurity: 3, web_dev: 2 } },
            { text: "Watch videos and read until you deeply understand the theory", scores: { ai_ml: 3, data_analyst: 2, technical_writer: 2, business_analyst: 2 } },
            { text: "Find a project that excites you and learn what you need as you go", scores: { web_dev: 3, mobile_dev: 3, freelancer: 3, content_creator: 2 } },
            { text: "Follow a structured course from beginning to end", scores: { data_analyst: 2, software_dev: 2, digital_marketer: 2, business_analyst: 3 } }
        ]
    },
    {
        dimension: "What energises you",
        text: "After finishing a project you are most proud of — what did you actually do?",
        options: [
            { text: "Built something that works — an app, tool or system", scores: { software_dev: 4, web_dev: 3, mobile_dev: 3, devops: 2 } },
            { text: "Created something visual — a design, video or post", scores: { graphic_designer: 4, content_creator: 4, ui_ux: 3, digital_marketer: 2 } },
            { text: "Solved a puzzle or found a pattern in data", scores: { data_analyst: 4, ai_ml: 3, cybersecurity: 3, business_analyst: 3 } },
            { text: "Helped someone understand something or make a better decision", scores: { technical_writer: 4, product_manager: 3, business_analyst: 3, digital_marketer: 2 } }
        ]
    },
    {
        dimension: "How you work",
        text: "Which work environment sounds most like you?",
        options: [
            { text: "Alone, headphones on, deep in code or a complex problem for hours", scores: { software_dev: 4, ai_ml: 4, cybersecurity: 3, data_analyst: 3 } },
            { text: "Collaborating with a small team, frequent discussions, shared goals", scores: { product_manager: 4, ui_ux: 3, business_analyst: 3, web_dev: 2 } },
            { text: "Independent with flexible hours — clients, deadlines, your own pace", scores: { freelancer: 5, content_creator: 3, graphic_designer: 3, digital_marketer: 3 } },
            { text: "Creative chaos — brainstorming, experimenting, trying new things constantly", scores: { content_creator: 4, graphic_designer: 3, digital_marketer: 3, ui_ux: 3 } }
        ]
    },
    {
        dimension: "What you watch",
        text: "When you have free time on YouTube what do you actually end up watching?",
        options: [
            { text: "Coding tutorials, tech reviews, programming projects", scores: { software_dev: 4, web_dev: 3, devops: 3, ai_ml: 3 } },
            { text: "Design inspiration, UI breakdowns, creative process videos", scores: { ui_ux: 4, graphic_designer: 4, web_dev: 2, content_creator: 2 } },
            { text: "Business, startups, marketing, how companies grow", scores: { product_manager: 4, digital_marketer: 4, business_analyst: 3, freelancer: 3 } },
            { text: "Data science, AI news, math puzzles, science explainers", scores: { ai_ml: 4, data_analyst: 4, cybersecurity: 3, software_dev: 2 } }
        ]
    },
    {
        dimension: "Your natural strengths",
        text: "Friends and family come to you most often for help with:",
        options: [
            { text: "Tech problems — fixing devices, setting things up, explaining software", scores: { software_dev: 3, devops: 3, technical_writer: 3, cybersecurity: 2 } },
            { text: "Creative work — designing something, making content, editing photos", scores: { graphic_designer: 4, ui_ux: 3, content_creator: 4, digital_marketer: 2 } },
            { text: "Decisions and strategy — what to do, how to plan, which option is better", scores: { product_manager: 4, business_analyst: 4, data_analyst: 3, freelancer: 2 } },
            { text: "Understanding or explaining something — breaking it down simply", scores: { technical_writer: 4, data_analyst: 3, business_analyst: 3, product_manager: 2 } }
        ]
    },
    {
        dimension: "Risk tolerance",
        text: "Which statement describes your relationship with money and risk?",
        options: [
            { text: "I need stable income. Uncertainty stresses me out a lot.", scores: { software_dev: 2, data_analyst: 3, business_analyst: 3, devops: 2 } },
            { text: "I can handle some uncertainty if the upside is worth it.", scores: { web_dev: 2, digital_marketer: 2, product_manager: 2, ui_ux: 2 } },
            { text: "I am comfortable with uncertainty. I back myself to figure it out.", scores: { freelancer: 4, content_creator: 3, mobile_dev: 2, software_dev: 2 } },
            { text: "I want to build something big eventually — short term sacrifice is fine.", scores: { ai_ml: 3, product_manager: 3, software_dev: 3, mobile_dev: 3 } }
        ]
    },
    {
        dimension: "Time horizon",
        text: "You need to start earning from your skills. What is your real timeline?",
        options: [
            { text: "Within 3 to 6 months — I need income soon", scores: { web_dev: 4, digital_marketer: 4, freelancer: 4, graphic_designer: 3 } },
            { text: "6 to 12 months — I have some runway to invest in learning", scores: { software_dev: 3, data_analyst: 3, ui_ux: 3, mobile_dev: 3 } },
            { text: "1 to 2 years — I want to build a strong foundation properly", scores: { ai_ml: 4, cybersecurity: 3, devops: 3, software_dev: 3 } },
            { text: "I am not focused on money right now — I want to learn and build first", scores: { content_creator: 3, product_manager: 2, technical_writer: 2, ai_ml: 2 } }
        ]
    },
    {
        dimension: "Your vision",
        text: "Imagine yourself 5 years from now — which day sounds most like you?",
        options: [
            { text: "Working on a complex technical problem that very few people can solve", scores: { ai_ml: 4, cybersecurity: 4, software_dev: 3, devops: 3 } },
            { text: "Running my own clients or projects with full control of my time", scores: { freelancer: 5, content_creator: 4, graphic_designer: 3, digital_marketer: 3 } },
            { text: "Leading a product or team — shaping what gets built and why", scores: { product_manager: 5, business_analyst: 3, ui_ux: 2, software_dev: 2 } },
            { text: "Building apps or tools that lakhs of people use every day", scores: { mobile_dev: 4, web_dev: 4, software_dev: 4, ai_ml: 3 } }
        ]
    },
    {
        dimension: "Feedback loop",
        text: "Which type of work result gives you the most satisfaction?",
        options: [
            { text: "Something that runs — code, automation, a deployed app", scores: { software_dev: 4, devops: 4, web_dev: 3, mobile_dev: 3 } },
            { text: "Something that looks great — a design, a video, a visual", scores: { graphic_designer: 4, ui_ux: 4, content_creator: 3, web_dev: 2 } },
            { text: "Something that reveals truth — an insight, a chart, a report", scores: { data_analyst: 4, ai_ml: 3, business_analyst: 4, cybersecurity: 2 } },
            { text: "Something that moves people — a post, a video, a campaign", scores: { content_creator: 4, digital_marketer: 4, technical_writer: 3, graphic_designer: 2 } }
        ]
    },
    {
        dimension: "School memories",
        text: "Which subject did you actually enjoy — not just score well in?",
        options: [
            { text: "Maths, Physics, Computer Science — logical and precise", scores: { software_dev: 3, ai_ml: 3, data_analyst: 3, cybersecurity: 3 } },
            { text: "Art, Design — anything visual and creative", scores: { graphic_designer: 4, ui_ux: 4, content_creator: 3, web_dev: 2 } },
            { text: "Economics, Business Studies, Commerce — how systems and money work", scores: { business_analyst: 4, product_manager: 3, digital_marketer: 3, data_analyst: 2 } },
            { text: "English, Hindi, Communication — expressing and explaining things", scores: { technical_writer: 4, content_creator: 3, digital_marketer: 3, product_manager: 2 } }
        ]
    },
    {
        dimension: "Problem type",
        text: "Which type of problem would you rather spend a week solving?",
        options: [
            { text: "Why is this system slow? Find and fix the bottleneck.", scores: { devops: 4, software_dev: 3, cybersecurity: 3, data_analyst: 2 } },
            { text: "Why are users not completing this flow? Fix the experience.", scores: { ui_ux: 4, product_manager: 3, web_dev: 3, digital_marketer: 2 } },
            { text: "Why are sales dropping? Find the pattern in the data.", scores: { data_analyst: 4, business_analyst: 4, digital_marketer: 3, ai_ml: 2 } },
            { text: "How do we reach more people with this message?", scores: { digital_marketer: 4, content_creator: 4, product_manager: 2, graphic_designer: 2 } }
        ]
    },
    {
        dimension: "Your superpower",
        text: "Which of these comes most naturally to you?",
        options: [
            { text: "Spotting patterns and inconsistencies that others miss", scores: { data_analyst: 4, cybersecurity: 4, ai_ml: 3, business_analyst: 3 } },
            { text: "Making things look clean, organised and visually appealing", scores: { graphic_designer: 4, ui_ux: 4, web_dev: 3, content_creator: 2 } },
            { text: "Breaking down complex things into simple steps anyone can follow", scores: { technical_writer: 4, product_manager: 3, business_analyst: 3, data_analyst: 2 } },
            { text: "Building things from scratch even when you do not know how yet", scores: { software_dev: 4, freelancer: 3, mobile_dev: 3, web_dev: 3 } }
        ]
    },
    {
        dimension: "Motivation",
        text: "What would make you feel like your career was truly successful?",
        options: [
            { text: "Being known as one of the best technical experts in my field", scores: { software_dev: 3, ai_ml: 4, cybersecurity: 4, devops: 3 } },
            { text: "Having complete freedom — when I work, where I work, who I work with", scores: { freelancer: 5, content_creator: 4, graphic_designer: 3, digital_marketer: 3 } },
            { text: "Building a product that millions of people use and love", scores: { product_manager: 4, mobile_dev: 4, web_dev: 3, software_dev: 3 } },
            { text: "Earning well while doing work that genuinely interests me every day", scores: { data_analyst: 3, business_analyst: 3, ui_ux: 3, technical_writer: 3 } }
        ]
    },
    {
        dimension: "Security mindset",
        text: "How do you feel about finding and exploiting system weaknesses?",
        options: [
            { text: "That sounds genuinely exciting — I love finding what is broken", scores: { cybersecurity: 5, software_dev: 2, devops: 2, ai_ml: 1 } },
            { text: "Interesting but I prefer building things rather than breaking them", scores: { software_dev: 3, web_dev: 3, mobile_dev: 3, devops: 2 } },
            { text: "I would rather understand people behaviour than system behaviour", scores: { ui_ux: 3, product_manager: 3, digital_marketer: 3, business_analyst: 3 } },
            { text: "Not for me — I prefer working with data, visuals or communication", scores: { data_analyst: 2, graphic_designer: 2, content_creator: 2, technical_writer: 2 } }
        ]
    }
];

// ─────────────────────────────────────────
// STATE
// ─────────────────────────────────────────
let currentQuestion = 0;
let answers = new Array(questions.length).fill(null);

// ─────────────────────────────────────────
// RENDER QUESTION
// ─────────────────────────────────────────
function renderQuestion() {
    const q = questions[currentQuestion];
    const container = document.getElementById("question-container");

    const optionsHTML = q.options.map((opt, idx) => `
        <div class="option ${answers[currentQuestion] === idx ? 'selected' : ''}"
             onclick="selectOption(${idx})">
            <div class="option-letter">${String.fromCharCode(65 + idx)}</div>
            <div class="option-text">${opt.text}</div>
        </div>
    `).join("");

    container.innerHTML = `
        <div class="question-card">
            <div class="question-dimension">${q.dimension}</div>
            <div class="question-num">Question ${currentQuestion + 1} of ${questions.length}</div>
            <div class="question-text">${q.text}</div>
            <div class="options">${optionsHTML}</div>
        </div>
    `;

    const pct = (currentQuestion / questions.length) * 100;
    document.getElementById("progress-fill").style.width = pct + "%";
    document.getElementById("progress-text").textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    const nextBtn = document.getElementById("next-btn");
    const prevBtn = document.getElementById("prev-btn");
    prevBtn.style.display = currentQuestion > 0 ? "block" : "none";
    nextBtn.disabled = answers[currentQuestion] === null;
    nextBtn.textContent = currentQuestion === questions.length - 1
        ? "See My Results →" : "Next →";
}

function selectOption(idx) {
    answers[currentQuestion] = idx;
    renderQuestion();
}

function nextQuestion() {
    if (answers[currentQuestion] === null) return;
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        renderQuestion();
        window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
        showResults();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}

function calculateScores() {
    const scores = {};
    Object.keys(careers).forEach(k => scores[k] = 0);
    answers.forEach((answerIdx, qIdx) => {
        if (answerIdx === null) return;
        const option = questions[qIdx].options[answerIdx];
        Object.entries(option.scores).forEach(([career, pts]) => {
            scores[career] = (scores[career] || 0) + pts;
        });
    });
    return scores;
}

function showResults() {
    const scores = calculateScores();
    const sorted = Object.entries(scores)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);
    const maxScore = sorted[0][1];
    const ranks = ["🥇 Your Top Match", "🥈 Strong Match", "🥉 Good Match"];

    const resultsHTML = sorted.map(([key, score], idx) => {
        const career = careers[key];
        const pct = Math.round((score / maxScore) * 100);
        const skillsHTML = career.skills
            .map(s => `<span class="skill-tag">${s}</span>`).join("");
        const actionBtn = career.available
            ? `<a href="${career.roadmap_url}" class="roadmap-btn">${career.roadmap_label} →</a>`
            : `<span class="coming-soon-btn">${career.roadmap_label}</span>`;

        return `
            <div class="career-card ${idx === 0 ? 'top-match' : ''}">
                <div class="career-rank">${ranks[idx]}</div>
                <div class="career-top">
                    <div class="career-name">${career.icon} ${career.name}</div>
                    <div class="career-match">${pct}% match</div>
                </div>
                <div class="career-why">${career.why_template}</div>
                <div class="career-skills">${skillsHTML}</div>
                <div class="career-actions">${actionBtn}</div>
            </div>
        `;
    }).join("");

    document.getElementById("results-container").innerHTML = resultsHTML;
    document.getElementById("quiz-section").style.display = "none";
    document.getElementById("result-section").style.display = "block";
    document.getElementById("progress-fill").style.width = "100%";
    document.getElementById("progress-text").textContent = "Complete!";
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function retakeQuiz() {
    currentQuestion = 0;
    answers = new Array(questions.length).fill(null);
    document.getElementById("quiz-section").style.display = "block";
    document.getElementById("result-section").style.display = "none";
    renderQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

renderQuestion();