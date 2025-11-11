'use client'
import React from 'react'
import { useState, CSSProperties } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";


function Loading() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  return (
    <div className='flex fixed justify-center items-center bg-blue-600 h-screen w-screen z-50'>
      <PropagateLoader
        color={color}
        loading={loading}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loading