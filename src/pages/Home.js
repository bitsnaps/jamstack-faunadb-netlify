import React, { useEffect, useState } from 'react'
import LinkList from '../components/LinkList'
import LinkForm from '../components/LinkForm'
// import axios from 'axios'

const Home = () => {

  // eslint-disable-next-line
  const [ links, setLinks ] = useState([])

  const loadLinks = async() => {
    try {
      // const results = await axios.post('/api/endpoints')

      // const res = await axios.post('/api/getLinks')

      // const instance = await axios.create({
      //   baseURL: '/.netlify/functions/getLinks',
      //   headers: {
      //     'Access-Control-Allow-Origin' : '*'
      //   }
      // })
      // const links = await instance.post().then( (results) => { results })

      const res = await fetch('/api/getLinks'/*,{
        headers : {
          //'mode': 'no-cors',
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          "Access-Control-Allow-Origin": "*"
         }
      }*/)
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
