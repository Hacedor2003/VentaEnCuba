import { Database } from "./supabase";

export type Product_Type = Database['public']['Tables']['productos']['Row']

export type Cambio_Type = {
	USD: number;
	CUP: number;
	EURO: number;
	MLC: number;
	ZEDGE: number;
};

export type Moneda_Type = "USD" | "CUP" | "EURO" | "ZEDGE" | "MLC";

export type Cambio_Context_Type = {
	cambio_selected: { value: Moneda_Type; state: React.Dispatch<React.SetStateAction<Moneda_Type>> };
	type: Cambio_Type;
};
