import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import callApi from '../../../apis/callApi';

export const fetchUserAsync = createAsyncThunk(
    'user/fetchUser',
    async () => {
        const response = await callApi("QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP02");
        return response.data;
    }
);



export const addUserAsync = createAsyncThunk(
    'user/addUser',
    async (data) => {
        const res = await callApi(`QuanLyNguoiDung/ThemNguoiDung`, "POST", data.body, data.token);
        if (res?.status === 200) {
            return {
                status: res.status,
                data: res.data,
                message: 'Thêm user thành công'
            }
        } else {
            return res.response.data;
        }
    }
);

export const editUserAsync = createAsyncThunk(
    'user/editUser',
    async (data) => {
        const res = await callApi(`QuanLyNguoiDung/CapNhatThongTinNguoiDung`, "PUT", data.body, data.token);
        if (res?.status === 200) {
            return {
                status: res.status,
                data: res.data,
                message: 'Sửa user thành công'
            }
        } else {
            return res.response.data;
        }
    }
);

export const deleteUserAsync = createAsyncThunk(
    'user/deleteUser',
    async (data) => {
        const res = await callApi(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${data.taiKhoan}`, "DELETE", data.body, data.token);
        if (res?.status === 200) {
            return {
                status: res.status,
                data: res.data,
                message: 'Xóa user thành công'
            }
        } else {
            return res.response.data;
        }
    }
);

const userSplice = createSlice({
    name: 'user',
    initialState: { value: [] },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserAsync.fulfilled, (state, action) => {
                state.value = action.payload
            })
            .addCase(addUserAsync.fulfilled, (state, action) => {
                const res = state.value
                res.unshift(action.payload.data)
                state.value = res
                // state.value.unshift(action.payload.data) // không hiểu tạo sao sai k dùng đc
            })
            .addCase(editUserAsync.fulfilled, (state, action) => {
                const index = state.value.findIndex(user => user.taiKhoan === action.payload.data.taiKhoan)
                state.value.splice(index, 1)

                const res = state.value
                const data = { ...action.payload.data, soDt: action.payload.data.soDT }// vì dto của BE mỗi lúc 1 nẻo
                res.unshift(data)
                state.value = res
            })
            .addCase(deleteUserAsync.fulfilled, (state, action) => {
                const index = state.value.findIndex(user => user.taiKhoan === action.payload.data)
                state.value.splice(index, 1)
            })
    }
})

export const selectUserList = (state) => state.user.value;
// export const { deleteUser, addUser } = userSplice.actions
export default userSplice.reducer