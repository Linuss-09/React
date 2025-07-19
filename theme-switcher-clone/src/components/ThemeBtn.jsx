import React from 'react'
import useTheme from '../context/ThemeContext'

export default function ThemeBtn() {
    // use usetheme toget all the things themecontext here but u gotta stoe those things aswell so its alright 
    const {themeMode, darkTheme, lightTheme} = useTheme()

    // eventHandler
    const onChangeBtn = (e) =>{
        const darkModeStatus = e.currentTarget.checked
        if(darkModeStatus) {
            darkTheme()
        } else {
            lightTheme()
        }
    }

  return (
    <label className='space-x-1 flex items-center py-2'
    >
        <input type="checkbox"
        className='hidden'
        checked= {themeMode === "dark"}
        onChange={onChangeBtn}
        />
        <span className="border-2 p-0.5 rounded-md flex justify-center ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
        </span>
    </label>
  )
}
