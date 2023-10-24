import React, { useState, useEffect } from 'react'
import data from '../data'
import Channels from './Channels';
import FirstCard from './FirstCard';
import Tabcontent from './Tabcontent';
import axios from 'axios'

const Blog = () => {
  const [postdata, setPostdata] = useState([]);
  const [userdata, setuserdata] = useState();
  // console.log(data);

  const getdata = async()=>{
    const response = await axios.get('http://localhost:8000/api/blog/getblog');
    // console.log(response.data);
    setPostdata(response.data)

  }
  useEffect(() => {
    getdata()
  }, [])
  // console.log(postdata);
  return (
    <div className='md:w-8/12 w-full md:mx-auto mt-7' >
      <div className='flex md:flex-row flex-col gap-10'>
        <div className="md:w-7/12 px-3">
          {postdata.slice(0, 1).map((post, i) => {
            // console.log(post);
            return (
              <div key={i}>
                <img src={post.thumbnail} className="" />
                <h2 className='text-4xl pt-3 hover:underline cursor-pointer mb-3 '>{post.title}</h2>
                <div className='rounded-full mt-2 bg-red-100 px-3 py-1 inline'>{post.categories}</div>
                <div className='flex mt-5 gap-3 items-center'><img className='' style={{ borderRadius: "50%", width: "40px", height: "40px" }} src={post.user.profile} ></img><div>{post.user.username}</div></div>

              </div>
            )
          })}

        </div>
        <div className='px-3'>
          <p className="text-2xl border-b-2 border-blue-500 border-solid ">Recent Post</p>
          {postdata.slice(1, 6).reverse().map((post,i) => {
            return (
              <div className='flex ' key={i}>
                <img src={post.thumbnail} className="mt-3 shrink-0" style={{ width: "150px", height: "75px" }}></img>
                <div className='ml-2'>
                  <p className="mt-3 hover:underline cursor-pointer">{post.title}</p>
                  <div className={`rounded-full mt-2 bg-red-100 px-3 py-1 inline text-xs`}>{post.categories}</div>
                </div>
              </div>
            )
          })}
          {/* <div className="text-center"><button className='rounded-full border-solid border-2 py-1 mt-5 px-7 border-zinc-950 text-zinc-950 hover:bg-zinc-950 hover:text-white'>Read More</button></div> */}

        </div>

      </div>
      <div className="mt-5 px-3 tabconent">
        <Tabcontent />
        {/* <button className='rounded-full border-solid border-2 py-1 mt-5 px-7 border-zinc-950 text-zinc-950 hover:bg-zinc-950 hover:text-white'>Read More</button> */}
        {/* <p className="text-2xl border-b-2 border-blue-500 border-solid inline ">Technology</p> */}
        <div className="mt-1 ">
          <FirstCard />
          <div className="text-center mt-4"><button className='rounded-full border-solid border-2 py-1 mr-3 px-4 border-zinc-950 text-zinc-950 hover:bg-zinc-950 hover:text-white' >Read More</button></div>
        </div>
        <div>


        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Channels/>
      </div>
    </div>
  )
}

export default Blog