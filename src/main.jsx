import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./layout/Auth/Auth";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./layout/home/Home";
import AuthProvider from "./provider/AuthProvider";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Auth></Auth>,
		children: [
			{
				path: "/",
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
		element: <Home></Home>,
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
