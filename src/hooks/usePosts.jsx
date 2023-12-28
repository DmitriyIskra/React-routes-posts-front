import React from 'react';
import { useState, useEffect } from 'react';

export default function usePosts(domain) {
    const [posts, setPosts] = useState();

    useEffect(() => {
      (async () => {
          const response = await fetch( `http://localhost:7070${domain}`);
          const result = await response.json();
          setPosts(result)
      })()
    }, [])

    return [posts, setPosts];
}
