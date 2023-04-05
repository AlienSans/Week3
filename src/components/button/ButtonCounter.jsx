import "./ButtonCounter.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  selectCounterValue,
} from "../../slicers/counterSlice";

function ButtonCounter() {
  const count = useSelector(selectCounterValue);
  const dispatch = useDispatch();

  const handleMinus = () => {
    dispatch(decrement());
  };

  const handlePlus = () => {
    dispatch(increment());
  };

  return (
    <div className="btn-wrapper">
      <span className="btn-minus" onClick={handleMinus}>
        -
      </span>
      <span className="sum">{count}</span>
      <span className="btn-plus" onClick={handlePlus}>
        +
      </span>
    </div>
  );
}

export default ButtonCounter;
