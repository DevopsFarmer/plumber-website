"use client";

interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return (
    <button className=" text-black dark:text-white px-6 py-2 mt-4
">{text}</button>
  );
}