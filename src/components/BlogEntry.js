import { useParams } from 'react-router-dom'
import Header from './Header'
import '../base.css'
import { useEffect, useState } from 'react'
import { VerticalAlignTopOutlined } from '@ant-design/icons';
import ReactMarkdown from 'react-markdown'
import { BackTop } from 'antd';

function BlogEntry() {
  const param = useParams()
  const [blog, setBlog] = useState({})

  useEffect(() => {
    fetch(`http://127.0.0.1:7001/api/v1/blog/${param.id}`)
      .then(data => data.json())
      .then(data => setBlog(data))
  }, [])

  const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  };

  return (
    <>
      <Header />
      <div className='content'>
        <BackTop visibilityHeight={0}>
          <div style={style}>
            <VerticalAlignTopOutlined />
          </div>
        </BackTop>
        <ReactMarkdown children={blog.title} />
        <ReactMarkdown children={blog.content} />
      </div>
    </>
  )
}

export default BlogEntry
