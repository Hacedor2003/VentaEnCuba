import { useLocation, useNavigate } from "react-router-dom";

const Barra_Busqueda_Component = () => {
  const location = useLocation()
  const navigation = useNavigate()
  
	function HandleWriteSeach(event: React.FormEvent<HTMLFormElement>) {
    location.search = event.currentTarget.value
    navigation('busqueda',{viewTransition:true,preventScrollReset:false})
	}

	return <form onSubmit={(e) => HandleWriteSeach(e)}><input type="text" name="buscar" id="" className="bg-white rounded-lg px-4 py-2 border-black font-semibold text-xl" placeholder="Buscar:" /></form>;
};

export default Barra_Busqueda_Component;
