import React from "react";

export default function Footer() {
  return (
    <div>
      <div></div>
      <div>
        <h3 className=" font-semi-bold bg-black text-white">
          United Esan Association. All Rights Reserved. ©
          {new Date().getFullYear()}
        </h3>
      </div>
    </div>
  );
}
