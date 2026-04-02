import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import yaml from "js-yaml";
import projectsYaml from "../projects.yaml?raw";
import ContactForm from "../components/ContactForm";

const projects = yaml.load(projectsYaml) as { slug: string; title: string; type: string }[];

export default function Home() {
    const scrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main className="min-h-screen pt-32 pb-32 px-6 lg:px-20 lg:pt-[300px] xl:max-w-[1700px] xl:mx-auto flex flex-col items-center">
            <div className="w-full max-w-4xl flex flex-col items-center">
                <div className="w-full aspect-video bg-gray-200 rounded-lg mb-8 animate-pulse flex items-center justify-center">
                    <span className="text-gray-400">Image</span>
                </div>
                <button onClick={scrollToProjects} className="cursor-pointer hidden lg:block">
                    <ChevronDown className="w-12 h-12" style={{ animation: 'bounce-once 1.5s ease-in-out 1' }} />
                </button>
            </div>
            <div id="projects" className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-16 lg:mt-48">
                {projects.map((project) => (
                    <Link
                        to={`/project/${project.slug}`}
                        key={project.slug}
                        className="relative aspect-[16/9] rounded-lg overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-400">Image</span>
                        </div>
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="text-center">
                                <h2 className="text-white text-xl font-bold">{project.title}</h2>
                                <p className="text-white/70 text-sm mt-1">{project.type}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="w-full mt-16 lg:mt-48 flex flex-col lg:flex-row gap-12 lg:gap-24">
                <div className="w-full lg:w-2/5">
                    <h2 className="text-3xl lg:text-4xl font-bold tracking-wide mb-4">Create With Me!</h2>
                    <p className="text-base font-medium mb-4">Looking for eye-catching designs?</p>
                    <p className="text-base text-gray-600">I'm always excited to collaborate on creative projects, whether it's marketing materials, digital assets, print designs, or something unique to your brand. Let's bring your ideas to life!</p>
                </div>
                <div className="w-full lg:w-3/5">
                    <ContactForm />
                </div>
            </div>
        </main>
    );
}
