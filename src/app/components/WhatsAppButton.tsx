"use client";

import { capitalizeSentence } from "@/utils/utils";
import { WhatsappLogo } from "@phosphor-icons/react";

interface WhatsAppButtonProps {
  text: string;
}

function WhatsAppButton({ text }: WhatsAppButtonProps) {
  return (
    <button className="p-2 basis-2/12 flex flex-row shrink-0 bg-white text-secondary-700 rounded-full justify-center items-center animation-pulse">
      <WhatsappLogo size={30} />
      <span className="text-sm flex-1">{capitalizeSentence(text)}</span>
    </button>
  );
}

export default WhatsAppButton;
