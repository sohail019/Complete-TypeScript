import { useEffect, useState } from 'react'

type Post = {
    id: number,
    title: string,
    body: string
}

export const useFetchPosts = (): {posts: Post[], loading: boolean} => {

    const [posts, setPosts] = useState<Post[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {

        const fetchData =async () => {
            try {
                const response = await fetch(
                  "https://jsonplaceholder.typicode.com/posts/"
                );

                const data = await response.json()
                setPosts(data)
            } catch (error) {
                console.error("Error Fetching Posts:", error);
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    return {posts, loading}
}
