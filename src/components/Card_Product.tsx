import { useContext } from "react";
import { getPrecio } from "../functions/getPrecio";
import { Product_Type } from "../types/model.type";
import { AppContext } from "../data/Context";

function handleContactar(item: Product_Type) {
	document.location.href = `${JSON.stringify(item)}`;
}

export const Card_Product = ({ item }: { item: Product_Type }) => {
	const { cambio  } = useContext(AppContext);

	return (
		<li className="w-[270px] h-[270px rounded-xl p-4 fondo-card-producto border-b-2 border-l-2 border-r-2 border-[#c62323] flex flex-col items-center justify-start">
			<div className="relative w-full h-5/6 my-4 group">
				<img src={item.image_url ?? '/assets/img/mingcute--chat-3-fill.png'} alt={item.title} title={item.title} className="w-full h-full group-hover:opacity-15 duration-300 transition-all ease-in-out rounded-t-lg" />
				<p className="text-white font-light sm:text-sm md:text-lg w-full h-full absolute left-0 top-0 px-4 py-2 opacity-0 group-hover:opacity-100 duration-300 transition-all ease-in-out rounded-t-lg">
					{item.description}
				</p>
			</div>
			<h4 className="text-principal w-full px-4 py-2 text-start text-lg font-bold">{item.title}</h4>
			<div className="w-full flex flex-row items-center justify-between">
				<a href={`https://wa.me/5358505864?text=Hola%20estoy%20interesado%20en:${item.id + "\n" + item.title + "\n" + item.price + "\n En: " + cambio.cambio_selected.value }`} onClick={() => handleContactar(item)} type="button" className="px-4 py-2 bg-green-600 hover:bg-green-400 transition-all duration-300 ease-in-out rounded-b-lg">
					Contactar
				</a>
				<span className="text-principal text-lg font-light ">{getPrecio(item.price, cambio)}</span>
			</div>
		</li>
	);
};
