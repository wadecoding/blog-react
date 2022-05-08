import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import 'normalize.css'
import './base.css'
import './App.css'
import Tag from './components/Tag'
import Blog from './Blog'
import BlogEntry from './components/BlogEntry'
import Login from './admin/Login'
import NewBlog from './admin/NewBlog'
import Index from './admin/Index'
import EditBlog from './admin/EditBlog'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Blog />} />
        <Route path='/tag' element={<Tag />}>
          <Route path=':tag' element={<Tag />} />
        </Route>
        <Route path='/blog/:id' element={<BlogEntry />} />
        <Route path='/admin'>
          <Route path='index' element={<Index />} />
          <Route path='login' element={<Login />} />
          <Route path='newBlog' element={<NewBlog />} />
          <Route path='editBlog' element={<EditBlog />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
