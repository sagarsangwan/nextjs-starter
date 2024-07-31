import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
function Providers({ children, ...props }) {
    return (
        <NextThemesProvider {...props}>{children}</NextThemesProvider>
    )
}

export default Providers
