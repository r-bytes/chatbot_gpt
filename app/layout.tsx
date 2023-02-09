import Sidebar from "../components/layout/Sidebar";
import "../styles/globals.css";
import React from "react";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <head />
            <div></div>
            <body>
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
            </body>
        </html>
    );
}
