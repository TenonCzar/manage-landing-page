import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Ali from "../../assets/avatar-ali.png";
import Anisha from "../../assets/avatar-anisha.png";
import Richard from "../../assets/avatar-richard.png";
import Gough from "../../assets/avatar-shanai.png";

export default function MySlider() {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      breakpoints={{
        480: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
        {data.map((d, i) => (
      <SwiperSlide key={i}>
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
      </SwiperSlide>
        ))}
    </Swiper>
  );
}

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
            