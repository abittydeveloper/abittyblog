import React, { useState, useEffect } from 'react'
import data from '../data'

const FirstCard = () => {
    const [postdata, setPostdata] = useState([]);
    useEffect(() => {
        setPostdata(data)
    
      }, [])
  return (
    <div className="flex flex-wrap md:gap-12 gap-3 justify-center ">
  {/* Hello world */}
  {postdata.slice(0,4).map((post)=>{
    return(

    
  <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img
        className="rounded-t-lg"
        src={post.thumbnail}
        alt="thumbnail card"
      />
    </a>
   
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {post.title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {post.content.slice(0,110)}....
      </p>
      <div className='flex mt-5 gap-3 items-center'><img className='' style={{ borderRadius: "50%", width: "20px", height: "20px" }} src={post.user.profile} ></img><div>{post.user.username}</div></div>
    </div>
  </div>
  )
})}
            

</div>

  )
}

export default FirstCard