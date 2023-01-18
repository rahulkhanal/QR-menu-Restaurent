import React, { createContext, useEffect } from 'react'
import { useContext } from 'react'
import { cartAddContext, cartContext } from '../components/store'
const CartPage = ({id,Food,isRendering}) => {   
  // const {cart} = useContext(cartContext)
  useEffect(()=>{
    console.log(Food)
  },[isRendering])
  return (
    <div>
        {Food}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus dolorum doloribus exercitationem eum est explicabo similique eveniet atque illum distinctio, suscipit quidem assumenda. Iste repellat perferendis tempora facere optio.
    </div>
  )
}

export default CartPage
