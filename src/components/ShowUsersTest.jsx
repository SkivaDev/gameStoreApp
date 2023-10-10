"use client";
import useUsers from "@/hooks/useUsers";
import React, { useEffect } from "react";

const ShowUsersTest = () => {
  const { totalUsers, addUser, users } = useUsers();

  useEffect(() => {
    // addUser({
    //   id: 1,
    //   name: "John",
    //   lastName: "Doe",
    //   country: "Argentina",
    //   email: "jhon.doe@gmail.com",
    //   password: "12345678",
    // });
  }, [])
  

  return (
    <div>
      <h3>Total Usuarios: {totalUsers}</h3>
      {users.map((user, i) => (
        <div key={i}>
          <h2>{user.name}</h2>
          <p>{user.country}</p>
          <p>{user.email}</p>
          <p>{user.password}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowUsersTest;
