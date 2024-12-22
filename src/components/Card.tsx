import React from "react";
import { cn } from "../lib/utils";

interface CardProps {
  children: React.ReactNode; // Content inside the card
  className?: string; // Optional additional Tailwind classes
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return <div className={cn(className, "card")}>{children}</div>;
};

export default Card;
