import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import yaml from "js-yaml";
import projectsYaml from "../projects.yaml?raw";
import ContactForm from "../components/ContactForm";

type ImageSize = "large" | "normal" | "tall" | "thin" | "wide" | "extra_wide";

interface ProjectImage {
    src: string;
    size: ImageSize;
}

interface Project {
    slug: string;
    title: string;
    description: string;
    type: string;
    listingimage: string;
    images: ProjectImage[];
}

const projectsData = yaml.load(projectsYaml) as Project[];

const sizeClasses: Record<ImageSize | "default", string> = {
    default: "col-span-2 row-span-2",
    large: "col-span-4 row-span-4 aspect-square",
    normal: "col-span-2 row-span-2",
    tall: "col-span-4 row-span-2",
    thin: "col-span-1 row-span-2",
    wide: "col-span-3 row-span-2",
    extra_wide: "col-span-5 row-span-2",
};

export default function ProjectPage() {
    const { slug } = useParams();
    const project = projectsData.find((p) => p.slug === slug);

    if (!project) {
        return (
        <main className="min-h-screen pt-[300px] pb-32 px-6 lg:px-20 xl:max-w-[1700px] xl:mx-auto">
                <Link to="/" className="flex items-center gap-2 text-black mb-8">
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back</span>
                </Link>
                <h1 className="text-2xl font-bold">Project Not Found</h1>
            </main>
        );
    }

    return (
        <main className="min-h-screen pt-[300px] pb-32 px-6 lg:px-20 xl:max-w-[1700px] xl:mx-auto">
            <Link to="/" className="flex items-center gap-2 text-black mb-8">
                <ArrowLeft className="w-5 h-5" />
                <span>Back</span>
            </Link>
            <div className="mb-12">
                <h1 className="text-base font-bold mb-2">{project.title}</h1>
                <p className="text-base text-gray-600">{project.description}</p>
            </div>
            <div className="grid grid-cols-5 gap-8 auto-rows-[250px]">
                {project.images.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={`${project.title} - Image ${index + 1}`}
                        className={`w-full h-full object-cover rounded-lg ${sizeClasses[image.size] || sizeClasses.default}`}
                    />
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