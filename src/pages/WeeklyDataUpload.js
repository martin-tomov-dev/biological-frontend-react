import Header from "./layouts/Header";
import LeftSideBar from "./layouts/LeftSideBar";
import { useState } from "react";

const WeeklyDataUpload = () => {
  let [date, setDailyData] = useState({
    date: Date.now(),
  });

  const handleChange = (e) => {
    setDailyData((data) => ({ ...data, [e.target.name]: e.target.value }));
    console.log(e.target.value);
  };
  return (
    <div className="bg-gray-50 dark:bg-gray-800">
      <Header />
      <div className="flex">
        <div className="w-1/5 h-screen">
          <LeftSideBar />
        </div>
        <div className="w-4/5" style={{ marginTop: "116px" }}>
          <div className="mt-5">
            <h1 className="mt-6 text-green-600 font-serif text-center text-3xl leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
              Weekly Data Upload
            </h1>
            <div className="flex items-center justify-evenly mt-10 mb-10">
              <div className="shadow-xl bg-white px-5 py-5 mt-5 rounded-md w-[90%]">
                <form className="px-10">
                  <h2 className="text-center py-3 text-xl text-green-600">
                    Weekly Tank Analysis
                  </h2>
                  <div className="flex justify-between mt-3">
                    <div className="Ad-plant w-1/3 justify-center">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                        htmlFor="plant"
                      >
                        AD Plant
                      </label>
                      <select
                        className="shadow w-full appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="plant"
                        type="text"
                      >
                        <option defaultValue>Choose AD plant</option>
                        <option value="condate">condate</option>
                      </select>
                    </div>
                    <div className="w-1/3 justify-center">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                        htmlFor="date"
                      >
                        Date
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="date"
                        type="date"
                        name="date"
                        onChange={handleChange}
                        placeholder="Please enter the name of AD plant"
                      ></input>
                    </div>
                  </div>
                  <div className="flex justify-between mt-3">
                    <div className="w-1/4 justify-center">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                        htmlFor="date"
                      >
                        ODM
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="odm"
                        type="number"
                        name="odm"
                        onChange={handleChange}
                        placeholder="%"
                      ></input>
                    </div>
                    <div className="w-1/4 justify-center">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                        htmlFor="date"
                      >
                        Total Nitrogen
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="Nitrogen"
                        type="number"
                        name="Nitrogen"
                        onChange={handleChange}
                        placeholder="mg/L"
                      ></input>
                    </div>
                    <div className="w-1/4 justify-center">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                        htmlFor="date"
                      >
                        Carbon
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="carbon"
                        type="number"
                        name="carbon"
                        onChange={handleChange}
                        placeholder="mg/L"
                      ></input>
                    </div>
                  </div>
                  <div className="flex justify-between mt-3">
                    <div className="w-1/4 justify-center">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                        htmlFor="date"
                      >
                        C:N ratio
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="ratio"
                        type="text"
                        name="ratio"
                        onChange={handleChange}
                        placeholder="14:15"
                      ></input>
                    </div>
                    <div className="w-1/4 justify-center">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                        htmlFor="date"
                      >
                        Ammoniacal Nitrogen
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="ammonia"
                        type="number"
                        name="ammonia"
                        onChange={handleChange}
                        placeholder="mg/L"
                      ></input>
                    </div>
                    <div className="w-1/4 justify-center">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                        htmlFor="date"
                      >
                        Total Phosphorus
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="phosphorus"
                        type="number"
                        name="phosphorus"
                        onChange={handleChange}
                        placeholder="mg/L"
                      ></input>
                    </div>
                  </div>
                  <div className="flex justify-between mt-3">
                    <div className="w-1/4 justify-center">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                        htmlFor="date"
                      >
                        Total Potassium
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="potassium"
                        type="number"
                        name="potassium"
                        onChange={handleChange}
                        placeholder="mg/L"
                      ></input>
                    </div>
                    <div className="w-1/4 justify-center">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                        htmlFor="date"
                      >
                        COD
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="cod"
                        type="number"
                        name="cod"
                        onChange={handleChange}
                        placeholder="mg/L"
                      ></input>
                    </div>
                    <div className="w-1/4 justify-center">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                        htmlFor="date"
                      >
                        BOD
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="bod"
                        type="number"
                        name="bod"
                        onChange={handleChange}
                        placeholder="mg/L"
                      ></input>
                    </div>
                  </div>
                  <div className="flex justify-between mt-3">
                    <div className="w-1/4 justify-center">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                        htmlFor="date"
                      >
                        AA
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="aa"
                        type="number"
                        name="aa"
                        onChange={handleChange}
                        placeholder="mg/L"
                      ></input>
                    </div>
                    <div className="w-1/4 justify-center">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                        htmlFor="date"
                      >
                        PA
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="pa"
                        type="number"
                        name="pa"
                        onChange={handleChange}
                        placeholder="mg/L"
                      ></input>
                    </div>
                    <div className="w-1/4 justify-center">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                        htmlFor="date"
                      >
                        PA/AA
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="pa-aa"
                        type="number"
                        name="pa-aa"
                        onChange={handleChange}
                        placeholder="mg/L"
                      ></input>
                    </div>
                  </div>
                  <div className="flex justify-between mt-3">
                    <div className="w-1/4 justify-center">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                        htmlFor="date"
                      >
                        BA
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="ba"
                        type="number"
                        name="ba"
                        onChange={handleChange}
                        placeholder="mg/L"
                      ></input>
                    </div>
                    <div className="w-1/4 justify-center">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                        htmlFor="date"
                      >
                        isoBA
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="isoBA"
                        type="number"
                        name="isoBA"
                        onChange={handleChange}
                        placeholder="mg/L"
                      ></input>
                    </div>
                    <div className="w-1/4 justify-center">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                        htmlFor="date"
                      >
                        CAPA
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="capa"
                        type="number"
                        name="capa"
                        onChange={handleChange}
                        placeholder="mg/L"
                      ></input>
                    </div>
                  </div>
                  <div className="flex justify-between mt-3">
                    <div className="w-1/4 justify-center">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                        htmlFor="date"
                      >
                        isoDAPA
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="isoDAPA"
                        type="number"
                        name="isoDAPA"
                        onChange={handleChange}
                        placeholder="mg/L"
                      ></input>
                    </div>
                    <div className="w-1/4 justify-center">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                        htmlFor="date"
                      >
                        VALA
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="vala"
                        type="number"
                        name="vala"
                        onChange={handleChange}
                        placeholder="mg/L"
                      ></input>
                    </div>
                    <div className="w-1/4 justify-center">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                        htmlFor="date"
                      >
                        isoVALA
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="isoVALA"
                        type="number"
                        name="isoVALA"
                        onChange={handleChange}
                        placeholder="mg/L"
                      ></input>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="inline-block mt-16 w-full rounded bg-sky-600 text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyDataUpload;
