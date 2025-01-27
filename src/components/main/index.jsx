import { React, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useBoundStore } from "../../hooks/useBoundStore";
import { getFirebaseToken, onForegroundMessage } from "../../firebase/firebase";
import { ToastContainer, toast } from 'react-toastify';
import LeftBar from "../lingo/LeftBar";
import Courses from "../lingo/Courses";
import coursesDone from "../../utils/coursesDone.json"

const PageWrapper = ({ left, center, right }) => {
  return (
    <div className="grid grid-cols-12 w-screen h-screen overflow-y-auto gap-4">
      <div className="col-span-1 bg-gray-100 p-4 lg:col-span-3 bg-white p-4">{left}</div>
      <div className={`col-span-10 bg-gray-100 p-4 lg:col-span-6 bg-gray-200 p-4`}>{center}</div>
      <div className="col-span-1 bg-gray-100 p-4 lg:col-span-3 bg-white p-4">{right}</div>
    </div>
  );
};

const UnitTile = ({ unit,done }) => {
  console.log(done)
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
            className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-xs font-bold text-gray-600 ${done[`unit${unit.unitNumber}`]?.[String(index+1)]==='done' ? "bg-green-500":"bg-white"}`}
            title={tile.description || tile.type}
            to={`/lessons/${unit.unitNumber}/${index + 1}/1/${unit.tiles[index].tasks[0].taskType
              }`}
          >
            {index+1}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Main = () => {
  const language = useBoundStore((state) => state.language);
  const { user } = useBoundStore();
  const [lastLesson, setLastLesson] = useState({unit: 0, lesson: 0});
  console.log(user.progress[user.courses[0].code]);
  // console.log(courses)
  // console.log(courses[user.courses[0].code])
  // console.log("user courses obj");
  // console.log(user.courses);
  // console.log("---------------------");


  useEffect(() => {
    onForegroundMessage()
      .then((payload) => {
        console.log('Received foreground message: ', payload);
        const { notification: { title, body } } = payload;
        toast(<ToastifyNotification title={title} body={body} />);
      })
      .catch(err => console.log('An error occured while retrieving foreground message. ', err));
  }, []);



  const ToastifyNotification = ({ title, body }) => (
    <div className="push-notification">
      <h2 className="push-notification-title">{title}</h2>
      <p className="push-notification-text">{body}</p>
    </div>
  );

  return (
    <>
      <ToastContainer/>

      <PageWrapper
        left={
          <div>
            <LeftBar />
          </div>
        }
        center={
          <div className="flex flex-col gap-4">
            {user.courses && user.courses.length > 0 ? (
              user.courses[0].units.map((unit) => (
                <UnitTile key={unit.unitNumber} unit={unit} done={user.progress[user.courses[0]?.code] || false}/>
              ))
            ) : (
              <p> Nie wybrano jezyka </p>
            )}
          </div>
        }
        right={
          <div>
            <Courses className="z-100"/>
          </div>
        }
      />
    </>
  );
};

export default Main;
