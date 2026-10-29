
import Videogame from './assets/components/Videogame.jsx';

function App() {
return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <header className="mx-auto mb-10 max-w-7xl">
        <h1
          id="titulo-principal"
          className="text-center text-4xl font-bold"
        >
          Mis videojuegos favoritos
        </h1>

        <p className="mt-4 text-center text-gray-200">
          Descubre videojuegos, sus desarrolladores,
          géneros y plataformas disponibles.
        </p>
      </header>

      <section
        aria-labelledby="principal-title"
        className="mx-auto max-w-7xl"
      >
        <ul className="grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
          <li>
            <Videogame
              name="Elden Ring"
              developer="FromSoftware"
              type="RPG de acción"
              platform="PC, PlayStation, Xbox y Switch"
              image="EldenRing"
            />
          </li>

          <li>
            <Videogame
              name="Cyberpunk 2077"
              developer="CD Projekt Red"
              type="RPG de mundo abierto"
              platform="PC, PlayStation, Xbox y Switch"
              image="Cyberpunk"
            />
          </li>

          <li>
            <Videogame
              name="The Witcher 3"
              developer="CD Projekt Red"
              type="RPG de fantasía"
              platform="PC, PlayStation, Xbox y Switch"
              image="Witcher"
            />
          </li>

          <li>
            <Videogame
              name="Minecraft"
              developer="Mojang Studios"
              type="Sandbox y supervivencia"
              platform="PC, PlayStation, Xbox, Switch y móviles"
              image="Minecraft"
            />
          </li>

          <li>
            <Videogame
              name="God of War Ragnarök"
              developer="Santa Monica Studio"
              type="Acción y aventura"
              platform="PC y PlayStation"
              image="GodOfWar"
            />
          </li>
        </ul>
      </section>
    </main>
  );
}
export default App;
