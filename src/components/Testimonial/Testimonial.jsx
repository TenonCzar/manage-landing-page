import React from "react";
import Ali from "../../assets/avatar-ali.png";
import Anisha from "../../assets/avatar-anisha.png";
import Richard from "../../assets/avatar-richard.png";
import Gough from "../../assets/avatar-shanai.png";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // for large screens (desktop)
        settings: {
          slidesToShow: 3, // show 3 cards
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // for tablets
        settings: {
          slidesToShow: 2, // show 2 cards
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // for small phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="flex flex-col gap-16">
      <div className="title mx-auto w-fit">
        <h2 className="text text-4xl font-semibold">What they've said</h2>
      </div>

      <div className="w-3/4 m-auto">
        <div className="mt-20">
          <Slider {...settings}>
            {data.map((d, i) => (
              <div
                key={i}
                className="h-fit  rounded flex flex-col gap-2 relative pt-12"
              >
                <div className="flex justify-center items-center w-full">
                  <img src={d.image} alt="" className="h-20 w-20" />
                </div>
                <div className="name flex flex-col justify-center text-center gap-4 p-4">
                  <p className="font-semibold">{d.name}</p>
                  <p className="text-gray-400">{d.testimonial}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <button className="bg-orange text-white font-semibold py-4 w-fit mx-auto px-12 rounded-full shadow-lg shadow-orange-600/50">
        Get Started
      </button>
    </div>
  );
};
const data = [
  {
    name: "Ali Bravo",
    image: Ali,
    testimonial: `We have been able to cancel so many other subscriptions since
        using Manage. There is no more cross-channel confusion and
        everyone is much more focused.`,
  },
  {
    name: "Anisha Li",
    image: Anisha,
    testimonial: `Manage has supercharged our team's workflow. The ability to
        maintain visibility on a larger milestone at all times keeps
        everyone motivated.`,
  },
  {
    name: "Richard Watts",
    image: Richard,
    testimonial: `Manage allows us to provide structure and process. It keeps us
        organized and focused. I can't stop recommending them to
        everyone I talk to!`,
  },
  {
    name: "Shanai Gough",
    image: Gough,
    testimonial: `Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.`,
  },
];

export default Testimonial;
