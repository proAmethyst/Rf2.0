import React, { Component } from 'react';
import './Style/Home.css'
import { Helmet } from 'react-helmet-async';
import Footer from './Footer';

class Home extends Component {

    // BACKGROUND ROBOT HEAD CHANGE AT EVERY PAGE REFRESH
    constructor(props) {
        super(props)

        this.state = {
            bgStyle: {
                height: "100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }
        }
    }

    componentDidMount() {
        const randomPic = Math.floor(Math.random () * 50);

        this.setState({
            bgStyle: {
                backgroundImage: `url(https://robohash.org/${randomPic}?set=set3)`,
                height: "100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }
        })
    }

    render () {
        return (
            <>
            {/* ADD PAGE TITLE */}
            <Helmet>
                <title> Robofriends - Home </title>
                <meta name='description' content='Robofriends 2.0 - rework of robofriends' />
            </Helmet>

            {/* SVH Wrapper and Page-Title letter by letter */}
            <div className='wrapper'>
                <div style={this.state.bgStyle} className="big-box">
                    <div className="letter-box text-gray-400">
                        <div className="letter r">R</div>
                        <div className="letter o">O</div>
                        <div className="letter b">B</div>
                        <div className="letter o">O</div>
                        <div className="letter f">F</div>
                        <div className="letter r2">R</div>
                        <div className="letter letter-i">I</div>
                        <div className="letter e">E</div>
                        <div className="letter n">N</div>
                        <div className="letter d">D</div>
                        <div className="letter s">S</div>
                    </div>

                    <div className='version-container'>
                        <div className='version-box'>2.0</div>
                    </div>
                </div>

                {/* SUBTITLE */}
                <div className='subTitle text-center text-gray-400 pt7 pb5'>
                    <h2>
                        There is where you can find all sort of robots.
                    </h2>
                </div>

                {/* FOOTER INSERTION */}
                <Footer />
            
            </div>
            </>
        )
    }
}

export default Home;