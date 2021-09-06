import React, { useEffect, useState } from 'react'
import LinkList from '../components/LinkList'
import LinkForm from '../components/LinkForm'
// import axios from 'axios'

const Home = () => {

  const [ links, setLinks ] = useState([])

  const loadLinks = async() => {
    try {
      /*/ const results = await axios.post('/api/endpoints')
      const links = await axios.post('/api/getLinks')
        .catch(function (err) {
          console.error(err)
        })
        .then( (response) => {
          return response.data
        })*/

      const res = await fetch('/api/getLinks')
      const links = await res.json()
      setLinks(links)

    } catch (err) {
        console.error(err)
    }
  }

  useEffect(() => {
    loadLinks()
  }, [])

// Grab all of links
// display all of links
// add delete and archive functionality
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">List of Links</h1>
      <LinkForm refreshLinks={loadLinks} />
      <LinkList links={links} refreshLinks={loadLinks} />
    </div>
  )
}

export default Home;
