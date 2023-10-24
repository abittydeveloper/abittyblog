import React from 'react'

const categories = [
    "Technology",
    "Programming",
    "WebDevelopment",
    "Cybersecurity",
    "DataScience",
    "ArtificialIntelligence",
    "MachineLearning",
    "Design",
    "Entrepreneurship"
  ];

const Tabcontent = () => {
  return (
    <div className="text-center flex overflow-x-scroll tabconent" >
      {categories.map((value)=>{
        return(
            <button className='rounded-full border-solid border-2 py-1 mr-3 px-4 border-zinc-950 text-zinc-950 hover:bg-zinc-950 hover:text-white' style={{wordBreak:"keep-all"}}>{value}</button>
        )
      })}
    </div>
  )
}

export default Tabcontent