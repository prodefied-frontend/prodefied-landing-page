import React from "react";

const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
  label,
  name,
  ...rest
}) => {
  return (
    <div className="w-full">
      {label && <label className="block text-sm mb-1">{label}</label>}
      {type === "textarea" ? (
        <textarea
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full p-2 border rounded-md resize-none"
          rows={5}
          {...rest}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`border rounded-md px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
          required
        />
      )}
    </div>
  );
};

export default Input;
