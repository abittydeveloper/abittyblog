import React, { useState, useEffect } from 'react'
import data from '../data'

const Channels = () => {
    const [postdata, setPostdata] = useState([]);
    useEffect(() => {
        setPostdata(data)

    }, [])
    return (
        <div>
            <div className="widthchannel max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8
         dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                        Popular Channels
                    </h5>
                </div>
                {postdata.slice(0, 5).map((post,i) => {
                    return (


                        <div className="flow-root" key={i}>
                            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="w-8 h-8 rounded-full"
                                                src={post.user.profile}
                                                alt="Neil image"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                {post.user.username}
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                {post.user.follower} followers
                                            </p>
                                        </div>
                                        <button className="rounded-full py-1 px-4 bg-zinc-900 text-white ">Follow</button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    )
                })}
            </div>



        </div>
    )
}

export default Channels