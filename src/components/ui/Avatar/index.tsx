import React from "react";

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
  name?: string;
  ringColor?: string;
  ringThickness?: number;
  defaultImg?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 50,
  name,
  ringColor = "transparent",
  ringThickness = 0,
  defaultImg = "",
  className,
  style,
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        objectFit: "contain",
        height : '100%',
        ...style,
      }}
      className={className}
    >
      <img
        src={src || defaultImg}
        alt={alt}
        width={size}
        height={size}
        style={{
          borderRadius: "50%",
          height: "100%",
          objectFit: "cover",
          border: `${ringThickness}px solid ${ringColor}`,
        }}
      />
      {name && <span>{name}</span>}
    </div>
  );
};

export default Avatar;
