import { useState } from "react";
import db from '../firebase/db';
import { collection, doc, setDoc } from "firebase/firestore"; 

type Props = {
  posts: any
}

const Post = ({ posts }: Props) => {

  const [title, setTitle] = useState<string>('')
  const [author, setAuthor] = useState<string>('')
  const [body, setBody] = useState<string>('')

  const addData = async () => {
    const postsRef = collection(db, "posts");
    try {
        await setDoc(doc(postsRef, (posts.length+1).toString()), {
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
        window.location.href = '/';
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}
  return (
    <div>
        <div className="px-8 py-4 mx-20">
          <form className='flex flex-col gap-4' onSubmit={(e) => {e.preventDefault(); addData()}}>
            <input className="py-1 px-2 rounded-lg" type="text" placeholder='Insira seu nome' value={author} onChange={(e) => setAuthor(e.target.value)} />
            <input className="py-1 px-2 rounded-lg" type="text" placeholder='Insira o título' value={title} onChange={(e) => setTitle(e.target.value)} />
            <input className="py-1 px-2 h-28 rounded-lg" type="textarea" name="" id="" placeholder='insira o texto' value={body} onChange={(e) => setBody(e.target.value)} />
            <button type="submit" className='bg-white py-2 px-4 w-20 items-center rounded-lg'>Enviar</button>
            
          </form>
        </div>
    </div>
  )
}

export default Post