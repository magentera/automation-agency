'use client'
import '@typeform/embed/build/css/popup.css'

import React from 'react'
import TypeformPopup, { HookType } from './typeformPopup';
import RedirectCTA from './redirect';

export type CTAType = 'typeform' | 'redirect';

const CTAProvider = ({ ctaType, redirectUrl = "/meetings/initial-consultation", hookType = "button", text }: { ctaType: CTAType, redirectUrl?: string, hookType?: HookType, text?: string }) => {

    if (ctaType == "redirect")
        return <RedirectCTA hookType={hookType} text={text} url={redirectUrl} />

    return <TypeformPopup hookType={hookType} text={text} />
}

export default CTAProvider
