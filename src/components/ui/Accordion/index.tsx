"use client"
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface AccordionData {
  questions: string;  // Changed back to match your data structure
  answer: string;
  disabled?: boolean;
}

interface AccordionProps {
  data: AccordionData[];
  defaultExpandedIndex?: number;
  className?: string;
}

function Accordion({ 
  data, 
  defaultExpandedIndex = 0,
  className = '' 
}: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number>(defaultExpandedIndex);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className={`gradient-border-card  border: 1px solid rgba(255, 255, 255, 0.125); rounded-md ${className}`}>
      {data.map((item, index) => (
        <div key={index} className={
            twMerge("overflow-hidden", activeIndex === index ? '' : "" )
        }>
          <button
            onClick={() => !item.disabled && handleToggle(index)}
            className={`w-full p-4 text-left flex justify-between items-center
              ${item.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={item.disabled}
          >
            <span>{item.questions}</span>
            <span className={`transform transition-transform text-base border h-10 flex justify-center items-center rounded-full aspect-square duration-200`}>
              {activeIndex === index ? "➖" :  "✚"}
            </span>
          </button>
          
          <div
            className={`transition-all duration-200 
              ${activeIndex === index ? 'max-h-[500px]' : 'max-h-0'}`}
            style={{ overflow: 'hidden' }}
          >
            <div className="p-4 ps-8 text-white p text-sm bg-white/5">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;