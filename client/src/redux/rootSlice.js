import { createSlice } from '@reduxjs/toolkit'

const   rootSlice = createSlice({
    name: "root",
    initialState: {
        loading: false,
        portfolioData: null,
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = true
        },
        hideLoading: (state, action) => {
            state.loading = false
        },
        setPortfolioData: (state, action) => {
            state.portfolioData = action.payload
        }
    }
})

export default rootSlice.reducer
export const { setLoading, hideLoading, setPortfolioData } = rootSlice.actions