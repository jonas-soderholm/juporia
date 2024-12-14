import { LessonButton } from "@/components/courses/LessonButton";

// Base URL for lessons
const BASE_URL = "/public-demo/courses/cybersecurity-basics-1";

const lessonName = "Cybersecurity basics 1.0";

// Lessons with enabled status
export const lessons = [
  [
    {
      name: "Passwords: How Long Does It Take to Hack?",
      link: "/password",
      enabled: true,
      done: true,
      position: "start", // Explicitly set position
    },
    {
      name: "Public Wi-Fi: A Target for Hackers",
      link: "/password2",
      enabled: true,
      done: false,
      position: "end", // Explicitly set position
    },
    {
      name: "Social Engineering: Manipulating Trust",
      link: "/password3",
      enabled: false,
      done: false,
      position: "start", // Explicitly set position
    },
  ],
  [
    {
      name: "Phishing Scams: Recognizing the Threat",
      link: "/password4",
      enabled: false,
      done: false,
      position: "end",
    },
    {
      name: "Malware: Understanding the Basics",
      link: "/password5",
      enabled: false,
      done: false,
      position: "start",
    },
    {
      name: "Secure Software: Best Practices",
      link: "/password6",
      enabled: false,
      done: false,
      position: "end",
    },
  ],
  [
    {
      name: "Phishing Scams: Recognizing the Threat",
      link: "/password4",
      enabled: false,
      done: false,
      position: "end",
    },
    {
      name: "Malware: Understanding the Basics",
      link: "/password5",
      enabled: false,
      done: false,
      position: "start",
    },
    {
      name: "Secure Software: Best Practices",
      link: "/password6",
      enabled: false,
      done: false,
      position: "end",
    },
    {
      name: "Secure Software: Best Practices",
      link: "/password6",
      enabled: false,
      done: false,
      position: "end",
    },
  ],
];

// Helper Functions
const isButtonDisabled = (enabled: boolean) => !enabled;

export default function Basics1() {
  return (
    <>
      {/* Vertical Line */}
      <h1 className="text-xl md:text-3xl font-bold text-center mt-[2rem]">
        Cybersecurity Basics 1.0
      </h1>

      <div className="flex flex-col items-center gap-8 mt-6">
        {lessons.map((lessonArray, boxIndex) => (
          <>
            <div
              key={boxIndex}
              className="bg-gray-700 p-6 rounded-lg border border-gray-500 max-w-[40rem] w-full"
            >
              <ul className="timeline timeline-vertical relative">
                {lessonArray.map((lesson, index) => (
                  <li key={index} className="relative">
                    {/* Lesson Content */}
                    <div
                      className={`timeline-${lesson.position} timeline-box bg-transparent border-transparent shadow-none`}
                    >
                      <div className="absolute left-1/2 top-0 h-full w-[2px] bg-slate-200 transform -translate-x-1/2"></div>
                      <LessonButton
                        lessonName={lesson.name}
                        link={
                          lesson.enabled ? `${BASE_URL}${lesson.link}` : "#"
                        }
                        disabled={!lesson.enabled}
                        done={lesson.done}
                      />
                    </div>

                    {/* Checkmark */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                      {lesson.done ? (
                        // Checkmark for completed lessons
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-4 w-4 text-white bg-green-500 rounded-full p-1"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 5.292a1 1 0 00-1.408 0L8 12.586l-2.296-2.296a1 1 0 10-1.408 1.416l3 3a1 1 0 001.408 0l8-8a1 1 0 000-1.416z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : lesson.enabled ? (
                        // Enabled state: White circle with a blue dot
                        <div className="h-4 w-4 bg-white rounded-full flex items-center justify-center border border-gray-300">
                          <div className="h-2 w-2 bg-blue-500 rounded-full animate-pulse"></div>
                        </div>
                      ) : (
                        // Disabled state: Plain white circle
                        <div className="h-4 w-4 bg-white rounded-full border border-gray-300"></div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
