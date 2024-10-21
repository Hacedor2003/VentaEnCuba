import { useContext } from "react";
import { Card_Product } from "../components/Card_Product";
import { AppContext } from "../data/Context";
import { motion } from "framer-motion";
import { Product_Type } from "../types/model.type";

const Lista_Producto_Component = ({ products }: { products: Product_Type[] }) => (
	<motion.ul initial={{x:-500}} animate={{x:0}} transition={{delay:0.5}} className="w-full flex flex-row items-center justify-start gap-3 px-3 overflow-x-auto">
				{products.map((item) => (
					<Card_Product item={item} key={item.id} />
				))}
			</motion.ul>
)

const Home_Screen = () => {
	const { productos } = useContext(AppContext);

	return (
		<motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="w-full flex flex-col items-center justify-center overflow-x-hidden">
			<Lista_Producto_Component products={productos} key={0}/>
			<br />
			<img src="/assets/img/Banner 1 Productos Web.svg" alt="Entrega a todas las provincias de cuba por un costo adicional, La Habana y artemisa transporte incluido!!!" title="Entrega a todas las provincias de cuba por un costo adicional, La Habana y artemisa transporte incluido!!!" className="w-full h-[200px] sm:object-none md:object-fill self-center" />
			<br /><br />
			<h2>Electrondomesticos</h2>
			<Lista_Producto_Component products={productos.filter((f) => f.category === "electrodomesticos")} key={1}/>
			<br />
			<img src="/assets/img/Banner 2 Productos Web.svg" alt="Aceptamos pagos en usd, euro, mlc, zedge" title="Aceptamos pagos en usd, euro, mlc, zedge" className="w-full h-[200px] sm:object-none md:object-fill self-center" />
			<br /><br />
			<h2>Transportes:</h2>
			<Lista_Producto_Component products={productos.filter((f) => f.category === "transportes")} key={2}/>
		</motion.section>
	);
};

export default Home_Screen;
