import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Auth from "./layout/Auth/Auth";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./layout/home/Home";
import AuthProvider from "./provider/AuthProvider";
import PrivateRoute from "./privateRoute/PrivateRoute";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Auth></Auth>,
		children: [
			{
				path: "/",
				element: <Navigate to={"/counter"}></Navigate>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/register",
				element: <Register></Register>,
			},
		],
	},
	{
		path: "counter",
		element: (
			<PrivateRoute>
				<Home></Home>
			</PrivateRoute>
		),
	},
	{
		path: "*",
		element: <div>404</div>,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</React.StrictMode>
);
