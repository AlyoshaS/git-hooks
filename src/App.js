import React, { useState, useEffect } from 'react';

export default function App() {
  const [repositories, setRepositories] = useState([]);

  // componentDidMount
  useEffect(() => {
    async function getRepos() {
      const response = await fetch('https://api.github.com/users/AlyoshaS/repos')
      const data = await response.json();

      setRepositories(data)
    }
    getRepos()
  }, []);

  return (
    <>
      <ul>
        { repositories.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        )) }
      </ul>
    </>
  )
}