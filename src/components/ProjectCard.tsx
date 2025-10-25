import type { Project, ProjectCategory } from '@/lib/mockData';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

interface ProjectCardProps {
  project: Project;
}

const categoryStyles: Record<ProjectCategory, string> = {
  IA: 'bg-blue-500/80 text-white',
  Móvil: 'bg-green-500/80 text-white',
  Web: 'bg-purple-500/80 text-white',
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group h-full will-change-transform">
      <Card className="bg-card/80 backdrop-blur-sm border border-border h-full flex flex-col transition-all duration-500 ease-in-out transform-gpu hover:scale-105 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/30">
        {' '}
        <CardHeader className="p-0 relative h-56 overflow-hidden rounded-t-lg">
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-100 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <span
            className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${categoryStyles[project.category]}`}
          >
            {project.category}
          </span>
        </CardHeader>
        <CardContent className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">
            {project.description}
          </p>
          <div className="text-right text-blue-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity mt-auto">
            Ver detalles &rarr;
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
