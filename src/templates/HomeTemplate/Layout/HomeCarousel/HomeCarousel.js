import React, { useEffect } from 'react'
import { Carousel } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getCarouselAction } from '../../../../redux/actions/CarouselActions';



export default function HomeCarousel() {

  const { arrImg } = useSelector(state => state.CarouselReducer)
  // console.log("check", arrImg)
  const dispatch = useDispatch()


  const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    backgroundPosition: 'center',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat'
  };


  useEffect(() => {

    dispatch(getCarouselAction)

  }, [])


  const renderImg = () => {
    return arrImg.map((item, index) => {
      return (
        <div key={index}>
          <div style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}>
            <img src={item.hinhAnh} className='w-full opacity-0 ' alt="" />
          </div>
        </div>
      )
    })
  }

  return (
    <Carousel effect="fade" >
      {renderImg()}
    </Carousel>
  )
}
