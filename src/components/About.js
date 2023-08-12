import React from "react";
import { Link } from "react-router-dom";






function  About(){
    return(
      <section className="about_section">
        <div className="about" >
          <h2 className="about_h2">You got the travel plans, we got the travel vans.</h2>
          <p className="about_p">Add advanture to your life by joining the #vanlife movement.</p>
          <p className="about_second_p">Rent the perfect van make your perfect road trip.</p>
          <Link className="btn_about"  to="/">Fine your van</Link>
        </div>
        </section>
    );
};

export default About;