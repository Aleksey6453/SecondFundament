import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { About } from '../pages/About'
import { Posts } from '../pages/Posts';
import { Error } from '../pages/Error';
import { PostIdPage } from '../pages/PostIdPage';
import { Home } from '../pages/Home';
import { New } from '../pages/New';
import { Layout } from '../components/Layout';
import { EditPost } from '../pages/EditPost'
import { LoginPage } from '../pages/LoginPage'
import { RequireAuth } from '../hoc/RequireAuth';
import { AuthProvider } from '../hoc/AuthProvider';


const AppRouter = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='about-us' element={<Navigate to='/about' replace />}/>
          <Route path='posts' element={<Posts />}/>
          <Route path='posts/:id' element={<PostIdPage />}/>
          <Route path='posts/:id/edit' element={<EditPost />}/>
          <Route path='posts/new' element={
            <RequireAuth>
              <New />
            </RequireAuth>
          }/>
          <Route path='login' element={<LoginPage />}/>
          <Route path='*' element={<Error />}/>
        </Route>
      </Routes>
    </AuthProvider>
    
  )
}

export { AppRouter }
