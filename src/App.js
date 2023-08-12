import React from 'react'
import './Global.css';
import {Counter} from './components/counter/Counter'
import {Post} from './components/post/Post'
import {Test} from './components/test/Test'
import {Form} from './components/form/Form'
import { PostList } from './components/postList/PostList';

function App() {
  // const titleInputRef = React.useRef()
  // const [title, setTitle] = React.useState('')
  // const [body, setBody] = React.useState('')

  const [posts, setPosts] = React.useState([
    {id: 1, title: 'Title ', body: 'body text'},
    {id: 2, title: 'Title ', body: 'body text'},
    {id: 3, title: 'Title ', body: 'body text'}
  ])

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  return (
    <div className="App globalWrap">
      <Form 
          setPosts={setPosts}
          posts={posts}
          create={createPost}
          // titleInputRef={titleInputRef}
          />

      {
        posts.length 
          ?  <PostList remove={removePost} posts={posts} Post={Post} /> 
          : <h1>There is empty!</h1>
      }      
      
     
       
       
    </div>
  );
}

export default App;
