import { useState } from "react";
import { storeEmployeeForm } from "../http";
import { useSelector, useDispatch } from "react-redux";
import { setFilled } from "../store/Slices/authSlice";

const FillForm = () => {
  const { user } = useSelector((state) => state.auth);
  const disptach = useDispatch();
  const [data, setdata] = useState({
    jobKonwledge: "",
    problemSolvingAbility: "",
    productivity: "",
    communictionSkill: "",
    leadership: "",
    creativity: "",
    achievements: " ",
    projects: " ",
  });

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.name] = e.target.value;
    setdata(newdata);
  }

  const submit = async () => {
    console.log(data);
    const newData = { ...data, userId: user._id, isSubmited: false };
    try {
      const { data } = await storeEmployeeForm({ data: newData });
      console.log(data);
      disptach(setFilled(data.isFilled));
    } catch (error) {
      console.log(error);
      return alert("Same internal error");
    }
  };
  return (
    <>
      <div className="grid grid-cols-2 items-center justify-center flex-col container pt-4">
        <div className="flex items-center justify-center flex-col m-8">
          <h1 className="font-bold mb-1">Job Knowledge</h1>
          <div className="inline-block relative w-64 ">
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              name="jobKonwledge"
              onChange={(e) => handle(e)}
            >
              <option> 1</option>
              <option> 2</option>
              <option> 3</option>
              <option> 4</option>
              <option> 5</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col m-8">
          <h1 className="font-bold mb-1">Problem Solving Ability</h1>
          <div className="inline-block relative w-64 ">
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              name="problemSolvingAbility"
              onChange={(e) => handle(e)}
            >
              <option> 1</option>
              <option> 2</option>
              <option> 3</option>
              <option> 4</option>
              <option> 5</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col m-8">
          <h1 className="font-bold mb-1">productivity</h1>
          <div className="inline-block relative w-64 ">
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              name="productivity"
              onChange={(e) => handle(e)}
            >
              <option> 1</option>
              <option> 2</option>
              <option> 3</option>
              <option> 4</option>
              <option> 5</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col m-8">
          <h1 className="font-bold mb-1">communictionSkill</h1>
          <div className="inline-block relative w-64 ">
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              name="communictionSkill"
              onChange={(e) => handle(e)}
            >
              <option> 1</option>
              <option> 2</option>
              <option> 3</option>
              <option> 4</option>
              <option> 5</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col m-8">
          <h1 className="font-bold mb-1">leadership</h1>
          <div className="inline-block relative w-64 ">
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              name="leadership"
              onChange={(e) => handle(e)}
            >
              <option> 1</option>
              <option> 2</option>
              <option> 3</option>
              <option> 4</option>
              <option> 5</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col m-8">
          <h1 className="font-bold mb-1">creativity</h1>
          <div className="inline-block relative w-64 ">
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              name="creativity"
              onChange={(e) => handle(e)}
            >
              <option> 1</option>
              <option> 2</option>
              <option> 3</option>
              <option> 4</option>
              <option> 5</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col m-8">
          <h1 className="font-bold mb-1">achievements</h1>
          <div className="inline-block relative w-64 ">
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              name="achievements"
              onChange={(e) => handle(e)}
            >
              <option> 1</option>
              <option> 2</option>
              <option> 3</option>
              <option> 4</option>
              <option> 5</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col m-8">
          <h1 className="font-bold mb-1">Projects</h1>
          <div className="inline-block relative w-64 ">
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              name="projects"
              onChange={(e) => handle(e)}
            >
              <option> 1</option>
              <option> 2</option>
              <option> 3</option>
              <option> 4</option>
              <option> 5</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <button
        className="text-lg font-bold bg-orange-500 rounded-full px-8 py-1 text-white "
        onClick={submit}
      >
        Submit
      </button>
    </>
  );
};

export default FillForm;
