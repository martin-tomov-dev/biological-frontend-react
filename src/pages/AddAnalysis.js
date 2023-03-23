import Header from "./layouts/Header";
import LeftSideBar from "./layouts/LeftSideBar";
import { useState } from "react";
import { format } from "date-fns";

const AddAnalysis = () => {
  const [feedstockData, setFeedstockData] = useState({
    date: format(new Date(), "yyyy-MM-dd"),
  });
  const handleChange = (e) => {
    setFeedstockData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };
  return (
    <div className="bg-gray-50 dark:bg-gray-800">
      <Header />
      <div className="flex h-screen">
        <div className="w-1/5">
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
                    Monthly Feedstock Analysis
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
                        type="date"
                        name="date"
                        onChange={handleChange}
                        value={feedstockData.date}
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
                        Maize(Woodstock)
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        name="maize"
                        placeholder="Tonnes"
                      ></input>
                    </div>
                    <div className="w-1/4 justify-center">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                        htmlFor="date"
                      >
                        Maize DM%
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        name="MaizeWoodstockDM"
                        placeholder="%"
                      ></input>
                    </div>
                    <div className="w-1/4 justify-center">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                        htmlFor="date"
                      >
                        Maize ODM%
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        name="MarizeWoodstockODM"
                        placeholder="%"
                      ></input>
                    </div>
                  </div>
                  <div className="flex justify-between mt-3">
                    <div className="w-1/4 justify-center">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                        htmlFor="date"
                      >
                        Maize(hardy)
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        name="odm"
                        placeholder="Tonnes"
                      ></input>
                    </div>
                    <div className="w-1/4 justify-center">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                        htmlFor="date"
                      >
                        Maize DM%
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        name="MaizeHardyDM"
                        placeholder="%"
                      ></input>
                    </div>
                    <div className="w-1/4 justify-center">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                        htmlFor="date"
                      >
                        Maize ODM%
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        name="MarizeHardyODM"
                        placeholder="%"
                      ></input>
                    </div>
                  </div>
                  <div className="flex justify-between mt-3">
                    <div className="w-1/4 justify-center">
                      <label className="block text-gray-700 text-sm font-bold mb-2 text-green-400">
                        Breeder Muck
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        name="breeder"
                        placeholder="Tonnes"
                      ></input>
                    </div>
                    <div className="w-1/4 justify-center">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                        htmlFor="date"
                      >
                        Breeder DM%
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        name="breederDM"
                        placeholder="%"
                      ></input>
                    </div>
                    <div className="w-1/4 justify-center">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                        htmlFor="date"
                      >
                        Breeder ODM%
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        name="breederODM"
                        placeholder="%"
                      ></input>
                    </div>
                  </div>
                  <div className="flex justify-between mt-3">
                    <div className="w-1/4 justify-center">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                        htmlFor="date"
                      >
                        Rearer Muck
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        name="rearer"
                        placeholder="Tonnes"
                      ></input>
                    </div>
                    <div className="w-1/4 justify-center">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                        htmlFor="date"
                      >
                        Rearer DM%
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        name="rearerDM"
                        placeholder="%"
                      ></input>
                    </div>
                    <div className="w-1/4 justify-center">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                        htmlFor="date"
                      >
                        Rearer ODM%
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        name="rearerODM"
                        placeholder="%"
                      ></input>
                    </div>
                  </div>
                  <div className="flex justify-between mt-3">
                    <div className="w-1/4 justify-center">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                        htmlFor="date"
                      >
                        Grass silage
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        name="grass"
                        placeholder="Tonnes"
                      ></input>
                    </div>
                    <div className="w-1/4 justify-center">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                        htmlFor="date"
                      >
                        Grass silage DM%
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        name="grassDM"
                        placeholder="%"
                      ></input>
                    </div>
                    <div className="w-1/4 justify-center">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                        htmlFor="date"
                      >
                        Grass silage ODM%
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        name="grassODM"
                        placeholder="%"
                      ></input>
                    </div>
                  </div>
                  <div className="flex justify-between mt-3">
                    <div className="w-1/4 justify-center">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                        htmlFor="date"
                      >
                        Grass Cut1
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        name="grassCut1"
                        placeholder="Tonnes"
                      ></input>
                    </div>
                    <div className="w-1/4 justify-center">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                        htmlFor="date"
                      >
                        Grass Cut1 DM%
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        name="grassCut1DM"
                        placeholder="%"
                      ></input>
                    </div>
                    <div className="w-1/4 justify-center">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                        htmlFor="date"
                      >
                        Grass Cut1 ODM%
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        name="grassCut1ODM"
                        placeholder="%"
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

export default AddAnalysis;
