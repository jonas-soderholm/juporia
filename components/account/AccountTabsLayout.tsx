"use client";

import { useState } from "react";

export default function AccountTabsLayout({
  menuItems,
}: {
  menuItems: { name: string; content: React.ReactNode }[];
}) {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active tab

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 w-full max-w-lg">
        {menuItems.map((item, index) => (
          <button
            key={index}
            role="tab"
            onClick={() => setActiveIndex(index)} // Change the active tab on click
            className={`px-4 py-2 text-sm font-medium ${
              activeIndex === index
                ? "border-b-2 border-blue-500 text-blue-500"
                : "hover:text-blue-500"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="w-full max-w-2xl mt-6 rounded-lg p-6 border border-gray-400">
        <h1 className="text-lg font-bold mb-4">
          {menuItems[activeIndex].name}
        </h1>
        <div className="text-sm">{menuItems[activeIndex].content}</div>
      </div>
    </div>
  );
}
