import React from 'react';
import Mountain from '../Images/bus.png'
import { Link } from 'react-router-dom';


function Home(){
    return(
        <section className='home'>
           <img src={Mountain} alt='bus' width="548.15" height="233.21" />
           <h2 className='home_h2'>Don't squeeze in a sedan when you could relax in a van</h2>
           <p className='Home_p1'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are 
              recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch cost extra)
           </p>
           <p className='home_p2'>
            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
           </p>

           <div className='destination'>
            <p className='destination_p'>Your destination is waiting.</p>
            <p className='destination_p_two'>Your van is ready.</p>
            <Link className='btn' >Explore our vans</Link>
           </div>

       </section>
    );
};

export default Home;

 

