import React from "react";

const SubscriptionCard = () => {
  return (
    <>
      <div className="border bg-[#67949E] py-3 px-5 my-5 mx-3 rounded-3xl">
        <div className="flex m-2">
          {/* Icon */}
          <div className="border p-1 bg-[#cbd9dc] rounded-full m-3">
            <div className="border p-1 bg-white rounded-full"></div>
          </div>
          {/* Duration */}
          <h1 className="text-white text-2xl font-bold flex-1">Monthly</h1>
          {/* Number */}
          <h1 className="text-white text-2xl font-bold">15/m</h1>
        </div>
        <p className="text-[#D2CCCC] text-center">
          Pay monthly, cancel at any time
        </p>
      </div>
      {/* Buttons */}
      <div className="flex justify-end m-5">
        <button className="bg-gradient-to-b from-[#E81B1B] to-white py-3 px-5 rounded-3xl drop-shadow-lg border text-white font-bold mr-4">Cancel</button>
        <button className="bg-gradient-to-b from-[#50737B] to-white py-3 px-5 rounded-3xl drop-shadow-lg border text-white font-bold">Renew</button>
      </div>
    </>
  );
};

export default SubscriptionCard;
