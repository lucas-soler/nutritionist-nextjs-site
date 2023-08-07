"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Testimonial {
  id: number;
  photo: string;
  alternative_image_text: string;
  name: string;
  description: string;
}
interface TestimonialsProps {
  testimonials: Testimonial[];
}

function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6100}
    >
      {testimonials.map((testimonial) => {
        return (
          <div key={`testimonial-${testimonial.id}`}>
            <Image
              src={`/${testimonial.photo}`}
              alt={`${testimonial.alternative_image_text}`}
              width={400}
              height={400}
              quality={100}
            />
            <div className="my-carousel">
              <h3>{testimonial.name}</h3>
              <p>{testimonial.description}</p>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}

export default Testimonials;
