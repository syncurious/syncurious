"use client";
import React, { useState, useEffect } from "react";
import { StaticImageData } from "next/image";
import BaseImage from "next/image";
import { twMerge } from "tailwind-merge";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface Props {
  label?: string;
  placeholder?: string;
  labelClassName?: string;
  className?: string;
  prefixIcon?: string | StaticImageData;
  required?: boolean;
  type?: string;
  name?: string;
  initialValue?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  readOnly?: boolean;
  accept?: string;
  min?: string;
  max?: string;
  as?: "input" | "textarea";
  rows?: number;
  autoResize?: boolean;
}

export default function Input({
  label,
  placeholder,
  labelClassName,
  className,
  prefixIcon,
  name,
  required = false,
  type = "text",
  initialValue = "",
  value = "",
  disabled = false,
  onChange,
  accept,
  min,
  max,
  as = "input",
  rows = 4,
  autoResize = false,
}: Props) {
  const [inputValue, setInputValue] = useState(initialValue);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setInputValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
    onChange?.(event);

    if (autoResize && as === "textarea") {
      const el = event.target as HTMLTextAreaElement;
      el.style.height = "auto";
      el.style.height = el.scrollHeight + "px";
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="relative w-full">
      {label && (
        <label
          className={twMerge(
            "block text-[1.2rem] whitespace-nowrap text-ellipsis font-medium mb-2",
            required && "after:content-['*'] after:text-red-500 after:ml-1",
            labelClassName
          )}
        >
          {label}
        </label>
      )}

      {prefixIcon && as !== "textarea" && (
        <BaseImage
          src={prefixIcon}
          alt="icon"
          width={24}
          height={24}
          className="absolute left-3 bottom-0 transform -translate-y-1/2 pointer-events-none"
        />
      )}

      {as === "textarea" ? (
        <textarea
          name={name}
          value={inputValue}
          onChange={handleChange}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
        //   readOnly={readOnly}
          rows={rows}
          className={twMerge(
            "block w-full px-2 py-2 bg-transparent gradient-border-card rounded-lg outline-none resize-none focus:border-primary",
            className
          )}
        />
      ) : (
        <input
          type={showPassword ? "text" : type}
          name={name}
          value={inputValue}
          accept={accept}
          min={min || "1900-01-01"}
          max={max || "2500-12-31"}
          onChange={handleChange}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
        //   readOnly={readOnly}
          className={twMerge(
            "block w-full px-2 py-2 bg-transparent gradient-border-card rounded-lg outline-none focus:border-primary",
            prefixIcon ? "pl-10" : "",
            className
          )}
        />
      )}

      {type === "password" && as !== "textarea" && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 bottom-0 transform -translate-y-1/2"
        >
          {showPassword ? <AiFillEye size={24} /> : <AiFillEyeInvisible size={24} />}
        </button>
      )}
    </div>
  );
}
