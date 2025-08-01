"use client";
import Link from "next/link";
import Projects from "../../../components/Projects";
import SmoothScroll from "../../../components/SmoothScroll";

export default function proyectosPage() {
  return (
    <SmoothScroll>
      <main className="relative max-w-2xl m-auto my-16 flex flex-col gap-12 px-6 bg-slate-300 dark:bg-background-dark text-black dark:text-white">
        <div className="scroll-m-20 text-2xl font-bold tracking-tight">
          <div>
            <div className="flex items-center pt-4">
              <h2 className="font-medium text-markup">Proyectos</h2>
              <div className="flex-1 h-px bg-black dark:bg-slate-300 ml-4 rounded-full"></div>
            </div>
            <p className="font-normal text-base pt-2 text-justify">
              He estado trabajando en diferentes proyectos. Algunos son
              proyectos personales y otros son proyectos en los que he trabajado
              con otros desarrolladores.
            </p>
            <p className="font-normal text-base pt-2 text-justify">
              Estos son algunos proyectos que he realizado en el pasado para
              practicar habilidades como programación usando JavaScript,
              TypeScript, React como framework Front-End y Next.js como
              framework full-stack.
            </p>
            <div className="flex items-center space-x-4 mt-4 mb-6">
              <Link
                href="/es"
                className="inline-flex items-center text-sm font-medium text-markup hover:text-markup/80 transition-colors duration-200"
              >
                <svg
                  className="mr-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Regresar
              </Link>
            </div>
            <Projects numberOfElements={5} language="es" />
          </div>
        </div>
      </main>
    </SmoothScroll>
  );
}
