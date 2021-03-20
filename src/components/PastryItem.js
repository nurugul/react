import React from  'react'

function PastryItem(props) {
    let {name, cost, ingredients} = props.x
    return (
      <div className="pastry-item">
        <h3>{ name }</h3>
        <span className="price">${cost}</span>
        <p>{ingredients.join(', ')}</p>
      </div>
    )
}
 
export default PastryItem