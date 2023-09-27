import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'


const BlogPage = () => {
    const [blogPosts, setBlogPosts] = React.useState([])

    React.useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setBlogPosts(data))
    }, [])
  return (
    <div className='globalWrap'>
      <h1>BlogPage</h1>
      <Link to='/blog/test'>Add new post</Link>
      {
        blogPosts.map(post => (
            <Link key={post.id} to={`/posts/${post.id}`}>
                <li>{post.title}</li>
            </Link>
        ))
      }
    </div>
  )
}

export { BlogPage }
