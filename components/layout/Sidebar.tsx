"use client"
import React from "react"
import NewChat from "./NewChat"
import { useSession, signOut } from "next-auth/react"

const Sidebar = () => {
    const { data: session } = useSession()
    return (
        <div className="p-2 flex flex-col h-screen">
            <div className="flex-1">
                <div>
                    {/* New Chat */}
                    <NewChat />

                    <div>
                        {/* Model selection */}
                    </div>

                    {/* Map throught the chatRows */}

                </div>
            </div>
            {session && (
                <img
                    className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
                    src={session.user?.image} alt="profile picture"
                    onClick={() => signOut()}>
                </img>
            )}
        </div>
    )
}
export default Sidebar