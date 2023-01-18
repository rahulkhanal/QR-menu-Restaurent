import React from 'react'
import loader from '../components/detail_of_loader'

const StartPage = () => {
  return (
    <div style={{"width":"100%"}}>
        {loader.map((item, index)=>{
            return(
            <div key={index} className="loader">
                <img src={item.loadImage} alt={item.Name}/>
                <p>{item.Name}</p>
            </div>
            )
        })}
    </div>
  )
}

export default StartPage