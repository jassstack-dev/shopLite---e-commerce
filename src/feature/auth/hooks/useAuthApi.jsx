import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { authApis } from "../apis/authApis";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../store/authSlice";

export const useAuth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const loginUser = async (credentials) => {
    try {
      const response = await authApis(credentials);
      dispatch(loginUserAction({
         user: response,
  accessToken: response.accessToken,
  refreshToken: response.refreshToken
      }));
      console.log("2. REDIRECTING...");

    navigate("/checkout");
        

      return response;
        
    } catch (error) {
      console.log(error);
    }
  };

  return {
    showPassword,
    setShowPassword,
    navigate,
    register,
    handleSubmit,
    errors,
    isSubmitting,
    loginUser,
  };
};
