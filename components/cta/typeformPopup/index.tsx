'use client'
import '@typeform/embed/build/css/popup.css'

import React, { useEffect, useState } from 'react'
import { createPopup } from '@typeform/embed'

export type HookType = 'text' | 'button';

const TypeformPopup = ({ hookType, text }: { hookType: HookType, text?: string }) => {
    const [popup, setPopup] = useState(null)

    useEffect(() => {

        const baseUrl = 'https://x7po8k2sqx9.typeform.com/to/JczXPvA3'

        const searchParams = new URLSearchParams(window.location.search)

        const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']

        const filteredParams = new URLSearchParams()
        utmParams.forEach(param => {
            const value = searchParams.get(param)
            if (value) {
                filteredParams.set(param, value)
            } else {
            }
        })

        // 5. Final URL with any present UTM parameters
        const typeformUrl = filteredParams.toString()
            ? `${baseUrl}?${filteredParams.toString()}`
            : baseUrl


        // 6. Create a popup instance with the dynamic Typeform URL
        const createdPopup = createPopup(typeformUrl, {
            open: false, // don't open automatically
        })

        if (createdPopup) {
            setPopup(createdPopup)
        } else {
        }

    }, [])

    // 7. Open the popup on button click
    const handleOpenPopup = () => {
        if (popup) {
            popup.open()
        } else {
        }
    }

    return (
        <button className="" onClick={handleOpenPopup}>
            {getHookType(hookType, text)}
        </button>
    )
}

function getHookType(hookType: HookType, text: string = "Book Your Free Efficiency Audit") {
    switch (hookType) {
        case "text":
            return (<div className="inline-flex items-center bg-indigo-50 rounded-full px-4 py-1 mb-6">
                <span className="text-gray-700 text-sm">Book Your Free Efficiency Audit</span>
                <span className="bg-indigo-600 text-white text-xs font-medium px-2 py-0.5 rounded-full ml-2">Here</span>
            </div>)
        case "button":
            return (<div
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium text-center transition-colors">
                {text}
            </div>)
        default:
            return (<div>empty</div>)
    }
}

export default TypeformPopup
