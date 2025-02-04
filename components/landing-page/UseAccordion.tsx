"use client";

import { useState, useEffect } from "react";

export default function UseAccordion() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showImage, setShowImage] = useState(true);

  const accordionItems = [
    {
      title: "Learn anywhere",
      content: "Accessible on both PC, mobile and tablets.",
      image: "./images/accordion-landingpage/anywhere.jpg",
    },
    {
      title: "Do I have to keep all of this in mind all the time?",
      content:
        "Cybersecurity is about developing the right instincts—recognizing shady activities before they become threats. It works in the background, not as something you constantly think about.",
      image: "./images/accordion-landingpage/keep-in-mind.jpg",
    },
    {
      title: "Stay secure at work and in personal life",
      content:
        "Gain practical cybersecurity skills that protect you both professionally and personally.",
      image: "./images/accordion-landingpage/cogs.jpg",
    },
    {
      title: "Even a basic course goes a long way",
      content:
        "A solid foundation in cybersecurity helps protect your systems, data, and privacy from digital threats.",
      image: "./images/accordion-landingpage/keep-in-mind.jpg",
    },
  ];

  return (
    <>
      <header className="text-[3rem] text-center mt-36 font-bold">
        It should not be complex
      </header>
      <div className="flex justify-center items-center mt-12 gap-8">
        {/* Accordion Section */}
        <div className="w-full max-w-[35rem]">
          {accordionItems.map((item, index) => (
            <div
              key={index}
              className="collapse collapse-plus border border-slate-600 mb-2"
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
        <div className="w-96 h-[20rem] flex justify-center items-center">
          {showImage && (
            <img
              src={accordionItems[selectedIndex].image}
              alt="Selected Information"
              className="rounded-lg w-full h-full object-cover"
            />
          )}
        </div>
      </div>
    </>
  );
}
