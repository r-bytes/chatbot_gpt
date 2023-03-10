import React from "react"
import NewChat from "./NewChat"

const Sidebar = () => {
    return (
        <div className="p-2 flex flex-col h-screen">
            <div className="flex-1">
                <div>
                    {/* New Chat */}
                    <NewChat />

                    <div>
                        {/* Model selection */}
                    </div>

                    {/* Map throught the Chats */}

                </div>
            </div>
        </div>
    )
}
export default Sidebar