import React from 'react'

let ru = "रु";
const Offer = () => {
    const food = [
        {
            id: 1,
            Name: "Chicken Kati Roll",
            image: "./images/Chicken-Kathi-Roll.jpg",
            OldPrice: `${ru}300`,
            newPrice: `${ru}270`
        },
        {
            id: 2,
            Name: "Chicken pizza",
            image: "./images/pizza.gif",
            OldPrice: `${ru}700`,
            newPrice: `${ru}570`
        },
        {
            id: 3,
            Name: "Jhol Mo:Mo",
            image: "./images/jholmomo.jpg",
            OldPrice: `${ru}250`,
            newPrice: `${ru}210`
        },
        {
            id: 4,
            Name: "Chicken Kati Roll",
            image: "./images/Chicken-Kathi-Roll.jpg",
            OldPrice: `${ru}300`,
            newPrice: `${ru}270`
        },
        {
            id: 5,
            Name: "Chicken pizza",
            image: "./images/pizza.gif",
            OldPrice: `${ru}700`,
            newPrice: `${ru}570`
        },
    ]
  return (
  <>
    <h4 style={{"textAlign":"left"}}>Today Offer</h4>
    <div className='offer'>
    <div className='offer-slider'>
        {food.map((OfferItem, Index)=>{
            return(
                <div key={Index} className="offer-images">
                <img src={OfferItem.image} />
                </div>
            )
        })}
    </div>
    </div>
  </>
  )
}

export default Offer