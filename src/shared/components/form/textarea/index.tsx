"use client";
import React from "react";

interface InputProps {
  name?: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextareaComponent = (data: InputProps) => {
  return (
    <textarea
      className="text-white w-full p-2 my-2 border border-blue-200 rounded-lg min-h-[150px]"      
      {...data}
    />
  );
};

export default TextareaComponent;
