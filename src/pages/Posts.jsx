import React from 'react'
import '../Global.css';
import {Form} from '../components/form/Form'
import { PostList } from '../components/postList/PostList'
import { MyModal } from '../components/UI/modal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import PostFilter from '../components/postFilter/PostFilter';
import { usePosts } from '../hooks/usePosts'
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount, getPagesArray } from '../utils/pages'
import { PaginationBlock } from '../components/paginationBlock/PaginationBlock';



function Posts() {
  
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
  const [totalPages, setTotalPages] = React.useState(0)
  const [limit, setLimit] = React.useState(10)
  const [page, setPage] = React.useState(1)
  const [fetchPosts, isPostsLoading, postError] = useFetching(async() => {
      const response = await PostService.getAll(limit, page)
      setPosts(response.data)
      const totalCount = response.headers['x-total-count']
      setTotalPages(getPageCount(totalCount, limit))
  })

  console.log(totalPages)
  
  let pagesArray = getPagesArray(totalPages)

  // const fetchPosts = () => {
  //   setIsPostsLoading(true)
  //   setTimeout( async () => {
  //     const posts = await PostService.getAll()
  //     setPosts(posts)
  //     setIsPostsLoading(false)
  //   }, 1000);
    
  // }

  React.useEffect(() => {
      fetchPosts()
  }, [page])

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

      {postError &&
            <h1>This is Error! ${postError}</h1>
      }
      {isPostsLoading
            ?  <Loader /> 
            :  <PostList posts={sortedAndSearchedPost} title='List of posts' setPosts={setPosts}/> 
      }            
      {/* {
        sortedAndSearchedPost.length
        ?  <PostList posts={sortedAndSearchedPost} title='List of posts' setPosts={setPosts}/>
        :  <h1>There is empty!</h1>
      } */}
      <PaginationBlock pagesArray={pagesArray} 
                       page={page} 
                       setPage={setPage}
                       />
      
    </div>
  );
}

export {Posts};

