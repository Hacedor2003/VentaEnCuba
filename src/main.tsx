import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import { AnimatePresence } from "framer-motion";
import { AppProvider } from "./data/Context.tsx";
import Index_Screen from "./Screens/Index_Screen.tsx";
import Error_Screen from "./Screens/Error_Screen.tsx";
import Home_Screen from "./Screens/Home_Screen.tsx";
import Categorias_Screen from "./Screens/Categorias_Screen.tsx";
import Search_Screen from "./Screens/Search_Screen.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contactar_Screen from "./Screens/Contactar_Screen.tsx";

export const Router = createBrowserRouter([
	{
		path: "/",
		element: <Index_Screen />,
		errorElement: <Error_Screen />,
		children: [
			{
				path: "/",
				element: <Home_Screen />,
				errorElement: <Error_Screen />,
				index:true
			},
			{
				path: "categoria/:categoria",
				element: <Categorias_Screen />,
				errorElement: <Error_Screen />,
			},
			{
				path: "contactar",
				element: <Contactar_Screen />,
				errorElement: <Error_Screen />,
			},
			{
				path: "busqueda",
				element: <Search_Screen />,
				errorElement: <Error_Screen />,
			},
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<AppProvider>
		<StrictMode>
			<AnimatePresence mode="wait">
				<RouterProvider router={Router} />
			</AnimatePresence>
		</StrictMode>
	</AppProvider>
);
