import { useState, useRef } from "react";

interface Section {
  id: number; // Unique identifier for the section
  content: string; // Instructional text for the section
  question: string; // Question for the user
  answer: string; // Correct answer
  sectionTitle: string; // Title of the section
}

interface LessonProps {
  title: string; // Title of the lesson
  sections: Section[]; // Array of sections
}

export default function Lessons({ title, sections }: LessonProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [completedSections, setCompletedSections] = useState<Section[]>([]);

  const currentSectionRef = useRef<HTMLDivElement | null>(null);

  const handleSubmit = () => {
    if (
      userInput.trim().toLowerCase() ===
      sections[currentSection].answer.toLowerCase()
    ) {
      const completed = sections[currentSection];
      setCompletedSections((prev) => [...prev, completed]);
      setFeedback("");
      setUserInput("");

      // Move to the next section immediately
      setCurrentSection((prev) => prev + 1);

      // Scroll to the next section
      if (currentSectionRef.current) {
        currentSectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setFeedback("Wrong. Try again.");
    }
  };

  // Check if the lesson is completed
  const isLessonCompleted = currentSection >= sections.length;

  return (
    <div className="flex flex-col justify-center items-center p-4">
      {/* Lesson Title */}
      <h1 className="text-3xl font-bold mb-6 mt-4">{title}</h1>

      {/* Completed Sections */}
      <div className="w-full max-w-2xl p-4 rounded-lg mb-6 ">
        <div className="flex flex-col gap-4">
          {completedSections.map((section) => (
            <div
              key={section.id}
              className="p-3 rounded-lg border-2 border-gray-500 dark:text-gray-500 text-gray-500"
            >
              <h3 className="font-bold text-lg">{section.sectionTitle}</h3>
              <p className="text-sm mt-1">{section.content}</p>
              <p className="font-semibold mt-2">{section.question}</p>
              <p className="text-green-600 font-bold mt-1">
                Your Answer: {section.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Current Section */}
      {!isLessonCompleted && (
        <div
          ref={currentSectionRef}
          className="w-full max-w-2xl p-2 rounded-lg mb-[17.5rem]"
        >
          <h2 className="text-xl font-semibold mb-4">
            {sections[currentSection].sectionTitle}
          </h2>
          <p className="mb-4 text-sm">{sections[currentSection].content}</p>
          <p className="font-semibold mb-2">
            {sections[currentSection].question}
          </p>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Your answer"
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white p-2 rounded-lg"
            >
              Submit
            </button>
          </div>
          {feedback && (
            <p
              className={`mt-2 font-bold ${
                feedback === "Correct!" ? "text-green-600" : "text-red-600"
              }`}
            >
              {feedback}
            </p>
          )}
        </div>
      )}

      {/* Lesson Completed */}
      {isLessonCompleted && (
        <div className="w-full max-w-2xl bg-green-100 p-4 rounded-lg shadow-md text-center mb-[17.5rem]">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Congratulations!
          </h2>
          <p className="text-lg">You’ve completed the lesson.</p>
        </div>
      )}
    </div>
  );
}
