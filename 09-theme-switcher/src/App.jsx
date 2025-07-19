import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'


function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // now actually theme kaise change hoti hai 
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  


  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      {/* body  */}
      <div className="flex flex-wrap min-h-screen items-center">
        main component
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                {/* imported theme btn  */}
                  <ThemeBtn />
                </div>

              <div className="w-full max-w-sm mx-auto">
                {/* impored card here */}
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>

  )
}

export default App
