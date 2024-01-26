"use client";

import { CaretDoubleUp } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

function BackButton() {
  const [showButton, setShowButton] = useState(false);

  const handleButtonClick = () => {
    window.location.href = "#";
  };

  useEffect(() => {
    document.addEventListener("scroll", (event) => {
      setShowButton(window.scrollY > 400);
    });
  }, []);

  let buttonStyle =
    "hidden justify-center items-center bottom-4 right-4 z-50 rounded-full bg-primary-400 w-20 h-20 cursor-pointer";

  if (showButton) {
    buttonStyle =
      "fixed justify-center items-center bottom-4 right-4 z-50 rounded-full bg-primary-400 w-20 h-20 cursor-pointer";
  }

  return (
    <div onClick={handleButtonClick} className={buttonStyle}>
      <CaretDoubleUp
        size={32}
        weight="bold"
        color="white"
        className="absolute border-red top-6 left-6"
      />
    </div>
  );
}

export default BackButton;
