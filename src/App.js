import React from 'react'
import './Global.css';
import {Counter} from './components/counter/Counter'
import {Post} from './components/post/Post'
import {Test} from './components/test/Test'
import {Form} from './components/form/Form'

function App() {
  const [posts, setPosts] = React.useState([
    {id: 1, title: 'Title ', body: 'body text'},
    {id: 2, title: 'Title ', body: 'body text'},
    {id: 3, title: 'Title ', body: 'body text'},
  ])
  return (
    <div className="App globalWrap">
      <Form />
      
      {
        posts.map(post => 
          <Post post={post} 
                key={post.id} 
                title={post.title} 
                body={post.body} 
                id={post.id} 
                />
        )
      }
       
       
    </div>
  );
}

export default App;
