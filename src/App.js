import React from 'react'
import './Global.css';
import {Counter} from './components/counter/Counter'
import {Post} from './components/post/Post'
import {Test} from './components/test/Test'
import {Form} from './components/form/Form'
import { PostList } from './components/postList/PostList'
import {MySelect} from './components/UI/select/MySelect'
import Search from './components/search/Search';
import MyInput from './components/UI/input/MyInput';

function App() {
  
  const [posts, setPosts] = React.useState([
    {id: 1, title: 'TT ', body: 'body text'},
    {id: 2, title: 'ZZ ', body: 'body text'},
    {id: 3, title: 'AA ', body: 'body text'}
  ])

  const [searchQuery, setSearchQuery] = React.useState('')
  const [selectedSort, setSelectedSort] = React.useState('')

  const sortedPosts = React.useMemo(()=>{
    console.log('func happened SortedPosts')
    if(selectedSort){
      return [...posts].sort((a,b)=>a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }, [selectedSort, posts])

  const sortedAndSearchedPost = React.useMemo(()=>{
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
  }, [searchQuery, sortedPosts])

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    console.log(sort)
  }

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
          />
      <div className="gorizont">  
        <MySelect 
          value={selectedSort}
          onChange={sortPosts}
          defaultValue='sort by...'
          options={[
            {value:'title', name:'by title'},
            {value:'body', name:'by body'}
          ]}
        />
        
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>  
      </div>    
      
      {
        posts.length 
          ?  <PostList remove={removePost} posts={sortedAndSearchedPost} Post={Post} /> 
          : <h1>There is empty!</h1>
      }      
      
     
       
       
    </div>
  );
}

export default App;
