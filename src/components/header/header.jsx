import { IoIosMenu } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import './header.css'
import { useState } from "react";
function Header() {
    const [menu , setMenu] = useState(false)
    const navLinks = [
        {id: "home", title: "Home"},
        {id: "skills", title: "Skills"},
        {id: "projects", title: "Projects"},
        {id: "contact", title: "Contact"},
    ];
    const [active , setActive] = useState(navLinks[0]?.id)
    
    const scrollToSection = (sectionId)=> {
        const element = document.getElementById(sectionId)
        if(element) {
            element.scrollIntoView({behavior: "smooth"})
        }
    }
    
    return (
        <section className="header w-screen bg-dark-blue fixed flex items-center z-50 top-0 left-0 py-1 md:p-0">
            <div className="header-container m-auto flex justify-between items-center">
                <div className="title w-fit flex items-center gap-2 flex-1">
                    <span className="text-cyan"><GoDotFill /></span>
                    <span className="text-xl font-semibold text-white">Protfolio</span>
                </div>
                <div className={`drop-dwon ${menu? "menu" : ""} w-full md:w-[70%] flex-2 flex flex-col items-center justify-between absolute left-0 -bottom-47 bg-gray-900 md:bg-transparent md:static md:flex-row`}>
                    <ul className="nav-links flex flex-col w-full md:w-fit md:flex-row md:gap-5 lg:gap-10">
                        {navLinks.map((link)=> {
                            return <li key={link.id} onClick={()=> {setActive(link.id), scrollToSection(link.id)}}
                            className={`
                                md:font-semibold
                                lg:font-bold
                                md:py-3
                                md:pl-0
                                md:border-none
                                pl-4
                                py-1
                                border-b
                                border-gray-600
                                text-cool-gray 
                                transition duration-400 
                                cursor-pointer md:hover:text-white ${active == link.id? "text-white" : ""}`}>{link.title}</li>
                        })}
                    </ul>
                    <nav className="flex items-center gap-6 my-2 -ml-15 md:ml-0 md:my-0">
                        <ul className="flex items-center gap-2">
                            <li className="text-cool-gray cursor-pointer text-lg border border-white/30 rounded-full p-1.5 transition duration-300 hover:text-white/80 hover:border-indigo-500"><FaLinkedin /></li>
                            <li className="text-cool-gray cursor-pointer text-lg border border-white/30 rounded-full p-1.5 transition duration-300 hover:text-white/80 hover:border-indigo-500"><FaFacebook /></li>
                            <li className="text-cool-gray cursor-pointer text-lg border border-white/30 rounded-full p-1.5 transition duration-300 hover:text-white/80 hover:border-indigo-500"><FaInstagram /></li>
                            <li className="text-cool-gray cursor-pointer text-lg border border-white/30 rounded-full p-1.5 transition duration-300 hover:text-white/80 hover:border-indigo-500"><FaGithub /></li>
                        </ul>
                        <button onClick={()=> {setActive("contact") , scrollToSection("contact")}} className="font-semibold invisible md:visible rounded-4xl text-white cursor-pointer bg-electric-indigo py-1.5 px-3 transition duration-300 hover:bg-linear-to-r from-electric-indigo to-cyan shadow-lg shadow-indigo-500/20">Let's Connect</button>
                    </nav>
                </div>
                <span onClick={()=> setMenu(!menu)} className="text-white block text-4xl absolute top-0 right-4 z-30 visible md:invisible"><IoIosMenu /></span>
            </div>
        </section>
    )
}

export default Header