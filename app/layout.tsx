import React from "react";
import "../styles/globals.css";
import { Login, SessionProvider, Sidebar } from "@components/index.js";
import { authOptions } from "@pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth";

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    const session = await getServerSession(authOptions)
    console.log("=====> session", session)

    return (
        <html>
            <head />
            <div></div>
            <body>
                <SessionProvider session={session}>
                    {!session ? (
                        <Login />
                    ) : (
                        ""
                    )}
                    <div className="flex">
                        {/* Sidebar */}
                        <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
                            <Sidebar />
                        </div>

                        {/* ClientProvider - Notification */}


                        <div className="bg-[#343541] flex-1">
                            {children}
                        </div>
                    </div>
                </SessionProvider>
            </body>
        </html>
    );
}
