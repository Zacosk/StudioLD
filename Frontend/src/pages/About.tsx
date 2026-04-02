import ContactForm from "../components/ContactForm";

export default function About() {
    return (
        <div className="min-h-screen pt-32 pb-32 px-6 lg:px-20 lg:pt-[300px] xl:max-w-[1700px] xl:mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 lg:items-stretch">
                <div className="w-full lg:w-2/5">
                    <img 
                        src="/public/assets/LexieDownie.webp" 
                        alt="Lexie Downie" 
                        className="w-full aspect-square object-cover rounded-lg h-full"
                    />
                </div>
                <div className="w-full lg:w-3/5 flex flex-col justify-between text-black">
                    <h1 className="text-base font-bold tracking-wide mb-6">About Me</h1>
                    <div className="space-y-4 text-black leading-relaxed">
                        <p>Hi, I'm Lexie, a multimedia designer based in Sydney, Australia passionate about creating visuals that move, inspire and connect. I work across graphic, motion and print projects turning ideas into clean, engaging and memorable designs.</p>
                        <p>I studied Graphic Design at university and also completed a course in motion design which has given me a mix of creative and technical skills. Over the past few years I've worked on branding, digital content, marketing materials and event collateral. I really enjoy being part of the whole design process from brainstorming ideas to seeing the finished work out in the world.</p>
                        <p>I love exploring new creative challenges whether it's crafting bold brands, designing motion graphics or experimenting with different creative projects.</p>
                        <p>Outside of design you'll usually find me with a camera in hand, planning my next trip or diving into something creative just for fun. I'm always excited for new collaborations and bringing fresh perspectives into my work, so get in touch and let's create something together!</p>
                    </div>
                </div>
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
        </div>
    )
}
