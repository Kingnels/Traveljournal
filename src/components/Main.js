import React from 'react'
import Cards from "./Cards"
import Data from './Data'

function Main() {
    const cards = Data.map(card => {
        return <Cards
                key = {card.id}
                item = {card}
                
                // {...card}
                // imageUrl = {card.imageUrl}
                // title = {card.title}
        />
    })
  return (
    <div className="main-content">
        {cards}
    </div>
  )
}

export default Main