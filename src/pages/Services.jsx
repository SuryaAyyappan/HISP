import React from "react";
import { useNavigate } from "react-router-dom";
import ScrollFx from "../components/ScrollAnimationComponent";

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className='relative text-white bg-black'>
      {/* About Startup */}
      <section className='md:w-2/3 mx-auto space-y-4 px-4 md:text-left md:px-0 py-16'>
        <ScrollFx duration={0.8}>
          <h1 className='font-afacad-flux text-5xl font-semibold text-transparent bg-gradient-to-tr from-blue-800 to-white bg-clip-text'>
            About E-HealthInsurance
          </h1>
        </ScrollFx>
        <ScrollFx duration={1.0}>
          <p className='font-cormorant-garamond text-xl'>
          We are Team Hinsurance, a forward-thinking collective dedicated to transforming the insurance
          landscape through innovative technology and customer-centric solutions. Our team harnesses 
          advanced data analytics, artificial intelligence, and streamlined software development to enhance 
          the insurance experience for users. We focus on creating personalized insurance products that 
          prioritize accessibility, affordability, and transparency. With a commitment to safety and 
          efficiency, we strive to redefine the future of insurance by making it more intuitive and
           responsive to the needs of our clients.
          </p>
        </ScrollFx>
        <ScrollFx duration={1.2}>
          <a
            href='/Patent-source.pdf'
            target='_blank'
            className='block w-fit px-4 py-2 text-lg rounded-md font-semibold font-afacad-flux border hover:bg-gradient-to-tr from-purple-800 to-maroon transition-all duration-300 ease-in'>
            Patent Published
          </a>
        </ScrollFx>
      </section>
      {/* Lions Club's Collaboration */}
      <section className='bg-[url("/classy-fabric.png")] bg-purple-700 text-white'>
        <div className='py-16 px-4 md:text-left md:px-0 bg-gradient-to-r from-blue-900/75 to-white/75'>
          <div className='md:w-2/3 mx-auto space-y-4'>
            <ScrollFx duration={0.8}>
              <h1 className='text-5xl font-semibold font-afacad-flux text-white'>
                Our Collaboration with Lions Foundation for Blind
              </h1>
            </ScrollFx>
            <ScrollFx duration={1.0}>
              <p className='text-white font-cormorant-garamond text-xl'>
                At the Lions Blind Foundation, there are 17 visually impaired
                individuals, each with their own families. Mobility remains a
                significant challenge for them. When we introduced our product,
                their positive response was overwhelming. In light of this, our
                team at NaviSights has committed to supporting them on a weekly
                and monthly basis, using whatever minimal funds we have
                available.
              </p>
            </ScrollFx>
            <div className='grid md:grid-cols-2 gap-4'>
              <ScrollFx duration={1.1}>
                <div className='h-32 md:h-56 rounded-md shadow-lg overflow-hidden'>
                  <img
                    className='object-cover object-center'
                    src='/achievements/lion-club-1.png'
                    alt='lion-club'
                  />
                </div>
              </ScrollFx>
              <ScrollFx duration={1.2}>
                <div className='h-32 md:h-56 rounded-md shadow-lg overflow-hidden'>
                  <img
                    className='object-cover object-center'
                    src='/achievements/lion-club-2.png'
                    alt='lion-club'
                  />
                </div>
              </ScrollFx>
              <ScrollFx duration={1.3}>
                <div className='h-32 md:h-56 rounded-md shadow-lg overflow-hidden'>
                  <img
                    className='object-cover object-center'
                    src='/achievements/lion-club-3.png'
                    alt='lion-club'
                  />
                </div>
              </ScrollFx>
              <ScrollFx duration={1.4}>
                <div className='h-32 md:h-56 rounded-md shadow-lg overflow-hidden'>
                  <img
                    className='object-cover object-center'
                    src='/achievements/lion-club-4.png'
                    alt='lion-club'
                  />
                </div>
              </ScrollFx>
            </div>
            <ScrollFx duration={1.1}>
              {/*<div className='h-32 md:h-96 col-span-2 rounded-md shadow-lg overflow-hidden'>
                <img
                  className='object-cover w-full object-center'
                  src='/achievements/lion-club-0.png'
                  alt='lion-club'
                />
              </div>*/}
            </ScrollFx>
            <ScrollFx duration={0.7}>
              <h1 className='text-center font-cormorant-garamond text-4xl'>
                “Together, let's help them overcome these challenges and grow.”
              </h1>
            </ScrollFx>
          </div>
        </div>
      </section>
      {/* Vision and Aim */}
      <section className='bg-[url("/classy-fabric.png")] bg-purple-700 text-white'>
        <div className='py-16 px-4 md:text-left md:px-0 bg-gradient-to-r from-blue-900/75 to-white/75'>
          <div className='md:w-2/3 mx-auto space-y-4'>
            <ScrollFx duration={0.8}>
              <h1 className='text-5xl font-semibold font-afacad-flux text-white'>
                Our Vision And Aim
              </h1>
            </ScrollFx>
            <ScrollFx duration={1.0}>
            <p className='font-cormorant-garamond text-xl'>
            To create a future where quality healthcare is accessible to all, ensuring protection, peace of mind,<br/>
            and financial security for every individual.
            </p>
            <p className='font-cormorant-garamond text-xl'>
            At Hinsurance , we are dedicated to transforming healthcare accessibility. Our mission is to simplify health insurance, harness innovation, and foster inclusivity—ensuring every individual receives the care they deserve without financial burdens. "Your gateway to a healthier, worry-free future."
            </p>
            </ScrollFx>
          </div>
        </div>
      </section>
      {/* Our Product */}

      <section className='py-16 px-4 md:text-left md:px-0 bg-[url("/black-grid-texture.png")]'>
        <div className='md:w-2/3 mx-auto space-y-4'>
          <ScrollFx>
            <h1 className='font-afacad-flux text-5xl font-semibold text-transparent bg-gradient-to-tr from-purple-800 to-red bg-clip-text'>
              Our Product
            </h1>
          </ScrollFx>
          <ScrollFx duration={1.0}>
            <p className='font-cormorant-garamond text-xl'>
            Ehisp is an AI-powered health insurance portal designed for seamless policy management with minimal paperwork.
            It leverages smart automation for quick claims processing, fraud detection, and personalized policy recommendations. 
            AI-driven analytics enhance decision-making, ensuring transparency and efficiency. The platform offers digital 
            documentation, eliminating manual processes for a hassle-free experience. With a focus on security and convenience, Ehisp revolutionizes health insurance management. 🚀
            </p>
          </ScrollFx>
          <ScrollFx duration={1.2}>
            <button
              onClick={() => {
                navigate("/product");
              }}
              className='px-4 py-2 text-lg rounded-md font-semibold font-afacad-flux border hover:bg-gradient-to-tr from-purple-800 to-maroon transition-all duration-300 ease-in'>
              Learn More
            </button>
          </ScrollFx>
        </div>
      </section>
    </div>
  );
};

export default Services;
