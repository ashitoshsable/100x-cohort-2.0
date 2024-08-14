import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Signup = ()=>{
    const [firstName, setFirstName]=useState("");
    const [lastName, setLastName]=useState("");
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");
    const navigate = useNavigate();

    return (
        <>
            <div className="bg-slate-300 h-screen flex justify-center">
                <div className="flex flex-col justify-center">
                    <div className="rounded-lg bg-white w-150 text-center p-2 h-max px-4">
                        <Heading label={"Sign Up"} />
                        <SubHeading label={"Please fill out the below given form."} />
                        <InputBox onChange={e => {
                            setFirstName(e.target.value);
                        }} placeholder="Rahul" label={"First Name"}/>
                        <InputBox onChange={e => {
                            setLastName(e.target.value);
                        }} placeholder="Kumar" label={"Last Name"}/>
                        <InputBox onChange={e => {
                            setUsername(e.target.value);
                        }} placeholder="rahulkumar" label={"Username"}/>
                        <InputBox onChange={e => {
                            setPassword(e.target.value);
                        }} placeholder="*****" label={"Password"}/>
                        <div className="pt-4">
                            <Button onClick={async ()=>{
                                const response = await axios.post("https://localhost:3000/api/v1/user.signup",{
                                    username,
                                    firstName,
                                    lastName,
                                    password
                                });
                                localStorage.setItem("token",response.data.token);
                                navigate("/dashboard");
                            }} label={"Create Account"}/>
                        </div>
                        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
                    </div>
                </div>
            </div>
        </>
    )
}