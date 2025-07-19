import {useEffect, useState} from 'react'
import { ThemeContext } from './ThemeContext'

/*
 * THEME PROVIDER NOTES:
 * 
 * Why we pass darkTheme & lightTheme functions instead of setThemeMode directly?
 * 
 * Think of TV Remote Control Analogy:
 * - You don't give someone direct access to TV's internal circuits
 * - Instead, you give them a remote with specific buttons like "Volume Up", "Volume Down"
 * - Similarly, we give components specific functions (darkTheme, lightTheme) instead of raw setThemeMode
 * 
 * Benefits of this approach:
 * 1. CLEAR INTENT: darkTheme() is obvious, setThemeMode("dark") requires remembering the parameter
 * 2. ERROR PREVENTION: Can't accidentally write setThemeMode("purple") or setThemeMode(123)
 * 3. FUTURE FLEXIBILITY: If darkTheme needs to do more things (localStorage, sound, etc.), 
 *    just update the function - all components automatically get new behavior
 * 
 * Why we pass themeMode in value?
 * - Components need to know CURRENT STATE to decide what to display
 * - Example: Button shows "Switch to Dark" when light, "Switch to Light" when dark
 * 
 * The Pattern = STATE + ACTIONS:
 * - themeMode (STATE) - What's the current situation?
 * - darkTheme, lightTheme (ACTIONS) - What can I do about it?
 */

function ThemeProvider({children}) {

  const [themeMode, setThemeMode] = useState("light")

  // Action functions - these are like remote control buttons
  const darkTheme = () => {
    setThemeMode("dark")
    // Future: could add localStorage.setItem("theme", "dark") here
  }

  const lightTheme = () => {
    setThemeMode("light")
    // Future: could add localStorage.setItem("theme", "light") here
  }

  useEffect(() => {
    // remove both fo these mfk
    document.querySelector('html').classList.remove("light", "dark")

    // and put the value which is actually here in themeMode
    document.querySelector('html').classList.add(themeMode)

  }, [themeMode])

  return (
    // Passing both STATE and ACTIONS to child components
    // STATE: themeMode (so components know current theme)
    // ACTIONS: darkTheme, lightTheme (so components can change theme safely)
    <ThemeContext.Provider value={{themeMode, darkTheme, lightTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider