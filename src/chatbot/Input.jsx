import { useEffect, useState } from "react";
import "./style.css";
import bot from "../assets/bot.png";
import { useDispatch } from "react-redux";
import { addName } from "../store/Slices/UserDataSlice";
import { addAge } from "../store/Slices/UserDataSlice";

const Input = ({ actions, inputType }) => {
  const dispatch = useDispatch();
  const [animation, setAnimation] = useState(true);
  const [visible, setVisible] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const confirm = () => {
    if (inputValue.length == 0 || inputValue == "-") return;

    if (inputType == "NameInput")
    {
      actions.handleConfirmName(inputValue);
      dispatch(addName(inputValue));
    }
    else
    {
      actions.handleExit(inputValue);
      dispatch(addAge(inputValue));
    }
    setVisible((prev) => !prev);
  };

  useEffect(() => {
    setTimeout(() => {
      setAnimation(false);
    }, 3000);
  },[]);

  return (
    <div className="custom-msg-main">
      <img className="avatar" src={bot} alt="B" />
      {animation && <div className="msg animation-text">. . .</div>}
      {!animation && (
        <div className="msg">
          {inputType == "NameInput" ? (
            <div className="msg-text">Enter your name</div>
          ) : (
            <div className="msg-text">Enter your age</div>
          )}
          {visible && (
            <div className="">
              {inputType == "NameInput" ? (
                <input
                  className="name-input"
                  type="text"
                  name="name-input"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              ) : (
                <div className="">
                  <select
                    className="age-dropdown"
                    name="age"
                    id="age"
                    onChange={(e) => setInputValue(e.target.value)}
                  >
                    <option value="-">-</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                    <option value="32">32</option>
                    <option value="33">33</option>
                    <option value="34">34</option>
                    <option value="35">35</option>
                    <option value="36">36</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                  </select>
                </div>
              )}
              <div className="confirm-button" onClick={confirm}>
                Confirm
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Input;
