import { useEffect, useState, useCallback } from "react";

const UserTableCell = (props) => {
  // useCallback(() => {
  //   selectUser()
  // }, []);
  const selectUser = (data) => {
    props.updateUser(data);
  };

  return (
    // <tbody>
    props.data.map((user, index) => (
      <tr key={user.id}>
        <td className="text-center py-3 px-1">{user.name}</td>
        <td className="text-center py-3 px-1">{user.type}</td>
        <td className="text-center py-3 px-1">
          <button
            onClick={selectUser(user)}
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
    ))
    // </tbody>
  );
};

export default UserTableCell;
