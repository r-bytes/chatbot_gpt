"use client"
import { signIn } from "next-auth/react"
import Image from "next/image"

import React from "react"

const Login = () => {
    return (
        <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
            <Image
                src={"/images/logo.png"}
                alt={"logo"}
                width={300}
                height={300}
            />
            <button onClick={() => signIn("google")} className="text-white font-bold tracking-wider text-3xl animate-pulse"> Sign in to use Chat GPT </button>
        </div>
    )
}
export default Login