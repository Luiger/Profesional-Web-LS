import { IconContext } from 'react-icons';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

interface SocialIconsProps {
  githubUrl: string;
  linkedinUrl: string;
  // Hacemos las clases opcionales y les damos un valor por defecto
  containerClassName?: string;
  iconClassName?: string;
}

export default function SocialIcons({
  githubUrl,
  linkedinUrl,
  // Asignamos valores por defecto (los que usaba el Header)
  containerClassName = 'flex items-center space-x-4',
  iconClassName = 'w-6 h-6 text-primary transition-all duration-300 hover:scale-110 hover:text-accent mx-1',
}: SocialIconsProps) {
  return (
    // Usamos la prop para la clase del proveedor de contexto
    <IconContext.Provider
      value={{
        className: iconClassName,
      }}
    >
      {/* Usamos la prop para la clase del div contenedor */}
      <div className={containerClassName}>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub de Luiger Santana"
        >
          <Github />
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn de Luiger Santana"
        >
          <Linkedin />
        </a>
      </div>
    </IconContext.Provider>
  );
}
