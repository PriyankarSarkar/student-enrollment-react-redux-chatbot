import { useEffect, useState } from "react";
import "./style.css";
import bot from "../assets/bot.png";
import { useDispatch } from "react-redux";
import { addSlot } from "../store/Slices/UserDataSlice";

const Bookslot = ({ actions }) => {
  const dispatch = useDispatch();
  const [choosenDate, setChoosenDate] = useState("");
  const [animation, setAnimation] = useState(true);
  const [timeSlotVisible, setTimeSlotVisible] = useState(false);
  const [slotVisibleAfterConfirmation, setSlotVisibleAfterConfirmation] =
    useState(true);

  const dateStrip = [
    {
      date: "16 SEP",
      time: "SAT",
    },
    {
      date: "17 SEP",
      time: "SUN",
    },
    {
      date: "18 SEP",
      time: "MON",
    },
    {
      date: "19 SEP",
      time: "TUE",
    },
    {
      date: "20 SEP",
      time: "WED",
    },
  ];

  const timeSlots = [
    {
      phase: "Morning",
      slots: ["09:00 AM", "10:00 AM", "11:00 AM"],
    },
    {
      phase: "Afternoon",
      slots: ["01:00 PM", "02:00 PM", "03:00 PM"],
    },
    {
      phase: "Evening",
      slots: ["06:00 PM", "07:00 PM", "08:00 PM"],
    },
  ];

  const dateActive = (e) => {
    for (let i = 0; i < dateStrip.length; i++)
      e.target.parentNode.children[i].classList.remove("active");

    e.target.classList.add("active");

    setChoosenDate(
      e.target.children[0].innerText + ", " + e.target.children[1].innerText
    );
  };

  const confirmDate = (e) => {
    if (choosenDate.length == 0) return;

    e.target.parentNode.children[0].classList.add("disable");
    setTimeSlotVisible(true);
  };

  const confirmSlot = (e) => {
    setSlotVisibleAfterConfirmation(false);
    actions.handleSlotConfirmByClient(choosenDate + ", " + e.target.innerText);
    dispatch(addSlot(choosenDate + ", " + e.target.innerText));
  };

  useEffect(() => {
    setTimeout(() => {
      setAnimation(false);
    }, 3000);
  }, []);

  return (
    <>
      <div className="custom-msg-main">
        <img className="avatar" src={bot} alt="B" />
        {animation && <div className="msg animation-text">. . .</div>}
        {!animation && (
          <div className="msg">
            <div className="msg-text">Book a slot!</div>
          </div>
        )}
      </div>
      {!animation && slotVisibleAfterConfirmation && (
        <div className="day-strip-main">
          <div className="day-strip">
            {dateStrip.map((item, ind) => {
              return (
                <div
                  className="each-day"
                  key={ind}
                  onClick={(e) => {
                    dateActive(e);
                  }}
                >
                  <div className="date">{item.date}</div>
                  <div className="time">{item.time}</div>
                </div>
              );
            })}
          </div>
          {!timeSlotVisible && (
            <div
              className="confirm-button"
              onClick={(e) => {
                confirmDate(e);
              }}
            >
              Confirm
            </div>
          )}
        </div>
      )}

      {!animation && timeSlotVisible && slotVisibleAfterConfirmation && (
        <div className="time-slots-main">
          {timeSlots.map((item, ind) => {
            return (
              <div className="time-slots-inner" key={ind}>
                <div className="phase-header">{item.phase}</div>
                <div className="all-phase-slots">
                  {item.slots.map((slotTime, ind) => {
                    return (
                      <div
                        className="each-slot-time"
                        key={ind}
                        onClick={(e) => {
                          confirmSlot(e, choosenDate);
                        }}
                      >
                        {slotTime}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Bookslot;
