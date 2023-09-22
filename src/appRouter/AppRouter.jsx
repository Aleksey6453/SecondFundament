import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { About } from '../pages/About'
import { Posts } from '../pages/Posts';
import { Error } from '../pages/Error';
import { PostIdPage } from '../pages/PostIdPage';
import { Home } from '../pages/Home';
import { Layout } from '../components/Layout';


const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='posts' element={<Posts />}/>
          <Route path='posts/:id' element={<PostIdPage />}/>
          <Route path='*' element={<Error />}/>
        </Route>
    </Routes>
  )
}

export { AppRouter }
