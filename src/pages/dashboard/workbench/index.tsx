import React, { useEffect } from "react";
import apiClient from "@/api/apiClient";

const Analysis = () => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apiClient.get({ url: "/dashboard" });
                console.log(response);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return <h1>Hello world2</h1>;
};
export default Analysis;
