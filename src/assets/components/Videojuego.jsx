
const imagenes = import.meta.glob('../assets/*.png', {
  eager: true,
  import: 'default',
});

function Videojuego(props) {
  return (
    <div className="group relative flex h-[400px] items-end overflow-hidden rounded-2xl bg-gray-900 shadow-xl transition duration-300 hover:-translate-y-2">

      {/* Imagen de fondo */}
      <img
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
        src={imagenes[`../assets/${props.imagen}.png`]}
        alt={`Portada de ${props.nombre}`}
      />

      {/* Degradado oscuro para leer el texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

      {/* Información del videojuego */}
      <div className="relative z-10 w-full p-6 text-white">

        <h2 className="mb-3 text-2xl font-bold">
          {props.nombre}
        </h2>

        <p className="mb-1 text-sm text-gray-300">
          <strong className="text-white">Desarrollador:</strong>{' '}
          {props.desarrollador}
        </p>

        <p className="mb-1 text-sm text-gray-300">
          <strong className="text-white">Género:</strong>{' '}
          {props.tipo}
        </p>

        <p className="text-sm text-gray-300">
          <strong className="text-white">Plataformas:</strong>{' '}
          {props.plataformas}
        </p>

      </div>
    </div>
  );
}

export default Videojuego;
