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
      title: 'carrito',
      path: '/cart',
      content: 'Carrito',
      open: "div1",
    },
    {
      id: 2,
      title: 'compras',
      path: '/logout',
      content: 'Deseas salir?',
      open: "div2",
    },
    {
      id: 3,
      title: 'dashboard',
      path: '/dashboard',
      content: 'Dashboard',
      open: "div3",
    }
  ]

  const handleClick = (e) => {

    const {name} = e.target;
    
    setIsOpen({
      ...initialState,
      [name]: true
    })
    console.log(name);

  }

  return (
    <>
      <nav>
        {buttons.map(button => (
          <button
            onClick={handleClick} 
            key={button.id} 
            name={button.open} 
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

