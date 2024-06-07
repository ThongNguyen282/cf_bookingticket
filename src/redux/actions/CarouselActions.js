import { SET_CAROUSEL } from "./types/CarouseType"
import { quanLyPhimService } from "../../services/quanlyPhimService"

export const getCarouselAction = async (dispatch) => {
    try {

        const result = await quanLyPhimService.layDanhSachBanner();
        // console.log(result)
        dispatch({
            type: SET_CAROUSEL,
            arrImg: result.data.content
        })

    } catch (err) {
        console.log(err)
    }
}