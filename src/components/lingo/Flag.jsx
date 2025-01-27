import React from "react";

export const Flag = ({ language, width = 84 }) => {
  const height = width * (19.3171 / 24);
  const flagsSvgUrl = `${process.env.PUBLIC_URL}/flags.svg`;

  return (
    <svg viewBox={language.viewBox} style={{ height, width }}>
      <image
        href={flagsSvgUrl}
      />
    </svg>
  );
};

