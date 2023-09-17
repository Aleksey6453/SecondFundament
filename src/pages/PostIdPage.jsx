import React from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import Loader from '../components/UI/loader/Loader'
import { useFetching } from '../hooks/useFetching'

const PostIdPage = () => {
    const params = useParams()
    console.log(params)
    const [post, setPost] = React.useState({})
    const [fetchPostById, isLoading, error] = useFetching( async (id) => {
        const response = await PostService.getById(params.id)
        setPost(response.data)
    })

    React.useEffect(()=>{
        fetchPostById(params.id)
    }, [])
  return (
    <div className='globalWrap'>
       <h1>This is page of post {params.id}! <br />
       You are find it!</h1>
       {isLoading 
                ? <Loader />
                : <div>{post.id}. {post.title}</div>
       }
       
    </div>
  )
}

export { PostIdPage }
