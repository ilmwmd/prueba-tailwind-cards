
const imagenes = import.meta.glob('../assets/*.png', {
  eager: true,
  import: 'default',
});

function Videogame(props) {
 const imagen = imagenes[`../assets/${props.image}.png`];

  return (
    <article
      aria-labelledby={`titulo-${props.image}`}
      className="group relative flex h-[400px] items-end overflow-hidden rounded-2xl bg-gray-900 shadow-xl transition-transform duration-300 hover:-translate-y-2 motion-reduce:transform-none motion-reduce:transition-none"
    >
      {imagen ? (
        <img
          src={imagen}
          alt={`Portada del videojuego ${props.name}`}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 motion-reduce:transform-none motion-reduce:transition-none"
        />
      ) : (
        <div
          role="img"
          aria-label={`Imagen no disponible de ${props.name}`}
          className="absolute inset-0 bg-gray-800"
        />
      )}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"
      />
      <div className="relative z-10 w-full p-6 text-white">
        <h2
          id={`titulo-${props.image}`}
          className="mb-3 text-2xl font-bold"
        >
          {props.name}
        </h2>

        <p className="mb-2 text-sm text-gray-100">
          <strong>Desarrollador:</strong>{' '}
          {props.developer}
        </p>

        <p className="mb-2 text-sm text-gray-100">
          <strong>Género:</strong>{' '}
          {props.type}
        </p>

        <p className="text-sm text-gray-100">
          <strong>Plataformas:</strong>{' '}
          {props.platform}
        </p>
      </div>
    </article>
  );
}

export default Videogame;
