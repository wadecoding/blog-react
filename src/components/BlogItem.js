import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import './BlogItem.css'

function BlogItem(props) {
  return (
    <div className='blog-item'>
      <h2>
        <Link to={`/blog/${props.blog.id}`}>
          <ReactMarkdown children={props.blog.title} className='blog-title' />
        </Link>
      </h2>
      <p>
        <span>{props.blog.time}</span>
        <span className='tag'><Link to={`/tag/${props.tag}`}>{props.tag}</Link></span>
      </p>
      <p>{props.blog.content}</p>
    </div>
  )
}

export default BlogItem
