import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Barra_Busqueda_Component from "./Barra_Busqueda_Component";
import DropDown_Moneda from "./DropDown_Moneda";

const Header_Component = () => {
	const location = useLocation();
	const [areScrolling, setAreScrolling] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú
	const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

	const handleScroll = () => {
		if (window.scrollY !== 0) {
			setAreScrolling(true);
		} else {
			setAreScrolling(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<header className={`${areScrolling ? "animacion-on" : "animacion-off"} px-4 flex flex-row items-center justify-between fixed top-0 z-50`}>
			<Barra_Busqueda_Component />
			<div />
			{!isMobile ? (
				<ul className="flex flex-row items-center gap-6 text-white font-ArcaMajora-bold pr-3">
					<li className={`hover:scale-110 border-white transition-all ease-in-out duration-300 ${location.pathname === "/" ? "border-b-2" : ""}`} key="Inicio">
						<Link to={`/`} title="Inicio">Inicio</Link>
					</li>
					<li className={`hover:scale-110 border-white transition-all ease-in-out duration-300 ${location.pathname === "/categoria/electrodomesticos" ? "border-b-2" : ""}`} key="electrodomesticos">
						<Link to={`/categoria/electrodomesticos`} title="electrodomesticos">Electrodomesticos</Link>
					</li>
					<li className={`hover:scale-110 border-white transition-all ease-in-out duration-300 ${location.pathname === "/categoria/transporte" ? "border-b-2" : ""}`} key="transporte">
						<Link to={`/categoria/transportes`} title="Transporte">Transporte</Link>
					</li>
					<li className={`hover:scale-110 border-white transition-all ease-in-out duration-300 ${location.pathname === "/contactar" ? "border-b-2" : ""}`} key="contactar">
						<Link to={`/contactar`} title="Contactar">Contactar</Link>
					</li>
					<li>
						 <DropDown_Moneda/>
					</li>
				</ul>
			) : (
				<>
					<div id="HAMBURGER-ICON" className="mr-5 space-y-2 z-50" onClick={toggleMenu}>
						<span className="block h-0.5 w-8 bg-white"></span>
						<span className="block h-0.5 w-8 bg-white"></span>
						<span className="block h-0.5 w-8 bg-white"></span>
					</div>
					{menuOpen && (
						<motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute top-0 left-0 w-full h-[98vh] bg-principal text-white flex flex-col items-center justify-center">
							<li className={`hover:scale-110 border-white transition-all ease-in-out duration-300 ${location.pathname === "/" ? "border-b-2" : ""}`} key="Inicio">
								<Link to={`/`} title="Inicio">Inicio</Link>
							</li>
							<li className={`hover:scale-110 border-white transition-all ease-in-out duration-300 ${location.pathname === "/categoria/electrodomesticos" ? "border-b-2" : ""}`} key="electrodomesticos">
								<Link to={`/categoria/electrodomesticos`} title="electrodomesticos">Electrodomesticos</Link>
							</li>
							<li className={`hover:scale-110 border-white transition-all ease-in-out duration-300 ${location.pathname === "/categoria/transporte" ? "border-b-2" : ""}`} key="transporte">
								<Link to={`/categoria/transportes`} title="Transporte">Transporte</Link>
							</li>
							<li className={`hover:scale-110 border-white transition-all ease-in-out duration-300 ${location.pathname === "/contactar" ? "border-b-2" : ""}`} key="contactar">
								<Link to={`/contactar`} title="Contactar">Contactar</Link>
							</li>
						</motion.ul>
					)}
				</>
			)}
		</header>
	);
};

export default Header_Component;
