import React from 'react'
import { Route } from 'react-router-dom'
import Header from './Layout/Header/Header'
import HomeCarousel from './Layout/HomeCarousel/HomeCarousel'
import Footer from './Layout/Footer/Footer'

const HomeTempplate = (props) => {

    const { Component, ...restProps } = props
    return (
        <Route {...restProps} render={(propsRoute) => {
            // props.location.props.history.props.match

            return (
                <>
                    <Header {...propsRoute} />
                    <HomeCarousel  {...propsRoute} />
                    <Component {...propsRoute} />
                    <hr className='mt-5' />
                    <Footer />
                </>
            )

        }} />
    )
}

export default HomeTempplate