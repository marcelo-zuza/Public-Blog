import { useEffect } from "react"
import { Link } from "react-router-dom"

type Props = {
  getData: any,
  posts: any
}


const Index = ({ getData, posts }: Props) => {

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="flex flex-col justify-center content-center text-white">

        <Link to="/post/"><button className="bg-red-600 text-white text-xl px-4 mx-8 py-2  rounded-lg top-48 left-4">Crie sua postagem</button></Link>
        <div className="">
            {posts && posts.sort((a: any, b: any) => b.id - a.id).map((post: { id: number, title: string, author: string, date: string, body: string }) => (
                <div key={post.id} className='grid grid-cols-1 bg-neutral-500 mx-4 md:mx-20 px-4 md:px-24 py-4 md:py-8 rounded-xl my-8'>
                    <h1 key={post.id} className='text-6xl py-1 text-center md:text-left'>{post.title}</h1>
                    <h1 key={post.id} className='text-3xl text-center md:text-left'>{post.author}</h1>
                    <h1 key={post.id} className='text-center md:text-left'>{post.date}</h1>
                    <h1 key={post.id} className='py-4 text-center md:text-left text-2xl'>{post.body}</h1>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Index