import { useParams } from 'react-router-dom'
import Header from './Header'

function Tag () {
  const params = useParams()
  console.log(params.tag)
  return (
    <>
      <Header />
      <div className='content'>
        <h1>Tag</h1>
      </div>
    </>
  )
}

export default Tag
