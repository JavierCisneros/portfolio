import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Francisco Javier Cisneros Avila - Software Development Engineer",
    short_name: "Javier Cisneros",
    description:
      "Front-End software developer from Guadalajara, Jalisco specializing in React, Next.js, TypeScript, and modern web technologies.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    lang: "en",
    dir: "ltr",
    icons: [
      {
        src: "/images/javier_cisneros.jpg",
        sizes: "any",
        type: "image/jpeg",
      },
    ],
  };
}
