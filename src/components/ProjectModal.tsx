import type { Project, ProjectCategory } from '@/lib/mockData';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Play } from 'lucide-react';

// Definimos los tipos para las props que recibirá el componente.
interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  if (!project) return null;

  // Usamos el mismo tipo que en ProjectCard para los estilos de la categoría.
  const categoryStyles: Record<ProjectCategory, string> = {
    IA: 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
    Móvil: 'bg-green-500/20 text-green-400 border border-green-500/30',
    Web: 'bg-purple-500/20 text-purple-400 border border-purple-500/30',
  };

  return (
    // El componente Dialog de Shadcn maneja el estado de apertura y el cierre.
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-900 border-gray-700/50 max-w-4xl w-full max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="p-0 relative h-64 md:h-80">
          <img
            src={project.images?.[0] || project.image}
            alt={project.title}
            className="w-full h-full object-cover rounded-t-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
        </DialogHeader>

        {/* Contenedor para el contenido con scroll */}
        <div className="p-8 overflow-y-auto">
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 ${categoryStyles[project.category]}`}
          >
            {project.category}
          </span>
          <DialogTitle className="text-3xl font-bold text-white mb-2">
            {project.title}
          </DialogTitle>

          <div className="mb-8 mt-4">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              Descripción del Proyecto
            </h3>
            <DialogDescription className="text-base text-gray-300 leading-relaxed">
              {project.fullDescription}
            </DialogDescription>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              Tecnologías Utilizadas
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies?.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-blue-500/10 text-blue-300 rounded-lg font-medium border border-blue-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.images && project.images.length > 1 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                Capturas del Proyecto
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.slice(1).map((image, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-xl border border-gray-700/50"
                  >
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${index + 2}`}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Pie del modal para los botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 border-t border-gray-700/50 p-8 mt-auto">
          {project.githubUrl && (
            <Button
              asChild
              className="flex-1 font-semibold"
              variant="secondary"
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                Ver Código
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button asChild className="flex-1 font-semibold">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Ver Demo
              </a>
            </Button>
          )}
          {project.playStoreUrl && (
            <Button
              asChild
              className="flex-1 font-semibold bg-green-600 hover:bg-green-700"
            >
              <a
                href={project.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Play className="w-5 h-5 mr-2" />
                Play Store
              </a>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
