import React, { useEffect } from 'react'
import axios from 'axios'

const Home = () => {

  const fetchData = async() => {
    const results = await axios.post('/api/helloworld')
    console.log(results.data.msg)
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
