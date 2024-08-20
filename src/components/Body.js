import React from 'react'
import Browse from './Browse'
import Login from './Login'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/', 
            element: <Login/>
        },
        {
            path: '/browser', 
            element: <Browse/>
        }
    ])
  return (
    <>
    <RouterProvider router={appRouter}/>
    </>
  )
}

export default Body