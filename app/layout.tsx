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
                <div>
                    {/* Sidebar */}

                    {/* ClientProvider - Notification */}

                    <div className="bg-[#343541] flex-1">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
