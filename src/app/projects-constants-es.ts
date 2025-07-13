export const PROJECT_CONSTANTS_ES = {
  0: {
    type: "Aplicación Web Progresiva",
    title: "Tianguiza",
    description:
      "Aplicación Web Progresiva dedicada a centralizar la información de los mercados callejeros (tianguis) en el área metropolitana de Guadalajara.",
    images: [
      {
        src: "/images/tianguiza/tianguiza.png",
        height: 1080,
        width: 1920,
        alt: "tianguiza portada",
      },
      {
        src: "/images/tianguiza/tianguiza-1.png",
        height: 1080,
        width: 1920,
        alt: "tianguiza imagen 1",
      },
      {
        src: "/images/tianguiza/tianguiza-2.png",
        height: 1080,
        width: 1920,
        alt: "tianguiza imagen 2",
      },
    ],
    long_description:
      "Tianguiza es una Aplicación Web Progresiva que centraliza la información de los mercados callejeros (tianguis) en el área metropolitana de Guadalajara. La aplicación permite a los usuarios buscar mercados callejeros por ubicación, día y categorías. También permite a los vendedores registrar su puesto de mercado y gestionar su información.",
    learning:
      "En este proyecto fui miembro de un equipo de 3 personas, participé en el desarrollo de muchas funcionalidades, como la funcionalidad de búsqueda y filtrado por categorías, los formularios de registro de puestos y tianguis, así como el uso de la API de OpenStreetMap. También trabajé en el despliegue de la aplicación en Vercel y la base de datos en NEON. Aprendí cómo trabajar en equipo, cómo gestionar un proyecto y cómo desplegar una aplicación full-stack. También aprendí cómo trabajar con PostgreSQL y cómo usar un ORM para interactuar con él. También aprendí cómo usar Figma como sistema de diseño.",
    links: [
      { type: "Web", link: "https://tianguiza.com" },
      {
        type: "Google Play Store",
        link: "https://play.google.com/store/apps/details?id=com.tianguiza.twa&pcampaignid=web_share",
      },
    ],
    deployment:
      "Esta aplicación fue desplegada en Vercel, usando Next.js y PostgreSQL, también está disponible en Google Play Store. A continuación está el enlace a la aplicación.",
    stack:
      "React, Next.js, Tailwind CSS, PostgreSQL, Drizzle ORM, OpenStreetMaps, React-Leaflet",
  },
  1: {
    type: "Aplicación Móvil",
    title: "SudorFit",
    description:
      "Aplicación móvil para el seguimiento de actividad física, conteo de calorías y seguimiento de objetivos.",
    images: [
      {
        src: "/images/sudorfit/sudorfit.png",
        height: 1080,
        width: 1920,
        alt: "sudorfit portada",
      },
      {
        src: "/images/sudorfit/sudorfit-1.png",
        height: 1080,
        width: 2400,
        alt: "sudorfit imagen 1",
      },
      {
        src: "/images/sudorfit/sudorfit-2.png",
        height: 1080,
        width: 2400,
        alt: "sudorfit imagen 2",
      },
    ],
    long_description:
      "Sudorfit es una aplicación que te permite hacer seguimiento de tu actividad física, contar calorías y establecer objetivos. La aplicación tiene una interfaz fácil de usar que facilita el seguimiento de tu progreso y mantenerte motivado. Otorga medallas a los usuarios cuando logran un objetivo. También cuenta con una mascota llamada Sudorito que proporciona mensajes motivacionales a los usuarios basados en sus objetivos logrados.",
    learning:
      "Desarrollando esta aplicación aprendí conceptos básicos del desarrollo Android, como actividades, fragmentos e intents. También practiqué cómo usar Firebase para almacenar datos de usuarios y cómo usar Android Studio para desarrollar aplicaciones Android. También aprendí cómo usar Google Play Store para desplegar una aplicación.",
    links: [
      {
        type: "Google Play Store",
        link: "https://play.google.com/store/apps/details?id=com.sudorlabs.sudorfit&pcampaignid=web_share",
      },
    ],
    deployment: "Esta aplicación fue desplegada en Google Play Store.",
    stack: "Java, Firebase y Android Studio",
  },
  2: {
    type: "Aplicación Web",
    title: "GIF Expert",
    description:
      "Aplicación web que te permite encontrar gifs buscando por una palabra clave.",
    images: [
      {
        src: "/images/gif-expert/gif-expert.png",
        height: 630,
        width: 1340,
        alt: "gif expert portada",
      },
      {
        src: "/images/gif-expert/gif-expert-1.png",
        height: 630,
        width: 1340,
        alt: "gif expert imagen 1",
      },
      {
        src: "/images/gif-expert/gif-expert-2.png",
        height: 630,
        width: 1340,
        alt: "gif expert imagen 2",
      },
    ],
    long_description:
      "Una aplicación web simple que permite a los usuarios buscar y encontrar GIFs animados usando palabras clave. La aplicación utiliza la API de Giphy para obtener resultados en tiempo real.",
    learning:
      "Con este proyecto aprendí cómo consumir APIs externas, específicamente la API de Giphy. También practiqué el manejo de estados en React y cómo crear una interfaz de usuario responsiva para mostrar los resultados de búsqueda.",
    links: [
      {
        type: "Web",
        link: "https://javiercisneros.github.io/gif-expert-react/",
      },
    ],
    deployment:
      "Esta aplicación fue desplegada en GitHub Pages y está disponible en el siguiente enlace.",
    stack: "React, JavaScript, CSS, Giphy API",
  },
  3: {
    type: "Aplicación Web",
    title: "todoApp",
    description:
      "Aplicación web que te permite crear una lista de tareas por hacer y marcarlas como completadas.",
    images: [
      {
        src: "/images/todo-app/todo-app.png",
        height: 1080,
        width: 1920,
        alt: "todo app portada",
      },
      {
        src: "/images/todo-app/todo-app-1.png",
        height: 630,
        width: 1340,
        alt: "todo app imagen 1",
      },
      {
        src: "/images/todo-app/todo-app-2.png",
        height: 630,
        width: 1340,
        alt: "todo app imagen 2",
      },
    ],
    long_description:
      "Una aplicación de tareas simple que te permite crear una lista de tareas por hacer y marcarlas como completadas. La aplicación está construida con JavaScript vanilla y usa almacenamiento local para guardar las tareas.",
    learning:
      "Con esta aplicación de tareas, aprendí cómo trabajar con almacenamiento local en JavaScript y cómo manipular el DOM con JavaScript vanilla. Usé una plantilla simple para practicar solo JavaScript.",
    links: [
      { type: "Web", link: "https://javiercisneros.github.io/todo-app/" },
    ],
    deployment:
      "Esta aplicación fue desplegada en GitHub Pages y está disponible en el siguiente enlace.",
    stack: "JavaScript, HTML, CSS, Local Storage",
  },
  4: {
    type: "Aplicación Web",
    title: "BlackJack",
    description:
      "Aplicación web para jugar el clásico juego de cartas de BlackJack contra la computadora.",
    images: [
      {
        src: "/images/blackjack/blackjack.png",
        height: 1080,
        width: 1920,
        alt: "blackjack portada",
      },
      {
        src: "/images/blackjack/blackjack-1.png",
        height: 630,
        width: 1340,
        alt: "blackjack imagen 1",
      },
      {
        src: "/images/blackjack/blackjack-2.png",
        height: 630,
        width: 1340,
        alt: "blackjack imagen 2",
      },
    ],
    long_description:
      "Una aplicación web simple y fácil de usar para jugar el clásico juego de cartas de BlackJack contra la computadora. La aplicación está construida con JavaScript vanilla y usa almacenamiento local para guardar la puntuación del usuario.",
    learning:
      "Este fue uno de los primeros proyectos que hice con JavaScript. Aprendí cómo manipular el DOM con JavaScript vanilla y cómo usar almacenamiento local para guardar datos. También aprendí cómo usar la función Math.random() para generar números aleatorios. Usé una plantilla simple para practicar solo JavaScript.",
    links: [
      { type: "Web", link: "https://javiercisneros.github.io/blackjack/" },
    ],
    deployment:
      "Esta aplicación fue desplegada en GitHub Pages y está disponible en el siguiente enlace.",
    stack: "JavaScript, HTML, CSS, Local Storage",
  },
} as const;
