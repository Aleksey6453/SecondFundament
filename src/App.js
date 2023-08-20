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
import { PostFilter } from './components/postFilter/PostFilter';
import { MyModal } from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';

function App() {
  
  const [posts, setPosts] = React.useState([
    {id: 1, title: 'TT ', body: 'body text'},
    {id: 2, title: 'ZZ ', body: 'body text'},
    {id: 3, title: 'AA ', body: 'body text'}
  ])

  // const [searchQuery, setSearchQuery] = React.useState('')
  const [selectedSort, setSelectedSort] = React.useState('')
  const [filter, setFilter] = React.useState({sort:'', query:''})
  const [modal, setModal] = React.useState(false)
  

  const sortedPosts = React.useMemo(()=>{
    console.log('func happened SortedPosts')
    if(filter.sort){
      return [...posts].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPost = React.useMemo(()=>{
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  // const sortPosts = (sort) => {
  //   setSelectedSort(sort);
  //   console.log(sort)
  // }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }


  return (
    <div className="App globalWrap">
      <MyButton onClick={()=>setModal(true)}>
          Add post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
          <Form 
            setPosts={setPosts}
            posts={posts}
            create={createPost}
          />
      </MyModal>
      
      <PostFilter 
          filter={filter}
          setFilter={setFilter}
          // selectedSort={selectedSort}
      /> 
      <PostList remove={removePost} posts={sortedAndSearchedPost} Post={Post} />   
      
      {/* {
        sortedAndSearchedPost.length 
          ?  <PostList remove={removePost} posts={sortedAndSearchedPost} Post={Post} /> 
          : <h1>There is empty!</h1>
      }       */}
      
    </div>
  );
}

export default App;
