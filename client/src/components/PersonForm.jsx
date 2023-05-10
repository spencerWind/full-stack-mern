import React, { useEffect, useState } from "react";
import axios from "axios";

const PersonForm = () => {
    const [message, setMesasage] = useState("...loading");

    useEffect(() => {
        axios
            .get("http://localhost:8000/api")
            .then((res) => setMesasage(res.data.message))
            .catch((err) => console.log("Error:", err));
    }, []);

    return <div>Message from the back-end: {message}</div>;
};

export default PersonForm;
