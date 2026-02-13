import React from 'react'
import Header from '../components/Home/Header'
import Intro from '../components/Home/Intro'
import About from '../components/Home/About'
import Experience from '../components/Home/Experience'
import Projects from '../components/Home/Projects'
import Contact from '../components/Home/Contact'
import Footer from '../components/Home/Footer'
import LeftSider from '../components/LeftSider'
import { useSelector } from 'react-redux'

const Home = () => {

    const { portfolioData } = useSelector((state) => state.root)
    

    return (
        <div>
            <Header />
            {portfolioData && (
                <div className='bg-primary px-30 max-sm:px-5'>
                    <Intro />
                    <About />
                    <Experience />
                    <Projects />
                    <Contact />
                    <Footer />
                    <LeftSider />
                </div>
            )}
        </div>
    )
}

export default Home