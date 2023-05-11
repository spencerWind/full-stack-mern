import React, { useEffect, useState } from "react";
import axios from "axios";

const PersonForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/people", {
                firstName,
                lastName,
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
            })
            .catch((err) => console.log("Error:", err));
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-[256px] md:w-[512px] bg-slate-800 px-2 py-4 box-shadow text-slate-50 flex flex-col items-center gap-4">
            <section className="flex flex-col gap-2 w-full md:w-1/2">
                <label
                    htmlFor="firstName"
                    className="px-2">
                    First Name
                </label>
                <input
                    className="rounded-lg px-2 py-1 text-slate-950 bg-slate-200"
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => {
                        setFirstName(e.target.value);
                    }}
                />
            </section>
            <section className="flex flex-col gap-2 w-full md:w-1/2">
                <label
                    htmlFor="lastName"
                    className="px-2">
                    Last Name
                </label>
                <input
                    className="rounded-lg px-2 py-1 text-slate-950 bg-slate-200"
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => {
                        setLastName(e.target.value);
                    }}
                />
            </section>
            <input className="w-full md:w-1/2 bg-purple-600 border border-purple-700 rounded-lg my-8" type="submit" value="Create User" />
        </form>
    );
};

export default PersonForm;
