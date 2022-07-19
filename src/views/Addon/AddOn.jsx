import React from 'react'
import './addon.css'



function AddOn() {
  const [sum, updateSum]=React.useState(0);

const ChangeButtontrue=(i,val)=>{
 console.log(i);

//  document.getElementsByTagName('button')[i].innerHTML="✅" ;
 document.getElementsByTagName('button')[i+1].classList.remove("btn-hidden") ;
 document.getElementsByTagName('button')[i].classList.add("btn-hidden");
// document.getElementsByClassName('toggle-witch-text-left')[i].classList.add("green");
//  document.getElementsByClassName('toggle-witch-text-left')[1].classList.add("green");
 updateSum(sum + val);
   
}
const ChangeButtonfalse=(i ,val)=>{
  document.getElementsByTagName('button')[i].innerHTML="❌" ;
  document.getElementsByTagName('button')[i-1].innerHTML="✔️" ;
  document.getElementsByTagName('button')[i-1].classList.remove("btn-hidden") ;
  document.getElementsByTagName('button')[i].classList.add("btn-hidden");
  document.getElementsByClassName('toggle-witch-text-left')[0].classList.remove("green");
 console.log(sum +" " + val);
  updateSum(sum - val);
  console.log(sum);
}

  return (
    <div className='addon-head'>
    <div className='addon'> 
    
    <h1>Website add-ons</h1>
    <div className="addon-table">
    <table style={{width:100 + '%' }} height="250" >
    <tbody>
      <tr>
       <td>
         <div className="addon-head1">
         <span className="toggle-witch-text-left">Forms/Lead generation</span>
         </div>
         </td>
         <td>
    
           <label className="addon-switch">
           

           <button  className='on' onClick={() =>ChangeButtontrue(1,250)}>✔️</button>
           <button className='off btn-hidden'  onClick={() =>ChangeButtonfalse(2 ,250) }>❌</button>
           



           </label>
    
       </td>
    
    
       <td>
    
         <span className="toggle-witch-text-left">Member login/Profiles</span>
       </td>
       <td>
           <label className="addon-switch">
           {/* <input type="checkbox" onClick={ChangeButton}/>
           <span className="slider round"></span> */}
           <button className='on' onClick={() =>ChangeButtontrue(3,2000)}>✔️</button>
           <button  className='off btn-hidden'  onClick={() =>ChangeButtonfalse(4,2000)}  >❌</button>
           
           </label>
    
       </td>
    
     </tr>
    
     <tr>
      <td>
        <div className="addon-head1">
        <span className="toggle-witch-text-left">Image/video galleries</span>
        </div>
        </td>
        <td>
    
          <label className="addon-switch">
          {/* <input type="checkbox" onClick={ChangeButton}/>
          <span className="slider round"></span> */}

          <button className='on' onClick={() =>ChangeButtontrue(5,250)}>✔️</button>
           <button className='off btn-hidden'  onClick={() =>ChangeButtonfalse(6,250)}>❌</button>
          
          </label>
    
      </td>
    
    
      <td>
    
        <span className="toggle-witch-text-left">Analytics & tracking</span>
      </td>
      <td>
          <label className="addon-switch">

          {/* <input type="checkbox" />
          <span className="slider round"></span> */}
          
          <button className='on' onClick={() =>ChangeButtontrue(7,100)}>✔️</button>
           <button className='off btn-hidden'  onClick={() =>ChangeButtonfalse(8 ,100)}>❌</button>

          </label>
    
      </td>
    
     </tr>
    
     <tr>
      <td>
        <div className="addon-head1">
        <span className="toggle-witch-text-left">Event Scheduling/Reservation</span>
        </div>
        </td>
        <td>
    
          <label className="addon-switch">
          {/* <input type="checkbox" />
          <span className="slider round"></span> */}


          <button className='on' onClick={() =>ChangeButtontrue(9,250)}>✔️</button>
           <button className='off btn-hidden'  onClick={() =>ChangeButtonfalse(10 ,250)}>❌</button>
          </label>
    
      </td>
    
    
      <td>
    
        <span className="toggle-witch-text-left">Live chat</span>
      </td>
      <td>
          <label className="addon-switch">
          {/* <input type="checkbox" />
          <span className="slider round"></span> */}

          <button className='on' onClick={() =>ChangeButtontrue(11,100)}>✔️</button>
           <button className='off btn-hidden' onClick={() =>ChangeButtonfalse(12 ,100)}>❌</button>
          </label>
    
    </td>
    
     </tr>
    
     <tr>
      <td>
        <div className="addon-head1">
        <span className="toggle-witch-text-left">Social Media(share/like/reviews)</span>
        </div>
        </td>
        <td>
    
          <label className="switch">
          {/* <input type="checkbox" />
          <span className="slider round"></span> */}
          <button className='on' onClick={() =>ChangeButtontrue(13,250)}>✔️</button>
           <button className='off btn-hidden' onClick={() =>ChangeButtonfalse(14 ,250)}>❌</button>
          </label>
    
      </td>
    
    
      <td>
    
        <span className="toggle-witch-text-left">Blog</span>
      </td>
      <td>
          <label className="addon-switch">
          {/* <input type="checkbox" />
          <span className="slider round"></span> */}
          <button className='on' onClick={() =>ChangeButtontrue(15,500)}>✔️</button>
           <button className='off btn-hidden' onClick={() =>ChangeButtonfalse(16 ,500)}>❌</button>
          </label>
    
      </td>
    
     </tr>
    
     <tr>
      <td>
        <div className="addon-head1">
        <span className="toggle-witch-text-left">Onsite search</span>
        </div>
        </td>
        <td>
    
          <label className="addon-switch">
          {/* <input type="checkbox" />
          <span className="slider round"></span> */}
          <button className='on' onClick={() =>ChangeButtontrue(17,2000)}>✔️</button>
           <button className='off btn-hidden'  onClick={() =>ChangeButtonfalse(18,2000)}>❌</button>
          </label>
    
      </td>
     </tr>
    
    </tbody>
    
    </table></div>
    <div className="line4"></div>
    <div className="footerr">
      <div className="addon-costt-heading" >Add-ons cost: </div>
      <div  className='addon-pricee'>${((sum))}</div>
    
      
    
    </div>
    
    
            </div>
            </div>
  )
}

export default AddOn