import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { About } from '../pages/About'
import { Posts } from '../pages/Posts';
import { Error } from '../pages/Error';
import { PostIdPage } from '../pages/PostIdPage';
import { Home } from '../pages/Home';
import { routes } from '../router/routes';

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/posts' element={<Posts />}/>
        <Route path='/posts/:id' element={<PostIdPage />}/>
        {/* {
          routes.map(route => {
            <Route component={route.component} path={route.path} exact={route.exact} />
          })
        } */}
        <Route path='*' element={<Error />}/>
    </Routes>
  )
}

export { AppRouter }
