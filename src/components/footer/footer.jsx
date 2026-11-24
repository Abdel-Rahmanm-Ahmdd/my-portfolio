import { GoDotFill } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
function Footer() {
    const navLinks = [
            {id: "home", title: "Home"},
            {id: "skills", title: "Skills"},
            {id: "projects", title: "Projects"},
            {id: "contact", title: "Contact"},
        ];
        const scrollToSection = (sectionId)=> {
            const element = document.getElementById(sectionId)
            if(element) {
                element.scrollIntoView({behavior: "smooth"})
            }
        }

        const [result , setResult] = useState("")
        const [loading , setLoading] = useState(false)
        const onSubmit = async (event) => {
            event.preventDefault()
            setLoading(true)
            const formData = new FormData(event.target);
            formData.append("access_key" , "5611fc31-c833-4e1a-93a8-dbfd45a9be8d")
            formData.append("subject" , "New Portfolio Newsletter Subscriber")
            try{
                const response = await axios.post("https://api.web3forms.com/submit" , formData)
                const data = response.data;
                if(data.success) {
                    setResult("Success")
                    event.target.reset();
                }else {
                    setResult("Error")
                }
            }catch (error) {
                console.log(error)
            }finally {
                setLoading(false)
            }
            
        }

    return (
        <section className="bg-dark-blue w-full h-fit pb-5">
            <div className="m-auto h-fit py-10 pl-6 md:pl-0 md:px-20 flex flex-col gap-5 md:flex-row justify-between bg-gray-950">
                <div>
                    <h2 className="text-white font-semibold text-xl">Stay Updated</h2>
                    <p className="text-gray-500">Subscribe to see my latest projects & articles.</p>
                </div>
                <form onSubmit={onSubmit} className="space-x-2 md:space-x-4">
                    <input type="email" name="email" required  placeholder="Enter Your Email" className="text-white bg-white/5 border-2 border-white/20 outline-0 focus:border-indigo-500/50 rounded-4xl p-2 md:py-3 md:pl-4 md:pr-20  placeholder-gray-500"/>
                    <button type="submit" className={`bg-indigo-600 text-white py-2 ${loading? "px-2" : "px-4"} rounded-4xl outline-0 w-30 text-md md:text-lg font-semibold cursor-pointer shadow-2xl shadow-white/10 hover:bg-linear-to-r from-indigo-500 to-cyan-500`}>{loading? "Subscribing...": "Subscribe"}</button>
                </form>
            </div>
            <div className="w-11/12 m-auto py-10 border-b border-white/10 flex flex-col gap-10 md:flex-row md:gap-60">
                <div>
                    <div className="title w-fit flex items-center gap-2">
                        <span className="text-cyan"><GoDotFill /></span>
                        <span className="text-xl font-semibold text-white">Protfolio</span>
                    </div>
                    <p className="text-white/30 w-82 py-10">Front-End Developer building beautiful, responsive web experiences with modern front-end technologies.</p>
                    <ul className="flex items-center gap-2">
                        <li className="text-cool-gray cursor-pointer text-lg border border-white/30 rounded-full p-1.5 transition duration-300 hover:text-white/80 hover:border-indigo-500"><FaLinkedin /></li>
                        <li className="text-cool-gray cursor-pointer text-lg border border-white/30 rounded-full p-1.5 transition duration-300 hover:text-white/80 hover:border-indigo-500"><FaFacebook /></li>
                        <li className="text-cool-gray cursor-pointer text-lg border border-white/30 rounded-full p-1.5 transition duration-300 hover:text-white/80 hover:border-indigo-500"><FaInstagram /></li>
                        <li className="text-cool-gray cursor-pointer text-lg border border-white/30 rounded-full p-1.5 transition duration-300 hover:text-white/80 hover:border-indigo-500"><FaGithub /></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-white/80 text-md font-semibold mb-5">Navigation</h2>
                    <ul className="w-full flex flex-col gap-4">
                        {navLinks.map((link)=> {
                            return <li key={link.id} onClick={()=> {scrollToSection(link.id)}}
                            className={`text-cool-gray transition duration-400 cursor-pointer md:hover:text-white`}>{link.title}</li>
                        })}
                    </ul>
                </div>
                <div>
                    <h2 className="text-white/80 text-md font-semibold mb-5">What I Do</h2>
                    <ul className="space-y-2">
                        <li className="text-white/30">Front-End Development</li>
                        <li className="text-white/30">Responsive Web Design</li>
                        <li className="text-white/30">React & Tailwind Projects</li>
                        <li className="text-white/30">UI / UX Implementation</li>
                        <li className="text-white/30">Component Architecture</li>
                    </ul>
                </div>
            </div>
            <p className="text-white/30 h-20 text-sm flex items-center justify-center">&copy; 2026 Abdelrahman Ahmed - All Rights Reserved</p>
        </section>
    )
}

export default Footer;