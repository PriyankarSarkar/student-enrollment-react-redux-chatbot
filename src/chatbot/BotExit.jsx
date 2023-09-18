import { useEffect, useState } from "react";
import "./style.css";
import bot from "../assets/bot.png";
import { useNavigate } from "react-router-dom";

const BotExit = () => {
  const navigate = useNavigate();
  const [animation, setAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimation(false);
    }, 3000);

    setTimeout(() => {
      navigate('/exitpage');
    }, 8000);
  }, []);

  return (
    <div className="custom-msg-main">
      <img className="avatar" src={bot} alt="B" />
      {animation && <div className="msg animation-text">. . .</div>}
      {!animation && (
        <div className="msg">
          <div className="msg-text">
            Thank you. In 5 seconds, bot will exit.
          </div>
        </div>
      )}
    </div>
  );
};

export default BotExit;
