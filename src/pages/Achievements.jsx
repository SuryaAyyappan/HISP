import React from "react";
import ScrollFx from "../components/ScrollAnimationComponent";

const achievements = [
  {
    title: "CONTACT US",
    description: [
      "Email: hinsuranceindia@gmail.com",
      "Phone: +919095908700"
    ],
    image: "logo11.png",
  }
  
  ,];
  {/*
  {
    title: "IMPAIRATHON 2024 Top 3",
    description:
      "Our team secured 3rd place out of 300 participants at IMPAIRATHON 2024, hosted by Karpagam College of Engineering. We were honored with a cash prize of ₹30,000 in recognition of our achievement.",
    image: "/achievements/impairathon-2024.jpg",
  },
  {
    title: "NAVISIGHTS Impresses at Startnet Salem",
    description:
      "NAVISIGHTS dazzled entrepreneurs at Startnet Salem, presenting a game-changing startup poised to revolutionize the industry.",
    image: "/achievements/starnet-salem.jpg",
  },
  {
    title: "NIT Trichy Top 5 Winners",
    description: "",
    image: "/achievements/top-5-nitt.jpg",
  },
  {
    title: "Recognition from Sri C. Valliappa",
    description:
      "Our team received recognition from Sri C. Valliappa, Chairman of Sona Group of Institutions, Salem.",
    image: "/achievements/sona-college.jpg",
  },
  {
    title: "SOLVEATHON OVERALL CHAMPION - Sri Sairam Engineering College",
    description: "",
    image: "/achievements/solveathon-overall.jpg",
  },
  {
    title: "NAVISIGHTS in BUILD Program Bootcamp",
    description:
      "NAVISIGHTS earned a coveted spot in the BUILD Program's orientation bootcamp at IIT Hyderabad, further solidifying their position as a trailblazer in the startup ecosystem.",
    image: "/achievements/build-iit-hyderabad.jpg",
  },
  {
    title: "NAVISIGHTS Soars at MEPC USC",
    description:
      "NAVISIGHTS soared as a top 15 team at the prestigious Maseeh Entrepreneurship Prize Competition (MEPC) at the University of Southern California, showcasing unparalleled innovation and entrepreneurial prowess.",
    image: "/achievements/mepc-usa.jpg",
  },
  {
    title: "NAVISIGHTS Shines at VIT CHENNAI",
    description:
      "Stealing the spotlight at VIT CHENNAI's INNOVENTURE, NAVISIGHTS emerged triumphant with pioneering ideas that redefine the future of technology.",
    image: "/achievements/innoventure-vit-chennai-2023.jpg",
  },
];
*/}

const Achievements = () => {
  return (
    <div className='relative text-black bg-black bg-[url("/white-back.jpg")] py-10'>
      <section className='md:w-2/3 px-4 mx-auto space-y-6'>
        <h1 className='text-transparent bg-gradient-to-tr from-purple-800 to-red bg-clip-text text-5xl font-afacad-flux font-bold'>Help</h1>
        <hr className='border-dashed border-black' />
        <div className='space-y-6'>
          {achievements.map((achievement, index) => (
            <ScrollFx duration={1.2} key={index}>
              <div
                className={`flex flex-col md:flex-row ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                } items-center gap-4`}
              >
                <img
                  className='h-64 mx-auto object-cover'
                  src={achievement.image}
                  alt={achievement.title}
                />
                <div className='md:w-1/2'>
                  <h2 className='text-2xl font-raleway font-bold'>
                    {achievement.title}
                  </h2>
                  <p className='font-cormorant-garamond text-xl'>{achievement.description.map((line, index) => (
    <span key={index}>
      {line} <br />
    </span>
  ))}
</p>
                </div>
              </div>
            </ScrollFx>
          ))}
        </div>
      </section>
      
    </div>
  );
};

export default Achievements;