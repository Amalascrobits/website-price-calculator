import React from 'react'

const Cardelement = () => {
    const data = [
      { id: 1, type: "<50" ,about:" A development company small business is a new type of business that is designed to provide capital to businesses with less than $2 million in annual revenue.",price:"10"},

      { id: 2, type: "500" ,about:"The SBA defines a small business as one with 50 or fewer employees who have average gross receipts of $5 million or less during the previous three years. ",price:"100" },

      { id: 3, type: "MNC" ,about:" A development company is a business that provides services in the real estate sector. It’s a legal entity with its own management and employees.",price:"1000" },
    ];

  return (
    <>
    {
data.map((user)=>(
  
        <div className='card-element-body-1' key={user.id}>
        <div className='card-element-name'>{user.type}</div>
        <div className="heading-line-design"></div>
        <div className='card-element-about'> {user.about} </div>
        <div className="card-element-line-design"></div>
        <div className="card-element-price-contaniner">
        <div className='card-element-price'> ${user.price}/page </div></div>
      </div>
      ))}

    </>
  )
}

export default Cardelement