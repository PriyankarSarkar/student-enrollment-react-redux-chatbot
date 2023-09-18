import { useEffect, useState } from "react";
import "./style.css";
import bot from "../assets/bot.png";

const Gotit = ({ actions }) => {
  const [animation, setAnimation] = useState(true);
  const [visible, setVisible] = useState(true);

  const clientMsg = () => {
    actions.handleGotit("Got it !");
    setVisible((prev) => !prev);
  };

  useEffect(() => {
    setTimeout(() => {
      setAnimation(false);
    }, 3000);
  }, []);

  return (
    <div className="custom-msg-main">
      <img className="avatar" src={bot} alt="B" />
      {animation && <div className="msg animation-text">. . .</div>}
      {!animation && (
        <div className="msg">
          <div className="msg-text">Hello, Welcome to student info system!</div>
          {visible && (
            <div className="confirm-button" onClick={clientMsg}>
              Got it !
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Gotit;
