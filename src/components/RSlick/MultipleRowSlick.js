import React from 'react';
import Slider from "react-slick"; // Giả sử bạn đang sử dụng react-slick
import styleSlick from './MultipleRowSlick.module.css'; // Điều chỉnh import nếu cần
import Film_Flip from '../Film/Film_Flip';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleSlick['slick-next']}`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleSlick['slick-prev']}`}
            style={{ ...style, display: "block", left: '-50px' }}
            onClick={onClick}
        >
        </div>
    );
}

export default function MultipleRowSlick(props) {
    console.log("check multi", props.arrFilm.length);

    const renderFilms = () => {
        return props.arrFilm.slice(0, 12).map((item, index) => {
            console.log("item", item);
            return (
                <div className={`${styleSlick['width-item']}`} key={index}>
                    <Film_Flip item={item} />
                </div>
            );
        });
    };

    // Chỉ hiển thị một hàng và một slide mỗi hàng nếu số lượng mục ít hơn 4
    const slidesToShow = props.arrFilm.length < 4 ? 1 : 2;
    const rows = props.arrFilm.length < 4 ? 1 : 2;
    const slidesPerRow = props.arrFilm.length < 4 ? 1 : 2;

    const settings = {
        className: "center variable-width",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: slidesToShow,
        speed: 500,
        rows: rows,
        slidesPerRow: slidesPerRow,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div className="">
            <h2>Multiple Rows</h2>
            <Slider {...settings}>
                {renderFilms()}
            </Slider>
        </div>
    );
}
