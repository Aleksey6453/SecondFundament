import axios from 'axios'
import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'


const BlogPage = () => {
    const [blogPosts, setBlogPosts] = React.useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    const postQuery = searchParams.get('post') || ''
    const latest = searchParams.has('latest');

    const startsFrom = latest ? 80 : 1
    const handleSubmit = (e) => {
      e.preventDefault()
      const form = e.target;

      const query = form.search.value
      const isLatest = form.latest.checked
      const params = {}

      if(query.length) params.post = query
      if(isLatest) params.latest = true
      setSearchParams(params)
    }

    React.useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setBlogPosts(data))
       
    }, [])
  return (
    <div className='globalWrap'>
      <h1>BlogPage</h1>
      <form autoComplete='off' onSubmit={handleSubmit}>
          <input type="search" name='search' />
          <label>
            <input type="checkbox" name='latest' /> New only
          </label>
          <input type="submit" value='Search' />
      </form>
      <Link to='/blog/test'>Add new post</Link>
      {
        blogPosts.filter(
          post => post.title.includes(postQuery) && post.id >= startsFrom
        ).map(post => (
            <Link key={post.id} to={`/posts/${post.id}`}>
                <li>{post.title}</li>
            </Link>
        ))
      }
    </div>
  )
}

export { BlogPage }
