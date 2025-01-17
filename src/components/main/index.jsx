import React from "react";
import { Link } from "react-router-dom";
// import Header from "../header";
import { useBoundStore } from "../../hooks/useBoundStore";
import { units } from "../../utils/units";
import LeftBar from "../lingo/LeftBar";
import Courses from "../lingo/Courses";

const PageWrapper = ({ left, center, right }) => {
  return (
    <div className="grid grid-cols-12 h-screen gap-4">
      <div className="col-span-3 bg-gray-100 p-4">{left}</div>
      <div className="col-span-6 bg-gray-200 p-4">{center}</div>
      <div className="col-span-3 bg-gray-300 p-4">{right}</div>
    </div>
  );
};

const UnitTile = ({ unit }) => {
  return (
    <div
      className={`flex flex-col items-center justify-between gap-4 rounded-lg border-2 p-4 ${unit.borderColor} w-full`}
    >
      <div className={`text-xl font-bold ${unit.textColor}`}>
        Unit {unit.unitNumber}
      </div>
      <div className="text-center text-sm text-gray-700">
        {unit.description}
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {unit.tiles.map((tile, index) => (
          <Link
            key={index}
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white text-xs font-bold text-gray-600"
            title={tile.description || tile.type}
            to={`/lessons/${unit.unitNumber}/${index + 1}/1`}
          >
            {tile.type[0].toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Main = () => {
  const language = useBoundStore((state) => state.language);
  const { user } = useBoundStore();

  return (
    <>
      {/* <Header /> */}

      <PageWrapper
        left={<div><LeftBar /></div>}
        center={
          <div className="flex flex-col gap-4">
            {units.map((unit) => (
              <UnitTile key={unit.unitNumber} unit={unit} />
            ))}
          </div>
        }
        right={<div>
          <Courses />
          <h1>Selected Language:</h1>
          <p>
            user: {user.uid} <br />
          </p>
          <p>
            <strong>Selected Language(s):</strong>
            <ul className="list-disc pl-5">
              {user.courses.length > 0 ? (
                user.courses.map((course, index) => (
                  <li key={index} className="text-sm text-gray-700">
                    {course.code || "Unknown Language"}
                  </li>
                ))
              ) : (
                <span>No courses added yet</span>
              )}
            </ul>
          </p>
          <p>
            Name: {language.name} <br />
            Native Name: {language.nativeName} <br />
            Code: {language.code}
          </p>
        </div>}
      />
    </>
  );
};

export default Main;
