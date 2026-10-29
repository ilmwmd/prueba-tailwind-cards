
import Videojuego from './components/Videojuego';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 px-6 py-12">

      <h1 className="mb-10 text-center text-4xl font-bold text-white">
        Mis videojuegos favoritos
      </h1>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

        <Videojuego
          nombre="Elden Ring"
          desarrollador="FromSoftware"
          tipo="RPG de acción"
          plataformas="PC, PlayStation y Xbox"
          imagen="EldenRing"
        />

        <Videojuego
          nombre="Cyberpunk 2077"
          desarrollador="CD Projekt Red"
          tipo="RPG de mundo abierto"
          plataformas="PC, PlayStation y Xbox"
          imagen="Cyberpunk"
        />

        <Videojuego
          nombre="The Witcher 3"
          desarrollador="CD Projekt Red"
          tipo="RPG de fantasía"
          plataformas="PC, PlayStation, Xbox y Switch"
          imagen="Witcher3"
        />

        <Videojuego
          nombre="Minecraft"
          desarrollador="Mojang Studios"
          tipo="Sandbox y supervivencia"
          plataformas="PC, consolas y móviles"
          imagen="Minecraft"
        />

        <Videojuego
          nombre="God of War Ragnarök"
          desarrollador="Santa Monica Studio"
          tipo="Acción y aventura"
          plataformas="PC y PlayStation"
          imagen="GodOfWar"
        />

      </div>
    </div>
  );
}

export default App;
