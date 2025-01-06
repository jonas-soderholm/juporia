import { useState, useEffect } from "react";
import { LessonProps, Section } from "./LessonLayout";
import LessonContent from "./LessonLayout";

export default function LessonEngine({ title, sections }: LessonProps) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [completedSections, setCompletedSections] = useState<Section[]>([]);
  const [scrollTrigger, setScrollTrigger] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Smoothly scroll to the bottom of the page
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  // Trigger scroll after layout updates
  useEffect(() => {
    if (scrollTrigger) {
      scrollToBottom();
      setScrollTrigger(false); // Reset flag to avoid repeated scrolling
    }
  }, [completedSections, currentContentIndex]);

  const handleNext = () => {
    const section = sections[currentSectionIndex];

    if (currentContentIndex < section.content.length - 1) {
      setCurrentContentIndex((prev) => prev + 1);
      setScrollTrigger(true); // Trigger scroll after updating content index
    }
  };

  const handleSubmit = () => {
    const currentSection = sections[currentSectionIndex];

    if (
      userInput.trim().toLowerCase() ===
      currentSection.answer.trim().toLowerCase()
    ) {
      setFeedback("Correct!");

      setTimeout(() => {
        // Save the current section to completedSections
        setCompletedSections((prev) => [
          ...prev,
          {
            ...currentSection,
            content: currentSection.content.slice(0, currentContentIndex + 1),
          },
        ]);

        // Update state for the next section
        setCurrentSectionIndex((prev) => prev + 1);
        setCurrentContentIndex(0);
        setUserInput("");
        setFeedback("");
        setScrollTrigger(true); // Trigger scroll after updating section
      }, 700);
    } else {
      setFeedback(" Try again.");
      setIsAnimating(true);

      setTimeout(() => {
        setIsAnimating(false); // End animation after 1.5 seconds
      }, 1500);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h1 className="text-3xl font-bold mb-6 mt-4">{title}</h1>
      <LessonContent
        sections={sections}
        currentSectionIndex={currentSectionIndex}
        currentContentIndex={currentContentIndex}
        completedSections={completedSections}
        feedback={feedback}
        userInput={userInput}
        handleNext={handleNext}
        handleSubmit={handleSubmit}
        setUserInput={setUserInput}
        isAnimating={isAnimating} // Pass animation state to LessonContent
      />
    </div>
  );
}
