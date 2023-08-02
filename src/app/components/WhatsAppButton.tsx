"use client";

import { capitalizeSentence } from "@/utils/utils";
import { WhatsappLogo } from "@phosphor-icons/react";

interface WhatsAppButtonProps {
  text: string;
  fullPhoneNumber: string;
  initialMessageText: string;
}

function WhatsAppButton({
  text,
  fullPhoneNumber,
  initialMessageText,
}: WhatsAppButtonProps) {
  const handleClick = () => {
    window.open(
      `https://wa.me/${fullPhoneNumber}?text=${encodeURIComponent(
        capitalizeSentence(initialMessageText)
      )}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="basis-1/2 p-2 lg:basis-2/12 flex flex-row shrink-0 bg-white text-primary-700 rounded-full justify-center items-center gap-1 animated-button"
      title={`${capitalizeSentence(text)}`}
    >
      <WhatsappLogo size={30} />
      <span className="font-bold text-sm">{capitalizeSentence(text)}</span>
    </button>
  );
}

export default WhatsAppButton;
