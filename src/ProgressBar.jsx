import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(70); // Set the final progress value (e.g., 70%)
    }, 100); // Fast initial delay for starting animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className=" progress w-80 h-2 items-stretch bg-cyan-500 rounded-full">
      <div
        className="h-full bg-purple-500 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
