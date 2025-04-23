'use client'

import React from 'react'
import { useRouter } from 'next/navigation';


export type HookType = 'text' | 'button';

const RedirectCTA = ({ hookType, text, url}: { hookType: HookType, text?: string, url: string }) => {
    const router = useRouter();    

    const handleClick = () => {
        router.push(url)
    }

    return (
        <button className="" onClick={handleClick}>
            {getHookType(hookType, text)}
        </button>
    )
}

function getHookType(hookType: HookType, text: string = "Book Your Free Efficiency Audit") {
    switch (hookType) {
        case "text":
            return (<div className="inline-flex items-center bg-blue-50 rounded-full px-4 py-1 mb-6">
                <span className="text-gray-700 text-sm">Book Your Free Efficiency Audit</span>
                <span className="bg-blue-500 text-white text-xs font-medium px-2 py-0.5 rounded-full ml-2">Here</span>
            </div>)
        case "button":
            return (<div
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium text-center transition-colors">
                {text}
            </div>)
        default:
            return (<div>empty</div>)
    }
}

export default RedirectCTA
