import { useSelector } from "react-redux";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  console.log(count);
  return (
    <div className="border border-black p-4 mx-auto w-1/2  mt-28">
      <div className="flex  flex-col items-center">
        <button className="bg-blue-800 text-white p-2 border ">
          Increment
        </button>
        <h1 className="bg-black text-white h-8 w-8 m-3 flex justify-center items-center">
          {count}
        </h1>
        <button className="bg-red-500 text-white p-2 border">Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
