import { LessonButton } from "@/components/courses/LessonButton";

// Base URL for lessons
const BASE_URL = "/public-demo/courses/cybersecurity-basics-1";

const lessonName = "Cybersecurity basics 1.0";

// Lessons with enabled status
export const lessons = [
  {
    name: "Passwords: How Long Does It Take to Hack?",
    link: "/password",
    enabled: true, // Lesson is complete
    done: true,
  },
  {
    name: "Public Wi-Fi: A Target for Hackers",
    link: "/password2",
    enabled: true,
    done: false,
  },
  {
    name: "Social Engineering: Manipulating Trust",
    link: "/password3",
    enabled: false,
    done: false,
  },
  {
    name: "Phishing Scams: Recognizing the Threat",
    link: "/password4",
    enabled: false,
    done: false,
  },
  {
    name: "Malware: Understanding the Basics",
    link: "/password5",
    enabled: false,
    done: false,
  },
];

// Helper Functions
const getCheckmarkColor = (done: boolean) =>
  done ? "bg-green-400" : "text-slate-200";

const isButtonDisabled = (index: number) =>
  index > 0 && !lessons[index].enabled;

export default function Basics1() {
  return (
    <>
      <h1 className="text-xl md:text-3xl font-bold text-center mt-[2rem]">
        {lessonName}
      </h1>

      <div className="flex justify-center items-center">
        <ul className="timeline timeline-vertical relative mt-[2rem] bg-gray-700 p-6 rounded-lg m-3 max-w-[40rem]">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-slate-200 transform -translate-x-1/2"></div>

          {lessons.map((lesson, index) => (
            <li key={index} className="relative">
              {/* Lesson Content */}
              <div
                className={`timeline-${
                  index % 2 === 0 ? "start" : "end"
                } timeline-box bg-transparent border-transparent shadow-none`}
              >
                <LessonButton
                  lessonName={lesson.name}
                  link={`${BASE_URL}${lesson.link}`}
                  disabled={isButtonDisabled(index)} // Disable button if needed
                  done={lesson.done} // Add done status
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
                    <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
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
  );
}
