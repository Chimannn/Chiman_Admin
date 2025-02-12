import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "@/store/auth/authSlice";

export default function Notice() {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    };
    return <div onClick={handleLogout}>LogOut</div>;
}
