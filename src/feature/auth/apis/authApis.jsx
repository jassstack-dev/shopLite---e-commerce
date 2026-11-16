import { axiosInstance } from "../../../app/config/axiosInstance";

export const authApis = async (credentials) => {
  try {
    const res = await axiosInstance.post("/auth/login", credentials);
    console.log("Login response:", res.data);
    return res.data;
  } catch (error) {
    console.log("API Error:", error.response?.data || error.message);
    throw error;
  }
};

export const authMe = async () =>{

  const accessToken = localStorage.getItem('accessToken')
    try {
      if(!accessToken) return 

        const res = await axiosInstance.get('/auth/me', {
            headers :{
                Authorization :  `Bearer ${accessToken}`
            }
        })

        return res.data
        
    } catch (error) {
        console.log('API ERROR', error.response?.data || error.message)
         throw error;
    }
}