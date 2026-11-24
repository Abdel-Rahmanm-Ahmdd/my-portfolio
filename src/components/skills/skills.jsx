import { useState , useEffect , useRef } from "react";
var skills = [
    { name: "HTML5",        percentage: 95, color: "#e34f26" },
    { name: "CSS3",         percentage: 90, color: "#264de4" },
    { name: "JavaScript",   percentage: 85, color: "#f7df1e" },
    { name: "React.js",     percentage: 85, color: "#61dafb" },
    { name: "Tailwind CSS", percentage: 88, color: "#38bdf8" },
    { name: "Bootstrap",    percentage: 80, color: "#7952b3" }
];

function Ring({name , pct , color , visible}) {
    var r = 55;
    var circ = 2 * Math.PI * r;
    var offset = circ * ( 1-(visible? pct : 0) / 100);

    return(
        <div className="flex flex-col items-center gap-3">
            <div className="w-32 h-32 relative">
                <svg className="transform -rotate-90" viewBox="0 0 128 128" width='128' height='128'>
                    <circle cx="64" cy="64" r={r} stroke="rgba(255,255,255,0.06)" strokeWidth={8} fill="none" />
                    <circle cx="64" cy="64" r={r} stroke={color} strokeWidth={8} fill="none" 
                    strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
                    style={{transition:"stroke-dashoffset 1.4s cubic-bezier(0.34,1.56,0.64,1)",filter:"drop-shadow(0 0 6px "+color+"60)"}}
                    />
                </svg>
                <div className="text-white text-xl font-semibold absolute top-1/2 left-1/2 transform -translate-1/2">{pct}%</div>
            </div>
            <div className="text-white text-lg font-semibold">{name}</div>
        </div>
    )

}




function Skills() {
    var ref = useRef(null)
    var [visible, setVisible] = useState(false);
    var [page, setPage] = useState(0);
    var [anim, setAnim] = useState("idle");
    var perPage = 4;
    var totalPages = Math.ceil(skills.length / perPage);
    useEffect(()=> {
        var obs = new IntersectionObserver((entires)=> {
            if(entires[0].isIntersecting) {setVisible(true); obs.disconnect()}
            
        },{threshold: 0.3})
        if(ref.current) obs.observe(ref.current)
    return ()=> obs.disconnect()
    },[])

    function goto(nextPage,direction) {
        if(nextPage === page) return;
        var exitAnim = direction === 'next'? 'exit-left': 'exit-right';
        var enterAnim = direction === 'next'? 'enter-left': 'exit-right';
        setAnim(exitAnim)
        setTimeout(() => {
            setPage(nextPage)
            setAnim(enterAnim)
            requestAnimationFrame(()=> {
                requestAnimationFrame(()=> setAnim('idle'))
            })
        }, 220);
    }

    function getSlides() {
        if(anim === 'exit-left') return {opacity: 0, transform: 'translateX(-30px)', transition:'opacity 0.22s ease, transform 0.22s ease'}
        if(anim === 'exit-right') return {opacity: 0, transform: 'translateX(30px)', transition:'opacity 0.22s ease, transform 0.22s ease'}
        if(anim === 'enter-right') return {opacity: 0, transform: 'translateX(30px)', transition:'none'}
        if(anim === 'enter-left') return {opacity: 0, transform: 'translateX(-30px)', transition:'none'}
    }

    var shown = skills.slice(page * perPage , page * perPage + perPage)
    var ringVisible = visible && anim === 'idle'
    return (
        <section className="w-full h-screen pt-10 bg-dark-blue border border-white/10" ref={ref} id="skills">
            <div className="head m-auto text-center">
                <p className="text-indigo-400 uppercase tracking-widest text-[12px] md:text-sm">Technical Expertise</p>
                <h2 className="text-3xl md:text-5xl font-semibold text-white mt-4 mb-4">Front-End Skills</h2>
                <span className="w-20 h-0.5 block m-auto mb-4 bg-linear-to-r from-purple-400 to-cyan-500"></span>
                <p className="text-white/50 w-fit text-sm md:text-md md:w-md m-auto">The front-end technologies I use to build modern, responsive web experiences.</p>
            </div>
            <div className="w-88 md:w-170 m-auto my-15 flex items-center justify-center gap-5">
                <button
                onClick={()=> goto(Math.max(0 , page - 1),'prev')}
                disabled={page === 0}
                className="w-10 h-10 cursor-pointer rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-indigo-400 transition-all disabled:opacity-20 disabled:cursor-not-allowed text-lg shrink-0"
                >&#8249;</button>
                <div style={getSlides()} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:m-auto">
                    {shown.map((s,index)=> {
                        return (
                            <Ring key={index} name={s.name} pct={s.percentage} color={s.color} visible={ringVisible} />
                        )
                    })}
                </div>
                <button
                onClick={()=> goto(Math.min(totalPages - 1 , page + 1),'next')}
                disabled={page === totalPages - 1}
                className="w-10 h-10 cursor-pointer rounded-full border border-white/10 flex justify-center items-center text-white/50 hover:text-white hover:border-indigo-400 transition-all disabled:opacity-20 disabled:cursor-not-allowed text-lg shrink-0"
                >&#8250;</button>
            </div>
            {totalPages > 1 && (
                <div className="flex justify-center gap-2">
                    {[...Array(totalPages)].map(function(_,i){return(
                        <button key={i} onClick={function(){goto(i, i > page ? "next" : "prev");}}
                        className={"h-2 rounded-full transition-all duration-300 " + (page===i ? "bg-indigo-400 w-6" : "bg-white/20 w-2")}/>
                    );})}
                </div>
            )}
        </section>
    )
}
export default Skills;

