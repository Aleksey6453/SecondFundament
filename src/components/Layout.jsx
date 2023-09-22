import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navigation } from './navigation/Navigation'

const Layout = () => {
  return (
    <div>
        {/* <header>
            <Navigation />
        </header> */}
        <Outlet />
        {/* <footer>
            <p>
                footer
            </p>
        </footer> */}
    </div>
  )
}

export { Layout }
