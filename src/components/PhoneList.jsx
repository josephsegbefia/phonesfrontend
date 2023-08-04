import React from "react";
// import Phone from "./Phone";
const PhoneList = ({ phones }) => {
  return (
    <div>
      {phones.map((phone) => (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="p-8 rounded-t-lg" src="" alt="" />
          <div className="px-5 pb-5">{phone.name}</div>
        </div>
      ))}
    </div>
  );
};

export default PhoneList;
