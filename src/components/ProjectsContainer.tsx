// src/components/ProjectsContainer.tsx
import React, { useState, useMemo } from 'react';
import type { Project, Category } from '@/lib/mockData';
import ProjectModal from './ProjectModal';
import { Button } from '@/components/ui/button';
import ProjectCard from './ProjectCard'; // <-- AHORA IMPORTAMOS EL COMPONENTE DE REACT

interface ProjectsContainerProps {
  projects: Project[];
  categories: Category[];
}

export default function ProjectsContainer({
  projects,
  categories,
}: ProjectsContainerProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') {
      return projects;
    }
    return projects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory, projects]);

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-3 gap-8">
        {/* LÓGICA SIMPLE Y DIRECTA: MAPEAMOS LOS DATOS FILTRADOS Y RENDERIZAMOS EL COMPONENTE REACT */}
        {filteredProjects.map((project) => (
          <button
            type="button"
            key={project.id}
            className="text-left"
            onClick={() => setSelectedProject(project)}
          >
            <ProjectCard project={project} />
          </button>
        ))}
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
