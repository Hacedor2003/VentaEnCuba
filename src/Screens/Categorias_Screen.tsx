import { motion } from "framer-motion";
import { ChangeEvent, Suspense, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../data/Context";
import { Card_Product } from "../components/Card_Product";
import { Product_Type } from "../types/model.type";

const Categorias_Screen = () => {
	const { productos } = useContext(AppContext);
	const params = useParams();
	const [filter_price, setFilter_price] = useState(Infinity);
	const [filter_title, setFilter_title] = useState("");
	const [productos_show, setProductos_show] = useState<Product_Type[]>([]);

	useEffect(() => {
		const category_products = productos.filter((f) => f.category === params.categoria);
		setProductos_show(category_products);
	}, [productos, params.categoria]);

	function HandleSearchByPrice(e: React.ChangeEvent<HTMLInputElement>) {
		setFilter_price(parseInt(e.target.value));
		const category_products = productos.filter((f) => f.category === params.categoria);
		setProductos_show(category_products.filter((p) => p.price <= filter_price));
	}
	function HandleSearchByTitle(e: React.ChangeEvent<HTMLInputElement>) {
		setFilter_title(e.target.value);
		const category_products = productos.filter((f) => f.category === params.categoria);
		setProductos_show(category_products.filter((p) => p.title.includes(filter_title)));
	}

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="w-full flex flex-row items-start justify-start gap-3">
			<aside className="w-1/3 h-full flex flex-col items-start justify-start">
				<h3 className="w-full text-center text-2xl font-bold">Filtros:</h3>
				<div>
					<h4 className="text-xl">Precio:</h4>
					<input type="number" className="px-4 py-2 border border-black rounded-lg" min={0} max={productos && productos.length > 0 ? productos.sort((a, b) => b.price - a.price)[0].price : Infinity} onChange={(e) => HandleSearchByPrice(e)} />
				</div>
				<div>
					<h4 className="text-xl">Título:</h4>
					<input className="px-4 py-2 border border-black rounded-lg" type="text" onChange={(e) => HandleSearchByTitle(e)} />
				</div>
			</aside>
			<Suspense fallback={<p className="text-xl text-black">Cargando...</p>}>
				<motion.ul initial={{ x: -500 }} animate={{ x: 0 }} transition={{ delay: 0.5 }} className="w-full flex flex-row items-center justify-start gap-3 px-3 flex-wrap">
					{productos_show.map((item) => (
						<Card_Product item={item} key={item.id} />
					))}
				</motion.ul>
			</Suspense>
		</motion.div>
	);
};

export default Categorias_Screen;
