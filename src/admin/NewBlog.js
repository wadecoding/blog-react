import ReactMarkdown from 'react-markdown'
import { Input, Button } from 'antd'
import { useState } from 'react'

function NewBlog () {
  const { TextArea } = Input
  const [title, setTitle] = useState('')
  const [blog, setBlog] = useState('')
  const [ifRenderBlog, setIfRenderBlog] = useState(false)
  const [tags, setTags] = useState([])

  function onTitleChange (e) {
    setTitle(e.target.value)
  }

  function onBlogChange (e) {
    setBlog(e.target.value)
  }

  function onButtonClick () {
    setIfRenderBlog(!ifRenderBlog)
  }

  function onTagChange (e) {
    const tagsStr = e.target.value
    const tagsArr = tagsStr.split(',').filter(tag => tag.length > 0)
    setTags(tagsArr)
  }

  return (
    <div className='content'>
      <Input placeholder='请输入题目' onChange={onTitleChange} />
      <br />
      <br />
      <TextArea rows={10} showCount placeholder='请输入内容' onChange={onBlogChange} />
      <br />
      <Input placeholder='请输入标签' onChange={onTagChange} />
      <br />
      <br />
      <Button type='primary' onClick={onButtonClick}>转换为Markdown博客</Button>
      <br />
      <ReactMarkdown>{ifRenderBlog && `# ${title}`}</ReactMarkdown>
      <ReactMarkdown>{ifRenderBlog && blog}</ReactMarkdown>
    </div>
  )
}

export default NewBlog
