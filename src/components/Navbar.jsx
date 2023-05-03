import React, { useState } from 'react'


const initialState ={
  div1: false,
  div2: false,
  div3: false,
}

export const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(initialState)  
  
  const {div1, div2, div3} = isOpen;

  const buttons = [
    {
      id: 1,
      title: 'link 1',
      name: "div1",
    },
    {
      id: 2,
      title: 'link 1',
      name: "div2",
    },
    {
      id: 3,
      title: 'link 3',
      name: "div3",
    }
  ]

  const handleClick = (e) => {

    const {name} = e.target;
    
    setIsOpen({
      ...initialState,
      [name]: true
    })
  }

  return (
    <>
      <nav>
        {buttons.map(button => (
          <button
            key={button.id} 
            onClick={handleClick} 
            name={button.name} 
          >
            {button.title}
          </button>
        ))}
      </nav>
      <div>
        {
          div1 && (<p>Este es el div 1</p>)
        }
        {
          div2 && (<p>Este es el div 2</p>)
        }
        {
          div3 && (<p>Este es el div 3</p>)
        }
      </div>
    </>
  )
}

