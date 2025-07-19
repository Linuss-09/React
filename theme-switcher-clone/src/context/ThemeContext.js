import { createContext, useContext } from "react";


export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})

// basically we cna directly import useTheme() and we dont need to import themecontext and usecontext again and again 
export default function useTheme() {
    return useContext(ThemeContext)
}

// jisko bhi dono chahiye directly call useTheme() and thats it 

