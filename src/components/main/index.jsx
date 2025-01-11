import React from "react";
import Header from "../header";
import { useBoundStore } from "../../hooks/useBoundStore";

const PageWrapper = ({ left, center, right }) => {
  return (
    <div className="grid grid-cols-6 h-screen gap-4">
      <div className="col-span-1 bg-gray-100 p-4">{left}</div>
      <div className="col-span-3 bg-gray-200 p-4">{center}</div>
      <div className="col-span-2 bg-gray-300 p-4">{right}</div>
    </div>
  );
};

const Main = () => {
  const language = useBoundStore((state) => state.language);
  return (
    <>
      <Header></Header>
      <h1>Selected Language:</h1>
      <p>
        Name: {language.name} <br />
        Native Name: {language.nativeName} <br />
        Code: {language.code}
      </p>
      <PageWrapper
      left={<div>Left Content</div>}
      center={<div>Center Content</div>}
      right={<div>Right Content</div>}
      />
    </>
  )
}

export default Main
