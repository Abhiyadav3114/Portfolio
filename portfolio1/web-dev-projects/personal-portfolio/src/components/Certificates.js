
// import Cprogram from "../assets/img/Cprogram.png";
// import dsa from "../assets/img/dsa.png";
// import pathshala from "../assets/img/pathshala.png";

// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
// import colorSharp from "../assets/img/color-sharp.png"

// export const Certificates = () => {
//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1
//     }
//   };

//   return (
//     <section className="skill" id="skills">
//         <div className="container">
//             <div className="row">
//                 <div className="col-12">
//                     <div className="skill-bx wow zoomIn">
//                         <h2>Certificates</h2>
//                         <p>In my portfolio, I showcase my certifications in Data Structures and Algorithms from GeeksforGeeks, C Programming from Udemy, and a Hackathon Certificate from Programming Pathshala. These certifications validate my expertise in problem-solving, C programming, and collaborative development, demonstrating my commitment to continuous learning and growth.<br/> Many still loading 😊</p>
//                         <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
//                             <div className="item">
//                                 <img src={dsa} alt="Image" />
//                                 <h5>DSA</h5>
//                             </div>
//                             <div className="item">
//                                 <img src={Cprogram} alt="Image" />
//                                 <h5>C programming</h5>
//                             </div>
//                             <div className="item">
//                                 <img src={pathshala} alt="Image" />
//                                 <h5>Hackathon</h5>
//                             </div>
                           
//                         </Carousel>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <img className="background-image-left" src={colorSharp} alt="Image" />
//     </section>
//   )
// }



import Cprogram from "../assets/img/Cprogram.png";
import dsa from "../assets/img/dsa.png";
import pathshala from "../assets/img/pathshala.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Certificates = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const certificateData = [
    {
      image: dsa,
      title: "DSA",
      link: "https://drive.google.com/file/d/1fENVwYwFJVFidv3Sv3af14JGZtrFGn7S/view?usp=drive_link"
    },
    {
      image: Cprogram,
      title: "C Programming",
      link: "https://drive.google.com/file/d/1Y5hsp6dGwwGykOhRHRTEwfkCh2z8aYCr/view?usp=drive_link"
    },
    {
      image: pathshala,
      title: "Hackathon",
      link: "https://drive.google.com/file/d/1ex7Pfkr54vHh_cVKR48oR3Tyq_wfQE-Z/view?usp=drive_link"
    }
  ];

  const handleCertificateClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section className="certificates" id="certificates">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Certificates</h2>
              <p>
                In my portfolio, I showcase my certifications in Data Structures and Algorithms from GeeksforGeeks, C Programming from Udemy, and a Hackathon Certificate from Programming Pathshala. These certifications validate my expertise in problem-solving, C programming, and collaborative development, demonstrating my commitment to continuous learning and growth. Many still loading 😊
              </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {certificateData.map((certificate, index) => (
                  <div className="item" key={index}>
                    <div className="certificate-item" onClick={() => handleCertificateClick(certificate.link)}>
                      <img src={certificate.image} alt="Certificate" />
                      <h5>{certificate.title}</h5>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};

