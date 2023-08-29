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
import { MyModal } from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { Sort } from './components/sort/Sort';


function App() {
  
  const [posts, setPosts] = React.useState([
    {id:1, title:'Post', body: 'Text about post'},
    {id:2, title:'Post', body: 'Text about post'},
    {id:3, title:'Post', body: 'Text about post'},
  ])


  return (
    <div className="App globalWrap">
      <Form posts={posts} setPosts={setPosts} />
      <Sort posts={posts} setPosts={setPosts} />
      {
        posts.length
        ?  <PostList posts={posts} title='List of posts' setPosts={setPosts}/>
        :  <h1>There is empty!</h1>
      }
      
    </div>
  );
}

export default App;
