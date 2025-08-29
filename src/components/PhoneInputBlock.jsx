import React, { useRef, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function PhoneNumberField({ value, onChange }) {
  const phoneInputRef = useRef(null);

  const handleCountryChange = (phoneValue, countryData) => {
    const callingCode = `+${countryData.dialCode}`;
    onChange({
      ...value,
      country: countryData.countryCode?.toUpperCase() || "NG",
      code: callingCode,
    });
  };

  const handleNumberChange = (e) => {
    const cleaned = e.target.value.replace(/\D/g, "");
    onChange({ ...value, number: cleaned });
  };

  // Hide internal input after mount
  useEffect(() => {
    const input = phoneInputRef.current?.querySelector("input");
    if (input) input.style.display = "none";
  }, []);

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">
        Phone Number <span className="text-[#B30505]">*</span>
      </label>

      <div className="flex gap-2 items-center">
        {/* Flag + country code box */}
        <div
          ref={phoneInputRef}
          className="flex items-center border border-[#CBCBCB] rounded px-2 py-2 bg-white"
        >
          <PhoneInput
            country={value.country.toLowerCase()}
            onChange={(val, countryData) => handleCountryChange(val, countryData)}
            enableSearch
            disableCountryCode
            inputClass="hidden"
            buttonClass="!border-none !bg-transparent !p-0"
            containerClass="!flex !items-center !w-auto"
            dropdownClass="custom-phone-dropdown"
          />
          <span className="ml-2 text-sm text-[#1A1A1A]">{value.code}</span>
        </div>

        {/* Local number input */}
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
