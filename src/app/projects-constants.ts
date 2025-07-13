export const PROJECT_CONSTANTS = {
  0: {
    type: "Progressive Web App",
    title: "Tianguiza",
    description:
      "Progressive Web App dedicated to centralizing the information of the street markets (tianguis) in the metropolitan area of Guadalajara.",
    images: [
      {
        src: "/images/tianguiz/tianguiza.png",
        height: 1080,
        width: 1920,
        alt: "tianguiza cover",
      },
      {
        src: "/images/tianguiz/tianguiza-1.png",
        height: 1080,
        width: 1920,
        alt: "tianguiza image 1",
      },
      {
        src: "/images/tianguiz/tianguiza-2.png",
        height: 1080,
        width: 1920,
        alt: "tianguiza image 2",
      },
      {
        src: "/images/tianguiz/tianguiza-3.png",
        height: 1080,
        width: 1920,
        alt: "tianguiza image 3",
      },
      {
        src: "/images/tianguiz/tianguiza-4.png",
        height: 1080,
        width: 1920,
        alt: "tianguiza image 4",
      },
    ],
    long_description:
      "Tianguiza is a Progressive Web App that centralizes the information of the street markets (tianguis) in the metropolitan area of Guadalajara. The application allows users to search for street markets by location, day, and categories. It also allows vendors to register their market stall and manage their information.",
    learning:
      "In this project I was member of a 3-person team, I was involved in the development of many features, such as the search functionality and categories filtering, the stalls and tianguis registration forms as the use of the OpenStreetMap API. I also worked on the deployment of the app on Vercel and the database on NEON. I learned how to work with a team, how to manage a project, and how to deploy a full-stack application. I also learned how to work with postgreSQL and how to use an ORM to interact with it. I also learned how to use figma as design system",
    links: [
      { type: "Web", link: "https://tianguiza.com" },
      {
        type: "Google Play Store",
        link: "https://play.google.com/store/apps/details?id=com.tianguiza.twa&pcampaignid=web_share",
      },
    ],
    deployment:
      "This app was deployed on Vercel, using Next.js and PostgreSQL, is also available on Google Play Store. Below is the link to the app.",
    stack:
      "React, Next.js, Tailwind CSS, PostgreSQL, Drizzle ORM, OpensStreetMaps, React-Leaflet, ",
  },
  1: {
    type: "Mobile App",
    title: "SudorFit",
    description:
      "Mobile application for tracking physical activity, calorie counting, and goal tracking.",
    images: [
      {
        src: "/images/sudorfit/sudorfit.png",
        height: 1080,
        width: 1920,
        alt: "sudorfit cover",
      },
      {
        src: "/images/sudorfit/sudorfit-3.webp",
        height: 1080,
        width: 2400,
        alt: "sudorfit image 2",
      },
      {
        src: "/images/sudorfit/sudorfit-1.png",
        height: 1080,
        width: 2400,
        alt: "sudorfit image 1",
      },
      {
        src: "/images/sudorfit/sudorfit-2.png",
        height: 1080,
        width: 2400,
        alt: "sudorfit image 2",
      },
    ],
    long_description:
      "Sudorfit is an app that allows you to track your physical activity, count calories, and set goals. The app has a user-friendly interface that makes it easy to track your progress and stay motivated. It awards medals to users when they achieve a goal. It also features a pet named Sudorito that provides motivational messages to users based on their achieved goals.",
    learning:
      "Developing this app I learned basic concepts of Android development, such as activities, fragments, and intents. I also practiced how to use Firebase to store user data and how to use Android Studio to develop Android apps. I also learned how to use the Google Play Store to deploy an app.",
    links: [
      {
        type: "Google Play Store",
        link: "https://play.google.com/store/apps/details?id=com.sudorlabs.sudorfit&pcampaignid=web_share",
      },
    ],
    deployment: "This app was deployed on Google Play Store.",
    stack: "Java, Firebase and Android Studio",
  },
  2: {
    type: "Web App",
    title: "GIF Expert",
    description:
      "Web application that allows you to find gifs by searching for a keyword.",
    images: [
      {
        src: "/images/gif-expert/gif-expert.png",
        height: 630,
        width: 1340,
        alt: "gif expert cover",
      },
      {
        src: "/images/gif-expert/gif-expert-1.png",
        height: 630,
        width: 1340,
        alt: "gif expert image 1",
      },
      {
        src: "/images/gif-expert/gif-expert-2.png",
        height: 630,
        width: 1340,
        alt: "gif expert image 2",
      },
    ],
    long_description:
      "Web application that allows you to find gifs by searching for a keyword.",
    learning:
      "This project helped me learn the fundamentals of React, including components, hooks, and state management. I learned how to make API calls to external services (GIPHY API) and how to handle asynchronous operations. I also practiced working with event handlers and form inputs in React.",
    links: [
      {
        type: "Web",
        link: "https://javiercisneros.github.io/gif-expert-react/",
      },
    ],
    deployment:
      "This app was deployed on GitHub Pages and is available in the next link.",
    stack: "",
  },
  3: {
    type: "Web App",
    title: "todoApp",
    description:
      "Web application that allows you to create a list of tasks to do and mark them as completed.",
    images: [
      {
        src: "/images/todo-app/todo-app.png",
        height: 1080,
        width: 1920,
        alt: "todo app cover",
      },
      {
        src: "/images/todo-app/todo-app-1.png",
        height: 630,
        width: 1340,
        alt: "todo app image 1",
      },
      {
        src: "/images/todo-app/todo-app-2.png",
        height: 630,
        width: 1340,
        alt: "todo app image 2",
      },
    ],
    long_description:
      "A simple todo app that allows you to create a list of tasks to do and mark them as completed. The app is built with vanilla JavaScript and uses local storage to store the tasks.",
    learning:
      "With this todo app, I learned how to work with local storage in JavaScript and how to manipulate the DOM with vanilla JavaScript. I used a simple template to only practica JS.",
    links: [
      { type: "Web", link: "https://javiercisneros.github.io/todo-app/" },
    ],
    deployment:
      "This app was deployed on GitHub Pages and is available in the next link.",
    stack: "",
  },
  4: {
    type: "Web App",
    title: "BlackJack",
    description:
      "Web application to play the classic card game of BlackJack against the computer.",
    images: [
      {
        src: "/images/blackjack/blackjack.png",
        height: 1080,
        width: 1920,
        alt: "blackjack cover",
      },
      {
        src: "/images/blackjack/blackjack-1.png",
        height: 630,
        width: 1340,
        alt: "blackjack image 1",
      },
      {
        src: "/images/blackjack/blackjack-2.png",
        height: 630,
        width: 1340,
        alt: "blackjack image 2",
      },
    ],
    long_description:
      "A simple and easy to use web application to play the classic card game of BlackJack against the computer. The app is built with vanilla JavaScript and uses local storage to store the user's score.",
    learning:
      "This was one of the first projects I did with JavaScript. I learned how to manipulate the DOM with vanilla JavaScript and how to use local storage to store data. I also learned how to use the Math.random() function to generate random numbers. I used a simple template to only practics JS.",
    links: [
      { type: "Web", link: "https://javiercisneros.github.io/blackjack/" },
    ],
    deployment:
      "This app was deployed on GitHub Pages and is available in the next link.",
    stack: "",
  },
} as const;
