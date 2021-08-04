import axios from "axios"


export const logoutUser = async () => {
    try {
        const res = await axios.patch("/auth/logout")
        return res.data
    } catch (error) {
        console.log(error)
    }
}