import React, { useEffect, useState } from "react";

const ProgressBar3 = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(70); // Set the final progress value (e.g., 70%)
    }, 100); // Fast initial delay for starting animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className=" progress1 w-40 h-1.5 items-stretch bg-gray-500 rounded-full">
      <div
        className="h-50 bg-green-500 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar3;
