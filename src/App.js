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
import PostFilter from './components/postFilter/PostFilter';
import { usePosts } from './hooks/usePosts'
import axios from 'axios';


function App() {
  
  const [posts, setPosts] = React.useState([
    {id:1, title:'Post', body: 'Text about post'},
    {id:2, title:'Post', body: 'Text about post'},
    {id:3, title:'Post', body: 'Text about post'},
  ])
  // const [selectedSort, setSelectedSort] = React.useState('')
  // const [searchQuery, setSearchQuery] = React.useState('')
  const [filter, setFilter] = React.useState({sort: '', query: ''})
  const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query)
  
  // const sortedPosts = React.useMemo(()=>{
  //     console.log('get sorteg post havened')
  //     if (filter.sort){
  //       return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
  //     }
  //     return posts
  // }, [filter.sort, posts])

 
  // const sortedAndSearchedPost = React.useMemo(()=>{
  //     return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  // }, [filter.query, sortedPosts])

  const [modal, setModal] = React.useState(false)

  const fetchPosts = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(response.data)
  }

  return (
    <div className="App globalWrap">
      <div className="gorizont">
        <MyButton onClick={() => setModal(true) }>
          Show modal
        </MyButton>
        <MyButton onClick={fetchPosts}>
          Get post
        </MyButton>
      </div>
      
      <MyModal visible={modal} setVisible={setModal}>
        <Form posts={posts} setPosts={setPosts} setModal={setModal}/>
      </MyModal>
    
      <PostFilter filter={filter}
                  setFilter={setFilter}
                  />
      {
        sortedAndSearchedPost.length
        ?  <PostList posts={sortedAndSearchedPost} title='List of posts' setPosts={setPosts}/>
        :  <h1>There is empty!</h1>
      }
      
    </div>
  );
}

export default App;
