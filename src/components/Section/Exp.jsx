import React from "react";
import "../../styles/Exp.css";
import { BsPatchCheck } from "react-icons/bs";

const Exp = () => {
  return (
    <section id="experience">
      <h5>Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheck className="experience_details-icons" />
              <div>
                <h4>HTML5</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheck className="experience_details-icons" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Tailwind, Bootstrap</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheck className="experience_details-icons" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

   

            <article className="experience_details">
              <BsPatchCheck className="experience_details-icons" />
              <div>
                <h4>State Management</h4>
                <small className="text-light">Redux, Redux Toolkit</small>
              </div>
            </article>


 <article className="experience_details">
              <BsPatchCheck className="experience_details-icons" />
              <div>
                <h4>Version Control System</h4>
                <small className="text-light">Git,GitHub</small>
              </div>
            </article>



            <article className="experience_details">
              <BsPatchCheck className="experience_details-icons" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>


 <article className="experience_details">
              <BsPatchCheck className="experience_details-icons" />
              <div>
                <h4>Next Js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>





 



 <article className="experience_details">
              <BsPatchCheck className="experience_details-icons" />
              <div>
                <h4>Fetch Data</h4>
                <small className="text-light">SWR, Axios</small>
              </div>
            </article>





            <article className="experience_details">
              <BsPatchCheck className="experience_details-icons" />
              <div>
                <h4> API</h4>
                <small className="text-light">API integration,  Rest full API</small>
              </div>
            </article>

          </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheck className="experience_details-icons" />
              <div>
                <h4>Node Js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheck className="experience_details-icons" />
              <div>
                <h4>Database</h4>
                <small className="text-light">MySql, SQL</small>
              </div>
            </article>
            


            <article className="experience_details">
              <BsPatchCheck className="experience_details-icons" />
              <div>
                <h4>ExpressJs</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            

            
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exp;
