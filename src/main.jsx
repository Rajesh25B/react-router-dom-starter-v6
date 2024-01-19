import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// import { About, Contact, Home, Layout } from './PartOne'
// import { About, Contact, Home, Layout } from './PartTwo'
// import { About, Contact, Home, Layout, Users } from './PartThree'
import { Home, Layout, StarwarInfo, startwarData } from './PartFour'

// partOne
// const router = createBrowserRouter(createRoutesFromElements(
//   <Route path='/' element={<Layout />}>
//     <Route path='' element={<Home />} />
//     <Route path='about/' element={<About />} />
//     {/* gives us users/id */}
//     <Route path='users/' element={<Users />}>
//       <Route path='id/' element={<Profile />} />
//     </Route>
//   </Route>
// ))

// partTwo
// const router = createBrowserRouter(createRoutesFromElements(
//   <Route path='/' element={<Layout />}>
//     <Route path='' element={<Home />} />
//     <Route path='about/' element={<About />} />
//     <Route path='contact/' element={<Contact />} />
    
//   </Route>
// ))

// partThree
// const router = createBrowserRouter(createRoutesFromElements(
//   <Route path='/' element={<Layout />}>
//     <Route path='' element={<Home />} />
//     <Route path='about/' element={<About />} />
//     <Route path='contact/' element={<Contact />} />
//     <Route path='users/' element={<Users />}>
//       <Route path=':userId' element={<Users />}/>
//     </Route>
//   </Route>
// ))

// partFour
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route path='' element={<Home />} />
    <Route path='starwars/' element={<StarwarInfo />} loader={startwarData} />
    </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  </React.StrictMode>,
)
