import './Header.css'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <>
      <ul className='flex-ul'>
        <li><Link to='/'>首页</Link></li>
        <li><Link to='/tag'>标签</Link></li>
      </ul>
    </>
  )
}

export default Header
