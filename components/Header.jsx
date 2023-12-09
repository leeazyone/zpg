import { UserButton, auth } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  const { userId } = auth()
  // console.log(userId)
  return (
    <>
      <nav className='bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <div className='flex items-center cursor-pointer'>
            <Link href='/'>
              <span className='slef-center text-3xl font-semibold whitespace-nowrap'>
                Z.P.G
              </span>
            </Link>
          </div>

          <div className='flex items-center font-bold'>
            {!userId ? (
              // 로그인이 안된 경우
              <>
                <div className='flex md:order-2 gap-2'>
                  <Link
                    href='/sign-up'
                    className='mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white'
                  >
                    Sign Up
                  </Link>
                  <Link
                    href='/sign-in'
                    className='mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white'
                  >
                    Sign In
                  </Link>
                </div>
              </>
            ) : (
              // 로그인된 경우
              <>
                <div className='flex md:order-2 gap-2'>
                  <Link
                    href='/header/notice'
                    className='mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white'
                  >
                    Notice
                  </Link>
                  <Link
                    href='/header/cart'
                    className='mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white'
                  >
                    Cart
                  </Link>
                  <div className='ml-auto'>
                    <UserButton afterSignOutUrl='/' />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
