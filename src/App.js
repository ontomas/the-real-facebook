import React from "react";
import {
  FaHome,
  FaTv,
  FaStore,
  FaUserFriends,
  FaRulerCombined,
  FaUserCircle,
  FaPlus,
  FaFacebookMessenger,
  FaBell,
  FaCaretDown,
} from "react-icons/fa";
import Webcam from "react-webcam";

const App = () => {
  return (
    <div className="bg-gray-50 h-screen">
      <header className="flex justify-between items-end shadow-md px-4 bg-white z-10">
        <h1 className="text-2xl text-blue-500 py-2 font-bold">
          The Real Facebook
        </h1>
        <div className="flex">
          <FaHome
            size={38}
            className="text-blue-500 pb-2"
            style={{
              borderBottom: "2px solid rgba(59, 130, 246, 1",
              minWidth: 90,
            }}
          />
          <FaTv
            size={36}
            className="text-gray-500 pb-2"
            style={{
              borderBottom: "2px solid white",
              minWidth: 90,
            }}
          />
          <FaStore
            size={36}
            className="text-gray-500 pb-2"
            style={{
              borderBottom: "2px solid white",
              minWidth: 90,
            }}
          />
          <FaUserFriends
            size={36}
            className="text-gray-500 pb-2"
            style={{
              borderBottom: "2px solid white",
              minWidth: 90,
            }}
          />
          <FaRulerCombined
            size={36}
            className="text-gray-500 pb-2"
            style={{
              borderBottom: "2px solid white",
              minWidth: 90,
            }}
          />
        </div>
        <div className="flex py-2">
          <div className="flex items-center">
            <FaUserCircle size={32} />
            <p className="text-gray-600 font-bold ml-2">You</p>
            <div
              className="bg-gray-200 rounded-full ml-5 text-center flex items-center justify-center"
              style={{ width: 40, height: 40 }}
            >
              <FaPlus size={22} />
            </div>
            <div
              className="bg-gray-200 rounded-full ml-2 text-center flex items-center justify-center"
              style={{ width: 40, height: 40 }}
            >
              <FaFacebookMessenger size={22} />
            </div>
            <div
              className="bg-gray-200 rounded-full ml-2 text-center flex items-center justify-center"
              style={{ width: 40, height: 40 }}
            >
              <FaBell size={22} />
            </div>
            <div
              className="bg-gray-200 rounded-full ml-2 text-center flex items-center justify-center"
              style={{ width: 40, height: 40 }}
            >
              <FaCaretDown size={22} />
            </div>
          </div>
        </div>
      </header>
      <main className="px-4 grid grid-cols-8 gap-4 py-5">
        <div className="col-span-2 h-100 bg-gray-200 rounded shadow" />
        <div className="col-span-4">
          <div className="flex">
            <div className="mr-3 bg-gray-200 h-36 w-1/5 rounded shadow" />
            <div className="mr-3 bg-gray-200 h-36 w-1/5 rounded shadow" />
            <div className="mr-3 bg-gray-200 h-36 w-1/5 rounded shadow" />
            <div className="mr-3 bg-gray-200 h-36 w-1/5 rounded shadow" />
            <div className="bg-gray-200 h-36 w-1/5 rounded shadow" />
          </div>
          <div className="mt-4 bg-gray-200 rounded h-24 shadow" />
          <div className="bg-white rounded shadow mt-4">
            <div className="px-4 py-3">
              <div className="flex items-center">
                <FaUserCircle size={36} />
                <div className="ml-2">
                  <p className="font-medium text-sm">You</p>
                  <p className="font-medium text-xs text-gray-400">Now</p>
                </div>
              </div>
              <p className="text-sm mt-2">
                Stop chasing after others. Take care of yourself.
              </p>
            </div>
            <Webcam className="w-full" />
            <div className="px-4 py-3 flex justify-between">
              <div className="h-5 w-32 bg-gray-200 rounded" />
              <div className="h-5 w-20 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
        <div className="col-span-2 h-100 bg-gray-200 rounded shadow" />
      </main>
    </div>
  );
};

export default App;
