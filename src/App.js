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
  const [post, setPost] = React.useState({title: '', body: ''})
  return (
    <div className="App globalWrap">
      <Form 
            setPosts={setPosts}
            posts={posts}
            post={post}
            setPost={setPost}
            // titleInputRef={titleInputRef}
            />
      <PostList posts={posts} Post={Post} />
     
       
       
    </div>
  );
}

export default App;
