import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../data/Context";
import { Card_Product } from "../components/Card_Product";
import { Product_Type } from "../types/model.type";

const Categorias_Screen = () => {
	const { productos } = useContext(AppContext);
	const params = useParams();
	const [productos_show, setProductos_show] = useState<Product_Type[]>(productos.filter((f) => f.category === params.category));
	const min_price = productos.sort((a, b) => a.price - b.price)[0].price;
	const max_price = productos.sort((a, b) => b.price - a.price)[0].price;

	const [filter_price, setFilter_price] = useState(max_price);
	const [filter_title, setFilter_title] = useState("");

	useEffect(() => {
		const category_products = productos.filter((f) => f.category === params.category);
		setProductos_show(category_products.filter((f) => f.price < filter_price));
		if (filter_title !== "") {
			setProductos_show(category_products.filter((f) => f.title.includes(filter_title)));
		}
	}, [filter_price, filter_title, productos, params]);

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="w-full flex flex-row items-start justify-start gap-3">
			<aside className="w-1/3 h-full flex flex-col items-start justify-start">
				<h3 className="w-full text-center text-2xl font-bold">Filtros:</h3>
				<div>
					<h4 className="text-xl">Precio:</h4>
					<input type="range" name="" id="" min={min_price} max={max_price} onChange={(e) => setFilter_price(parseInt(e.target.value))} />
				</div>
				<div>
					<h4 className="text-xl">Titulo:</h4>
					<input className="px-4 py-2 border border-black rounded-lg" type="text" onChange={(e) => setFilter_title(e.target.value)} name="" id="" />
				</div>
			</aside>
			<motion.ul initial={{ x: -500 }} animate={{ x: 0 }} transition={{ delay: 0.5 }} className="w-full flex flex-row items-center justify-start gap-3 px-3 flex-wrap">
				{productos_show.map((item) => (
					<Card_Product item={item} key={item.id} />
				))}
			</motion.ul>
		</motion.div>
	);
};

export default Categorias_Screen;
