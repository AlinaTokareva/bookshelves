import type {Metadata,} from 'next'
import React from 'react'
import AppProviders from '@/components/AppProviders/AppProviders'
import {appConfig} from '@/config/appConfig'


export const metadata: Metadata = {
    title: appConfig.title,
    description: appConfig.description,
}

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='ru'>
        <body>
        <AppProviders>
            {children}
        </AppProviders>
        </body>
        </html>
    )
}
