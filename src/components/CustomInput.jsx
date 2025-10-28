// src/components/CustomInput.jsx
import React from "react";

/**
 * A small wrapper input that forwards ref.
 * react-phone-number-input expects inputComponent to accept (value, onChange, ref, ...)
 * and that onChange receives the raw string value (not an event).
 *
 * This component preserves your UI classes — adjust as needed.
 */
const CustomInput = React.forwardRef(
  ({ value, onChange, className = "", type = "text", ...props }, ref) => {
    // react-phone-number-input will call this component with onChange expecting
    // a raw value setter. But in other usages of CustomInput you'll get event.
    // So we support both signatures:
    const handleChange = (e) => {
      // If called from a normal input event:
      if (e && e.target) {
        onChange?.(e.target.value);
      } else {
        // if called directly with a string (some libraries do)
        onChange?.(e);
      }
    };

    return (
      <input
        ref={ref}
        value={value ?? ""}
        onChange={handleChange}
        type={type}
        className={`w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#000F84] outline-none ${className}`}
        {...props}
      />
    );
  }
);

CustomInput.displayName = "CustomInput";
export default CustomInput;
