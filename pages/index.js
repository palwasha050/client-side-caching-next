import { useEffect, useState } from 'react';
import api from './api/api';

const Posts = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/posts');
        setPosts(response.data);
      } catch (error) {
        if (error.isCache) {
          setPosts(error.data);
        } else {
          console.error(error);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {posts && posts.map((post) => <div key={post.id}>{post.title}</div>)}
    </div>
  );
};

export default Posts;
