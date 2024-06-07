import { quanLyPhimService } from "../../services/quanlyPhimService";
import { SET_DANH_SACH_PHIM } from "./types/QuanLyPhimType";

export const layDanhSachPhimActions = () => {
    return async (dispatch) => {
        try {

            const result = await quanLyPhimService.layDanhSachPhim();
            // console.log(result)
            dispatch({
                type: SET_DANH_SACH_PHIM,
                arrImg: result.data.content
            })

        } catch (err) {
            console.log(err)
        }
    }
}