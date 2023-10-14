import React, { useEffect, useState } from 'react';
import "./ClientProject.css";
import pic1 from "../assets/images/pic1.png"
import react from "../assets/images/react.png"
import scss from "../assets/images/Scss.png"
import redux from "../assets/images/redux.png"
import npm from "../assets/images/npm.png"
import { projects } from '../data';

function DesktopView() {
  return (
    <>
      <div className="ClientProject">
        <div className="heading">
          <div className="headText">Client Project</div>
          <img
            className="photo"
            src="https://abhishekjha.me/down-arrow.040970d7.svg"
            alt=""
          />
        </div>

        <div className="projectCard">
          <div className="left">
            <div className="projectHead">
              <div className="projectName">
                <h4>Featured project</h4>
                <h2>Felix UI</h2>
              </div>
              <div className="projectNo">01.</div>
            </div>
            <div className="Box">
              <h4>
                Felix UI is an open-source react component library that extends
                as a CSS styling framework, which helps developers to use the
                best styles and components, by using pre-defined class names.
                Felix UI helps you to quickly build your dream project, by
                focusing much on functionality, because we take care of your
                designs.
              </h4>
            </div>
            <div className="projectDetail">
              <div className="feature_1_2">
                <h1 className="H1">Easy installation through NPM <div className="border"></div></h1>
                <h1 className="H1">Modular components <div className="border"></div></h1>
              </div>
              <div className="feature_3_4">
                <h1 className="H1">Highly customizable with CSS <div className="border"></div></h1>
                <h1 className="H1">Beautifully designed components <div className="border"></div></h1>
              </div>
            </div>
              <div className="technology">
                <img src={react} alt="" />
                <img src={scss} alt="" />
                <img src={redux} alt="" />
                <img src={npm} alt="" />
              </div>
          </div>

          <div className="right">
            <div className="imgDiv">
              <img className="IMG" src={pic1} alt="" />
              <div className="text">
              <a href="">View live project</a>
              </div>
            </div>
          </div>

        </div>

        {/* second card */}
        <div className="projectCard2">
        <div className="right2">
            <div className="imgDiv2">
              <img className="IMG2" src={pic1} alt="" />
              <div className="text2">
              <a href="">View live project</a>
              </div>
            </div>
          </div>

          <div className="left2">
            <div className="projectHead2">
              <div className="projectNo2">01.</div>

              <div className="projectName2">
                <h4 className="h4">Featured project</h4>
                <h2 className="h2">Felix UI</h2>
              </div>
            </div>
            <div className="Box2">
              <h4 className="h42">
                Felix UI is an open-source react component library that extends
                as a CSS styling framework, which helps developers to use the
                best styles and components, by using pre-defined class names.
                Felix UI helps you to quickly build your dream project, by
                focusing much on functionality, because we take care of your
                designs.
              </h4>
            </div>
            <div className="projectDetail2">
              <div className="feature_1_22">
                <h1 className="h1">Easy installation through NPM <div className="border2"></div></h1>
                <h1 className="h1">Modular components <div className="border2"></div></h1>
              </div>
              <div className="feature_3_42">
                <h1 className="h1">Highly customizable with CSS <div className="border2"></div></h1>
                <h1 className="h1">Beautifully designed components <div className="border2"></div></h1>
              </div>
            </div>
              <div className="technology2">
                <img src={react} alt="" />
                <img src={scss} alt="" />
                <img src={redux} alt="" />
                <img src={npm} alt="" />
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

function MobileView() {
  return (
    <>
      <div className="ClientProject">
        <div className="heading">
          <div className="headText">Client Project</div>
          <img
            className="photo"
            src="https://abhishekjha.me/down-arrow.040970d7.svg"
            alt=""
          />
        </div>

    {projects.map((item, index) =>
        <div className="projectCard" key={index}>
          <div className="left">
            <div className="projectHead">
              <div className="projectName">
                <h4>{item.type}</h4>
                <h2>{item.name}</h2>
              </div>
              <div className="projectNo">{item.no}</div>
            </div>
            <div className="Box">
              <h4>{item.description}</h4>
            </div>
            <div className="projectDetail">
              <div className="feature_1_2">
                <h1 className="H1">{item.feature1}<div className="border"></div></h1>
                <h1 className="H1">{item.feature2}<div className="border"></div></h1>
              </div>
              <div className="feature_3_4">
                <h1 className="H1">{item.feature3}<div className="border"></div></h1>
                <h1 className="H1">{item.feature4}<div className="border"></div></h1>
              </div>
            </div>
              <div className="technology">
                <img src={item.tech1} alt="" />
                <img src={item.tech2} alt="" />
                <img src={item.tech3} alt="" />
                <img src={item.tech4} alt="" />
              </div>
          </div>

          <div className="right">
            <div className="imgDiv">
              <img className="IMG" src={item.image} alt="" />
              <div className="text">
              <a href={item.link}>View live project</a>
              </div>
            </div>
          </div>
        </div>
        )}
        </div>
        </>
  );
}

function ClientProject() {
  const [isDesktopView, setIsDesktopView] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktopView(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isDesktopView ? <DesktopView /> : <MobileView />;
}

export default ClientProject;



// import React from "react";
// import "./ClientProject.css";
// import pic1 from "../assets/images/pic1.png"
// import react from "../assets/images/react.png"
// import scss from "../assets/images/Scss.png"
// import redux from "../assets/images/redux.png"
// import npm from "../assets/images/npm.png"

// const ClientProject = () => {
//   return (
//     <>  
//       <div className="ClientProject">
//         <div className="heading">
//           <div className="headText">Client Project</div>
//           <img
//             className="photo"
//             src="https://abhishekjha.me/down-arrow.040970d7.svg"
//             alt=""
//           />
//         </div>

//         <div className="projectCard">
//           <div className="left">
//             <div className="projectHead">
//               <div className="projectName">
//                 <h4>Featured project</h4>
//                 <h2>Felix UI</h2>
//               </div>
//               <div className="projectNo">01.</div>
//             </div>
//             <div className="Box">
//               <h4>
//                 Felix UI is an open-source react component library that extends
//                 as a CSS styling framework, which helps developers to use the
//                 best styles and components, by using pre-defined class names.
//                 Felix UI helps you to quickly build your dream project, by
//                 focusing much on functionality, because we take care of your
//                 designs.
//               </h4>
//             </div>
//             <div className="projectDetail">
//               <div className="feature_1_2">
//                 <h1 className="H1">Easy installation through NPM <div className="border"></div></h1>
//                 <h1 className="H1">Modular components <div className="border"></div></h1>
//               </div>
//               <div className="feature_3_4">
//                 <h1 className="H1">Highly customizable with CSS <div className="border"></div></h1>
//                 <h1 className="H1">Beautifully designed components <div className="border"></div></h1>
//               </div>
//             </div>
//               <div className="technology">
//                 <img src={react} alt="" />
//                 <img src={scss} alt="" />
//                 <img src={redux} alt="" />
//                 <img src={npm} alt="" />
//               </div>
//           </div>

//           <div className="right">
//             <div className="imgDiv">
//               <img className="IMG" src={pic1} alt="" />
//               <div className="text">
//               <a href="">View live project</a>
//               </div>
//             </div>
//           </div>

//         </div>

//         {/* second card */}
//         <div className="projectCard2">
//         <div className="right2">
//             <div className="imgDiv2">
//               <img className="IMG2" src={pic1} alt="" />
//               <div className="text2">
//               <a href="">View live project</a>
//               </div>
//             </div>
//           </div>

//           <div className="left2">
//             <div className="projectHead2">
//               <div className="projectNo2">01.</div>

//               <div className="projectName2">
//                 <h4 className="h4">Featured project</h4>
//                 <h2 className="h2">Felix UI</h2>
//               </div>
//             </div>
//             <div className="Box2">
//               <h4 className="h42">
//                 Felix UI is an open-source react component library that extends
//                 as a CSS styling framework, which helps developers to use the
//                 best styles and components, by using pre-defined class names.
//                 Felix UI helps you to quickly build your dream project, by
//                 focusing much on functionality, because we take care of your
//                 designs.
//               </h4>
//             </div>
//             <div className="projectDetail2">
//               <div className="feature_1_22">
//                 <h1 className="h1">Easy installation through NPM <div className="border2"></div></h1>
//                 <h1 className="h1">Modular components <div className="border2"></div></h1>
//               </div>
//               <div className="feature_3_42">
//                 <h1 className="h1">Highly customizable with CSS <div className="border2"></div></h1>
//                 <h1 className="h1">Beautifully designed components <div className="border2"></div></h1>
//               </div>
//             </div>
//               <div className="technology2">
//                 <img src={react} alt="" />
//                 <img src={scss} alt="" />
//                 <img src={redux} alt="" />
//                 <img src={npm} alt="" />
//               </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ClientProject;

