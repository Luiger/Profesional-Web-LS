// src/components/ProjectsContainer.tsx
import React, { useState } from 'react';
import type { Project, Category } from '@/lib/mockData';
import ProjectModal from './ProjectModal';
import { Button } from '@/components/ui/button';

interface ProjectsContainerProps {
  projects: Project[];
  categories: Category[];
  children: React.ReactNode[];
}

export default function ProjectsContainer({
  projects,
  categories,
  children,
}: ProjectsContainerProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      {/* Filtros de Categoría */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? 'default' : 'secondary'}
            onClick={() => setSelectedCategory(category.id)}
            className="rounded-full px-6 py-3 font-semibold transition-transform transform hover:scale-105"
          >
            {category.name}{' '}
            <span className="ml-2 text-sm opacity-75">({category.count})</span>
          </Button>
        ))}
      </div>

      {/* Cuadrícula de Proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          const card = children[index];
          const isVisible =
            selectedCategory === 'all' || project.category === selectedCategory;

          return (
            // --- ¡AQUÍ ESTÁ LA SOLUCIÓN! ---
            // 1. Cambiamos el 'div' por un 'button'.
            // 2. Añadimos type="button" (buena práctica).
            // 3. Reseteamos los estilos del botón para que actúe como un contenedor.
            <button
              type="button"
              key={project.id}
              className={`block w-full text-left p-0 ${!isVisible ? 'hidden' : ''}`}
              onClick={() => setSelectedProject(project)}
            >
              {card}
            </button>
          );
        })}
      </div>

      {/* Modal del Proyecto */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
