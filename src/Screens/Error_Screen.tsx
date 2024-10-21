import { useRouteError } from "react-router-dom";

const Error_Screen = () => {

  const error:any = useRouteError()
  
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-around">
      <img src="/logo.png" alt="Logo" className="w-full h-auto" />
			<p>{error}</p>
		</div>
	);
}

export default Error_Screen