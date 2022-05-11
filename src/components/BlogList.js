import BlogItem from './BlogItem'
import { Pagination } from 'antd'
import { useEffect, useState } from 'react'

function BlogList () {
  const [blogEntries, setBlogEntries] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  useEffect(() => {
    request(currentPage)
  }, [])

  function request(page) {
    fetch(`http://127.0.0.1:7001/api/v1/blog?page=${page}`)
    .then(data => data.json())
    .then(data => setBlogEntries(data))
  }

  function handlePaginationChange(page) {
    request(page)
  }

  const blogs = blogEntries.map((blog, index) => <BlogItem key={blog.id} id={blog.id} tag={blog.tag} blog={blog}/>)
  return (
    <div className='content'>
      {blogs}
      <Pagination defaultCurrent={1} total={30} onChange={handlePaginationChange}/>
    </div>
  )
}

export default BlogList
