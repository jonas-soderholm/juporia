import React from "react";
import "./lesson.css";
import Link from "next/link";

export interface Section {
  id: number;
  link: string;
  content: string[];
  question: string;
  answerKeywords: string[];
  sectionTitle: string;
  images?: string[];
}

export interface LessonProps {
  lessonsOverviewUrl: string;
  sections: Section[];
}

interface LessonContentProps {
  sections: Section[];
  currentSectionIndex: number;
  currentContentIndex: number;
  completedSections: Section[];
  feedback: string;
  userInput: string;
  isAnimating: boolean;
  handleNext: () => void;
  handleSubmit: () => void;
  setUserInput: (value: string) => void;
  lessonsOverviewUrl: string;
  isProcessing: boolean;
}

const LessonContent: React.FC<LessonContentProps> = ({
  sections,
  currentSectionIndex,
  currentContentIndex,
  completedSections,
  feedback,
  userInput,
  isAnimating,
  lessonsOverviewUrl,
  isProcessing,
  handleNext,
  handleSubmit,
  setUserInput,
}) => {
  const isLessonCompleted = currentSectionIndex >= sections.length;

  return (
    <div className="mb-32">
      {/* Completed Sections */}
      <div className=" animate-fade-in w-full max-w-2xl p-4 rounded-lg mb-6">
        <div className="flex flex-col gap-4">
          {completedSections.map((section, index) => (
            <div
              key={section.id + index}
              className=" animate-fade-in p-3 rounded-lg border-2 border-gray-500 dark:text-gray-300 text-gray-500 "
            >
              <h3 className="font-bold text-lg">{section.sectionTitle}</h3>
              {section.content.map((text: string, index: number) => (
                <div key={index} className="mt-1 my-4">
                  {section.images && section.images[index] && (
                    <img
                      src={section.images[index]}
                      alt={`Image for ${text}`}
                      className="my-4 rounded-lg max-w-full mx-auto"
                    />
                  )}
                  <p className="text-sm">{text}</p>
                </div>
              ))}
              <div className="font-semibold mt-2">{section.question}</div>
              <div className="text-green-600 font-bold mt-1 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-6 w-6 text-green-500"
                >
                  <circle cx="12" cy="12" r="10" fill="currentColor" />
                  <g transform="translate(0, 2)">
                    <path
                      d="M16.53 8.53a.75.75 0 0 0-1.06-1.06L10 12.94l-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l6-6z"
                      fill="white"
                    />
                  </g>
                </svg>
                <div className="flex flex-wrap items-center gap-2">
                  {section.answerKeywords.map((keyword, index) => (
                    <div
                      key={index}
                      className="bg-slate-600 text-green-500 px-2 rounded-md text-xs"
                    >
                      {keyword}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Current Section */}
      {!isLessonCompleted && (
        <div className="w-full max-w-2xl p-2 rounded-lg mb-[5rem]">
          <h2 className="text-xl font-semibold mb-4">
            {sections[currentSectionIndex].sectionTitle}
          </h2>
          {sections[currentSectionIndex].content
            .slice(0, currentContentIndex + 1)
            .map((text, index) => (
              <div key={index} className="mb-4 text-sm">
                {sections[currentSectionIndex] &&
                  Array.isArray(sections[currentSectionIndex].images) &&
                  sections[currentSectionIndex].images?.[index] && (
                    <img
                      className=" rounded-lg my-4 mx-auto"
                      src={sections[currentSectionIndex].images![index]}
                      alt={`Image for ${text}`}
                    />
                  )}
                <p>{text}</p>
              </div>
            ))}
          {currentContentIndex ===
          sections[currentSectionIndex].content.length - 1 ? (
            <>
              <p className="font-semibold mb-2">
                {sections[currentSectionIndex].question}
              </p>
              <div className="flex items-center gap-2">
                {sections[currentSectionIndex].answerKeywords.some(
                  (kw) => kw.trim() !== ""
                ) && (
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Your answer"
                    className="border border-gray-300 rounded-lg p-2 w-full"
                  />
                )}

                <button
                  disabled={isProcessing}
                  onClick={() => {
                    handleSubmit();
                  }}
                  className="bg-gray-500 text-white p-2 rounded-lg"
                >
                  {sections[currentSectionIndex].answerKeywords.some(
                    (kw) => kw.trim() !== ""
                  )
                    ? "Submit"
                    : "Next"}
                </button>
              </div>
              {feedback && (
                <div
                  className={`flex items-center gap-2 mt-2 font-bold ${
                    feedback === "Correct!"
                      ? "text-green-600"
                      : feedback === "Saving progress..."
                        ? "text-gray-600"
                        : `text-red-600 ${isAnimating ? "animate-bounce" : ""}`
                  }`}
                >
                  {feedback === "Correct!" ? (
                    <>
                      {/* Green check icon and text */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6 text-green-500"
                      >
                        <circle cx="12" cy="12" r="10" fill="currentColor" />
                        <g transform="translate(0, 2)">
                          <path
                            d="M16.53 8.53a.75.75 0 0 0-1.06-1.06L10 12.94l-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l6-6z"
                            fill="white"
                          />
                        </g>
                      </svg>
                      <span>{feedback}</span>
                    </>
                  ) : feedback === "Saving progress..." ? (
                    <>
                      {/* Gray spinner or icon to indicate saving */}
                      <svg
                        className="animate-spin h-6 w-6 text-gray-500 mt-1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        />
                      </svg>
                      <span>{feedback}</span>
                    </>
                  ) : (
                    <>
                      {/* Red error icon and text */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-6 w-6 text-red-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.75-4.25a1 1 0 112 0 1 1 0 01-2 0zM10 7a1 1 0 011 1v3a1 1 0 01-2 0V8a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feedback}</span>
                    </>
                  )}
                </div>
              )}
            </>
          ) : (
            // Next button
            <button
              onClick={handleNext}
              className="mt-4 bg-gray-500 text-white p-2 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#ffffff"
              >
                <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
              </svg>
            </button>
          )}
        </div>
      )}

      {/* Lesson Completed */}
      {isLessonCompleted && (
        <div className="p-4 rounded-lg text-center mb-[10rem]">
          <h2 className="text-3xl">🎉</h2>
          <h2 className="text-3xl font-bold text-green-600 my-2">
            Congratulations!
          </h2>
          <p className="text-lg">You’ve completed the lesson.</p>
          <Link href={lessonsOverviewUrl}>
            <button className="btn-custom-primary-reverse mt-4">
              Back to Lessons Overview
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default LessonContent;
