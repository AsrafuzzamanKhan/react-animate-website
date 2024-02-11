
const Cards = () => {
    return (
        <div className='w-full h-screen  bg-zinc-900 flex items-center gap-4 px-20'>
            <div className='cardContainer h-[50vh] w-1/2'>
                <div className='w-full h-full bg-green-500'></div>
            </div>
            <div className='cardContainer w-1/2 h-[50vh] gap-4 bg-slate-50 flex'>
                <div className='card1 w-1/2 bg-black'></div>
                <div className='card1 w-1/2 bg-black'></div>
            </div>
        </div>
    )
}

export default Cards