import React,{useState,useEffect} from 'react'
import { fetchPosts } from '../api/fetchPosts'
import {Post} from './Post';
import { PaginationButtonsList } from './PaginationButtonsList';


const PostList = () => {
    const[page,setPage] = useState(1);
    const[posts,setPosts] = useState([]);
    const[isLoading,setIsLoading] = useState(true);
    const limit = 5;
    useEffect(()=> {
        setIsLoading(true);
        fetchPosts(page,limit).then((response)=>{
            setIsLoading(false);
            setPosts([...response.data])
        })
    },[page]);
    
    function handleChange(event) {
        setPage(event.target.value);
    }
    return (
        <>
        {isLoading && <h1 className="loader">Loading</h1>}
         {!isLoading && posts.map((item,i)=>{
            return <Post title={item.title} body={item.body} id={i}/>
        })}
            <PaginationButtonsList handleChange={handleChange}/>
        </>
    )
}

export { PostList }
