import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Briefcase, GraduationCap, Code, User, Award, ExternalLink, CheckCircle, FileText } from 'lucide-react';
import { projects } from '../data/projects';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header/Hero Section */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Faith Olayinka Taiwo</h1>
              <p className="text-gray-600 mb-4">Product Manager , UX designer, Frontend Developer with a background in Education</p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="https://linkedin.com/in/faith-olayinka-taiwo" className="text-blue-600 hover:text-blue-800">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:faithtaiwo745@gmail.com" className="text-red-600 hover:text-red-800">
                  <Mail className="w-6 h-6" />
                </a>
                <a href="https://github.com/simplyfaith" className="text-gray-800 hover:text-gray-600">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://drive.google.com/file/d/1qaCgcWC7vihQelyJ393Vjnyr3OGtGN5B/view?usp=sharing" className="text-gray-800 hover:text-gray-600">
                  <FileText className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* About Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <User className="w-6 h-6 mr-3 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-800">About Me</h2>
            </div>
            <p className="text-gray-600">
            I have a strong background in education ( From Age 15 ) and am now growing in project management, digital solutions, and customer experience. I’m skilled in handling projects, creating user-friendly products, and improving business processes. My teaching experience has strengthened my communication, leadership, and problem-solving skills, helping me work well with teams. I’m involved in all stages of product development, from ideas to results, and I enjoy finding new ways to improve things. I’m passionate about digital transformation, brand building, and making user experiences smooth while using my teaching skills to support learning and engagement.
            </p>
          </div>
        </section>

   {/* Projects Section */}
<section className="mb-16">
  <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-lg p-10">
    <div className="flex items-center mb-8">
      <Briefcase className="w-7 h-7 mr-3 text-blue-600" />
      <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <Link 
          key={project.id}
          to={`/project/${project.id}`}
          className="block border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="relative">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md">
              <ExternalLink className="w-5 h-5 text-blue-600" />
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>


        {/* Skills & Education Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Skills */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <Code className="w-6 h-6 mr-3 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-800">Skills</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Award className="w-4 h-4 mr-2 text-blue-600" />
                <span>Front-End Development (HTML, CSS, JavaScript, PHP, React Native)</span>
              </li>
              <li className="flex items-center">
                <Award className="w-4 h-4 mr-2 text-blue-600" />
                <span>UI/UX Design</span>
              </li>
              <li className="flex items-center">
                <Award className="w-4 h-4 mr-2 text-blue-600" />
                <span>Wireframing and Prototyping</span>
              </li>
              <li className="flex items-center">
                <Award className="w-4 h-4 mr-2 text-blue-600" />
                <span>Figma</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                <span>Leadership & Team Management</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                <span>Problem-Solving & Critical Thinking</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                <span>Effective Communication</span>
              </li>
            </ul>
          </div>

          {/* Education */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <GraduationCap className="w-6 h-6 mr-3 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-800">Education</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Lincoln College of Management Science & Technology</h3>
                <p className="text-gray-600">Diploma in Software Engineering</p>
                <p className="text-sm text-gray-500">2022 - 2024</p>
              </div>
              <div>
                <h3 className="font-semibold">NIIT</h3>
                <p className="text-gray-600">Web Design</p>
                <p className="text-sm text-gray-500">2022 - 2023</p>
              </div>
              <div>
                <h3 className="font-semibold">Online Certifications (Product School)</h3>
                <p className="text-gray-600">Product Strategy</p>
                <p className="text-sm text-gray-500">September 2024</p>
              </div>
              <div>
                <h3 className="font-semibold">Gymnasium</h3>
                <p className="text-gray-600">UX Fundamentals</p>
                <p className="text-sm text-gray-500">January 2025</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
