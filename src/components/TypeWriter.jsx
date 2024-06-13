import React, { useState, useEffect } from "react";

export const Typewriter = ({
  text,
  speed,
  deleting,
  type,
  wait,
  onComplete = null,
  ...props
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleTyping = () => {
      if (!isDeleting && index < text.length) {
        setDisplayedText(displayedText + text.charAt(index));
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setDisplayedText(displayedText.slice(0, -1));
        setIndex(index - 1);
      } else if (isDeleting && index === 0) {
        setIsDeleting(false);
        setIndex(0);
      } else if (!isDeleting && index === text.length) {
        if (deleting) {
          timeoutId = setTimeout(() => {
            setIsDeleting(true);
          }, speed * 5); // Delay before starting to delete
        } else if (onComplete) {
          onComplete(); // Call the onComplete callback
        }
      }
    };

    if (index === 0 && wait > 0) {
      timeoutId = setTimeout(() => {
        timeoutId = setInterval(handleTyping, speed);
      }, wait);
    } else {
      timeoutId = setInterval(handleTyping, speed);
    }

    return () => clearTimeout(timeoutId);
  }, [
    index,
    text,
    speed,
    displayedText,
    isDeleting,
    deleting,
    wait,
    onComplete,
  ]);

  return type === "h1" ? (
    <h1 {...props}>{displayedText}</h1>
  ) : (
    <p {...props}>{displayedText}</p>
  );
};
