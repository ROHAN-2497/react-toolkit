import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementByValue,
  increment,
  incrementByValue,
} from "../redux/features/counnter/counterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(count);
  return (
    <div className="border border-black p-4 mx-auto w-1/2  mt-28">
      <div className="flex  flex-col items-center ">
        <button
          className="bg-blue-800 text-white p-2 border my-4 "
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="bg-blue-800 text-white p-2 border "
          onClick={() => dispatch(incrementByValue(5))}
        >
          IncrementByValue 5
        </button>
        <h1 className="bg-black text-white h-8 w-8 m-4 flex justify-center items-center">
          {count}
        </h1>
        <button
          className="bg-red-500 text-white p-2 border my-4"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="bg-red-500 text-white p-2 border"
          onClick={() => dispatch(decrementByValue(5))}
        >
          DecrementByValue5
        </button>
      </div>
    </div>
  );
};

export default Counter;
