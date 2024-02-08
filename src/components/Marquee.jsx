import { motion } from "framer-motion"
const Marquee = () => {
    return (
        <div className="w-full py-10 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl">
            <div className="text py-2  border-t-[2px] border-b-[2px] border-zinc-500 flex whitespace-nowrap gap-x-10 overflow-hidden">

                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: 'linear', repeat: Infinity, duration: 5 }} className="text-[20vw] uppercase font-semibold leading-none tracking-tighter">we are ochi</motion.h1>
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: 'linear', repeat: Infinity, duration: 5 }} className="text-[20vw] uppercase font-semibold leading-none tracking-tighter">we are ochi</motion.h1>
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: 'linear', repeat: Infinity, duration: 5 }} className="text-[20vw] uppercase font-semibold leading-none tracking-tighter">we are ochi</motion.h1>

            </div>
        </div >
    )
}

export default Marquee