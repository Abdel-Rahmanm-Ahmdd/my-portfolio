import { GoDotFill } from "react-icons/go";
import Typewriter from "typewriter-effect";
import './home.css'
function Home() {
    const scrollToSection = (sectionId)=> {
        const element = document.getElementById(sectionId)
        if(element) {
            element.scrollIntoView({behavior: "smooth"})
        }
    }
    return (
        <section className="home h-280 bg-dark-blue relative md:h-250 lg:text-left lg:h-screen" id='home'>
            <div className="w-11/12 m-auto pt-20 flex lg:pt-20 flex-col md:items-center lg:flex-row lg:items-center">
                <div className="left lg:w-[45%] lg:mr-[2.5%]">
                    <div className="bg-electric-indigo/10 w-fit flex items-center gap-2 border border-cool-gray/20 rounded-4xl py-1 px-3 m-auto lg:m-0">
                        <span className="animate-pulse text-spring-green"><GoDotFill /></span>
                        <p className="text-cool-gray font-semibold">Available for opportunities</p>
                    </div>
                    <h2 className="text-white text-3xl font-semibold mt-6 text-center lg:text-left md:text-5xl">
                        Hi! I'm 
                        <span className="block bg-linear-to-r from-indigo-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text"> Abd El-Rahman Ahmed</span>
                    </h2>
                    <span className="text-2xl md:text-4xl my-6 block text-center lg:text-left">
                        <Typewriter className="bg-linear-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text font-semibold"
                        options={{
                            strings: [
                                'React Developer',
                                'Front-End Developer',
                                'UI/UX Enthusiast',
                                'Web Designer'
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 75,
                            deleteSpeed: 50,
                        }}
                        />
                    </span>
                    <p className="text-md text-cool-gray font-semibold leading-8 w-80 m-auto text-center lg:text-left md:text-xl md:w-lg lg:w-auto lg:m-0">Crafting <span className="text-white">beautiful, responsive web applications</span> with modern front-end technologies.
                        Passionate about clean code, elegant UI, and delightful user experiences.
                    </p>
                    <div className="w-full mt-7 flex flex-col gap-5 md:justify-start md:flex-row md:space-x-4 md:w-80 lg:w-fit">
                        <button onClick={()=> scrollToSection("projects")} className="text-white p-4 bg-electric-indigo rounded-full font-semibold shadow-lg shadow-indigo-500/20 cursor-pointer hover:bg-linear-to-r from-indigo-500 to-cyan-500">View My Projects</button>
                        <button onClick={()=> scrollToSection("contact")} className="text-white p-4 border border-cool-gray/20 rounded-full font-semibold cursor-pointer transition duration-300 hover:border-cool-gray">Get in Touch</button>
                    </div>
                </div>
                <div className="right lg:w-[45%] lg:ml-[2.5%] pt-20">
                    <div className=" w-fit relative border border-white/10 rounded-4xl m-auto mb-10">
                        <div className="w-32 h-9 text-sm font-semibold bg-dark-blue border border-white/20 rounded-2xl flex items-center justify-center gap-0.5 text-white/80 absolute z-10 animate-float -right-4 md:-right-1">React Dev</div>
                        <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-indigo-500/20 to-cyan-500/20 blur-2xl scale-110"></div>
                        <div className="w-80 h-90 relative rounded-4xl bg-[#0d0d1e] m-auto p-5 md:w-88 md:h-96">
                            <div className="head flex items-center gap-4">
                                <div className="flex items-center gap-1 text-3xl">
                                    <span className="w-4 h-4 rounded-full bg-red-500/50"></span>
                                    <span className="w-4 h-4 rounded-full bg-yellow-500/50"></span>
                                    <span className="w-4 h-4 rounded-full bg-green-500/50"></span>
                                </div>
                                <span className="text-cool-gray/60">abdelrahman.jsx</span>
                            </div>
                            <div className="body mt-6 text-white">
                                <div className="text-cool-gray/60 mt-2"><span className="text-purple-500">const</span> <span className="text-cyan-500">developer</span> = <span className="text-yellow-500">{'{'}</span></div>
                                <div className="pl-8 mt-2">
                                    <div className="text-cool-gray/60"><span>name:</span> <span className="text-spring-green"><span>"</span><span>Abdelrahman Ahmed</span><span>"</span>,</span></div>
                                    <div className="text-cool-gray/60 mt-2"><span>role:</span> <span className="text-spring-green"><span>"</span><span>Front-End Dev</span><span>"</span>,</span></div>
                                    <div className="mt-2"><span className="text-cool-gray/60">stack:</span> <span className="text-yellow-500">{'['}</span></div>
                                </div>
                                <div className="text-spring-green mt-2 pl-15">
                                    <div><span>"</span>HTML<span>"</span>, <span>"</span>CSS<span>"</span>,</div>
                                    <div className="mt-1"><span>"</span>JavaScript<span>"</span>, <span>"</span>React<span>"</span>,</div>
                                    <div className="mt-1"><span>"</span>Tailwindcss<span>"</span></div>
                                </div>
                                <span className="text-yellow-500 pl-8">{']'}</span>
                                <span className="text-yellow-500 block">{'}'}</span>
                            </div>
                        </div>
                        <div className="w-18 h-9 text-sm font-semibold bg-dark-blue border border-cyan-500/50 rounded-2xl flex items-center justify-center gap-0.5 text-cyan-500/80 absolute z-10 animate-float -left-4">UI/UX</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;