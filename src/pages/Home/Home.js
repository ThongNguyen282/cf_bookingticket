import React, { useEffect } from 'react'
import HomeMenu from './HomeMenu/HomeMenu'
import { useDispatch, useSelector } from 'react-redux'
import MultipleRowSlick from '../../components/RSlick/MultipleRowSlick';
import { layDanhSachPhimActions } from '../../redux/actions/QuanLyPhimActions';

export default function Home() {
    const { arrFilm } = useSelector(state => state.QuanLyPhimReducer);

    console.log("check Home", arrFilm)
    const dispatch = useDispatch();

    useEffect(() => {
        const action = layDanhSachPhimActions();
        dispatch(action); // dispatach function từ thunk
    }, [])

    return (
        <>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto ">
                    <MultipleRowSlick arrFilm={arrFilm} />
                </div>
            </section>
            <div className="mx-40">
                <HomeMenu />
            </div>

        </>
    )
}
