import skillPercent1 from "../assets/img/skillPercent1.png";
import skillPercent2 from "../assets/img/skillPercent2.png";
import skillPercent3 from "../assets/img/skillPercent3.png";
import skillPercent4 from "../assets/img/skillPercent4.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I possess expertise in HTML, CSS, JavaScript, Node.js, Unity (Game Development), and Java. <br/>With strong web development skills and server-side proficiency,  I create dynamic applications.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={skillPercent1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={skillPercent4} alt="Image" />
                                <h5>React & node</h5>
                            </div>
                            <div className="item">
                                <img src={skillPercent2} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={skillPercent3} alt="Image" />
                                <h5>HTML & CSS</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
