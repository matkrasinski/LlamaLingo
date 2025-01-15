import React from "react";
import { Link } from "react-router-dom";
import Header from "../header";
import { useBoundStore } from "../../hooks/useBoundStore";
import units from "../../utils/units";

const PageWrapper = ({ left, center, right }) => {
  return (
    <div className="grid grid-cols-6 h-screen gap-4">
      <div className="col-span-1 bg-gray-100 p-4">{left}</div>
      <div className="col-span-3 bg-gray-200 p-4">{center}</div>
      <div className="col-span-2 bg-gray-300 p-4">{right}</div>
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
      <Header />

      <PageWrapper
        left={<div>Left Content</div>}
        center={
          <div className="flex flex-col gap-4">
            {units.map((unit) => (
              <UnitTile key={unit.unitNumber} unit={unit} />
            ))}
          </div>
        }
        right={<div>
          <h1>Selected Language:</h1>
          <p>
            user: { user.uid } <br />
            currLangcure: {user.language.join(", ")} <br />
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
