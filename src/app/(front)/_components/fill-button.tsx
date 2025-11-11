import Link from 'next/link'
import React from 'react'

function FillButton({ name, link, onClick }: any) {
  return (
    <div className="border py-[7px] border-red-900">
      <Link
        href={link}
        className={`text-sm py-2 relative px-4  bg-transparent text-gray-900 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-red-950 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100`}
        onClick={onClick}
      >
        {name}
      </Link>
    </div>
  )
}

export default FillButton
