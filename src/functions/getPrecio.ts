import { useEffect, useState } from "react";
import { Cambio_Context_Type } from "../types/model.type";

export function getPrecio(precio: number, cambio: Cambio_Context_Type) {
	const [precio_final, setprecio_final] = useState(0);

	useEffect(() => {
		switch (cambio.cambio_selected.value) {
			case "CUP":
				{
					setprecio_final(precio * cambio.type.CUP);
				}
				break;
			case "USD":
				{
					setprecio_final(precio * cambio.type.USD);
				}
				break;
			case "EURO":
				{
					setprecio_final(precio * cambio.type.EURO) ;
				}
				break;
			case "ZEDGE":
				{
					setprecio_final((precio * cambio.type.ZEDGE) + 50);
				}
				break;
			case "MLC":
				{
					setprecio_final((precio * cambio.type.MLC));
				}
				break;
			default:
				{
					setprecio_final(precio);
				}
				break;
		}
	}, [cambio.cambio_selected.value]);

	return precio_final.toFixed(2);
}
