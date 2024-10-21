import { motion } from "framer-motion";
import Header_Component from "../components/Header_Component";
import Footer_Component from "../components/Footer_Component";
import { Outlet } from "react-router-dom";

const Index_Screen = () => {
	return (
		<motion.main className="w-screen min-h-screen flex flex-col items-center justify-center overflow-auto">
			<Header_Component />
			<motion.section
				initial="initialState"
				animate="animateState"
				exit="exitState"
				transition={{
					duration: 0.75,
				}}
				variants={{
					initialState: {
						opacity: 0,
					},
					animateState: {
						opacity: 1,
					},
					exitState: {},
				}}
				className="w-full flex flex-col items-center justify-center p-2">
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<Outlet />
			</motion.section>
			<Footer_Component />
		</motion.main>
	);
};

export default Index_Screen;
