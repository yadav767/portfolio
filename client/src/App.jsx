import React, { useState } from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Loader from './components/Loader'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideLoading, setLoading, setPortfolioData } from './redux/rootSlice'
import Admin from './pages/Admin/Admin'

const App = () => {

  const { loading, portfolioData } = useSelector((state) => state.root)
  const dispatch = useDispatch()

  const getPortfolioData = async () => {
    try {
      dispatch(setLoading())
      const response = await axios.get("http://localhost:8080/api/portfolio/get-portfolio-data")
      dispatch(setPortfolioData(response.data))
      dispatch(hideLoading())
    } catch (error) {
      dispatch(hideLoading())
    }
  }

  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData()
    }
  }, [portfolioData])

  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App