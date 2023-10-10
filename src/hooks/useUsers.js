"use client";
import React, { use, useState } from 'react'
import useLocalStorage from './useLocalStorage';


function useUsers() {
  // 
  const {
    item: users,
    saveItem: saveUsers,
  } = useLocalStorage("Users_Items", []);

  const {
    item: estadoLogeo,
    saveItem: saveEstadoLogeo,
  } = useLocalStorage("Estado_LogeoV1", []);

  const [loginedUser, setLoginedUser] = useState({});
  const [isLogined, setIsLogined] = useState(false);


  // const [searchValue, setSearchValue] = useState("");
  // const [openModal, setOpenModal] = useState(false);

  // //notification
  // const [showAlert, setShowAlert] = useState(false);
  // const [alertStatus, setAlertStatus] = useState(false);
  
  // //edit
  // const [todoEdit, setTodoEdit] = useState("");

  // //status para el modal Form
  // const [formStatus, setFormStatus] = useState(false);

  // const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalUsers = users.length;

  // let searchedTodos = [];

  // if (searchValue.length > 0) {
  //   searchedTodos = todos.filter((todo) => {
  //     const todoText = todo.text.toLowerCase();
  //     const searchText = searchValue.toLowerCase();
  //     return todoText.includes(searchText);
  //   });
  // } else {
  //   searchedTodos = todos;
  // }
  
  // Función para añadir un nuevo TODO
  // const addTodo = (newTodo) => {
  //   const newTodos = [...todos];
  //   newTodos.push(newTodo);
  //   saveTodos(newTodos);
  // };
  const addUser = (newUser) => {
    const newUsers = [...users];
    newUsers.push(newUser);
    saveUsers(newUsers);
  };

  const validateUser = (email, password) => {
    const user = users.find((user) => user.email === email && user.password === password);
    if(user) {
      setLoginedUser(user);
      setIsLogined(true);
    }
    return user;
  }

  // // Edita el todo selecionado por el openModeEditTodo 
  // // onEdit (modal)
  // const editTodo = (todo) => {
  //   const newTodos = todos.map((t) => {
  //     if (t.id === todo.id) {
  //       return todo;
  //     }
  //     return t;
  //   });
  //   saveTodos([...newTodos]);
  //   setOpenModal(false);
  // }




  // // Funcion para completar TODOs
  // const completeTodo = (id) => {
  //   const todoIndex = todos.findIndex((todo) => todo.id === id);
  //   const newTodos = [...todos];
  //   newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
  //   console.log(newTodos);
  //   saveTodos(newTodos);
  // };
  
  // // Funcion para eliminar TODOs
  // const deleteTodo = (id) => {
  //   const newTodos = todos.filter((todo) => todo.id !== id);
  //   saveTodos(newTodos);

  //   //muestra la notificacion por 1s y la cierra
  //   setTimeout(() => {
  //     setShowAlert(false);
  //   }, 3000);
  //   setAlertStatus(false);
  //   setShowAlert(true);
  // };

 
  // // Identifica el todo en el que se hizo click edit y abre el modal
  // // onEdit (todolist para todoItem)
  // const openModeEditTodo = (id) => {
  //   const todo = todos.find((todo) => todo.id === id);
  //   setTodoEdit(todo);
  //   console.log(todo);
  //   console.log("Se hizo click en todo y se agrego el todo a todoEdit")
  //   if(todo) {
  //     setOpenModal(true);
  //     setFormStatus(true);
  //   }
  // }


  return {
    totalUsers,
    addUser,
    users,
    validateUser,
    loginedUser,
    isLogined
  };
}

export default useUsers;