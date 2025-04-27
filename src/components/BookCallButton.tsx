import React from "react";

interface BookCallButtonProps {
  className?: string;
  variant?: "primary" | "secondary";
}

const BookCallButton: React.FC<BookCallButtonProps> = ({
  className = "",
  variant = "primary",
}) => {
  const handleClick = () => {
    window.open("https://calendly.com/prakarshgupta", "_blank");
  };

  const baseStyles =
    "px-6 py-3 rounded-lg font-semibold transition-all duration-300";
  const variantStyles =
    variant === "primary"
      ? "bg-primary text-white hover:bg-primary-dark"
      : "border-2 border-primary text-primary hover:bg-primary hover:text-white";

  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      Book a Discovery Call
    </button>
  );
};

export default BookCallButton;
