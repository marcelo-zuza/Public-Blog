import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import db from '../firebase/db';
import { collection, getDocs } from "firebase/firestore"; 

type Posts = {
  id: number | string,
  date: string,
  title: string,
  author: string,
  body: string
}

const Index: React.FC = () => {

  const [posts, setPosts] = useState<Posts[]>([])

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    const newPosts: Posts[] = [];
    querySnapshot.forEach((doc) => {
      let data: any = doc.data();
      newPosts.push(data);
    });
    setPosts(newPosts);
  }


  useEffect(() => {
      getData()
  }, [])


  return (
    <div className=''>
      <div className="grid grid-cols-1 place-items-center">
        <Link to="/post"><button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Novo Post</button></Link>
      </div>
        <div className="">

            {posts.sort((a: any, b: any) => b.id - a.id).map(post => (
                <div key={post.id} className='grid grid-cols-1 bg-blue-200 mx-4 md:mx-20 px-4 md:px-8 py-4 md:py-8 rounded-xl my-8'>
                    <h1 key={post.id} className='text-center md:text-left'>{post.id}</h1>
                    <h1 key={post.id} className='text-center md:text-left'>{post.date}</h1>
                    <h1 key={post.id} className='text-4xl py-1 text-center md:text-left'>{post.title}</h1>
                    <h1 key={post.id} className='text-2xl text-center md:text-left'>{post.author}</h1>
                    <h1 key={post.id} className='py-4 text-center md:text-left'>{post.body}</h1>
          </div>
            ))}
        </div>
      <Footer />

    </div>
  )
}

export default Index