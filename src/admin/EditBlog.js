import { Input, Button } from 'antd'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditBlog() {
  const { TextArea } = Input
  const [title, setTitle] = useState('')
  const [blog, setBlog] = useState('')
  const [tags, setTags] = useState([])
  const id = useParams().id
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`http://localhost:7001/api/v1/blog/${id}`)
      .then(data => data.json())
      .then(json => {
        setTitle(json.title)
        setBlog(json.content)
        setTags(json.tag)
      })
  }, [])

  function onTitleChange(e) {
    setTitle(e.target.value)
  }

  function onBlogChange(e) {
    setBlog(e.target.value)
  }

  function onButtonClick() {
    fetch(`http://localhost:7001/api/v1/blog/${id}`
      , {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
         },
        body: JSON.stringify({ title, content: blog, id })
      })
      .then(data => {
        if(data.status === 204) {
          navigate('/admin/index')
        }
      })
      


  }

  function onTagChange(e) {
    const tagsStr = e.target.value
    const tagsArr = tagsStr.split(',').filter(tag => tag.length > 0)
    setTags(tagsArr)
  }

  return (
    <div className="content">
      <Input placeholder='请输入题目' onChange={onTitleChange} value={title} />
      <br />
      <br />
      <TextArea rows={10} showCount placeholder='请输入内容' onChange={onBlogChange} value={blog} />
      <br />
      <Input placeholder='请输入标签' onChange={onTagChange} value={tags} />
      <br />
      <br />
      <Button type='primary' onClick={onButtonClick}>修改</Button>
    </div>
  )
}

export default EditBlog
