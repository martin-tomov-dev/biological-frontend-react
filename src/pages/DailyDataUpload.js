import Header from "./layouts/Header";
import LeftSideBar from "./layouts/LeftSideBar";
import { useState, useEffect } from "react";

const DailyDataUpload = () => {
  let [data, setDailyData] = useState({
    date: Date.now(),
  });

  const handleChange = (e) => {
    setDailyData((data) => ({ ...data, [e.target.name]: e.target.value }));
    console.log(e.target.value);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800">
      <Header />
      <div className="flex h-screen">
        <div className="w-1/5">
          <LeftSideBar />
        </div>
        <div className="w-4/5" style={{ marginTop: "116px" }}>
          <h1 className="mt-6 text-green-600 font-serif pl-5 text-3xl leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
            Daily Data Upload
          </h1>
          <div className="flex">
            <div className="w-[30%] mt-5">
              <div className="flex items-center justify-evenly mt-10">
                <div className="shadow-xl bg-white py-5 mt-5 rounded-md w-[90%]">
                  <form className="px-10">
                    <h2 className="text-center py-3 text-xl text-green-600">
                      Daily Process Analysis
                    </h2>
                    <div className="flex justify-between mt-1">
                      <div className="w-full justify-center">
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
                    </div>
                    <div className="mt-1">
                      <label
                        htmlFor="countries"
                        className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                      >
                        Process
                      </label>
                      <select
                        id="countries"
                        onChange={handleChange}
                        className="shadow w-full appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      >
                        <option defaultValue>Choose Process</option>
                        <option value="Digester1">Digester1</option>
                        <option value="Digester1">Digester2</option>
                      </select>
                    </div>
                    <div className="mt-1">
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
                      ></input>
                    </div>
                    <div className="mt-1 flex justify-between">
                      <div className="w-[40%]">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                          htmlFor="date"
                        >
                          PH
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="ph"
                          type="number"
                          name="ph"
                          onChange={handleChange}
                          placeholder="%"
                        ></input>
                      </div>
                      <div className="w-[40%]">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                          htmlFor="date"
                        >
                          DM
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="dm"
                          type="number"
                          name="dm"
                          onChange={handleChange}
                          placeholder="%"
                        ></input>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="inline-block mt-5 w-full rounded bg-sky-600 text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      Save
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="mt-5 w-[70%]">
              <div className="flex items-center justify-evenly mt-10 mb-5">
                <div className="shadow-xl bg-white px-5 py-5 mt-5 rounded-md w-[90%]">
                  <form className="px-10">
                    <h2 className="text-center py-3 text-xl text-green-600">
                      Daily Feedstock Analysis
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
                          Daily Fresh Water
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="freshWater"
                          type="text"
                          name="freshWater"
                          onChange={handleChange}
                          placeholder="Fresh water"
                        ></input>
                      </div>
                      <div className="w-1/4 justify-center">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                          htmlFor="date"
                        >
                          Daily Grey Water
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="greyWater"
                          type="text"
                          name="greyWater"
                          onChange={handleChange}
                          placeholder="Grey Water"
                        ></input>
                      </div>
                      <div className="w-1/4 justify-center">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                          htmlFor="date"
                        >
                          Re-Circ Digestate
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="digestate"
                          type="text"
                          name="digestate"
                          onChange={handleChange}
                          placeholder="Re-Circ Digestate"
                        ></input>
                      </div>
                    </div>
                    <div className="flex justify-between mt-5">
                      <div className="w-1/5 justify-center">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                          htmlFor="date"
                        >
                          Temperature
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="temperature"
                          type="number"
                          name="temperature"
                          onChange={handleChange}
                          placeholder="Temperature(C)"
                        ></input>
                      </div>
                      <div className="w-1/5 justify-center">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                          htmlFor="date"
                        >
                          CH4 Concentration
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="CH4"
                          type="number"
                          name="CH4"
                          onChange={handleChange}
                          placeholder="CH4(%)"
                        ></input>
                      </div>
                      <div className="w-1/5 justify-center">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                          htmlFor="date"
                        >
                          H2S
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="H2S"
                          type="number"
                          name="H2S"
                          onChange={handleChange}
                          placeholder="H2S"
                        ></input>
                      </div>
                      <div className="w-1/5 justify-center">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                          htmlFor="date"
                        >
                          Biogas
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="biogas"
                          type="number"
                          name="biogas"
                          onChange={handleChange}
                          placeholder="Biogas/hr"
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
    </div>
  );
};

export default DailyDataUpload;
