import { LuArrowUpRight } from "react-icons/lu";
const LandingPage = () => {
    return (
        <div className="w-full min-h-screen bg-zinc-900 pt-1">
            <div className="textStracture mt-40 px-[4vw] lg:px-20">

                {['WE CREATE', 'EYE-OPENING', 'PRESENTATIONS'].map((item, index) => {
                    return <div key={index} className="masker">
                        <div className="w-fit flex items-center">
                            {index === 1 && (<div className="w-[9vw] h-[5vw] bg-red-700 relative top-[1vw]"></div>)}
                            <h1 className="uppercase  font-['Founders Grotesk'] leading-[7vw] tracking-tighter text-[9vw]">
                                {item}
                            </h1>
                        </div>

                    </div>
                })}

                <div>
                </div>
            </div>
            <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-2 lg:px-20">
                {
                    ['For public and private companies', 'From the first pitch to IPO'].map((item, index) => (
                        <p key={index} className="text-sm lg:text-md font-light leading-none tracking-tight">{item}</p>
                    ))
                }
                <div className="start flex items-center gap-2">
                    <div className="px-5 py-3 border-[2px] rounded-full border-zinc-700 font-light text-sm uppercase">

                        Start the Project
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center rounded-full border-zinc-700 border-[2px]">
                        <LuArrowUpRight /></div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage