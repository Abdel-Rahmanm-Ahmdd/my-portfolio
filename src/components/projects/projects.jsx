function Projects() {
    const base = import.meta.env.BASE_URL;
    const projects = [
        {
            id: 1,
            title: "Integrated Digital Marketing Platform",
            view: "View Project",
            img: `${base}p1.jpg`,
            desc: "A modern, responsive landing page for BrandHub Pro, a full-service digital marketing agency offering brand asset management, SEO, web development, and visual identity design. Built with a clean light-mode UI, emerald-green accents.",
            tags: ["HTML" , "Tailwindcss"],
            href: "https://abdel-rahmanm-ahmdd.github.io/project-3/"
        },
        {
            id: 2,
            title: "E-commerce",
            view: "View Project",
            img: `${base}p2.png`,
            desc: "A responsive, full-featured e-commerce web application built to deliver a seamless online shopping experience. Users can browse dynamic product catalogs, filter items by category.",
            tags: ["HTML" , "CSS" , "React"],
            href: "https://abdel-rahmanm-ahmdd.github.io/E-commerce/"
        },
        {
            id: 3,
            title: "Portfolio",
            view: "View Project",
            img: `${base}p3.png`,
            desc: "A modern, responsive personal portfolio built with React and Tailwind CSS to showcase front-end web development projects, technical skills, and experience. Features interactive UI components, animated skill-progress indicators.",
            tags: ["HTML" , "Tailwindcss" , "React"],
            href: "https://abdel-rahmanm-ahmdd.github.io/my-portfolio/"
        },
        {
            id: 4,
            title: "Brand Management Platform",
            view: "View Project",
            img: `${base}p4.webp`,
            desc: "A modern digital asset management and client portal platform featuring centralized brand resources, team collaboration tools, subscription tiers, and a seamless user experience.",
            tags: ["HTML" , "CSS"],
            href: "https://github.com/Abdel-Rahmanm-Ahmdd/project-1"
        },
        {
            id: 5,
            title: "Men's Fashion Platform",
            view: "View Project",
            img: `${base}p5.jpg`,
            desc: "A complete-featured men's fashion e-commerce platform offering smart filtering, secure checkout, customer reviews, and a smooth mobile-responsive shopping journey.",
            tags: ["HTML5" , "CSS3"],
            href: "https://github.com/Abdel-Rahmanm-Ahmdd/project-2"
        },
    ];


    return (
        <section className="w-full border py-20 border-white/10 bg-dark-blue" id="projects">
            <div>
                <div className="head m-auto text-center">
                    <p className="text-indigo-400 uppercase tracking-widest text-[12px] md:text-sm">My Work</p>
                    <h2 className="text-3xl md:text-5xl font-semibold text-white mt-4 mb-4">Featured Projects</h2>
                    <span className="w-20 h-0.5 block m-auto mb-4 bg-linear-to-r from-purple-400 to-cyan-500"></span>
                    <p className="text-white/50 w-fit text-sm md:text-md md:w-md m-auto">Real-world applications built with modern technologies and best practices.</p>
                </div>
                <div className="w-11/12 m-auto pt-20 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-14">
                    {projects.map((project,index)=> {
                        return <div key={index} className="group overflow-hidden bg-[#0d0d1e] cursor-pointer transition duration-300 shadow-2xl hover:shadow-indigo-500/10 border border-white/30 hover:border-indigo-500/40 rounded-2xl relative">
                            <div className="relative w-full overflow-hidden">
                                <img src={project.img} alt="" className="w-auto transition duration-500 transform group-hover:scale-110" />
                                <a href={project.href} target="_blank" className="absolute top-1/2 left-1/2 cursor-pointer transform -translate-1/2 text-white font-semibold bg-indigo-600 transition duration-300 invisible group-hover:visible hover:bg-indigo-500 p-2 rounded-4xl z-10">{project.view}</a>
                                <span className="absolute left-0 bottom-0 w-full h-1/2 bg-linear-to-b from-white/1 to-black/50 group-hover:to-black/80"></span>
                            </div>
                            <div className="pl-5">
                                <h2 className="text-white text-lg font-semibold group-hover:text-indigo-300">{project.title}</h2>
                                <p className="text-gray-500 text-[13px] my-4">{project.desc}</p>
                                <div className="mb-5 space-x-2">{project.tags.map((tag,index)=> {
                                    return <span key={index} className="text-white/50 text-[12px] border border-white/15 rounded-sm py-1 px-2">{tag}</span>
                                })}</div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Projects;