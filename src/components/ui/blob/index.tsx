'use client'
import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface BlobProps {
  className?: string;
  position?: {
    top?: string;
    left?: string;
    bottom?: string;
    right?: string;
  };
}

const Blob = forwardRef<HTMLDivElement, BlobProps>(({ className, position }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        top: position?.top,
        left: position?.left,
        bottom: position?.bottom,
        right: position?.right,
      }}
      className={twMerge(
        'absolute z-[1] gradient-primary-to-transparent h-[25rem] w-[25rem] blur-3xl',
        className
      )}
    />
  );
});

Blob.displayName = 'Blob';
export default Blob;
