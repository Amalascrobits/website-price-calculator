import React from 'react'
import '../card.css'
// import Carduser from '../Carduser';
// import {Provider} from '../Context'
// import Cardsec from '../Cardsec'
import Carduser from '../Carduser'


const Cardtemp = (props) => {

    const [card1, setCard1] = React.useState(0);
    const [card2, setCard2] = React.useState(0);
    const [card3, setCard3] = React.useState(0);
    const [card4, setCard4] = React.useState(0);
    // var a=null;
    const cardValue = (p) => {
        if (props.id === '1') {
            console.log("first")
            setCard1(100);
            setCard2(0);
            setCard3(0);
            setCard4(100)
        }
       else if (props.id === '2') {
            console.log("second")
            setCard1(0);
            setCard3(0);
            setCard2(500);
            setCard4(500)
        }
        if (props.id === '3') {
            console.log("third")
            setCard1(0);
            setCard3(1000);
            setCard2(0);
            setCard4(1000)
        }

    }


    return (
        <>
            <div className='card-element-body-1' onClick={cardValue}>
                <div className='card-element-name'>{props.type}</div>
                <div className="heading-line-design"></div>
                <div className='card-element-about'> {props.about} </div>
                <div className="card-element-line-design"></div>
                <div className="card-element-price-contaniner">

                    <div className='card-element-price'> ${props.price}/page </div></div>
            </div>
        
      {/* <Carduser price={Number(card1)+Number(card2)+Number(card3)} /> */}

 
{/* {global.card=`${Number(card1)+Number(card2)+Number(card3)}`} */}

        </>
    )
}

export default Cardtemp

