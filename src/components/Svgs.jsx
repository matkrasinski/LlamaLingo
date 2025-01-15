import React from "react";

export const ChevronLeftSvg = () => {
  return (
    <svg height="40" viewBox="0 96 960 960" width="40">
      <path
        fill="currentColor"
        d="M560.667 822.377 313.623 575.333 560.667 328.29l53.71 53.71-193.334 193.333 193.334 193.334-53.71 53.71Z"
      />
    </svg>
  );
};

export const ChevronRightSvg = () => {
  return (
    <svg height="40" viewBox="0 96 960 960" width="40">
      <path
        fill="currentColor"
        d="m375.333 822.377-53.71-53.71 193.334-193.334L321.623 382l53.71-53.71 247.044 247.043-247.044 247.044Z"
      />
    </svg>
  );
};

export const ChevronDownSvg = () => {
  return (
    <svg height="40" viewBox="0 96 960 960" width="40">
      <path
        fill="white"
        d="M480 717.138 233.623 470.761l53.71-53.71L480 610.385l192.667-192.667 53.71 53.71L480 717.138Z"
      />
    </svg>
  );
};
