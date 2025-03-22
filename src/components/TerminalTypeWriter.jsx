import React, { useEffect, useState } from 'react'

// Terminal-style TypeWriter Component
const TerminalTypeWriter = ({ text, speed = 40, className = "" }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed]);

  return (
    <div className={`font-mono ${className}`}>
      <span className="text-neon-cyan">~/portfolio $ </span>
      <span className="text-white">{displayedText}</span>
      {!isComplete && <span className="animate-pulse text-neon-cyan">▋</span>}
    </div>
  );
};

export default TerminalTypeWriter;