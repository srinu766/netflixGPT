import React from 'react'
import Login from './Login'
import Browse from './Browse'
import Hello from './hello'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'


const Body = () => {


  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/browse",
      element:<Browse/>
    },
    {
      path:"/hello",
      element:<Hello/>
    }
  ])

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
