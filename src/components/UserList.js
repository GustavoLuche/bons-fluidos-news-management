import React, { useEffect, useState } from "react";
import { getAllUsers, toggleIsAdminStatus } from "@/services/api";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersFromApi = await getAllUsers();
        setUsers(usersFromApi);
        console.log("Users recuperados com sucesso:", usersFromApi);
      } catch (error) {
        console.error("Erro ao buscar users da API:", error);
      }
    };

    fetchUsers();
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleToggleAdmin = async (userId) => {
    await toggleIsAdminStatus(userId);
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, isAdmin: !user.isAdmin } : user
      )
    );
  };

  return (
    <div className="bg-white mx-auto mt-1 max-w-2xl py-6 sm:py-12 lg:py-24 items-center">
      <ul role="list" className="divide-y divide-gray-100">
        {currentUsers.map((user) => (
          <li key={user.id} className="flex justify-between gap-x-6 py-5">
            <div className="flex flex-col-reverse sm:flex-row min-w-0 gap-x-4">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src={user.imageUrl}
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {user.name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {user.email}
                </p>
              </div>
            </div>
            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
              <button
                className="items-center text-white bg-Magenta text-sm w-auto rounded-md px-4 py-2"
                onClick={() => handleToggleAdmin(user.id)}
              >
                {user.isAdmin ? "Remover Admin" : "Tornar Admin"}
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-4">
        {Array.from(
          { length: Math.ceil(users.length / usersPerPage) },
          (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`mx-2 px-3 py-2 rounded-full ${
                currentPage === index + 1
                  ? "bg-Magenta text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
}
