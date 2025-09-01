import React from 'react'

const headerNav = [
  {
    title : "intro",
    url : "#intro",
  },
  {
    title : "skill",
    url : "#skill",
  },
  {
    title : "site",
    url : "#site",
  },
  {
    title : "portfolio",
    url : "#port",
  },
  {
    title : "contact",
    url : "#contact",
  },
  
]



const Header = () => {
  return (
    <header id='header' role='header'>
      <div className="header_inner">
        <div className="header_logo">
          <a href="/">
            portfolio <em>react</em>
          </a>
        </div>
        <nav className='header_nav' role='navigation' aria-label='메인메뉴'>
          <ul>
            {headerNav.map((nav,key)=>(
              <li key={key}><a href={nav.url}>{nav.title}</a></li>
            ))}
          </ul>
        </nav>
        <div className="header_nav_mobile" id='headerToggle' aria-controls='primary-main' role='button' tabIndex="0" aria-expanded='false'>
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default Header