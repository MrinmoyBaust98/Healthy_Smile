import React from "react";
import testimonialIcon from "../../../assets/icons/quote.svg";
import person1 from "../../../assets/images/people1.png";
import person2 from "../../../assets/images/people2.png";
import person3 from "../../../assets/images/people3.png";
import ReviewCard from "./ReviewCard";

const Testimonial = () => {
  const testimonialData = [
    {
      id: 1,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.",
      name: "Winson Herry",
      img: person1,
      city: "Dhaka",
    },
    {
      id: 2,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.",
      name: "Kety prey",
      img: person2,
      city: "Khulna",
    },
    {
      id: 3,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.",
      name: "Megan Schutt",
      img: person3,
      city: "Rangpur",
    },
  ];
  return (
    <div className="my-28">
      <section className=" mt-44 flex justify-between">
        <div>
          <h2 className="text-2xl text-secondary font-bold ">Testimonial</h2>
          <p className="text-3xl my-4"> What Our Patients Says</p>
        </div>
        <figure>
          <img src={testimonialIcon} className="w-[100px]" alt="qute-icon" />
        </figure>
      </section>
      <section className=" mt-10 grid gap-6 grid-cols-1 lg:grid-cols-3">
        {testimonialData.map((rev) => (
          <ReviewCard rev={rev} key={rev.id}></ReviewCard>
        ))}
      </section>
    </div>
  );
};

export default Testimonial;
