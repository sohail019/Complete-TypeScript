import React from 'react'
import { useFetchPosts } from './useFetchPosts'

export const PostsComponents: React.FC = () => {
    const {posts, loading} = useFetchPosts()
  return (
    <div>
        <h1>Custom Hook with Async Operations</h1>
        {
            loading ? <p>Loading...</p> : (
                posts.map((post) => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ) )
            )
        }
    </div>
  )
}
