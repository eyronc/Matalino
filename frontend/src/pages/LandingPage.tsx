import { useState } from 'react';

const svgPaths = {
  hero: {
    p1bfe6040: "M1088.7 728.258...",
    p3f085780: "M1299.73 823.791...",
    p1f56c6d0: "M1026.52 1438.46...",
    p22ce3c00: "M664.985 673.184...",
    pef3ef00: "M6.011 1.5h-4.52",
    p1671be0: "M10.75 1.5v13",
    p2a6c4300: "M1.5 8.75h13",
    p32c9cc00: "M12 3.5v13m-6.5-6.5h13",
    p332b4b80: "M4.25 9.75h11.5",
  },
  subjects: {
    p213bf800: "M12 2.5v19",
    paf0b780: "M4 8.75h16",
    p1991e700: "M8.75 12h6.5",
    p3f947d00: "M12 3.5v17",
    p20659900: "M8.75 6.5h6.5v11",
    p1b72dd00: "M4 8.75l8-6.5 8 6.5",
    p1a248480: "M6.5 8.75h11v6.5",
  },
  features: {
    p225a7040: "M12 4.5v16",
    ped59fc0: "M8.75 12h6.5",
    p33989fb0: "M15.25 19.75v2.6",
  },
  testimonials: {
    p1426a480: "M8 0l-1.5 3H0l2.5 2-1 3 2.5-2 2.5 2-1-3 2.5-2H9.5",
    p12c5be00: "M8 0l-1.5 3H0l2.5 2-1 3 2.5-2 2.5 2-1-3 2.5-2H9.5",
  },
  faq: {
    p1d907d00: "M6 9l6-6 6 6",
    p2aa6f900: "M6 6l6 6 6-6",
  },
};

// ============ HERO SECTION ============

function Gradient() {
  return (
    <div className="h-[2021.402px] relative w-504.75" data-name="Gradient">
      <div className="absolute inset-[-17.63%_-8.23%_-4.22%_-4.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2271.01 2463.12">
          <g id="Gradient">
            <g filter="url(#filter0_f_14_114)" id="Ellipse 29">
              <ellipse cx="1026.52" cy="1438.46" fill="url(#paint0_linear_14_114)" rx="664.985" ry="673.184" transform="rotate(-128.459 1026.52 1438.46)" />
            </g>
            <g filter="url(#filter1_f_14_114)" id="Ellipse 28">
              <ellipse cx="1299.73" cy="823.791" fill="#3B1FE7" rx="449.681" ry="454.849" />
            </g>
            <g filter="url(#filter2_f_14_114)" id="Ellipse 30">
              <ellipse cx="1088.7" cy="728.258" fill="#FFC1DF" rx="367.337" ry="371.793" />
            </g>
            <g filter="url(#filter3_f_14_114)" id="Vector 109">
              <path d={svgPaths.hero.p1bfe6040} fill="white" fillOpacity="0.85" />
            </g>
            <g filter="url(#filter4_f_14_114)" id="Vector 111">
              <path d={svgPaths.hero.p3f085780} fill="white" fillOpacity="0.85" />
            </g>
            <g filter="url(#filter5_f_14_114)" id="Vector 110">
              <path d={svgPaths.hero.p1f56c6d0} fill="url(#paint1_linear_14_114)" fillOpacity="0.7" />
            </g>
            <g filter="url(#filter6_f_14_114)" id="Vector 112">
              <path d={svgPaths.hero.p22ce3c00} fill="white" fillOpacity="0.8" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2049.31" id="filter0_f_14_114" width="2053.04" x="-7.62939e-06" y="413.802">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_14_114" stdDeviation="178.232" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1622.63" id="filter1_f_14_114" width="1612.29" x="493.586" y="12.4765">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_14_114" stdDeviation="178.232" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1456.52" id="filter2_f_14_114" width="1447.6" x="364.901" y="5.42146e-06">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_14_114" stdDeviation="178.232" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1292.36" id="filter3_f_14_114" width="1113.43" x="982.413" y="662.037">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_14_114" stdDeviation="89.1162" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1093.29" id="filter4_f_14_114" width="768.989" x="1502.03" y="660.843">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_14_114" stdDeviation="89.1162" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="986.866" id="filter5_f_14_114" width="857.407" x="840.07" y="893.548">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_14_114" stdDeviation="62.3814" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1144.72" id="filter6_f_14_114" width="1151.24" x="393.902" y="987.815">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_14_114" stdDeviation="106.94" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_14_114" x1="852.385" x2="1026.52" y1="1786.37" y2="2111.64">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#391DE8" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_14_114" x1="1472.62" x2="560.352" y1="1502.05" y2="650.165">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Gradient1() {
  return (
    <div className="absolute h-[2021.402px] -left-271.25 -top-182.75 w-504.75" data-name="Gradient">
      <div className="absolute inset-[-17.63%_-8.23%_-4.22%_-4.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2271.01 2463.12">
          <g id="Gradient">
            <g filter="url(#filter0_f_14_105)" id="Ellipse 29">
              <ellipse cx="1026.52" cy="1438.46" fill="url(#paint0_linear_14_105)" rx="664.985" ry="673.184" transform="rotate(-128.459 1026.52 1438.46)" />
            </g>
            <g filter="url(#filter1_f_14_105)" id="Ellipse 28">
              <ellipse cx="1299.73" cy="823.791" fill="#3B1FE7" rx="449.681" ry="454.849" />
            </g>
            <g filter="url(#filter2_f_14_105)" id="Ellipse 30">
              <ellipse cx="1088.7" cy="728.258" fill="#FFC1DF" rx="367.337" ry="371.793" />
            </g>
            <g filter="url(#filter3_f_14_105)" id="Vector 109">
              <path d={svgPaths.hero.p1bfe6040} fill="white" fillOpacity="0.85" />
            </g>
            <g filter="url(#filter4_f_14_105)" id="Vector 111">
              <path d={svgPaths.hero.p3f085780} fill="white" fillOpacity="0.85" />
            </g>
            <g filter="url(#filter5_f_14_105)" id="Vector 110">
              <path d={svgPaths.hero.p1f56c6d0} fill="url(#paint1_linear_14_105)" fillOpacity="0.7" />
            </g>
            <g filter="url(#filter6_f_14_105)" id="Vector 112">
              <path d={svgPaths.hero.p22ce3c00} fill="white" fillOpacity="0.8" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2049.31" id="filter0_f_14_105" width="2053.04" x="-7.62939e-06" y="413.802">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_14_105" stdDeviation="178.232" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1622.63" id="filter1_f_14_105" width="1612.29" x="493.586" y="12.4765">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_14_105" stdDeviation="178.232" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1456.52" id="filter2_f_14_105" width="1447.6" x="364.901" y="5.42146e-06">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_14_105" stdDeviation="178.232" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1292.36" id="filter3_f_14_105" width="1113.43" x="982.413" y="662.037">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_14_105" stdDeviation="89.1162" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1093.29" id="filter4_f_14_105" width="768.989" x="1502.03" y="660.843">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_14_105" stdDeviation="89.1162" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="986.866" id="filter5_f_14_105" width="857.407" x="840.07" y="893.548">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_14_105" stdDeviation="62.3814" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1144.72" id="filter6_f_14_105" width="1151.24" x="393.902" y="987.815">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_14_105" stdDeviation="106.94" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_14_105" x1="852.385" x2="1026.52" y1="1786.37" y2="2111.64">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#391DE8" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_14_105" x1="1472.62" x2="560.352" y1="1502.05" y2="650.165">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function HeroSection() {
  const handleRegisterClick = () => {
    window.location.href = '/account';
  };

  return (
    <div className="bg-white relative w-full overflow-hidden" data-name="Hero">
      {/* Background Gradient - Fixed positioning */}
      <div className="absolute h-125 md:h-192 left-0 overflow-hidden top-0 w-full pointer-events-none z-0">
        <div className="absolute flex h-[2021.402px] items-center justify-center left-[50%] md:left-107.75 -top-182.75 w-504.75 -translate-x-1/2 md:translate-x-0">
          <div className="flex-none rotate-180 -scale-y-100">
            <Gradient />
          </div>
        </div>
        <Gradient1 />
      </div>
      
      {/* Navbar */}
      <div className="relative backdrop-blur-[70px] max-w-full md:max-w-363.25 mx-4 md:mx-auto flex flex-wrap gap-4 md:gap-42.5 items-center justify-between px-4 md:px-25.5 py-3 md:py-3 mt-4 md:mt-5.75 rounded-full z-10">
        {/* Logo */}
        <div className="flex items-center">
          <p className="font-sans text-lg md:text-[23px] text-white py-2 md:py-4.5">Matalino</p>
        </div>

        {/* Menu - Hidden on mobile */}
        <div className="hidden lg:flex font-sans gap-10 items-center text-[#272f3a] text-[16px]">
          <button className="hover:text-[#0066FF] transition-colors cursor-pointer">Subjects</button>
          <button className="hover:text-[#0066FF] transition-colors cursor-pointer">Features</button>
          <button className="hover:text-[#0066FF] transition-colors cursor-pointer">How It Works</button>
          <button className="hover:text-[#0066FF] transition-colors cursor-pointer">Exams</button>
        </div>

        {/* Register Button */}
        <button 
          onClick={handleRegisterClick}
          className="backdrop-blur-[5px] flex gap-2 md:gap-4 items-center justify-center pl-4 md:pl-6 pr-1 md:pr-1 py-1 md:py-1 rounded-[100px] border border-solid border-white hover:bg-white/20 transition-all group cursor-pointer"
        >
          <p className="font-sans font-bold text-sm md:text-[16px] text-white">Register Now</p>
          <div className="bg-white flex items-center justify-center p-3 md:p-5 rounded-[100px] size-8 md:size-10 group-hover:scale-110 transition-transform">
            <svg className="block size-4 md:size-6" fill="none" preserveAspectRatio="none" viewBox="0 0 12.021 12.021">
              <path d={svgPaths.hero.pef3ef00} fill="#0066FF" />
            </svg>
          </div>
        </button>
      </div>

      {/* Hero Content */}
      <div className="relative flex flex-col gap-4 md:gap-4 items-center mt-12 md:mt-30 px-4 z-10 pb-20 md:pb-50">
        {/* Top Chip */}
        <div className="bg-white flex gap-2 md:gap-2 items-center px-4 md:px-6 py-2 md:py-2 rounded-3xl border border-[#fcfdff]">
          <svg className="size-5 md:size-6" fill="none" viewBox="0 0 21.5 20.5">
            <path d={svgPaths.hero.p1671be0} stroke="#002B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.hero.p2a6c4300} stroke="#002B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
          <p className="font-sans text-[#002b6b] text-xs md:text-[16px]">Your #1 Platform for Entrance Exam Review</p>
        </div>

        {/* Main Heading */}
        <h1 className="font-sans text-[#002b6b] text-3xl md:text-5xl lg:text-[72px] text-center max-w-full md:max-w-211.5 leading-[1.2] px-4">
          Showcase Your Mastery. Be A Scholar Ng Bayan!
        </h1>

        {/* Subheading */}
        <p className="font-sans text-[#414d60] text-sm md:text-[16px] text-center max-w-full md:max-w-107.5 px-4">
          Create your profile, showcase your skills, and let employers find you.
        </p>
      </div>

      {/* Feature Cards - Responsive Grid */}
      <div className="relative max-w-full md:max-w-300 mx-4 md:mx-auto px-4 pb-12 md:pb-25 z-10 -mt-8 md:-mt-25">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {[
            { title: "Study with flashcards", desc: "Use our AI powered flashcards for memorizing formulas and terms" },
            { title: "Tutor with AI assistant", desc: "Ask help and questions during study sessions" },
            { title: "Practice each lesson", desc: "Take practice session and learn every topic" },
            { title: "Find your exam", desc: "Search and take mock exam of your scholarship" }
          ].map((card, index) => (
            <div key={index} className="bg-white flex gap-3 md:gap-4 items-center p-4 md:p-6 rounded-3xl border border-[#edeef0] shadow-[10px_25px_100px_0px_rgba(0,43,107,0.25)] hover:shadow-[10px_25px_120px_0px_rgba(0,43,107,0.35)] hover:scale-105 transition-all cursor-pointer">
              <div className="bg-[#e1e9fe] flex items-center justify-center p-3 md:p-4 rounded-[43px] shrink-0">
                <svg className="size-5 md:size-6" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.hero.p32c9cc00} stroke="#0066FF" strokeLinecap="round" strokeWidth="1.5" />
                  <path d={svgPaths.hero.p332b4b80} stroke="#0066FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="flex flex-col gap-1 md:gap-1">
                <p className="font-sans text-[#1e242c] text-lg md:text-[24px] leading-[1.2]">{card.title}</p>
                <p className="font-sans text-[#414d60] text-sm md:text-[16px]">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============ SUBJECTS SECTION ============

interface SubjectCard {
  title: string;
  desc: string;
  tags: string[];
}

interface SubjectContent {
  cards: SubjectCard[];
}

interface SubjectsContentMap {
  english: SubjectContent;
  math: SubjectContent;
  science: SubjectContent;
  logic: SubjectContent;
  mechanical: SubjectContent;
}

function SubjectsSection() {
  const [activeTab, setActiveTab] = useState<keyof SubjectsContentMap>('english');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const subjectsContent: SubjectsContentMap = {
    english: {
      cards: [
        { title: "Reading Comprehension", desc: "Understanding passages by identifying main ideas, details, inferences, and author's purpose.", tags: ["short passages", "Inference", "vocabulary in context"] },
        { title: "Vocabulary", desc: "Knowledge of word meanings, synonyms, antonyms, and commonly used English words in context.", tags: ["synonyms", "antonyms", "analogies"] },
        { title: "Grammar & Usage", desc: "Correct use of tenses, subject–verb agreement, sentence structure, and error identification.", tags: ["tenses", "subject-verb agreement", "sentence correction"] },
        { title: "Paragraph and essay writing", desc: "Organizing ideas clearly to express thoughts, opinions, or experiences in written form.", tags: ["descriptive", "argumentative", "opinion essays"] },
        { title: "Sentence completion and correction", desc: "Choosing the word or phrase that best completes a sentence logically and grammatically based on context and meaning.", tags: ["context clues", "identifying errors"] }
      ]
    },
    math: {
      cards: [
        { title: "Algebra", desc: "Solving equations, inequalities, and working with variables, expressions, and functions.", tags: ["linear equations", "quadratic equations", "polynomials"] },
        { title: "Geometry", desc: "Understanding shapes, angles, areas, volumes, and spatial relationships.", tags: ["triangles", "circles", "solid figures"] },
        { title: "Trigonometry", desc: "Study of angles and their relationships with sides of triangles.", tags: ["sine", "cosine", "tangent"] },
        { title: "Statistics & Probability", desc: "Analyzing data, calculating measures, and determining likelihood of events.", tags: ["mean", "median", "probability"] },
        { title: "Number Theory", desc: "Properties of integers, divisibility, prime numbers, and factorization.", tags: ["prime numbers", "GCD", "LCM"] }
      ]
    },
    science: {
      cards: [
        { title: "Biology", desc: "Study of living organisms, cells, genetics, and ecological systems.", tags: ["cells", "genetics", "ecosystems"] },
        { title: "Chemistry", desc: "Matter, chemical reactions, elements, compounds, and molecular structures.", tags: ["periodic table", "reactions", "acids & bases"] },
        { title: "Physics", desc: "Motion, energy, forces, waves, and fundamental laws of nature.", tags: ["mechanics", "electricity", "optics"] },
        { title: "Earth Science", desc: "Geology, meteorology, oceanography, and environmental systems.", tags: ["rocks", "weather", "climate"] },
        { title: "Scientific Method", desc: "Hypothesis formation, experimentation, data analysis, and conclusion drawing.", tags: ["observation", "experimentation", "analysis"] }
      ]
    },
    logic: {
      cards: [
        { title: "Analytical Reasoning", desc: "Identifying patterns, relationships, and drawing logical conclusions from data.", tags: ["patterns", "sequences", "deduction"] },
        { title: "Critical Thinking", desc: "Evaluating arguments, identifying fallacies, and making sound judgments.", tags: ["arguments", "fallacies", "inference"] },
        { title: "Problem Solving", desc: "Applying logical approaches to solve complex problems systematically.", tags: ["strategies", "optimization", "decision making"] },
        { title: "Verbal Reasoning", desc: "Understanding and analyzing written information to draw conclusions.", tags: ["comprehension", "assumptions", "conclusions"] },
        { title: "Abstract Reasoning", desc: "Recognizing patterns in abstract shapes, symbols, and non-verbal information.", tags: ["patterns", "shapes", "relationships"] }
      ]
    },
    mechanical: {
      cards: [
        { title: "Mechanical Comprehension", desc: "Understanding basic mechanical principles, tools, and simple machines.", tags: ["levers", "pulleys", "gears"] },
        { title: "Spatial Reasoning", desc: "Visualizing and manipulating objects in three-dimensional space.", tags: ["3D visualization", "rotations", "projections"] },
        { title: "Technical Drawing", desc: "Reading and interpreting technical diagrams, blueprints, and schematics.", tags: ["blueprints", "symbols", "measurements"] },
        { title: "Basic Physics", desc: "Forces, motion, energy, and their applications in mechanical systems.", tags: ["force", "work", "energy"] },
        { title: "Tool Recognition", desc: "Identifying tools, their uses, and selecting appropriate tools for tasks.", tags: ["hand tools", "power tools", "applications"] }
      ]
    }
  };

  return (
    <div className="bg-[#fafafa] flex flex-col gap-6 md:gap-10 items-center px-4 md:px-25 py-12 md:py-22 w-full">
      <h2 className="font-['ABeeZee',sans-serif] text-3xl md:text-[56px] text-black text-center leading-[1.2]">
        Learn the coverage for the exam
      </h2>
      
      {/* Tabs */}
      <div className="flex gap-2 md:gap-2 items-start w-full max-w-full md:max-w-310 border-b border-[#c6cad1] overflow-x-auto">
        {[
          { id: 'english' as const, name: 'English', paths: [svgPaths.subjects.p213bf800, svgPaths.subjects.paf0b780, svgPaths.subjects.p1991e700], stroke: true },
          { id: 'math' as const, name: 'Mathematics', paths: [svgPaths.subjects.p3f947d00], stroke: true },
          { id: 'science' as const, name: 'Science', paths: [svgPaths.subjects.p20659900], stroke: true },
          { id: 'logic' as const, name: 'Logical Reasoning', paths: [svgPaths.subjects.p1b72dd00], stroke: false },
          { id: 'mechanical' as const, name: 'Mechanical Technical', paths: [svgPaths.subjects.p1a248480], stroke: true }
        ].map((subject) => (
          <button
            key={subject.id}
            onClick={() => setActiveTab(subject.id)}
            className={`flex-1 flex gap-2 md:gap-2 items-center justify-center px-3 md:px-4 py-2 md:py-3 transition-all min-w-max cursor-pointer group ${
              activeTab === subject.id
                ? 'bg-linear-to-b from-[rgba(230,240,255,0)] to-[#e6f0ff] border-b-2 border-[#06f]'
                : 'hover:bg-[#e6f0ff]/50'
            }`}
          >
            <svg className="size-5 md:size-6" fill="none" viewBox="0 0 24 24">
              {subject.paths.map((path, idx) => (
                subject.stroke ? (
                  <path 
                    key={idx} 
                    d={path} 
                    stroke={activeTab === subject.id ? '#0066FF' : '#6C7787'} 
                    className="group-hover:stroke-[#0066FF] transition-colors"
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="1.5" 
                  />
                ) : (
                  <path 
                    key={idx} 
                    d={path} 
                    fill={activeTab === subject.id ? '#0066FF' : '#6C7787'} 
                    className="group-hover:fill-[#0066FF] transition-colors"
                  />
                )
              ))}
            </svg>
            <p className={`font-['Manrope',sans-serif] text-xs md:text-[16px] transition-colors ${
              activeTab === subject.id ? 'font-medium text-[#06f]' : 'text-[#6c7787] group-hover:text-[#06f]'
            }`}>
              {subject.name}
            </p>
          </button>
        ))}
      </div>

      {/* Cards Content */}
      <div className="flex flex-col gap-4 md:gap-6 w-full max-w-full md:max-w-310">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {subjectsContent[activeTab].cards.slice(0, 3).map((card, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`flex-1 flex flex-col gap-4 md:gap-5.25 items-center px-4 md:px-4 py-5 md:py-6 rounded-3xl border cursor-pointer transition-all ${
                hoveredCard === idx
                  ? 'bg-[#e6f0ff] border-[#8ab9ff] shadow-[10px_25px_100px_0px_rgba(0,43,107,0.25)] scale-105'
                  : 'bg-white border-[#edeef0] hover:border-[#8ab9ff]'
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <p className="font-['Manrope',sans-serif] font-bold text-[#1e242c] text-lg md:text-[20px]">{card.title}</p>
                <p className="font-['Manrope',sans-serif] text-[#475569] text-xs md:text-[12px] mt-1">{card.desc}</p>
              </div>
              <div className="flex flex-wrap gap-1 md:gap-1 justify-center">
                {card.tags.map((tag, tagIdx) => (
                  <div key={tagIdx} className={`px-2 md:px-3 py-1 md:py-1 rounded-[100px] border transition-colors ${
                    hoveredCard === idx ? 'border-[#8ab9ff] bg-white/50' : 'border-[#edeef0]'
                  }`}>
                    <p className="font-['Manrope',sans-serif] font-medium text-[#323c4b] text-xs md:text-[12px]">{tag}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {subjectsContent[activeTab].cards.length > 3 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {subjectsContent[activeTab].cards.slice(3).map((card, idx) => (
              <div
                key={idx + 3}
                onMouseEnter={() => setHoveredCard(idx + 3)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`flex-1 flex flex-col gap-4 md:gap-5.25 items-center px-4 md:px-4 py-5 md:py-6 rounded-3xl border cursor-pointer transition-all ${
                  hoveredCard === idx + 3
                    ? 'bg-[#e6f0ff] border-[#8ab9ff] shadow-[10px_25px_100px_0px_rgba(0,43,107,0.25)] scale-105'
                    : 'bg-white border-[#edeef0] hover:border-[#8ab9ff]'
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <p className="font-['Manrope',sans-serif] font-bold text-[#1e242c] text-lg md:text-[20px]">{card.title}</p>
                  <p className="font-['Manrope',sans-serif] text-[#475569] text-xs md:text-[12px] mt-1">{card.desc}</p>
                </div>
                <div className="flex flex-wrap gap-1 md:gap-1 justify-center">
                  {card.tags.map((tag, tagIdx) => (
                    <div key={tagIdx} className={`px-2 md:px-3 py-1 md:py-1 rounded-[100px] border transition-colors ${
                      hoveredCard === idx + 3 ? 'border-[#8ab9ff] bg-white/50' : 'border-[#edeef0]'
                    }`}>
                      <p className="font-['Manrope',sans-serif] font-medium text-[#323c4b] text-xs md:text-[12px]">{tag}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* And More Button */}
      <button className="bg-white flex items-center px-4 md:px-6 py-2 md:py-2 rounded-[100px] border border-[#8ab9ff] hover:bg-[#e6f0ff] transition-colors cursor-pointer">
        <p className="font-['Manrope',sans-serif] font-bold text-[#06f] text-sm md:text-[16px]">And More!</p>
      </button>
    </div>
  );
}

// ============ FEATURES SECTION ============

function FeaturesSection() {
  return (
    <div className="bg-[#fafafa] w-full py-12 md:py-22 px-4">
      <div className="max-w-full md:max-w-8xl mx-auto">
        {/* Title */}
        <h2 className="font-['ABeeZee',sans-serif] text-[#1e242c] text-3xl md:text-[56px] text-center leading-[1.2] mb-12 md:mb-20">
          What are the features?
        </h2>

        {/* Features - Responsive Layout */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-center justify-center max-w-full md:max-w-300 mx-auto">
          {/* Left Column */}
          <div className="flex flex-col gap-6 md:gap-8 w-full lg:w-65">
            <FeatureCard title="AI Tutor" desc="AI that guides and explains lessons." />
            <FeatureCard title="Dynamic Quizzes" desc="Quizzes that change based on performance." />
          </div>

          {/* Center Video */}
          <div className="relative w-full max-w-75 md:max-w-87.25 h-120 md:h-143 bg-white rounded-3xl overflow-hidden shrink-0">
            <video autoPlay className="absolute w-full h-full object-cover" controlsList="nodownload" loop muted playsInline>
              <source src="/_videos/v1/e94258806ea570d5cef66e85b465f3f632fa9b6b" />
            </video>
            <p className="absolute font-['General_Sans',sans-serif] font-medium text-xl md:text-[24px] text-white bottom-10 md:bottom-15 left-1/2 -translate-x-1/2 text-center">
              Video Resume
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 md:gap-8 w-full lg:w-65">
            <FeatureCard title="AI Flashcards" desc="Smart cards that adapt to your learning." />
            <FeatureCard title="Adaptive Learning" desc="Personalized learning based on user pace." />
            <FeatureCard title="Study Planner" desc="Organizes and tracks study time." />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white flex flex-col gap-3 md:gap-4 items-center p-4 md:p-6 rounded-3xl border border-[#edeef0] shadow-[10px_25px_100px_0px_rgba(0,43,107,0.25)] hover:shadow-[10px_25px_120px_0px_rgba(0,43,107,0.35)] hover:scale-105 transition-all cursor-pointer">
      <svg className="size-10 md:size-12" fill="none" viewBox="0 0 48 48">
        <path d={svgPaths.features.p225a7040} stroke="#002B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M12.832 39.9218H22.5384" stroke="#002B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d={svgPaths.features.ped59fc0} stroke="#002B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d={svgPaths.features.p33989fb0} stroke="#002B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M34.3398 35.3458V35.3658" stroke="#002B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.1" />
      </svg>
      <div className="text-center">
        <p className="font-['Manrope',sans-serif] font-bold text-[#1e242c] text-lg md:text-[20px]">{title}</p>
        <p className="font-['Manrope',sans-serif] text-[#414d60] text-xs md:text-[12px] mt-1">{desc}</p>
      </div>
    </div>
  );
}

// ============ TESTIMONIALS SECTION ============

interface Testimonial {
  name: string;
  quote: string;
}

function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    { name: "Manuel Rikob", quote: "Working with Master in me has been an incredibly painless and enjoyable experience." },
    { name: "Sarah Chen", quote: "This platform helped me ace my entrance exam! The AI tutor is amazing and always available." },
    { name: "Juan Dela Cruz", quote: "I improved my scores by 40%! The practice tests and flashcards are super helpful." },
    { name: "Maria Santos", quote: "Best review platform ever! I got into my dream university thanks to Matalino." }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#fafafa] flex flex-col gap-6 md:gap-10 items-center px-4 md:px-25 py-12 md:py-22 w-full">
      <h2 className="font-['General_Sans',sans-serif] font-medium text-[#1e242c] text-3xl md:text-[56px] w-full leading-[1.2]">
        What our clients say
      </h2>
      
      <div className="bg-[#1e242c] w-full rounded-3xl overflow-hidden relative">
        <div className="flex flex-col gap-6 md:gap-10 items-center justify-center px-4 md:px-4 py-8 md:py-12">
          <p className="font-['Manrope',sans-serif] font-semibold text-white text-lg md:text-[20px]">
            {testimonials[currentIndex].name}
          </p>
          
          <div className="font-['General_Sans',sans-serif] font-medium text-white text-2xl md:text-[40px] text-center max-w-full md:max-w-132 leading-[1.2] min-h-30 md:min-h-40 flex items-center">
            <p>"{testimonials[currentIndex].quote}"</p>
          </div>
          
          <div className="flex gap-3 md:gap-4 items-center justify-center">
            <button 
              onClick={handlePrev}
              className="bg-[#edeef0] flex items-center justify-center p-4 md:p-5 rounded-[100px] hover:scale-110 hover:bg-[#d4d8dd] transition-all cursor-pointer"
            >
              <svg className="size-5 md:size-6" fill="none" viewBox="0 0 16 15.556">
                <path d={svgPaths.testimonials.p1426a480} fill="#002B6B" />
              </svg>
            </button>
            <button 
              onClick={handleNext}
              className="bg-[#06f] flex items-center justify-center p-4 md:p-5 rounded-[100px] hover:scale-110 hover:bg-[#0052cc] transition-all cursor-pointer"
            >
              <svg className="size-5 md:size-6" fill="none" viewBox="0 0 16 15.556">
                <path d={svgPaths.testimonials.p12c5be00} fill="white" />
              </svg>
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  idx === currentIndex ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============ FAQ SECTION ============

interface Faq {
  id: number;
  question: string;
  answer: string;
}

function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs: Faq[] = [
    { 
      id: 1, 
      question: "How do I create an account on the platform?", 
      answer: "Click on the 'Register Now' button at the top of the page. Fill in your basic information including name, email, and password. You'll receive a verification email to activate your account. Once verified, you can start using all our features immediately."
    },
    { 
      id: 2, 
      question: "What exams are covered on the platform?", 
      answer: "We cover major entrance examinations including UPCAT, ACET, USTET, DCAT, and many more. Our platform includes comprehensive review materials for English, Mathematics, Science, Logical Reasoning, and Mechanical Technical subjects."
    },
    { 
      id: 3, 
      question: "How does the AI Tutor work?", 
      answer: "Our AI Tutor uses advanced algorithms to understand your learning patterns and provide personalized explanations. You can ask questions anytime during your study sessions and get instant, detailed responses. It adapts to your pace and learning style to maximize understanding."
    },
    { 
      id: 4, 
      question: "Can I track my progress over time?", 
      answer: "Yes! Our platform provides comprehensive analytics showing your performance across different subjects. You can view your quiz scores, track improvement over time, identify weak areas, and get recommendations for topics that need more practice."
    },
    { 
      id: 5, 
      question: "Is there a cost to use the platform?", 
      answer: "We offer both free and premium plans. The free plan includes access to basic practice materials and limited AI assistance. Our premium plans provide unlimited access to all features, including advanced AI tutoring, full mock exams, and detailed analytics."
    }
  ];

  return (
    <div className="bg-white flex flex-col items-center px-4 md:px-25 py-12 md:py-22 w-full">
      <div className="w-full max-w-full md:max-w-310">
        <h2 className="font-['General_Sans',sans-serif] font-medium text-[#1e242c] text-3xl md:text-[56px] leading-[1.2] mb-8 md:mb-25.5">
          Frequently asked Questions
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-6 md:gap-7.5">
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-6 md:gap-7.5">
            {faqs.slice(0, 3).map((faq) => (
              <FaqItem
                key={faq.id}
                number={`0${faq.id}`}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === faq.id}
                onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col gap-6 md:gap-7.5">
            {faqs.slice(3, 5).map((faq) => (
              <FaqItem
                key={faq.id}
                number={`0${faq.id}`}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === faq.id}
                onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FaqItem({ number, question, answer, isOpen, onClick }: { number: string; question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div
      className={`rounded-3xl border transition-all cursor-pointer ${
        isOpen
          ? 'bg-[#e6f0ff] border-[#8ab9ff] shadow-[10px_25px_100px_0px_rgba(0,43,107,0.25)]'
          : 'bg-white border-[#e6e9ea] hover:border-[#8ab9ff] hover:shadow-md'
      }`}
    >
      <button
        onClick={onClick}
        className="flex gap-3 md:gap-4 items-start p-4 md:p-6 w-full text-left"
      >
        <div className={`flex items-center justify-center size-12 md:size-14 rounded-[48px] shrink-0 transition-colors ${
          isOpen ? 'bg-white' : 'bg-[#edeef0]'
        }`}>
          <p className="font-['Manrope',sans-serif] font-medium text-[#002b6b] text-base md:text-[20px]">{number}</p>
        </div>
        
        <div className="flex-1 flex flex-col gap-3 md:gap-4">
          <p className="font-['General_Sans',sans-serif] font-medium text-[#1e242c] text-lg md:text-[24px] leading-[1.2]">
            {question}
          </p>
          {isOpen && (
            <p className="font-['Manrope',sans-serif] text-[#414d60] text-sm md:text-[16px]">
              {answer}
            </p>
          )}
        </div>
        
        <svg className={`size-5 md:size-6 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24">
          <path
            d={svgPaths.faq.p2aa6f900}
            fill="#0066FF"
          />
        </svg>
      </button>
    </div>
  );
}

// ============ CTA FOOTER SECTION ============

// Footer Gradient Components
function FooterGradient() {
  return (
    <div className="h-[2021.402px] relative w-504.75" data-name="Gradient">
      <div className="absolute inset-[-17.63%_-8.23%_-4.22%_-4.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2271.01 2463.12">
          <g id="Gradient">
            <g filter="url(#filter0_f_footer1)" id="Ellipse 29">
              <ellipse cx="1026.52" cy="1438.46" fill="url(#paint0_linear_footer1)" rx="664.985" ry="673.184" transform="rotate(-128.459 1026.52 1438.46)" />
            </g>
            <g filter="url(#filter1_f_footer1)" id="Ellipse 28">
              <ellipse cx="1299.73" cy="823.791" fill="#3B1FE7" rx="449.681" ry="454.849" />
            </g>
            <g filter="url(#filter2_f_footer1)" id="Ellipse 30">
              <ellipse cx="1088.7" cy="728.258" fill="#FFC1DF" rx="367.337" ry="371.793" />
            </g>
            <g filter="url(#filter3_f_footer1)" id="Vector 109">
              <path d={svgPaths.hero.p1bfe6040} fill="white" fillOpacity="0.85" />
            </g>
            <g filter="url(#filter4_f_footer1)" id="Vector 111">
              <path d={svgPaths.hero.p3f085780} fill="white" fillOpacity="0.85" />
            </g>
            <g filter="url(#filter5_f_footer1)" id="Vector 110">
              <path d={svgPaths.hero.p1f56c6d0} fill="url(#paint1_linear_footer1)" fillOpacity="0.7" />
            </g>
            <g filter="url(#filter6_f_footer1)" id="Vector 112">
              <path d={svgPaths.hero.p22ce3c00} fill="white" fillOpacity="0.8" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2049.31" id="filter0_f_footer1" width="2053.04" x="0" y="413.802">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_footer1" stdDeviation="178.232" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1622.63" id="filter1_f_footer1" width="1612.29" x="493.586" y="12.4765">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_footer1" stdDeviation="178.232" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1456.52" id="filter2_f_footer1" width="1447.6" x="364.901" y="5.42146e-06">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_footer1" stdDeviation="178.232" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1292.36" id="filter3_f_footer1" width="1113.43" x="982.413" y="662.037">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_footer1" stdDeviation="89.1162" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1093.29" id="filter4_f_footer1" width="768.989" x="1502.03" y="660.843">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_footer1" stdDeviation="89.1162" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="986.866" id="filter5_f_footer1" width="857.407" x="840.07" y="893.548">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_footer1" stdDeviation="62.3814" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1144.72" id="filter6_f_footer1" width="1151.24" x="393.902" y="987.815">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_footer1" stdDeviation="106.94" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_footer1" x1="852.385" x2="1026.52" y1="1786.37" y2="2111.64">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#391DE8" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_footer1" x1="1472.62" x2="560.352" y1="1502.05" y2="650.165">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function FooterGradient1() {
  return (
    <div className="h-[2021.402px] relative w-504.75" data-name="Gradient">
      <div className="absolute inset-[-17.63%_-8.23%_-4.22%_-4.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2271.01 2463.12">
          <g id="Gradient">
            <g filter="url(#filter0_f_footer2)" id="Ellipse 29">
              <ellipse cx="1026.52" cy="1438.46" fill="url(#paint0_linear_footer2)" rx="664.985" ry="673.184" transform="rotate(-128.459 1026.52 1438.46)" />
            </g>
            <g filter="url(#filter1_f_footer2)" id="Ellipse 28">
              <ellipse cx="1299.73" cy="823.791" fill="#3B1FE7" rx="449.681" ry="454.849" />
            </g>
            <g filter="url(#filter2_f_footer2)" id="Ellipse 30">
              <ellipse cx="1088.7" cy="728.258" fill="#FFC1DF" rx="367.337" ry="371.793" />
            </g>
            <g filter="url(#filter3_f_footer2)" id="Vector 109">
              <path d={svgPaths.hero.p1bfe6040} fill="white" fillOpacity="0.85" />
            </g>
            <g filter="url(#filter4_f_footer2)" id="Vector 111">
              <path d={svgPaths.hero.p3f085780} fill="white" fillOpacity="0.85" />
            </g>
            <g filter="url(#filter5_f_footer2)" id="Vector 110">
              <path d={svgPaths.hero.p1f56c6d0} fill="url(#paint1_linear_footer2)" fillOpacity="0.7" />
            </g>
            <g filter="url(#filter6_f_footer2)" id="Vector 112">
              <path d={svgPaths.hero.p22ce3c00} fill="white" fillOpacity="0.8" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2049.31" id="filter0_f_footer2" width="2053.04" x="0" y="413.802">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_footer2" stdDeviation="178.232" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1622.63" id="filter1_f_footer2" width="1612.29" x="493.586" y="12.4765">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_footer2" stdDeviation="178.232" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1456.52" id="filter2_f_footer2" width="1447.6" x="364.901" y="5.42146e-06">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_footer2" stdDeviation="178.232" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1292.36" id="filter3_f_footer2" width="1113.43" x="982.413" y="662.037">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_footer2" stdDeviation="89.1162" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1093.29" id="filter4_f_footer2" width="768.989" x="1502.03" y="660.843">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_footer2" stdDeviation="89.1162" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="986.866" id="filter5_f_footer2" width="857.407" x="840.07" y="893.548">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_footer2" stdDeviation="62.3814" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1144.72" id="filter6_f_footer2" width="1151.24" x="393.902" y="987.815">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_footer2" stdDeviation="106.94" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_footer2" x1="852.385" x2="1026.52" y1="1786.37" y2="2111.64">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#391DE8" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_footer2" x1="1472.62" x2="560.352" y1="1502.05" y2="650.164">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function CtaFooterSection() {
  return (
    <div className="bg-white relative w-full overflow-hidden">
      {/* Purple Gradient Background */}
      <div className="absolute bottom-0 left-0 w-full h-150 md:h-227 overflow-hidden pointer-events-none">
        <div className="absolute flex h-[2021.402px] items-center justify-center left-[50%] md:left-107.75 -top-72.5 w-504.75 -translate-x-1/2 md:translate-x-0">
          <div className="flex-none rotate-180">
            <FooterGradient />
          </div>
        </div>
        <div className="absolute flex h-[2021.402px] items-center justify-center -left-271.25 -top-72.5 w-504.75">
          <div className="-scale-y-100 flex-none">
            <FooterGradient1 />
          </div>
        </div>
      </div>

		{/* Content */}
		<div className="relative z-10 flex flex-col items-center px-4 md:px-25 py-12 md:py-22 w-full">
			<div className="w-full max-w-full md:max-w-310">

			{/* CTA Box */}
			<div className="relative bg-linear-to-b from-[#e6f0ff] to-[#d4e3ff] rounded-3xl md:rounded-[64px] overflow-hidden mb-16 md:mb-24 border border-[#c8dff5]">
				{/* Decorative blobs */}
				<div className="absolute -top-20 -left-20 w-64 h-64 bg-[#dbeafe] rounded-full blur-3xl opacity-60 pointer-events-none" />
				<div className="absolute -bottom-16 -right-16 w-56 h-56 bg-[#bfdbfe] rounded-full blur-3xl opacity-50 pointer-events-none" />

				<div className="flex flex-col items-center gap-5 md:gap-6 px-6 md:px-12 py-14 md:py-22 relative z-10">
				{/* Badge */}
				<div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-[#c8dff5] px-4 py-1.5 rounded-full">
					<span className="size-2 rounded-full bg-[#06f]" />
					<p className="font-['Manrope',sans-serif] font-medium text-[#0066FF] text-xs md:text-sm">Ready to get started?</p>
				</div>

				<h2 className="font-['General_Sans',sans-serif] font-medium text-[#1e242c] text-2xl md:text-[40px] text-center leading-[1.2] max-w-full md:max-w-175">
					Join ambitious professionals and unlock your dream career today
				</h2>
				<p className="font-['Manrope',sans-serif] text-[#414d60] text-sm md:text-[16px] text-center max-w-full md:max-w-125 leading-relaxed">
					Unlock your true potential and discover a world of opportunities that align with your skills, interests, and aspirations
				</p>

				{/* Email Input */}
				<div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center bg-white rounded-full p-1.5 w-full max-w-full md:max-w-125 shadow-[0_4px_24px_0px_rgba(0,43,107,0.1)] border border-[#edeef0]">
					<div className="flex-1 flex items-center gap-3 px-5">
					<svg className="size-5 shrink-0 text-[#999]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
						<path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25v-10.5a2.25 2.25 0 0 1 2.25-2.25h15a2.25 2.25 0 0 1 2.25 2.25Z" strokeLinecap="round" strokeLinejoin="round" />
						<path d="M3.75 6.75l8.25 5.25 8.25-5.25" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
					<input
						type="email"
						placeholder="Enter your email address"
						className="flex-1 py-3 bg-transparent outline-none border-none ring-0 font-['Manrope',sans-serif] text-sm md:text-[16px] text-[#1e242c] placeholder-[#999]"
					/>
					</div>
					<button className="bg-[#06f] text-white px-7 py-3.5 rounded-full font-['Manrope',sans-serif] font-bold text-sm md:text-[16px] hover:bg-[#0052cc] hover:shadow-[0_4px_16px_0px_rgba(0,102,255,0.4)] transition-all cursor-pointer shrink-0">
					Join Us
					</button>
				</div>

				{/* Trust line */}
				<p className="font-['Manrope',sans-serif] text-[#6c7787] text-xs text-center mt-1">
					No credit card required · Free forever · Cancel anytime
				</p>
				</div>
			</div>

			{/* Footer Grid */}
			<div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 pb-10 md:pb-12">
				{/* Logo & Info */}
				<div className="col-span-2 md:col-span-1">
				<p className="font-['General_Sans',sans-serif] font-medium text-[#06f] text-xl md:text-[24px] mb-4">Matalino</p>
				<p className="font-['Manrope',sans-serif] text-[#6c7787] text-xs md:text-[13px] leading-relaxed mb-4">
					Your number one platform for entrance exam review. Powered by AI to help you achieve your scholarship dreams.
				</p>
				<div className="text-[#414d60] text-xs md:text-[13px] space-y-1.5 font-['Manrope',sans-serif]">
					<p><span className="text-[#1e242c] font-semibold">HQ:</span> Ibo, Lapu-Lapu City</p>
					<p><span className="text-[#1e242c] font-semibold">Phone:</span> 843-496-7759</p>
					<p><span className="text-[#1e242c] font-semibold">Email:</span> info@matalino.com</p>
				</div>
				</div>

				{/* Quick Links */}
				<div>
				<h3 className="font-['Manrope',sans-serif] font-bold text-[#1e242c] text-sm md:text-[14px] uppercase tracking-wider mb-4">Quick Links</h3>
        <div className="flex flex-col gap-3 font-['Manrope',sans-serif] text-[#6c7787] text-xs md:text-[13px]">
          <a href="#" className="hover:text-[#06f] cursor-pointer hover:translate-x-1 transition-all duration-200">Pricing</a>
          <a href="#" className="hover:text-[#06f] cursor-pointer hover:translate-x-1 transition-all duration-200">Jobs</a>
          <a href="#" className="hover:text-[#06f] cursor-pointer hover:translate-x-1 transition-all duration-200">Employer</a>
          <a href="#" className="hover:text-[#06f] cursor-pointer hover:translate-x-1 transition-all duration-200">Careers</a>
          <a href="#" className="hover:text-[#06f] cursor-pointer hover:translate-x-1 transition-all duration-200">Contact Us</a>
        </div>
				</div>

				{/* Others */}
				<div>
				<h3 className="font-['Manrope',sans-serif] font-bold text-[#1e242c] text-sm md:text-[14px] uppercase tracking-wider mb-4">Others</h3>
        <div className="flex flex-col gap-3 font-['Manrope',sans-serif] text-[#6c7787] text-xs md:text-[13px]">
          <a href="#" className="hover:text-[#06f] cursor-pointer hover:translate-x-1 transition-all duration-200">How it works</a>
          <a href="#" className="hover:text-[#06f] cursor-pointer hover:translate-x-1 transition-all duration-200">Terms and Conditions</a>
          <a href="#" className="hover:text-[#06f] cursor-pointer hover:translate-x-1 transition-all duration-200">Privacy Policy</a>
          <a href="#" className="hover:text-[#06f] cursor-pointer hover:translate-x-1 transition-all duration-200">About Us</a>
        </div>
				</div>

				{/* About Us */}
				<div>
				<h3 className="font-['Manrope',sans-serif] font-bold text-[#1e242c] text-sm md:text-[14px] uppercase tracking-wider mb-4">About Us</h3>
        <div className="flex flex-col gap-3 font-['Manrope',sans-serif] text-[#6c7787] text-xs md:text-[13px]">
          <a href="#" className="hover:text-[#06f] cursor-pointer hover:translate-x-1 transition-all duration-200">Company Milestone</a>
          <a href="#" className="hover:text-[#06f] cursor-pointer hover:translate-x-1 transition-all duration-200">Web Mail</a>
          <a href="#" className="hover:text-[#06f] cursor-pointer hover:translate-x-1 transition-all duration-200">Board of Directors</a>
          <a href="#" className="hover:text-[#06f] cursor-pointer hover:translate-x-1 transition-all duration-200">Senior Management</a>
        </div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="flex flex-col md:flex-row justify-between items-center pt-6 md:pt-8 border-t border-[#edeef0] gap-4">
				<p className="font-['Manrope',sans-serif] text-[#6c7787] text-xs md:text-[13px]">© 2024 Matalino. All rights reserved.</p>

				{/* Social Icons */}
				<div className="flex gap-2">
				{/* Facebook */}
				<a href="#" className="size-8 md:size-9 flex items-center justify-center rounded-full bg-[#f3f4f6] text-[#6c7787] hover:bg-[#e6f0ff] hover:text-[#06f] transition-all cursor-pointer">
					<svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
					<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
					</svg>
				</a>
				{/* Twitter / X */}
				<a href="#" className="size-8 md:size-9 flex items-center justify-center rounded-full bg-[#f3f4f6] text-[#6c7787] hover:bg-[#e6f0ff] hover:text-[#06f] transition-all cursor-pointer">
					<svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
					<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
					</svg>
				</a>
				{/* Instagram */}
				<a href="#" className="size-8 md:size-9 flex items-center justify-center rounded-full bg-[#f3f4f6] text-[#6c7787] hover:bg-[#e6f0ff] hover:text-[#06f] transition-all cursor-pointer">
					<svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
					<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
					</svg>
				</a>
				{/* LinkedIn */}
				<a href="#" className="size-8 md:size-9 flex items-center justify-center rounded-full bg-[#f3f4f6] text-[#6c7787] hover:bg-[#e6f0ff] hover:text-[#06f] transition-all cursor-pointer">
					<svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
					<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
					</svg>
				</a>
				</div>
			</div>
			</div>
		</div>
    </div>
  );
}

// ============ MAIN LANDING PAGE ============

export default function LandingPage() {
  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden">
      <HeroSection />
      <SubjectsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaFooterSection />
    </div>
  );
}