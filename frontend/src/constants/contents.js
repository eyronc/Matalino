export const dashboardContents = [
  {
    name: "FLASHCARDS",
    icon: "https://img.icons8.com/fluency/48/000000/note.png",
    description: "Generate flashcards from lessons.",
  },
  {
    name: "TAKE NOTES",
    icon: "https://img.icons8.com/fluency/48/000000/note.png",
    description: "Generate notes using AI from each lesson.",
  },
  {
    name: "CUSTOMIZE LESSON",
    icon: "https://img.icons8.com/fluency/48/000000/edit-file.png",
    description: "Upload your files and AI will generate a full lesson from them.",
  },
  {
    name: "MOCK EXAM",
    icon: "https://img.icons8.com/fluency/48/000000/test-passed.png",
    description: "Generate exams based on the coverage of the qualifying exam you applied for.",
  },
];

export const lessonsContents = [
  {
    name: "ENGLISH",
    icon: "https://img.icons8.com/fluency/48/000000/book.png", 
    description: "This subject tests reading comprehension, grammar, vocabulary, writing, and verbal reasoning, assessing both language skills and critical thinking.",
  },
  {
    name: "MATHEMATICS",
    icon: "https://img.icons8.com/fluency/48/000000/calculator.png",
    description: "This subject evaluates problem-solving, numerical reasoning, and analytical skills, covering arithmetic, algebra, geometry, and basic data interpretation.",
  },
  {
    name: "SCIENCE",
    icon: "https://img.icons8.com/fluency/48/000000/microscope.png", 
    description: "This subject explores the natural world, covering biology, chemistry, physics, and earth science.",
  },
  {
    name: "REASONING",
    icon: "https://img.icons8.com/fluency/48/000000/puzzle.png", 
    description: "Focuses on language-based logic and comprehension. Students solve problems using words, sentences, and text to develop critical thinking and reasoning skills.",
  },
];

export const examContents = [
  {
    name: "DOST-SEI/OWWA",
    description:
      "Tests reading comprehension, grammar, vocabulary, writing, and verbal reasoning, assessing both language skills and critical thinking.",
    coverage: ["English", "Mathematics", "Science", "Reasoning"],
  },
  {
    name: "PMMA",
    description:
      "Evaluates problem-solving, numerical reasoning, and analytical skills, covering arithmetic, algebra, geometry, and basic data interpretation.",
    coverage: ["Mathematics", "Science", "English", "Reasoning"],
  },
  {
    name: "Norwegian Scholarship",
    description:
      "Covers the natural sciences, including biology, chemistry, physics, and earth science, testing analytical and conceptual understanding.",
    coverage: ["Science", "Mathematics", "Reasoning"],
  },
  {
    name: "UPCAT",
    description:
      "University of the Philippines College Admission Test evaluates quantitative ability, reading comprehension, and logical reasoning.",
    coverage: ["Mathematics", "Science", "English", "Reasoning"],
  },
  {
    name: "DLSUCET",
    description:
      "De La Salle University College Entrance Test tests verbal, quantitative, and abstract reasoning to evaluate students’ aptitude for college programs.",
    coverage: ["Mathematics", "English", "Reasoning", "Science"],
  },
  {
    name: "FEU Entrance Exam",
    description:
      "Far Eastern University entrance exam assesses basic mathematics, English, and logical reasoning skills required for undergraduate programs.",
    coverage: ["Mathematics", "English", "Reasoning"],
  },
  {
    name: "UPCAT Scholar Program",
    description:
      "Special program for top-performing students, emphasizing advanced mathematics, science, and English proficiency.",
    coverage: ["Mathematics", "Science", "English"],
  }
];

export const customLessons = [];
export const customExamContents = [];

export const topicData = {
  topic: "Compose essentials",
  description:
    "Take your first steps with Jetpack Compose and learn about composable functions, basic layouts and state, Material Design, lists and animations.",
  activities: 10,
  quizzes: 1,
  modules: [
    {
      id: 1,
      title: "Starter tutorial",
      type: "Tutorial",
      content: ["Introduction", "Setup", "First run"],
    },
    {
      id: 2,
      title: "Thinking in Compose",
      type: "Video",
      content: ["Declarative UI", "Mental model"],
    },
    {
      id: 3,
      title: "Composable functions",
      type: "Video",
      content: ["@Composable", "Recomposition"],
    },
    {
      id: 4,
      title: "Write your first Compose app",
      type: "Codelab",
      content: ["Create project", "UI basics"],
    },
  ],
};
