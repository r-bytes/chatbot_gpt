/* eslint-disable @typescript-eslint/no-non-null-assertion */
"use client"

import { PlusIcon } from "@heroicons/react/24/solid"
import { db } from "../../firebase"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import React from "react"

const NewChat = () => {
    const router = useRouter()
    const { data: session } = useSession()

    const createNewChat = async () => {
        const doc = await addDoc(
            // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
            collection(db, "users", session?.user?.email!, "chats"), {
                messages: [],
                // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                userId: session?.user?.email!,
                createdAt: serverTimestamp()
            }
        );
        router.push(`/chat/${doc}`)
    }
    return (
        <div className="border border-gray-700 items-center justify-center chatRow">
            <PlusIcon className="w-4 h-4" />
            <p> New Chat </p>
        </div>
    )
}
export default NewChat