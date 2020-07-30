import React from 'react'

const Header = ({handleClickNew, handleClickTop}) =>{
  return(
    <header>
      <div className = "left">
        <a href = "/">Hacker News</a>
      </div>
      <div className = "right">
        <ul>
          <li><a href = "#" onClick = {handleClickNew}>new</a></li>
          <li><a href = "#" onClick = {handleClickTop}>top</a></li>
        </ul>
      </div>
    </header>
  )
}


export default Header;
