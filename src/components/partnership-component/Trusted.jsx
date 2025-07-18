import React from "react";
import internpause from "../../assets/images/partnership-images/internpause.png";

const Trusted = () => {
  return (
    <div>
      <div className="flex items-center justify-center py-6 bg-[#CCd2FF]">
        <p>Trusted by :</p>
        <div className=" flex ml-2 gap-1">
          <img className="w-[30px]" src={internpause} alt="intern pause logo" />
          <p className="text-[#004AAD]">InternPause</p>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
