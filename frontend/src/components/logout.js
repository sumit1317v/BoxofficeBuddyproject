import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../loggedSlice";
import { useEffect } from "react";

export default function LogoutComponent() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
    localStorage.clear();
    dispatch(logout());
    console.log("in logout comp")
    navigate('/');
    },[]);
    
}