import { Cambio_Context_Type, Product_Type } from "./model.type";

export type Context_Interface = {
	productos: Product_Type[];
	cambio: Cambio_Context_Type;
};
