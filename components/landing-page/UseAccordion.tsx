"use client";

import { useState } from "react";

export default function UseAccordion() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const accordionItems = [
    {
      title: "Do I have to keep cybersecurity in mind all the time?",
      content:
        "Cybersecurity is about developing the right instincts—recognizing shady activities before they become threats. It works in the background, not as something you constantly think about.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="550px"
          viewBox="0 -960 960 960"
          width="550px"
          fill="#2563eb"
        >
          <path d="M297-160q-8 0-15-4t-11-11l-84-150h71l42 80h90v-30h-72l-42-80H171l-63-110q-2-4-3-7.5t-1-7.5q0-2 4-15l63-110h105l42-80h72v-30h-90l-42 80h-71l84-150q4-7 11-11t15-4h118q13 0 21.5 8.5T445-770v175h-85l-30 30h115v130h-98l-39-80h-98l-30 30h108l40 80h117v215q0 13-8.5 21.5T415-160H297Zm273 0q-29 0-49.5-20.5T500-230q0-21 11-38t29-25v-374q-18-8-29-25t-11-38q0-29 20.5-49.5T570-800q29 0 49.5 20.5T640-730q0 21-11 38t-29 25v114l100-60q-3-31 18-54t52-23q29 0 49.5 20.5T840-620q0 29-20.5 49.5T770-550q-11 0-21-3t-18-8l-108 65 116 93q7-3 15-5t16-2q29 0 49.5 20.5T840-340q0 29-20.5 49.5T770-270q-35 0-55.5-27T702-356l-102-82v146q17 8 28 24.5t11 37.5q0 29-20 49.5T570-160Z" />
        </svg>
      ),
    },
    {
      title: "Why not a full security framework?",
      content:
        "Traditional security frameworks and third-party solutions are built for enterprises, making them complex, costly, and impractical for SMBs. But security isn't all or nothing. Our approach provides protection without the heavy burden—helping businesses stay secure while understanding when more advanced solutions might be necessary.",

      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="550px"
          viewBox="0 -960 960 960"
          width="550px"
          fill="#2563eb"
        >
          <path d="M160-80q-33 0-56.5-23.5T80-160v-480q0-33 23.5-56.5T160-720h160l160-160 160 160h160q33 0 56.5 23.5T880-640v480q0 33-23.5 56.5T800-80H160Zm0-80h640v-480H160v480Zm80-80h480L570-440 450-280l-90-120-120 160Zm460-200q25 0 42.5-17.5T760-500q0-25-17.5-42.5T700-560q-25 0-42.5 17.5T640-500q0 25 17.5 42.5T700-440ZM404-720h152l-76-76-76 76ZM160-160v-480 480Z" />
        </svg>
      ),
    },
    {
      title: "Learn anywhere",
      content: "Accessible on both PC, mobile and tablets.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="550px"
          viewBox="0 -960 960 960"
          width="550px"
          fill="#2563eb"
        >
          <path d="m590-488 160-92-160-92-160 92 160 92Zm0 122 110-64v-84l-110 64-110-64v84l110 64ZM481-480Zm340 320H601q0-15-1-30t-3-30h224v-520H141v60q-15-2-30-3t-30-1v-56q0-24.75 17.63-42.38Q116.25-800 141-800h680q24.75 0 42.38 17.62Q881-764.75 881-740v520q0 24.75-17.62 42.37Q845.75-160 821-160Zm-740 0v-104q41.67 0 70.83 30.33Q181-203.33 181-160H81Zm200 0q0-84.66-58-144.33Q165-364 81-364v-60q108.64 0 184.32 77.5Q341-269 341-160h-60Zm160 0q0-75-28-141.5t-77-116q-49-49.5-114.5-78T81-524v-60q87 0 163.5 33.5t133.5 91q57 57.5 90 135T501-160h-60Z" />
        </svg>
      ),
    },
    {
      title: "Stay secure at work and in personal life",
      content:
        "Gain practical cybersecurity skills that protect you both professionally and personally.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="550px"
          viewBox="0 -960 960 960"
          width="550px"
          fill="#2563eb"
        >
          <path d="M140-80q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h250v-140q0-24 18-42t42.41-18h59.18Q534-880 552-862q18 18 18 42v140h250q24 0 42 18t18 42v480q0 24-18 42t-42 18H140Zm0-60h680v-480H570v30q0 28-18 44t-42.41 16h-59.18Q426-530 408-546q-18-16-18-44v-30H140v480Zm92-107h239v-14q0-18-9-32t-23-19q-32-11-50-14.5t-35-3.5q-19 0-40.5 4.5T265-312q-15 5-24 19t-9 32v14Zm336-67h170v-50H568v50Zm-214-50q22.5 0 38.25-15.75T408-418q0-22.5-15.75-38.25T354-472q-22.5 0-38.25 15.75T300-418q0 22.5 15.75 38.25T354-364Zm214-63h170v-50H568v50ZM450-590h60v-230h-60v230Zm30 210Z" />
        </svg>
      ),
    },
    {
      title: "Even a basic course goes a long way",
      content:
        "A solid foundation in cybersecurity helps protect your systems, data, and privacy from digital threats.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="550px"
          viewBox="0 -960 960 960"
          width="550px"
          fill="#2563eb"
        >
          <path d="M479-208q16 0 24.5-5.5T512-230q0-11-8.5-17t-25.5-6q-42 0-85.5-26.5T337-373q-2-9-9-14.5t-15-5.5q-11 0-17 8.5t-4 17.5q15 84 71 121.5T479-208Zm1 128q-137 0-228.5-94T160-408q0-100 79.5-217.5T480-880q161 137 240.5 254.5T800-408q0 140-91.5 234T480-80Zm0-60q112 0 186-76.5T740-408q0-79-66.5-179.5T480-800Q353-688 286.5-587.5T220-408q0 115 74 191.5T480-140Zm0-340Z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <header className="text-[3rem] px-2 text-center mt-36 font-bold">
        It should not be complex
      </header>
      <div className="flex justify-center items-center mt-12 gap-8 p-4">
        {/* Accordion Section */}
        <div className="w-full max-w-[35rem]">
          {accordionItems.map((item, index) => (
            <div
              key={index}
              className="collapse collapse-plus border-2 border-gray-600 mb-2"
            >
              <input
                type="radio"
                name="accordion"
                checked={selectedIndex === index}
                onChange={() => setSelectedIndex(index)}
              />
              <div className="collapse-title text-xl font-medium">
                {item.title}
              </div>
              <div className="collapse-content">
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Section with Animation Fix */}
        <div className="w-96 h-[20rem] lg:flex hidden justify-center items-center">
          {accordionItems[selectedIndex].svg}
        </div>
      </div>
    </>
  );
}
