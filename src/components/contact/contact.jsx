import axios from "axios";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";

function Contact() {
    const [result , setResult] = useState("")
    const [loading , setLoading] = useState(false)

    const onSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)
        const formData = new FormData(event.target);
        formData.append("access_key" , "5611fc31-c833-4e1a-93a8-dbfd45a9be8d")
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
        <section className="w-full h-fit bg-dark-blue border border-white/20 py-20" id="contact">
            <div className="head m-auto text-center">
                <p className="text-indigo-400 uppercase tracking-widest text-[12px] md:text-sm">Say Hello</p>
                <h2 className="text-3xl md:text-5xl font-semibold text-white mt-4 mb-4">Get In Touch</h2>
                <span className="w-20 h-0.5 block m-auto mb-4 bg-linear-to-r from-purple-400 to-cyan-500"></span>
                <p className="text-white/50 w-fit text-sm md:text-md md:w-md m-auto">Open to freelance projects, internships, and full-time opportunities. Let's build something great together.</p>
            </div>
            <div className="w-11/12 flex flex-col items-center lg:items-start lg:flex-row justify-evenly gap-5 pt-20 m-auto">
                <div className="md:w-150 p-10 bg-linear-45 from-purple-700/20 to-purple-900/30 rounded-4xl">
                    <div className="text-5xl mb-4">👨‍💻</div>
                    <h2 className="text-white text-2xl font-semibold">Abdelrahman Ahmed</h2>
                    <p className="md:w-md py-5 text-gray-500">Front-End Developer based in Egypt. I love building elegant, responsive web applications and I always open to new opportunities.</p>
                    <div className="flex items-center gap-4">
                        <span className="text-gray-500"><FaLocationDot /></span>
                        <div>
                            <span className="text-gray-500 text-[12px]">Location</span>
                            <p className="text-white text-md">Beni Suef</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-gray-500"><MdEmail /></span>
                        <div>
                            <span className="text-gray-500 text-[12px]">Email</span>
                            <p className="text-white text-md">abdoahmads822@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-gray-500"><MdOutlineWork /></span>
                        <div>
                            <span className="text-gray-500 text-[12px]">Focus</span>
                            <p className="text-white text-md">Front-End Development</p>
                        </div>
                    </div>
                </div>
                <div className="md:w-150 border border-white/70 rounded-4xl p-10">
                    <h2 className="text-white text-2xl font-semibold">Send a Message</h2>
                    <form className="pt-10 space-x-5 space-y-6" onSubmit={onSubmit}>
                        <input type="text" name="first_name" placeholder="First Name" className="text-white bg-white/5 border-2 border-white/20 outline-0 focus:border-indigo-500/50 rounded-xl py-3 px-4 placeholder-gray-500" />
                        <input type="text" name="last_name" placeholder="Last Name" className="bg-white/5 border-2 border-white/10 outline-0 focus:border-indigo-500/50 rounded-xl py-3 px-4 placeholder-gray-500 text-white"/>
                        <input type="email" name="email" placeholder="Email Address" className="bg-white/5 border-2 border-white/10 outline-0 focus:border-indigo-500/50 rounded-xl py-3 px-4 placeholder-gray-500 text-white"/>
                        <input type="text" name="phone" placeholder="Phone (optional)" className="bg-white/5 border-2 border-white/10 outline-0 focus:border-indigo-500/50 rounded-xl py-3 px-4 placeholder-gray-500 text-white"/>
                        <textarea placeholder="Your Massage" name="message" className="w-full h-30 text-white bg-white/5 rounded-2xl outline-0 border-2 border-white/20 focus:border-indigo-500/50 p-4 placeholder-gray-500"></textarea>
                        <button type="submit" className={`bg-indigo-600 text-white p-4 rounded-xl outline-0 w-full text-lg font-semibold cursor-pointer shadow-2xl shadow-white/10 hover:bg-linear-to-r from-indigo-500 to-cyan-500`}>{loading? "Sending..." : "Send Massage"}</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;