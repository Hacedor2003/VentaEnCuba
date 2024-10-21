import { useContext } from "react";
import { AppContext } from "../data/Context";
import { Moneda_Type } from "../types/model.type";

const DropDown_Moneda = () => {
	const {
		cambio: {
			cambio_selected: { state, value },
		},
	} = useContext(AppContext);

	const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
		state(e.currentTarget.value as Moneda_Type);
	};

	return (
		<select onChange={handleChange} className={`px-4 py-2 rounded-lg flex flex-row items-center justify-center text-xl ${value === "CUP" ? "bg-orange-500" : value === "EURO" ? "bg-blue-500" : value === "MLC" ? "bg-indigo-400" : value === "ZEDGE" ? "bg-black" : "bg-green-600"}`} value={value}>
			<option value="USD">USD</option>
			<option value="CUP">CUP</option>
			<option value="MLC">MLC</option>
			<option value="EURO">EURO</option>
			<option value="ZEDGE">ZEDGE</option>
		</select>
	);
};

export default DropDown_Moneda;
