import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function PhoneNumberField() {
  const [phone, setPhone] = useState('');

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">
        Phone Number <span className="text-[#B30505]">*</span>
      </label>
      <PhoneInput
        country={'ng'}
        value={phone}
        onChange={phone => setPhone(phone)}
        enableSearch
        inputClass="!w-full !py-2 !pl-12 !border !rounded !border-[#CBCBCB]"
        buttonClass="!border-r !border-[#CBCBCB]"
        containerClass="!w-full"
        dropdownClass="custom-phone-dropdown"
      />
    </div>
  );
}
