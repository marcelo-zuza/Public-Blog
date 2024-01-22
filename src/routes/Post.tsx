import { useState } from 'react'
import db from '../firebase/db';
import { collection, doc, setDoc } from "firebase/firestore"; 


const Post = () => {

const [title, setTitle] = useState<string>('')
const [author, setAuthor] = useState<string>('')
const [body, setBody] = useState<string>('')


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

}

  return (
    <div className='grid grid-cols-1 bg-blue-200 mx-4 md:mx-20 px-4 md:px-8 py-4 md:py-8 rounded-xl my-8'>
      <h1>Faça sua postagem</h1>
      <div className="px-8 py-4">
          <form className='flex-row' onSubmit={(e) => {e.preventDefault(); addData()}}>
            <input type="text" placeholder='Insira seu nome' value={author} onChange={(e) => setAuthor(e.target.value)} />
            <input type="text" placeholder='Insira o título' value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text-box" name="" id="" placeholder='insira o texto' value={body} onChange={(e) => setBody(e.target.value)} />
            <button type="submit" className='bg-sky-600 text-white py-2 px-4'>enviar</button>
          </form>
        </div>
      
    </div>
  )
}

export default Post