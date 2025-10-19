export type ProjectCategory = 'IA' | 'Móvil' | 'Web';

// Tipos para nuestros datos
export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  fullDescription: string;
  technologies: string[];
  images: string[];
  githubUrl?: string;
  liveUrl?: string;
  playStoreUrl?: string;
}

export interface Category {
  id: string;
  name: string;
  count: number;
}

// Datos personales
export const personalInfo = {
  name: 'Luiger Santana',
  title: 'Ingeniero en Informática',
  description:
    'Desarrollador Full Stack especializado en inteligencia artificial y tecnologías modernas. Con más de 5 años de experiencia creando soluciones innovadoras que combinan machine learning, desarrollo web y aplicaciones móviles. Apasionado por transformar ideas complejas en productos digitales elegantes y funcionales.',
  email: 'luiger.santana@email.com',
};

// Datos de Proyectos
export const projects: Project[] = [
  {
    id: 1,
    title: 'Sistema de Reconocimiento Facial con IA',
    category: 'IA',
    description:
      'Sistema avanzado de reconocimiento facial utilizando redes neuronales profundas',
    image: '/Deep-Learning-Layers.png',
    fullDescription:
      'Un sistema completo de reconocimiento facial desarrollado con TensorFlow y OpenCV. Implementa algoritmos de deep learning para detección y reconocimiento de rostros en tiempo real, con una precisión del 98.5%. Incluye una interfaz web intuitiva y API REST para integración con otros sistemas.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'JavaScript'],
    images: ['/Deep-Learning-Layers.png', '/Abstract-Neural-Brain.png'],
    githubUrl: 'https://github.com/luiger-santana/face-recognition-ai',
    liveUrl: 'https://face-recognition-demo.netlify.app',
  },
  {
    id: 2,
    title: 'Chatbot Inteligente con Procesamiento de Lenguaje Natural',
    category: 'IA',
    description:
      'Chatbot avanzado con capacidades de NLP para atención al cliente automatizada',
    image: '/Chatbot-Binary-Bubble.png',
    fullDescription:
      'Chatbot inteligente desarrollado con modelos de NLP avanzados que puede mantener conversaciones naturales y resolver consultas complejas. Integra análisis de sentimientos y aprendizaje continuo para mejorar sus respuestas con cada interacción.',
    technologies: ['Python', 'NLTK', 'Transformers', 'FastAPI', 'React'],
    images: ['/Chatbot-Binary-Bubble.png', '/Abstract-Neural-Brain.png'],
    githubUrl: 'https://github.com/luiger-santana/intelligent-chatbot',
    liveUrl: 'https://chatbot-nlp-demo.vercel.app',
  },
  {
    id: 3,
    title: 'Predictor de Precios con Machine Learning',
    category: 'IA',
    description:
      'Modelo predictivo para análisis de tendencias de mercado usando algoritmos ML',
    image: '/Abstract-Neural-Brain.png',
    fullDescription:
      'Sistema de predicción de precios que utiliza algoritmos de machine learning para analizar tendencias de mercado. Implementa múltiples modelos (Random Forest, LSTM, XGBoost) y selecciona automáticamente el mejor según los datos históricos.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Streamlit'],
    images: ['/Abstract-Neural-Brain.png', '/Deep-Learning-Layers.png'],
    githubUrl: 'https://github.com/luiger-santana/price-predictor-ml',
    liveUrl: 'https://price-predictor-ml.herokuapp.com',
  },
  {
    id: 4,
    title: 'App Móvil de Gestión de Tareas',
    category: 'Móvil',
    description:
      'Aplicación móvil multiplataforma para gestión eficiente de proyectos y tareas',
    image: '/Mobile-Icon-Color-Variations.png',
    fullDescription:
      'Aplicación móvil desarrollada con React Native y Expo que permite gestionar proyectos y tareas de manera eficiente. Incluye sincronización en tiempo real, notificaciones push, modo offline y colaboración en equipo.',
    technologies: ['React Native', 'Expo', 'Firebase', 'Redux', 'TypeScript'],
    images: [
      '/Mobile-Icon-Color-Variations.png',
      '/Dark-Mode-Dashboard-Logo.png',
    ],
    githubUrl: 'https://github.com/luiger-santana/task-manager-mobile',
    playStoreUrl: 'https://play.google.com/store/apps/task-manager',
  },
  {
    id: 5,
    title: 'Plataforma Web de E-learning',
    category: 'Web',
    description:
      'Plataforma educativa completa con sistema de cursos y evaluaciones online',
    image: '/Dark-Mode-Dashboard-Logo.png',
    fullDescription:
      'Plataforma web completa de e-learning desarrollada con React y Node.js. Incluye sistema de autenticación, creación de cursos, evaluaciones interactivas, seguimiento de progreso y panel de administración avanzado.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Express.js', 'Socket.io'],
    images: [
      '/Dark-Mode-Dashboard-Logo.png',
      '/Mobile-Icon-Color-Variations.png',
    ],
    githubUrl: 'https://github.com/luiger-santana/elearning-platform',
    liveUrl: 'https://elearning-platform-demo.vercel.app',
  },
];

// Datos de Categorías
export const projectCategories: Category[] = [
  { id: 'all', name: 'Todos', count: 5 },
  { id: 'IA', name: 'Inteligencia Artificial', count: 3 },
  { id: 'Móvil', name: 'Desarrollo Móvil', count: 1 },
  { id: 'Web', name: 'Desarrollo Web', count: 1 },
];
