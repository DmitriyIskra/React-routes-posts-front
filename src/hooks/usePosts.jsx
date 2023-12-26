import React from 'react';
import { useState, useEffect } from 'react';

export default function usePosts(domain, changedPosts) {
    const [posts, setPosts] = useState();
    const [changed, setChanged] = useState();

    useEffect(() => {
      (async () => {
          const response = await fetch( `http://localhost:7070${domain}`);
          const result = await response.json();
          setPosts(result)
      })()
    }, [])

    useEffect(() => {
      (async () => {
          const response = await fetch( `http://localhost:7070${domain}`);
          const result = await response.json();
          setPosts(result)
      })()
    }, [changed])

    return posts;
}
