import { Table, Tag, Space, Button } from 'antd';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useNavigate } from 'react-router-dom';
import './Index.css'


function Index() {
  const [blogs, setBlogs] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [total, setTotal] = useState(0)

  const navigate = useNavigate()

  useEffect(() => {
    request(currentPage)
  }, [])

  useEffect(() => {
    fetch(`http://127.0.0.1:7001/getBlogsCount`)
      .then(data => data.json())
      .then(data => {
        setTotal(data[0].res)
      })
  }, [])

  function request(page) {
    fetch(`http://127.0.0.1:7001/api/v1/blog?page=${page}`)
      .then(data => data.json())
      .then(data => setBlogs(data))
  }

  function handleEdit(id) {
    navigate(`/admin/editBlog/${id}`)

  }

  function handleDelete(id) {
    fetch(`http://127.0.0.1:7001/api/v1/blog/${id}`, {
      method: 'DELETE'
    })
      .then(data => {
        if (data.status === 204) {
          console.log('check');
        }
      })
  }

  function changePage(page) {
    request(page)
  }

  const columns = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'id',
      render: text => <ReactMarkdown children={text} />,
    },
    {
      title: '标签',
      key: 'tag',
      dataIndex: 'tag',
      render: tag => (
        <Tag key={tag}>
          {tag.toUpperCase()}
        </Tag>
      )
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type='primary' onClick={() => handleEdit(record.id)}>修改</Button>
          <Button type='danger' onClick={() => handleDelete(record.id)}>删除</Button>
        </Space>
      ),
    },
  ];

  return (
    <div className='content'>
      <Table columns={columns} dataSource={blogs} rowKey={blog => blog.id}
        pagination={{
          total: total,
          onChange: (current) => changePage(current),
        }} />
    </div>
  )
}

export default Index
