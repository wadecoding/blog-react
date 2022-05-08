import { Table, Tag, Space, Button } from 'antd';


function Index() {
  const columns = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'id',
      render: text => text,
    },
    {
      title: '标签',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            return (
              <Tag key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type='primary'>修改</Button>
          <Button type='danger'>删除</Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      id: '1',
      title: '部车便好土图将人使术目',
      tags: ['nice', 'developer'],
    },
    {
      id: '2',
      title: '装精圆小值王般是制干种',
      tags: ['loser'],
    },
    {
      id: '3',
      title: '分易结市理提积调战团白',
      tags: ['cool', 'teacher'],
    },
  ];

  return (
    <Table columns={columns} dataSource={data} rowKey={blog => blog.id} />
  )
}

export default Index
