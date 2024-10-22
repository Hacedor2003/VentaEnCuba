import { motion } from "framer-motion";
import { Suspense, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Card_Product } from "../components/Card_Product";
import { AppContext } from "../data/Context";
import { Product_Type } from "../types/model.type";

const Lista_Producto_Component = ({ products }: { products: Product_Type[] }) => {
	const randomProducts = products.sort(() => 0.5 - Math.random()).slice(0, 4);

	return (
		<Suspense fallback={<p className="text-xl text-black">Cargando...</p>}>
			<motion.ul initial={{ x: -500 }} animate={{ x: 0 }} transition={{ delay: 0.5 }} className="w-fit flex sm:flex-col md:flex-row items-center justify-start gap-3 px-3 overflow-x-auto">
				{randomProducts.map((item) => (
					<Card_Product item={item} key={item.id} />
				))}
			</motion.ul>
		</Suspense>
	);
};


const Home_Screen = () => {
	const { productos } = useContext(AppContext);
	const navigate = useNavigate()

	return (
		<motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="w-full flex flex-col items-center justify-center overflow-x-hidden">
			<div className="w-full flex sm:flex-col md:flex-row items-center justify-start"><Lista_Producto_Component products={productos} key={0} /> </div>
			<br />
			<img src="/assets/img/Banner 1 Productos Web.svg" alt="Entrega a todas las provincias de cuba por un costo adicional, La Habana y artemisa transporte incluido!!!" title="Entrega a todas las provincias de cuba por un costo adicional, La Habana y artemisa transporte incluido!!!" className="w-full h-[200px] object-fill self-center" />
			<br />
			<br />
			<h2>Electrondomesticos</h2>
			<div className="w-full flex sm:flex-col md:flex-row items-center justify-start"><Lista_Producto_Component products={productos.filter((f) => f.category === "electrodomesticos")} key={1} /> <button type="button" className="px-4 py-2 rounded-lg bg-principal text-white hover:bg-white hover:text-black border border-principal" onClick={()=>navigate('/categoria/electrodomesticos')}>Ver +</button> </div>
			<br />
			<img src="/assets/img/Banner 2 Productos Web.svg" alt="Aceptamos pagos en usd, euro, mlc, zedge" title="Aceptamos pagos en usd, euro, mlc, zedge" className="w-full h-[200px] sm:object-none md:object-fill self-center" />
			<br />
			<br />
			<h2>Transportes:</h2>
			<div className="w-full flex sm:flex-col md:flex-row items-center justify-start"><Lista_Producto_Component products={productos.filter((f) => f.category === "transportes")} key={2} /> <button type="button" className="px-4 py-2 rounded-lg bg-principal text-white hover:bg-white hover:text-black border border-principal" onClick={()=>navigate('/categoria/transportes')}>Ver +</button> </div>
		</motion.section>
	);
};

export default Home_Screen;
