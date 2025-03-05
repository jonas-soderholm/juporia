"use client";

import { useState, useEffect, useRef } from "react";
import { LessonProps, Section } from "./LessonLayout";
import LessonContent from "./LessonLayout";
import LessonLoaderVisual from "./LessonLoaderVisual";
import { PreloadLessonImages } from "./PreloadLessonImages";
import {
  updateLessonNr,
  updateSectionNr,
  resetSectionNr,
  getProgress,
} from "@/utils/course-progression/course-progression-actions";

export default function LessonEngine({
  sections,
  lessonsOverviewUrl,
  courseNr,
  currentLessonIndex,
}: LessonProps & {
  courseNr: number;
  currentLessonIndex: number;
}) {
  const [completedSections, setCompletedSections] = useState<Section[]>([]);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  let saveTimer: number;

  useEffect(() => {
    PreloadLessonImages({ sections }); // ✅ Now runs only on mount
  }, []);

  const hasFetched = useRef(false); // Track if data has already been fetched
  useEffect(() => {
    if (hasFetched.current) return; // Stop duplicate fetches
    hasFetched.current = true;

    const fetchProgress = async () => {
      try {
        const lessonNrFromDB = await getProgress(courseNr); // Fetch lesson number

        let sectionNr = 0;

        if (currentLessonIndex < lessonNrFromDB.lessonNr) {
          sectionNr = 1000;
        } else {
          sectionNr = lessonNrFromDB.sectionNr; // Adjust as necessary
        }

        setCurrentSectionIndex(sectionNr); // Set progress
        setCompletedSections(sections.slice(0, sectionNr)); // Mark sections as completed
      } catch (error) {
        console.error(`Error fetching progress for course ${courseNr}:`, error);
      }
    };

    fetchProgress();
  }, [courseNr, currentLessonIndex, sections]);

  const scrollToBottom = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 100);
  };

  const handleNext = () => {
    if (isProcessing) return;
    setIsProcessing(true);

    const section = sections[currentSectionIndex];
    scrollToBottom();

    if (currentContentIndex < section.content.length - 1) {
      setCurrentContentIndex((prev) => prev + 1);
    }

    // Re-enable the button after a short delay
    setTimeout(() => {
      setIsProcessing(false);
    }, 250);
  };

  const handleSubmit = async () => {
    if (isProcessing) return;
    setIsProcessing(true);

    const currentSection = sections[currentSectionIndex];
    const userInputNormalized = userInput.trim().toLowerCase();
    const isAnswerCorrect = currentSection.answerKeywords.some((keyword) =>
      userInputNormalized.includes(keyword.trim().toLowerCase())
    );

    if (isAnswerCorrect) {
      if (userInput) {
        saveTimer = 600;
        setFeedback("Correct!");
      } else {
        saveTimer = 350;
        setFeedback("Saving progress...");
      }

      updateSectionNr(courseNr);

      setTimeout(() => {
        const isLastSection = currentSectionIndex === sections.length - 1;

        setCompletedSections((prev) => {
          if (!prev.find((section) => section.id === currentSection.id)) {
            return [
              ...prev,
              {
                ...currentSection,
                content: currentSection.content.slice(
                  0,
                  currentContentIndex + 1
                ),
              },
            ];
          }
          return prev;
        });
        scrollToBottom();

        if (isLastSection) {
          setCurrentSectionIndex(sections.length);
          setFeedback("");
          setUserInput("");
          resetSectionNr(courseNr);
          updateLessonNr(courseNr);
        } else {
          setCurrentSectionIndex((prev) => prev + 1);
          setCurrentContentIndex(0);
          setUserInput("");
          setFeedback("");
        }
      }, saveTimer);
    } else {
      setFeedback("Try again.");
      setIsAnimating(true);

      setTimeout(() => {
        setIsAnimating(false);
      }, 1500);
    }

    // Re-enable the button after a short delay
    setTimeout(() => {
      setIsProcessing(false);
    }, saveTimer);
  };

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <LessonLoaderVisual>
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
          isAnimating={isAnimating}
          lessonsOverviewUrl={lessonsOverviewUrl}
          isProcessing={isProcessing}
        />
      </LessonLoaderVisual>
    </div>
  );
}
