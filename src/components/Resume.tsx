import { ResumeData } from '../types';

interface ResumeProps {
  resumeData: ResumeData;
}

const Resume = ({ resumeData }: ResumeProps) => {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{resumeData.personal.name}</h1>
          <p className="text-xl text-gray-600 mb-4">{resumeData.personal.title}</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>{resumeData.personal.email}</span>
            <span>•</span>
            <span>{resumeData.personal.location}</span>
            <span>•</span>
            <a href={resumeData.personal.github} className="text-blue-600 hover:text-blue-800">
              GitHub
            </a>
            <span>•</span>
            <a href={resumeData.personal.linkedin} className="text-blue-600 hover:text-blue-800">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3 border-b-2 border-gray-200 pb-2">
            Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">{resumeData.personal.summary}</p>
        </div>

        {/* Experience */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-gray-200 pb-2">
            Professional Experience
          </h2>
          <div className="space-y-6">
            {resumeData.experience.map((job, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{job.position}</h3>
                  <span className="text-sm text-gray-500">{job.startDate} - {job.endDate}</span>
                </div>
                <p className="text-blue-600 font-medium mb-2">{job.company}, {job.location}</p>
                <p className="text-gray-700 mb-3">{job.description}</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  {job.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex}>{achievement}</li>
                  ))}
                </ul>
                <div className="mt-3">
                  <span className="text-sm font-medium text-gray-600">Technologies: </span>
                  <span className="text-sm text-gray-700">{job.technologies.join(', ')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-gray-200 pb-2">
            Selected Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {resumeData.projects.slice(0, 6).map((project, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{project.role}</p>
                <p className="text-sm text-gray-700 mb-3">{project.description}</p>
                <div className="text-xs text-gray-500 mb-2">
                  {project.startDate} - {project.endDate}
                </div>
                <div className="text-xs text-gray-600">
                  <span className="font-medium">Tech: </span>
                  {project.technologies.slice(0, 4).join(', ')}
                  {project.technologies.length > 4 && '...'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-gray-200 pb-2">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Programming Languages</h3>
              <div className="space-y-2">
                {resumeData.skills.languages.map((skill, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700">{skill.name}</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Frameworks & Tools</h3>
              <div className="space-y-2">
                {resumeData.skills.frameworks.map((skill, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700">{skill.name}</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-500 h-2 rounded-full"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-gray-200 pb-2">
            Education
          </h2>
          <div className="border-l-4 border-green-500 pl-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-gray-900">{resumeData.education.university}</h3>
              <span className="text-sm text-gray-500">{resumeData.education.graduationDate}</span>
            </div>
            <p className="text-blue-600 font-medium mb-2">{resumeData.education.degree}</p>
            <p className="text-gray-700 mb-3">GPA: {resumeData.education.gpa}</p>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Relevant Coursework:</h4>
              <p className="text-sm text-gray-700">{resumeData.education.relevantCoursework.join(', ')}</p>
            </div>
          </div>
        </div>

        {/* Awards */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-gray-200 pb-2">
            Awards & Recognition
          </h2>
          <div className="space-y-3">
            {resumeData.awards.map((award, index) => (
              <div key={index} className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{award.title}</h3>
                  <p className="text-blue-600 text-sm">{award.organization}</p>
                  <p className="text-sm text-gray-700">{award.description}</p>
                </div>
                <span className="text-sm text-gray-500">{award.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Print Button */}
        <div className="text-center mt-12 print:hidden">
          <button
            onClick={() => window.print()}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Print Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
