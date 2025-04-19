import React from 'react'
import { Button } from '../ui/button'
import { SignInButton, UserButton, useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom';

const Header = () => {

    const {user, isSignedIn} = useUser();

  return (
    <div className='flex justify-between p-5 shadow-md'>
        <img src="/logo.svg" width={100} height={100} alt="" />

        {
            isSignedIn ? 
            <div className='flex items-center gap-5'>
                <Link to={'/dashboard'}>
                    <Button variant='outline' className='my-2 w-32 h-10'>Dashborad</Button>
                </Link>
                <UserButton/>
            </div> :
            <Link to={'/auth/sign-in'}>
                <Button className='my-2 w-32 h-10'>Get Started</Button>
            </Link>
        }

    </div>
  )
}

export default Header