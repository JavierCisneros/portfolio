import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Francisco Javier Cisneros Avila - Software Engineer",
    short_name: "Javier Cisneros",
    description:
      "Full-Stack Software Engineer building cloud-native applications, secure platform integrations, and production systems with React, TypeScript, Node.js, and AWS.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f6f2",
    theme_color: "#0d0e10",
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
