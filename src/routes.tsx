import { createBrowserRouter } from "react-router";
import TodolistPage from "./pages/TodolistPage";
import HelloMyNamePage from "./pages/HelloMyNamePage";
import CounterPage from "./pages/CounterPage";
import MainLayout from "./layout/MainLayout"; // ใช้ tem หรือ layout นี้กับทุกๆ หน้า
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
  //เป็น array of objects
  //1. {
  //   path: "/",
  //   element: <CounterPage />,
  // },
  // 2.
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      // localhost:xxxx/
      { index: true, element: <CounterPage /> },
      //{ path: "todolistpage", element: <TodolistPage /> },
    ],
  },
  {
    path: "/my",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      // localhost:xxxx/my/hellomynamepage
      { path: "hellomynamepage", element: <HelloMyNamePage /> },
      // localhost:xxxx/my/todolistpage
      { path: "todolistpage", element: <TodolistPage /> },
    ],
  },
]);
