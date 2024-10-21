import { motion } from 'framer-motion';

const Contactar_Screen = () => {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center min-h-screen p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-6">Contáctanos</h1>
      <p className="mb-4">Estamos aquí para ayudarte. Elige una opción para contactarnos:</p>

      <div className="flex flex-col space-y-4">
        <a 
          href="mailto:bryanlenier@gmail.com" 
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-200"
        >
          Enviar correo
        </a>
        <a 
          href="https://wa.me/5358505864?text=Hola%20estoy%20interesado%20en:"
          className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition duration-200"
        >
          Contactar por WhatsApp
        </a>
        <a 
          href="https://t.me/Hacedor2003" 
          className="bg-blue-400 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-500 transition duration-200"
        >
          Contactar por Telegram
        </a>
      </div>
    </motion.div>
  );
}

export default Contactar_Screen;
