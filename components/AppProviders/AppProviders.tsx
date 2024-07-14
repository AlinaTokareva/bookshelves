'use client'

import React from 'react'
import {createTheme, MantineProvider} from '@mantine/core'
import '@/_app'

const theme = createTheme({
    /** Put your mantine theme override here */
})

const AppProviders = ({children}: Readonly<{ children: React.ReactNode }>) => {
    return (
        <MantineProvider theme={theme}>
            {children}
        </MantineProvider>
    )
}

export default AppProviders