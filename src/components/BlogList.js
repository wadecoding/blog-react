import BlogItem from './BlogItem'
import { Pagination } from 'antd'

function BlogList () {
  const blogEntries = [{ tag: '标签' }, { tag: '标签' }, { tag: '标签' }, { tag: '标签' }]
    .map((value, index) => <BlogItem key={index} id={index} tag={value.tag} />)
  return (
    <div className='content'>
      {blogEntries}
      <Pagination defaultCurrent={1} total={30} />
    </div>
  )
}

export default BlogList
