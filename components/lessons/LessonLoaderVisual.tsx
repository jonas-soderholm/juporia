import { useState, useEffect, ReactNode } from "react";

function LessonLoaderVisual({ children }: { children: ReactNode }) {
  // Loading lesson visuals and delay
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show content after a delay
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 550);

    return () => clearTimeout(timer); // Clean up the timer
  }, []); // Trigger effect on component mount

  if (!showContent) {
    return (
      <div className="loader">
        <div className="logo-container mt-40">
          <img
            src="/images/logos/juporia-rounded-logo-opt.png"
            alt="Juporia Logo"
            className="rotating-logo rounded-full"
          />
        </div>
      </div>
    );
  }

  // Render the content once the loading is done
  return <>{children}</>;
}

export default LessonLoaderVisual;
