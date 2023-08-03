"use client";

import { Carousel } from "react-responsive-carousel";

function Testimonials() {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6100}
    >
      <div>
        <img src="/shirley.png" />
        <div className="myCarousel">
          <h3>Shirley Fultz</h3>
          <h4>Designer</h4>
          <p>
            Its freeing to be able to catch up on customized news and not be
            distracted by a social media element on the same site
          </p>
        </div>
      </div>

      <div>
        <img src="/daniel.png" />
        <div className="myCarousel">
          <h3>Daniel Keystone</h3>
          <h4>Designer</h4>
          <p>
            The simple and intuitive design makes it easy for me use. I highly
            recommend Fetch to my peers.
          </p>
        </div>
      </div>

      <div>
        <img src="/theo.png" />
        <div className="myCarousel">
          <h3>Theo Sorel</h3>
          <h4>Designer</h4>
          <p>
            I enjoy catching up with Fetch on my laptop, or on my phone when Im
            on the go!
          </p>
        </div>
      </div>
    </Carousel>
  );
}

export default Testimonials;
