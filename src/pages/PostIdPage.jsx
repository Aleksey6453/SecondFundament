import React from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import Loader from '../components/UI/loader/Loader'
import { useFetching } from '../hooks/useFetching'

const PostIdPage = () => {
    const params = useParams()
    console.log(params)
    const [post, setPost] = React.useState({})
    const [comments, setComments] = React.useState([])
    const [fetchPostById, isLoading, error] = useFetching( async (id) => {
        const response = await PostService.getById(params.id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading, comeError] = useFetching( async (id) => {
      const response = await PostService.getCommentsByPostId(params.id)
      setComments(response.data)
  })

    React.useEffect(()=>{
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])
  return (
    <div className='globalWrap'>
       <h1>This is page of post {params.id}! <br />
       You are find it!</h1>
       {isLoading 
                ? <Loader />
                : <div><h1>{post.id}. {post.title}</h1></div>
       }
       <h2>Comments</h2>
       {isComLoading 
                ? <Loader />
                : <div>
                  {comments.map(comm => 
                      <div>
                        <h4>{comm.email}</h4>
                        <p>{comm.body}</p>
                      </div>
                  )

                  }
                </div>
       }
    </div>
  )
}

export { PostIdPage }
