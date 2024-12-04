// components/Lesson.tsx
import { useState } from "react";

interface Section {
  text: string; // Instructional text for the section
  question: string; // Question for the user
  answer: string; // Correct answer
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

  const handleSubmit = () => {
    if (
      userInput.trim().toLowerCase() ===
      sections[currentSection].answer.toLowerCase()
    ) {
      const completed = sections[currentSection];
      setCompletedSections((prev) => [...prev, completed]);
      setFeedback("Correct!");
      setUserInput("");
      setTimeout(() => {
        setFeedback("");
        setCurrentSection((prev) => prev + 1);
      }, 1000);
    } else {
      setFeedback("Wrong. Try again.");
    }
  };

  if (currentSection >= sections.length) {
    return (
      <div className="flex flex-col justify-center items-center">
        <h1 className="my-5 text-2xl font-bold">{title}</h1>

        <div>
          <h2 className=" font-bold underline text-gray-600">
            Completed Questions:
          </h2>
          {completedSections.map((section, index) => (
            <div className="my-3" key={index}>
              <p>
                <strong>Question:</strong> {section.question}
              </p>
              <p>
                <strong>Answer:</strong> {section.answer}
              </p>
              <hr className="mt-3" />
            </div>
          ))}
          <p className="my-4 text-green-600">🎉 Lesson Complete! 🎉</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="my-5 text-2xl font-bold">{title}</h1>
      <div className="bg-red-700">
        {completedSections.map((section, index) => (
          <div className="text-gray-800" key={index}>
            <p>
              <strong>Question:</strong> {section.question}
            </p>
            <p>
              <strong>Your Answer:</strong> {section.answer}
            </p>
            <hr />
          </div>
        ))}
      </div>
      <div className="bg-gray-700">
        <p className="my-4">{sections[currentSection].text}</p>
        <p className="my-1">
          <strong>{sections[currentSection].question}</strong>
        </p>
      </div>
      <div className="bg-blue-700 m-4">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Your answer"
        />
        <button onClick={handleSubmit}>Submit</button>
        <p>{feedback}</p>
      </div>
    </div>
  );
}
