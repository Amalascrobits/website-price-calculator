import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './pages/Homepage';
import Form from './components/Form/Form';
import Testimonials from './components/testimonial/Testimonials';
import Footer from './components/footer/Footer';
import App from './App'
import Chooseus from './components/whychooseus/Chooseus';




// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<>

<Homepage />
<App /> 
<Form />
<Testimonials />
<Chooseus />
 <Footer/>





</>

);

