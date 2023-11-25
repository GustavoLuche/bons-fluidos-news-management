import React, { useEffect, useState } from "react";
import { getAllUsers } from "@/services/api";

export default function UserList() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Leslie Alexander",
      email: "leslie.alexander@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      isAdmin: false,
    },
    {
      id: 2,
      name: "Michael Foster",
      email: "michael.foster@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      isAdmin: true,
    },
    {
      id: 3,
      name: "Dries Vincent",
      email: "dries.vincent@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      isAdmin: false,
    },
    {
      id: 4,
      name: "Lindsay Walton",
      email: "lindsay.walton@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      isAdmin: false,
    },
    {
      id: 5,
      name: "Courtney Henry",
      email: "courtney.henry@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      isAdmin: false,
    },
    {
      id: 6,
      name: "Tom Cook",
      email: "tom.cook@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      isAdmin: false,
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);

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

  const handleToggleAdmin = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, isAdmin: !user.isAdmin } : user
      )
    );
  };

  return (
    <div className="bg-white mx-auto mt-1 max-w-2xl py-6 sm:py-12 lg:py-24 items-center">
      <ul role="list" className="divide-y divide-gray-100">
        {users.map((user) => (
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
    </div>
  );
}
