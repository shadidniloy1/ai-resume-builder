import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import Header from './components/custom/Header'

function App() {

  const {user, isSignedIn, isLoaded} = useUser();

  if(!isSignedIn && isLoaded){
    // console.log(isSignedIn);
    return <Navigate to="/auth/sign-in" />
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
