import { Route, BrowserRouter, Routes } from "react-router-dom"
import React, { useState } from 'react'
import db from './firebase/db';
import { collection,  getDocs  } from "firebase/firestore"; 
import Footer from "./components/Footer";
//Routes
import Index from "./routes/Index"
import Post from "./routes/Post"

type Posts = {
  id: number | string,
  date: string,
  title: string,
  author: string,
  body: string
}

const App: React.FC = () => {

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




  return (
    <div className="bg-neutral-600 pb-0 font-oswald">
      <h1 className="text-7xl font-bold py-4 md:py-4 text-white text-center">Blog Público</h1>
      <h1 className="text-xl md:text-2xl py-1 md:py-4 text-white text-center">Leia sobre as novidades do mundo corporativo e fique por dentro de tudo</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index getData={getData} posts={posts} />} />
          <Route path="/post/" element={<Post posts={posts} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App