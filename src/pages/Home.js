import React, { useEffect } from 'react'
import axios from 'axios'

const Home = () => {

  const fetchData = async() => {
    // const results = await axios.post('/api/helloworld')
    const results = await axios.post('/api/getLinks')
    console.log(results.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
    <div className="container">

    </div>
    </>
  );
}

export default Home;
