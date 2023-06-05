import React from 'react'
import LoaderHome from '../components/loaderHome/LoaderHome'
import First from '../components/first/First'
import About from '../about/About'
import Navbar from '../components/navbar/Navbar'
import DataApi from '../components/api/DataAPI'

const Home = () => {
  return (
    <div>
        <LoaderHome/>
        <Navbar/>
        <First/>
        <DataApi/>
    </div>
  )
}

export default Home