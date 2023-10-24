import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Write = () => {
  const [formData, setFormData] = useState({
    title: '',
    categories: '',
    content: '',
    thumbnail:""
  });
  const storedString = localStorage.getItem('userToken');
  const storedData = JSON.parse(storedString);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, categories, content } = formData;
    const senddata = {...formData , "user":storedData._id};
       axios.post('http://localhost:8000/api/blog/addblog' , senddata);
       console.log(senddata);
    // You can add code here to handle the submission of the blog post data
    // For example, sending it to an API or saving it in your database
    // This depends on your backend setup.

    // Clear the form after submission
    setFormData({
      title: '',
      categories: '',
      content: '',
      thumbnail:""
    });
  }
  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold">Write a Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="my-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            autoComplete='off'
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md border-gray-300"
          />
        </div>
        <div className="my-4">
          <label htmlFor="categories" className="block text-gray-700 text-sm font-bold mb-2">Categories:</label>
          <input
            type="text"
            id="categories"
            name="categories"
            autoComplete='off'
            value={formData.categories}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md border-gray-300"
          />
        </div>
        <div className="my-4">
          <label htmlFor="thumbnail" className="block text-gray-700 text-sm font-bold mb-2">Thumbnail:</label>

        <input
            type="text"
            id="thumbnail"
            name="thumbnail"
            autoComplete='off'
            value={formData.thumbnail}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md border-gray-300"
          />
          </div>
        <div className="my-4">
          <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">Content:</label>
          <textarea
            id="content"
            name="content"
            autoComplete='off'
            value={formData.content}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md border-gray-300"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
      </form>
    </div>
  )
}

export default Write