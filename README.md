# 🎮 Catálogo de Videojuegos

Aplicación web desarrollada con **React, Vite y Tailwind CSS** que muestra una colección de videojuegos mediante tarjetas visuales con imágenes de fondo e información sobre cada título.

## 📋 Características

- 🎮 Visualización de cinco videojuegos.
- 🖼️ Imágenes de fondo para cada tarjeta.
- 📝 Información de cada videojuego:
  - Nombre.
  - Desarrollador.
  - Género.
  - Plataformas disponibles.
- ✨ Efectos visuales al pasar el cursor sobre las tarjetas.
- 📱 Diseño responsive adaptable a móviles, tabletas y ordenadores.
- ♻️ Componentes reutilizables mediante `props` de React.
- 🎨 Estilos creados con Tailwind CSS.

## 🛠️ Tecnologías utilizadas

- **React:** creación de componentes reutilizables.
- **Vite:** entorno de desarrollo y compilación.
- **Tailwind CSS:** diseño y estilos de la interfaz.
- **JavaScript:** gestión de los datos de los videojuegos.
- **HTML:** estructura de la aplicación.

## 📁 Estructura del proyecto

```text
proyecto-videojuegos/
├── public/
├── src/
│   ├── assets/
│   │   ├── EldenRing.png
│   │   ├── Cyberpunk.png
│   │   ├── Witcher3.png
│   │   ├── Minecraft.png
│   │   └── GodOfWar.png
│   ├── components/
│   │   └── Videojuego.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## 🎯 Videojuegos incluidos

| Videojuego | Desarrollador | Género |
|---|---|---|
| Elden Ring | FromSoftware | RPG de acción |
| Cyberpunk 2077 | CD Projekt Red | RPG de mundo abierto |
| The Witcher 3 | CD Projekt Red | RPG de fantasía |
| Minecraft | Mojang Studios | Sandbox y supervivencia |
| God of War Ragnarök | Santa Monica Studio | Acción y aventura |

## ⚙️ Instalación

### 1. Requisitos previos

Es necesario tener instalado [Node.js](https://nodejs.org/) y npm.

### 2. Instalar las dependencias

Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
```

### 3. Iniciar el servidor de desarrollo

```bash
npm run dev
```

Vite mostrará una dirección local en la terminal. Ábrela en tu navegador para visualizar la aplicación.

### 4. Compilar el proyecto

Para generar la versión de producción:

```bash
npm run build
```

Para comprobar la versión compilada localmente:

```bash
npm run preview
```

## 🖼️ Gestión de imágenes

Las imágenes se almacenan en `src/assets/` y se cargan utilizando `import.meta.glob()`.

Cada imagen debe tener un nombre que coincida con la propiedad `imagen` del componente correspondiente.

Ejemplo:

```jsx
<Videojuego
  nombre="Elden Ring"
  desarrollador="FromSoftware"
  tipo="RPG de acción"
  plataformas="PC, PlayStation y Xbox"
  imagen="EldenRing"
/>
```

En este caso, el componente buscará el archivo `EldenRing.png`.

## 🧩 Funcionamiento de los componentes

### `Videojuego.jsx`

Es el componente reutilizable que define el diseño de cada tarjeta. Recibe los datos mediante `props` y muestra la imagen, el nombre, el desarrollador, el género y las plataformas.

### `App.jsx`

Es el componente principal de la aplicación. Contiene los datos de los videojuegos y crea una tarjeta por cada título utilizando el componente `Videojuego`.

### Tailwind CSS

Las clases de Tailwind controlan la distribución de las tarjetas, los colores, las imágenes, el degradado, las animaciones y el diseño responsive.

## 📱 Diseño responsive

La cuadrícula adapta el número de columnas al tamaño de la pantalla:

- **Móviles:** una tarjeta por fila.
- **Tabletas:** dos tarjetas por fila.
- **Ordenadores:** tres tarjetas por fila.

## 📄 Licencia

Proyecto educativo desarrollado con fines de aprendizaje. Los nombres y marcas de videojuegos pertenecen a sus respectivos propietarios. Comprueba las condiciones de uso de las imágenes que incorpores al proyecto.

---

**Desarrollado con React, Vite y Tailwind CSS.**
