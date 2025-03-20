import React from 'react'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import JobsLayout from './layout/JobsLayout'
import JobDetails from './pages/JobDetails'
import About from './pages/About'
import Error from './pages/Error'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = '/' element={<RootLayout/>}>
        <Route index element = {<Home/>}/>
        <Route path='jobs' element={<JobsLayout/>}>
          <Route index element={<Jobs/>}/>
          <Route path = ':id' element={<JobDetails/>} />
        </Route>
        <Route path='about' element={<About/>}/>
        <Route path='*' element={<Error/>} />
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
