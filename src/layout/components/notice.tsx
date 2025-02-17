import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "@/store/auth/authSlice";
import { Button } from "antd";

export default function Notice() {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    };
    return (
        <Button type="primary" style={{ marginLeft: "10px" }} onClick={handleLogout}>
            LogOut
        </Button>
    );
}
