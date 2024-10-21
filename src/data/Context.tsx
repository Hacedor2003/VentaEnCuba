import { createContext, ReactNode, useEffect, useState } from "react";
import { Context_Interface } from "../types/context.type";
import { Moneda_Type, Product_Type } from "../types/model.type";
import { supabase } from "../lib/supabase";

export const AppContext = createContext<Context_Interface>({
	productos: [],
	cambio: {
		cambio_selected: { value: "USD", state: () => {} },
		type: {
			MLC: 300,
			ZEDGE: 300,
			USD: 1,
			EURO: 300,
			CUP: 355,
		},
	},
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
	const [productos, setProductos] = useState<Product_Type[]>([]);
	const [cambio_selected, setCambio_selected] = useState<Moneda_Type>("USD");
	const cambio_moneda = { MLC: 1.2, ZEDGE: 1, USD: 1, EURO: 1, CUP: 355 };

	useEffect(() => {
		const list_products = async () => {
			const { data, error } = await supabase.from("productos").select("*");
			if (error) {
				console.error(error);
			} else {
				setProductos(data);
			}
		};
		list_products()
	}, []);

	return <AppContext.Provider value={{ productos, cambio: { cambio_selected: { value: cambio_selected, state: setCambio_selected }, type: cambio_moneda } }}>{children}</AppContext.Provider>;
};
