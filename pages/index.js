import React, { useState, useEffect } from 'react';

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const json = await res.json();
      setData(json);
    }

    fetchData();
  }, []);

  // Render data...
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data &&
          data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
      </ul>
    </div>
  );
}

export default Home;
