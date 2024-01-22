import React, { useEffect, useState } from 'react'
import db from '../firebase/db';
import { collection, doc, getDocs, setDoc } from "firebase/firestore"; 


type Posts = {
    id: number | string,
    date: string,
    title: string,
    author: string,
    body: string
}
const Teste: React.FC = () => {

    const [posts, setPosts] = useState<Posts[]>([])
    const [title, setTitle] = useState<string>('')
    const [author, setAuthor] = useState<string>('')
    const [body, setBody] = useState<string>('')


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

    const addData = async () => {
        const postsRef = collection(db, "posts");
        try {
            const docRef = await setDoc(doc(postsRef, (posts.length+1).toString()), {
                id: posts.length + 1,
                date: new Date().toLocaleString(),
                title: title,
                author: author,
                body: body
            });
            setTitle('')
            setAuthor('')
            setBody('')
            alert('Envio com sucesso')
          
            console.log("Document written with ID: ", postsRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        getData()
    }

  return (
    <div>
        <h1>Teste</h1>
        <div className="px-8 py-4">
          <form className='flex-row' onSubmit={(e) => {e.preventDefault(); addData()}}>
            <input type="text" placeholder='Insira seu nome' value={author} onChange={(e) => setAuthor(e.target.value)} />
            <input type="text" placeholder='Insira o título' value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text-box" name="" id="" placeholder='insira o texto' value={body} onChange={(e) => setBody(e.target.value)} />
            <button type="submit" className='bg-sky-600 text-white py-2 px-4'>enviar</button>
          </form>
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
    </div>
  )
}

export default Teste