import React from 'react'
import './Global.css';
import {Counter} from './components/counter/Counter'
import {Post} from './components/post/Post'
import {Test} from './components/test/Test'
import {Form} from './components/form/Form'
import { PostList } from './components/postList/PostList'
import {MySelect} from './components/UI/select/MySelect'

function App() {
  // const titleInputRef = React.useRef()
  const [selectedSort, setSelectedSort] = React.useState('')

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    console.log(sort)
    setPosts([...posts].sort((a,b)=>a[sort].localeCompare(b[sort])))
  }

  const [posts, setPosts] = React.useState([
    {id: 1, title: 'TT ', body: 'body text'},
    {id: 2, title: 'ZZ ', body: 'body text'},
    {id: 3, title: 'AA ', body: 'body text'}
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
      <MySelect 
        value={selectedSort}
        onChange={sortPosts}
        defaultValue='sort by...'
        options={[
          {value:'title', name:'by title'},
          {value:'body', name:'by body'}
        ]}
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
