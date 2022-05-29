import React from "react";
import image from "../../images/banner-1.gif";

const About = () => {
  return (
    <div className="min-vh-100 container">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <img className="img-fluid" src={image} alt="" />
        </div>
        <div className="col-lg-6 col-md-12">
          <h1>
            <span className="text-success">Hikero</span> is mountain gears
            supplier company.
          </h1>
          <h4>We provide various kinds of hiking gears all over the world.</h4>
          <p>
            I’m Hiking Guy, aka Cris Hazzard, a professional hiking guide and
            author. I like to get outdoors, walk, and then write about it. It
            wasn’t always like that though. As a kid, I played outside like
            everyone else in my generation. I didn’t have an especially
            outdoorsy childhood experience. We rode BMX bikes around, got into
            trouble, and then tried to get out of it. As a teenager and “young
            adult” I was an elite bike racer. Like Lance Armstrong, without the
            doping and bullying.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
