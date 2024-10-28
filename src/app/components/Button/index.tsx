"use client";

import { useState } from "react";
import { Arrow } from "../Icons/Arrow";

interface Props {
  color: "mustard" | "indigo";
  hasIcon?: boolean;
  label: string;
}

const colorMapping = {
  mustard: {
    default: {
      bg: "bg-transparent",
      border: "border-[2px] border-mustard",
      text: "text-mustard",
      iconColor: "#FCD34D",
    },
    hover: {
      bg: "hover:bg-mustard hover:shadow-[0px_4px_4px_0px_#00000040]",
      text: "hover:text-indigo",
      border: "",
      iconColor: "#581C87",
    },
  },
  indigo: {
    default: {
      bg: "bg-transparent",
      border: "border-[2px] border-indigo",
      text: "text-indigo",
      iconColor: "#581C87",
    },
    hover: {
      bg: "hover:bg-indigo hover:shadow-[0px_4px_4px_0px_#00000040]",
      text: "hover:text-mustard",
      border: "",
      iconColor: "#FCD34D",
    },
  },
};

export function Button({ color, hasIcon, label }: Props) {
  const [hover, setHover] = useState(false);
  const baseClasses =
    "text-2xl leading-6 tracking-[0.5px] font-bold w-[306px] h-[64px] flex items-center justify-center rounded-[100px] px-5 py-6 justify-between";

  const { bg, border, text, iconColor } = colorMapping[color].default;
  const {
    bg: hoverBg,
    text: hoverText,
    iconColor: hoverIconColor,
  } = colorMapping[color].hover;

  const buttonClasses = `${baseClasses} ${bg} ${border} ${text} ${hoverBg} ${hoverText}`;

  return (
    <button
      className={buttonClasses}
      onClick={() => {}}
      onMouseLeave={() => setHover(false)}
      onMouseOver={() => setHover(true)}
    >
      <span className="pl-6">{label}</span>
      {hasIcon && <Arrow color={hover ? hoverIconColor : iconColor} />}
    </button>
  );
}
