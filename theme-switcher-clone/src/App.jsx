import ThemeProvider from './context/ThemeProvider'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {

  return (
    <ThemeProvider >
      {/* main body */}
      <div className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-black/30 to-cyan-200 dark:bg-gradient-to-b dark:from-violet-900 dark:to-black/80 ">
        {/* main container  */}
        <div className="w-full bg-blue-500 py-4 max-w-md rounded-lg pb-8 dark:bg-amber-300">
          {/* for btn maybe?? */}
          <div className="w-full max-w-sm mx-auto flex justify-end">
            <ThemeBtn/>
          </div>

          {/* div for card */}
          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
