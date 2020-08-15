import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import SideNavigation from "../side-navigation/SideNavigation";

const PageLayout = (props) => {
  return (
    <>
      <Header />
        <div className="body-container">
            <SideNavigation/>
            {props.children}
        </div>
        <Footer/>
    </>
  )
}

export default PageLayout
