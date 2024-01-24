"use client";

import { capitalizeSentence } from "@/utils/utils";
import { WhatsappLogo } from "@phosphor-icons/react";

interface WhatsAppButtonProps {
  text: string;
  fullPhoneNumber: string;
  initialMessageText: string;
  backgroundColor?: "white" | "green";
  hasIcon?: boolean;
}

function WhatsAppButton({
  text,
  fullPhoneNumber,
  initialMessageText,
  backgroundColor = "white",
  hasIcon = true,
}: WhatsAppButtonProps) {
  const handleClick = () => {
    window.open(
      `https://wa.me/${fullPhoneNumber}?text=${encodeURIComponent(
        capitalizeSentence(initialMessageText)
      )}`,
      "_blank"
    );
  };

  let style =
    "basis-2/5 p-2 lg:basis-2/12 flex flex-row shrink-0 gap-1 bg-white text-primary-700 text-sm rounded-full justify-center items-center animated-button";

  if (backgroundColor === "green")
    style =
      "basis-2/5 p-2 lg:basis-2/12 flex flex-row shrink-0 gap-1 bg-primary-700 text-white text-sm rounded-full justify-center items-center animated-button-green";

  return (
    <button
      onClick={handleClick}
      className={style}
      title={`${capitalizeSentence(text)}`}
    >
      {hasIcon ? <WhatsappLogo size={30} className="ml-1" /> : ""}
      <span className="flex-1 font-bold">{capitalizeSentence(text)}</span>
    </button>
  );
}

export default WhatsAppButton;
