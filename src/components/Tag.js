import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BlogItem from './BlogItem'
import Header from './Header'

function Tag() {
  const [tagBlog, setTagBlog] = useState([])
  const params = useParams()
  const url = 'http://localhost:7001/api/v1/tag' + (params.id ? `/${params.id}` : '')

  useEffect(() => {
    fetch(url)
      .then(data => data.json())
      .then(json => setTagBlog(json))
  }, [])

  const blogs = tagBlog.map(blog => (
    <BlogItem blog={blog} key={blog.id} />
  ))
  return (
    <>
      <Header />
      <div className='content'>
        {blogs}
      </div>
    </>
  )
}

export default Tag
