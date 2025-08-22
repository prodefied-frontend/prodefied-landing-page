import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function PhoneNumberField({ value, onChange }) {
  // value = { country: "NG", code: "+234", number: "" }

  const handleCountryChange = (phoneValue, countryData) => {
    const callingCode = `+${countryData.dialCode}`;
    onChange({
      ...value,
      country: countryData.countryCode?.toUpperCase() || "NG",
      code: callingCode,
    });
  };

  const handleNumberChange = (e) => {
    const cleaned = e.target.value.replace(/\D/g, ""); // keep only digits
    onChange({ ...value, number: cleaned });
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">
        Phone Number <span className="text-[#B30505]">*</span>
      </label>
      <div className="flex gap-2">
        {/* Country code selector */}
        <PhoneInput
          country={value.country.toLowerCase()}
          value={value.code.replace("+", "")} // keep only the code
          onChange={(val, countryData) => handleCountryChange(val, countryData)}
          enableSearch
          disableDropdown={false}
          inputClass="!w-20 !py-2 !pl-10 !border !rounded !border-[#CBCBCB]"
          buttonClass="!border-r !border-[#CBCBCB]"
          containerClass="!w-20"
          dropdownClass="custom-phone-dropdown"
        />

        {/* Main phone number field */}
        <input
          type="tel"
          placeholder="Enter phone number"
          value={value.number}
          onChange={handleNumberChange}
          className="flex-1 border border-[#CBCBCB] rounded px-3 py-2"
        />
      </div>
    </div>
  );
}
