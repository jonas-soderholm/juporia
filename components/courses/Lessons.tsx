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
      <div>
        <h1>{title}</h1>
        <p>🎉 Lesson Complete! 🎉</p>
        <div>
          <h2>Completed Questions:</h2>
          {completedSections.map((section, index) => (
            <div key={index}>
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
      </div>
    );
  }

  return (
    <div>
      <h1>{title}</h1>
      <div>
        {completedSections.map((section, index) => (
          <div key={index}>
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
      <div>
        <p>{sections[currentSection].text}</p>
        <p>
          <strong>{sections[currentSection].question}</strong>
        </p>
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
