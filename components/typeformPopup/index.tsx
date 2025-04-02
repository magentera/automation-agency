'use client'
import '@typeform/embed/build/css/popup.css'

import React, { useEffect, useState } from 'react'
import { createPopup } from '@typeform/embed'

export type HookType = 'text' | 'button';

const TypeformPopup = ({ hookType, text }: { hookType: HookType, text?: string }) => {
    const [popup, setPopup] = useState(null)

    useEffect(() => {
        console.log("[TypeformPopup] useEffect triggered")

        // 1. Base Typeform link
        const baseUrl = 'https://x7po8k2sqx9.typeform.com/to/JczXPvA3'
        console.log("[TypeformPopup] Base URL:", baseUrl)

        // 2. Extract UTM parameters from the current URL
        const searchParams = new URLSearchParams(window.location.search)
        console.log("[TypeformPopup] Current search parameters:", window.location.search)

        // 3. Define which UTM parameters we want to capture
        const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
        console.log("[TypeformPopup] Looking for these UTM params:", utmParams)

        // 4. Build a query string containing only existing UTM parameters
        const filteredParams = new URLSearchParams()
        utmParams.forEach(param => {
            const value = searchParams.get(param)
            if (value) {
                filteredParams.set(param, value)
                console.log(`[TypeformPopup] Found and appended UTM param: ${param} = ${value}`)
            } else {
                console.log(`[TypeformPopup] UTM param '${param}' not found`)
            }
        })

        // 5. Final URL with any present UTM parameters
        const typeformUrl = filteredParams.toString()
            ? `${baseUrl}?${filteredParams.toString()}`
            : baseUrl

        console.log("[TypeformPopup] Final Typeform URL:", typeformUrl)

        // 6. Create a popup instance with the dynamic Typeform URL
        const createdPopup = createPopup(typeformUrl, {
            open: false, // don't open automatically
        })

        if (createdPopup) {
            console.log("[TypeformPopup] Popup created successfully")
            setPopup(createdPopup)
        } else {
            console.log("[TypeformPopup] Popup creation failed - createdPopup is null or undefined")
        }

    }, [])

    // 7. Open the popup on button click
    const handleOpenPopup = () => {
        console.log("[TypeformPopup] handleOpenPopup triggered")
        if (popup) {
            console.log("[TypeformPopup] Opening popup now...")
            popup.open()
        } else {
            console.log("[TypeformPopup] popup is null or undefined, cannot open")
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

export default TypeformPopup
