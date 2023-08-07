"use client";

import { CaretDoubleUp } from "@phosphor-icons/react";

function BackButton() {
  const handleButtonClick = () => {
    window.location.href = "#";
  };

  return (
    <div
      onClick={handleButtonClick}
      className="fixed justify-center items-center bottom-1 right-1 z-50 rounded-full bg-primary-400 w-20 h-20 cursor-pointer"
    >
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
