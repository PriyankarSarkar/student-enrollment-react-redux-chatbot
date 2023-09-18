import React from "react";
import "./style.css";
import { useSelector } from "react-redux";

const ExitPage = () => {
  const UserData = useSelector((state) => state.UserDataSliceReducer);
  return (
    <div className="body">
      <div className="exitpage-main">
        <div className="exitpage-header">
          Your name {UserData.name} aged {UserData.age} has been added to student system. You may now exit.
        </div>
      </div>
    </div>
  );
};

export default ExitPage;
