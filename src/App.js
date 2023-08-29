import React from 'react'
import './Global.css';
import {Counter} from './components/counter/Counter'
import {Post} from './components/post/Post'
import {Test} from './components/test/Test'
import {Form} from './components/form/Form'
import { PostList } from './components/postList/PostList'
import {MySelect} from './components/UI/select/MySelect'
import {Search} from './components/search/Search';
import MyInput from './components/UI/input/MyInput';
import { MyModal } from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { Sort } from './components/sort/Sort';


function App() {
  
  const [posts, setPosts] = React.useState([
    {id:1, title:'Post', body: 'Text about post'},
    {id:2, title:'Post', body: 'Text about post'},
    {id:3, title:'Post', body: 'Text about post'},
  ])
  const [selectedSort, setSelectedSort] = React.useState('')
  
  const sortedPosts = React.useMemo(()=>{
      console.log('get sorteg post havened')
      if (selectedSort){
        return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))
      }
      return posts
  }, [selectedSort, posts])

  const [searchQuery, setSearchQuery] = React.useState('')

  const sortedAndSearchedPost = React.useMemo(()=>{
      return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery, sortedPosts])

  return (
    <div className="App globalWrap">

      <Form posts={posts} setPosts={setPosts} />
      <div className="gorizont">
        <Sort posts={posts} 
              setPosts={setPosts} 
              selectedSort={selectedSort} 
              setSelectedSort={setSelectedSort} 
              />
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      </div>
      {
        sortedAndSearchedPost.length
        ?  <PostList posts={sortedAndSearchedPost} title='List of posts' setPosts={setPosts}/>
        :  <h1>There is empty!</h1>
      }
      
    </div>
  );
}

export default App;
