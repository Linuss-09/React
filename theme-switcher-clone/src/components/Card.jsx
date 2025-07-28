import React from 'react'

export default function Card() {
  return (
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="p-5 ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Card Title</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Some text for the card to see the theme change.</p>
        </div>
    </div>
  )
}