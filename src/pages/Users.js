import Header from "./layouts/Header";
import LeftSideBar from "./layouts/LeftSideBar";
import { useState, useRef } from "react";

const Users = () => {
  const [selectedUser, setSelectedUser] = useState({
    id: 0,
    name: "",
    companyName: "",
    contactInfo: "",
    password: "",
  });
  const isModal = useRef(false);

  const userData = [
    {
      id: 1,
      name: "test",
      password: "123456",
      contactInfo: "441234567456",
      companyName: "EKOGEA",
    },
    {
      id: 2,
      name: "admin",
      password: "123456",
      contactInfo: "441234567456",
      companyName: "EKOGEA",
    },
  ];

  const selectUser = (data) => {
    console.log(isModal.current);
    isModal.current = true;
    console.log(isModal.current);
    setSelectedUser(data);
  };

  const closeModal = () => {
    isModal.current = false;
    setSelectedUser({
      id: 0,
      name: "",
      companyName: "",
      contactInfo: "",
      password: "",
    });
  };
  console.log(isModal);

  const saveUser = () => {};

  return (
    <div className="bg-gray-50 dark:bg-gray-800">
      <Header />
      <div className="flex h-screen">
        <div className="w-1/5">
          <LeftSideBar />
        </div>
        <div className="w-4/5 relative" style={{ marginTop: "116px" }}>
          <h1 className="mt-6 text-green-600 text-center font-serif pl-5 text-3xl leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
            Users
          </h1>
          <table className="w-[80%] mt-10 text-sm text-left text-gray-500 dark:text-gray-400 ml-[10%] table-auto">
            <thead className="text-xs text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="py-3 px-1 text-center">Username</th>
                <th className="py-3 px-1 text-center">CompanyName</th>
                <th className="py-3 px-1 text-center">Contact Information</th>
                <th className="py-3 px-1 text-center">Edit</th>
                <th className="py-3 px-1 text-center text-red-600">Delete</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, index) => (
                <tr key={user.id}>
                  <td className="text-center py-3 px-1">{user.name}</td>
                  <td className="text-center py-3 px-1">{user.companyName}</td>
                  <td className="text-center py-3 px-1">{user.contactInfo}</td>
                  <td className="text-center py-3 px-1">
                    <button
                      onClick={() => {
                        selectUser(user);
                      }}
                      className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                    >
                      Edit
                    </button>
                  </td>
                  <td className="text-center py-3 px-1">
                    <button className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {isModal.current ? (
            <div
              style={{ transition: "200ms" }}
              className="absolute transition-transform transform z-10 w-[40%] bg-slate-100 z-30 top-[100px] left-[30%] shadow-xl"
            >
              <form className="p-5">
                <h2 className="text-center py-3 text-xl text-green-600">
                  Edit the User
                </h2>
                <div className="flex justify-between mt-1">
                  <div className="w-full justify-center">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                      htmlFor="Username"
                    >
                      Username
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      name="username"
                      placeholder="Please enter the username"
                      value={selectedUser.name}
                    ></input>
                  </div>
                </div>
                <div className="mt-5">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                    htmlFor="CompanyName"
                  >
                    Company Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="companyName"
                    placeholder="Please enter the company name"
                    value={selectedUser.companyName}
                  ></input>
                </div>
                <div className="mt-5">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                    htmlFor="contactInfo"
                  >
                    Contact Information
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="contactInfo"
                    placeholder="Please enter the contact information"
                    value={selectedUser.contactInfo}
                  ></input>
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="type"
                    className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                  >
                    Current Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="********"
                    value={selectedUser.password}
                  />
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="type"
                    className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="********"
                  />
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="type"
                    className="block text-gray-700 text-sm font-bold mb-2 text-green-400"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="********"
                  />
                </div>
                <div className="flex w-full justify-between">
                  <button
                    type="submit"
                    className="inline-block mt-5 w-1/3 rounded bg-sky-600 text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    onClick={saveUser}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="inline-block mt-5 w-1/3 rounded bg-sky-600 text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;
