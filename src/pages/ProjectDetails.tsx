import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Project not found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800 flex items-center justify-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Project Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>

        {/* Project Description */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
              <p className="text-gray-600 mb-6 whitespace-pre-line">{project.longDescription}</p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                {project.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">{feature}</li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Technologies Used</h3>
              <ul className="list-disc list-inside space-y-2">
                {project.technologies.map((tech, index) => (
                  <li key={index} className="text-gray-600">{tech}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Project Gallery */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Gallery</h2>
              <div className="space-y-4">
                {project.additionalImages.map((image, index) => (
                  <img 
                    key={index}
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full rounded-lg shadow-sm"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;