import { createContext, useContext } from "react";

// we can basically give soe vlaue in the begginging only like context jab pehli baar feed ho toh uski kya vlaeu honi chahiye
export const ThemeContext = createContext({
    // also it shows ki yahan par hum theme bhi de skte hain and methods bhi de skte hain meri jaan 
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider

// u can also export custom hooks from here meri jaan

export default function useTheme() {
    return useContext(ThemeContext)
}
