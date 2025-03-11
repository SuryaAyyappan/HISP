import React from "react";
import ScrollFx from "../components/ScrollAnimationComponent";
import * as Accordion from "@radix-ui/react-accordion";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Smart Policy Recommendations",
    content: [
      "Finding the right health insurance can be confusing. Our AI-driven system analyzes your age, medical history, budget, and needs to suggest the best plans. This ensures you get adequate coverage without unnecessary add-ons.","It compares multiple policies, highlights key benefits, and provides insights on premiums, claim benefits, and exclusions. With our recommendations, you can confidently choose a plan that offers maximum protection within your budget.",
    ],
  },
  {
    title: "Easy Online Enrollment",
    content: [
      "Say goodbye to lengthy paperwork. Our portal offers a seamless, paperless process, allowing you to buy health insurance entirely online. Just enter your details, upload documents, and get insured within minutes.",'With instant verification, digital KYC, and e-signatures, we make policy issuance quick and hassle-free. Whether for individuals or families, our streamlined approach ensures a stress-free experience.',
    ],
  },
  {
    title: "Real-Time Claim Tracking",
    content: [
      "Insurance claims can be frustrating due to delays and uncertainty. Our real-time tracking system updates you on every step of the claim process, reducing the need for follow-ups.","Automated notifications and alerts inform you of claim progress, required documents, and settlement updates. Whether cashless or reimbursement claims, we ensure a smooth and transparent experience.",
    ],
  },
  {
    title: "Extensive Network of Hospitals",
    content: [
      "Our plans connect you to a vast hospital network across India, offering cashless treatment. The insurer directly settles bills, eliminating the hassle of upfront payments.We cover multi-specialty hospitals, diagnostic centers, and emergency care units. Our platform also helps you find nearby network hospitals for quick medical assistance.",
    ],
  },
  {
    title: "24/7 Customer Support",
    content: [
      "Health emergencies can happen anytime. Our 24/7 support team is always available via live chat, call, or email to assist with policy selection, claims, and queries.","We also offer multilingual support, ensuring accessibility across different regions. Our priority is to make health insurance simple and hassle-free for you.",
    ],
  },
  {
    title: "Secure Data & Privacy Protection",
    content: [
      "Your personal and medical data are highly sensitive. We use advanced encryption and multi-layer authentication to ensure your details remain secure and confidential.","With compliance to data protection regulations, secure transactions, and strict privacy policies, you can trust our platform for safe and reliable insurance services.",
    ],
  },
];

const specifications = [
  {
    icon: "/2.png",
    title: "Intimation",
    content: [
      "When you need hospitalization, visit a network hospital and inform the insurance desk about your health insurance policy. Fill up the Pre-Authorization (Pre-Auth) Form provided by the hospital, including details about your medical condition and treatment plan. The hospital then sends this request to the insurance provider for approval.",
    ],
  },
  {
    icon: "/3.png",
    title: "Approval/Rejection",
    content: [
      "Once the hospital submits the Pre-Auth Form, the insurance company reviews the details and assesses whether the claim meets the policy terms. The insurer then communicates the decision—Approval, Query, or Rejection—to the hospital and policyholder. If more information is needed, the insurer may request additional documents before final approval.",
    ],
  },
  {
    icon: "/4.png",
    title: "Hospitalisation",
    content: [
      "If the pre-authorization is approved, the insured person can proceed with hospitalization without paying upfront for covered expenses. The hospital provides necessary medical care, and the insurance provider ensures that treatment costs remain within the approved limits as per the policy terms.",
    ],
  },
  {
    icon: "/5.png",
    title: "Claim settlement",
    content: [
      "Upon discharge, the hospital submits the final bill to the insurer for settlement. The insurance provider directly settles the approved claim amount with the hospital, ensuring a hassle-free experience for the patient. Any non-covered expenses or deductions must be paid by the insured to the hospital before leaving.",
    ],
  },
];

const uses = [
  {
    image: "/disabled-people.webp",
    title: "Seamless Claims with AI Assistance",
    content: [
      "By leveraging AI-driven voice-to-text and NLP capabilities, we simplify the claim process, making it accessible for all users, including those with disabilities.",
      "Automated workflows eliminate manual paperwork, ensuring a smooth and dignified experience for policyholders.",
    ],
  },
  {
    image: "/ambulance.webp",
    title: "Smart & Efficient Policy Management",
    content: [
      "Our AI-powered platform streamlines claim approvals, reducing wait times and enhancing efficiency for hospitals, insurers, and policyholders.",
      "With digital documentation and automation, we minimize human intervention while maintaining transparency and compliance.",
    ],
  },
  {
    image: "/self-driving-car.webp",
    title: "Effortless Insurance Experience",
    content: [
      "NLP-driven chatbots and voice assistants guide users through claims and policy queries, ensuring a hassle-free experience.",
      "AI-enabled smart suggestions and real-time processing provide users with instant updates, improving accessibility and convenience.",
    ],
  },
];

const images = [
  "Ayushman.jpeg",
  "Pradhan1.png",
  "view-3.png",
  "view-4.png",
  "view-5.png",
  "view-6.png",
  "view-7.png",
  "view-8.png",
];

const faqs = [
  {
    question: "What is health insurance, and why do I need it?",
    answer:
      "Health insurance provides financial coverage for medical expenses, ensuring you get quality treatment without worrying about high costs. It covers hospitalization, treatments, and preventive care.",
  },
  {
    question: "How do I choose the right health insurance plan?",
    answer:
      "Consider factors like coverage amount, premium cost, pre-existing disease coverage, hospital network, claim process, and additional benefits like OPD and maternity cover.",
  },
  {
    question:
      "Can I include my family in my health insurance plan?",
    answer:
      " Yes, you can opt for a family floater plan, which covers you, your spouse, children, and dependent parents under a single policy with shared benefits.",
  },
  {
    question:
      "What is covered under a standard health insurance policy?",
    answer:
      "Hospitalization expenses room rent, doctor fees, tests, etc.",
  },
  {
    question: " Are pre-existing diseases covered?",
    answer:
      " Yes, the pre-existing diseases can be covered",
  },
  {
    question: " Can I port my health insurance policy to another insurer?",
    answer:
      "Yes, you can port your policy if you are not satisfied with your current insurer. The benefits like waiting periods and claim history are transferred.",
  },
  {
    question: "What is the claim process?",
    answer:
      'For cashless treatment: Get treatment at a network hospital, submit the insurance card, and the insurer settles the bill.For reimbursement claims: Pay the bills, submit necessary documents, and the insurer reimburses the expenses.',
  },
  {
    question: "How can I contact customer support for further queries?",
    answer: "You can reach us via: Phone: 9095908700 Email: hinsuranceindia@gmail.com ",
},];
{/*
  {
    question: "Can users sell goods or use the vehicle for other purposes?",
    answer:
      "Yes, the vehicle can be used for generating independent income, such as selling goods.",
  },
  {
    question: "Can it detect both moving and non-moving obstacles?",
    answer:
      "Yes, it uses a combination of lidar and radar mapping to detect both types of obstacles effectively.",
  },
];*/}

const Product = () => {
  return (
    <div className='relative text-white bg-black'>
      {/* Problem Statement */}
      <section className='md:w-2/3 mx-auto space-y-6 py-16 px-4 md:px-0'>
        <ScrollFx duration={1.0}>
          <h1 className='text-5xl font-afacad-flux font-semibold text-transparent bg-gradient-to-tr from-purple-800 to-red bg-clip-text'>
            Problem Statement
          </h1>
        </ScrollFx>
        <ScrollFx duration={1.2}>
          <p className='font-cormorant-garamond text-transparent bg-gradient-to-tr from-blue-400 to-white bg-clip-text text-2xl'>
            &#8220;Millions of Indians remain uninsured despite rising medical costs and an increasing burden of lifestyle diseases. Rural populations, middle-income groups, and urban dwellers struggle with affordability, awareness, and accessibility to health insurance. Complex application processes and fraudulent schemes further discourage individuals from securing coverage. A streamlined digital platform is needed to educate and assist underserved communities in accessing affordable health insurance.&#8221;
          </p>
        </ScrollFx>
      </section>
      {/* Features, Specifications, Uses */}
      <section className='bg-[url("/cubes.png")] py-16 px-4 md:px-0'>
        <div className='md:w-2/3 mx-auto space-y-6'>
          <ScrollFx duration={1.0}>
            <h1 className='md:text-center text-5xl md:text-7xl font-nunito font-light text-bold'>
              E-HISP{" "}
              <h1 className='font-afacad-flux text-5xl font-semibold text-transparent bg-gradient-to-tr from-blue-800 to-white bg-clip-text py-1'>
              Schemes
            </h1>
            </h1>
          </ScrollFx>
          <hr className='border-dashed' />
          {/* Images */}
          <div className='grid grid-cols-1 md:grid-cols-4 gap-1'>
            {images.map((image, index) => (
              <ScrollFx key={index} duration={1.0 + index * 0.1}>
                <img
                  key={index}
                  className='w-full h-auto object-cover'
                  src={image}
                  alt={`View ${index + 1}`}
                />
              </ScrollFx>
            ))}
          </div>
          
          <hr className='border-dashed' />
          {/* Features */}
          <h1 className='font-afacad-flux text-4xl md:text-center bg-black-800 text-white p-4 rounded-lg border border-white-600'>Health Insurance Features</h1>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-7 border border-white-500 p-5 rounded-lg shadow-lg bg-gradient-to-tr from-cyan-800 via-blue to-black'>
            {features.map((feature, index) => (
              <ScrollFx duration={index * 0.3} key={index}>
                <div className='font-raleway font-light cursor-pointer md:hover:scale-105 transition-all ease-in duration-200 space-y-3 text-pretty'>
                  <h1 className='font-normal text-6xl font-afacad-flux text-white'>
                    0{index + 1}
                  </h1>
                  <hr />
                  <h1 className='text-lg font-semibold'>{feature.title}</h1>
                  <div className='space-y-4 text-sm font-cormorant-garamond font-light'>
                    {feature.content.map((text, t_index) => (
                      <p key={t_index}>{text}</p>
                    ))}
                  </div>
                </div>
              </ScrollFx>
            ))}
          </div>
          <hr className='border-dashed' />
          {/* Specifications */}
          <h1 className='font-afacad-flux text-4xl md:text-center'>Process to Claim
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-7 bg-blue'>
            {specifications.map((feature, index) => (
              <ScrollFx duration={index * 0.3} key={index}>
                <div className='font-raleway font-light cursor-pointer md:hover:scale-105 transition-all ease-in duration-200 space-y-3 text-center border px-4 py-11 rounded-lg bg-black'>
                  <div className='flex items-center justify-center p-4 size-24 mx-auto border rounded-lg bg-black'>
                    <img
                      className='mx-auto size-12'
                      src={feature.icon}
                      alt={feature.title}
                    />
                  </div>
                  <h1 className='text-lg font-semibold text-orange-600'>{feature.title}</h1>
                  <div className='space-y-2 text-green-500 text-justify text-sm font-cormorant-garamond font-light'>
                    {feature.content.map((text, t_index) => (
                      <p key={t_index}>{text}</p>
                    ))}
                  </div>
                </div>
              </ScrollFx>
            ))}
          </div>
        </div>
        <div className='flex justify-center mt-8'>
  <Link to="/buy">
    <button className='px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg rounded-lg shadow-lg hover:scale-105 transition-all duration-300'>
      Buy Now
    </button>
  </Link>
</div>
      </section>
      {/* Uses */}
      <section className='bg-[url("/black-texture.png")] py-16 px-4 md:px-0 bg-black'>
        <div className='md:w-2/3 mx-auto space-y-12'>
          <h1 className='text-5xl font-raleway font-bold text-transparent bg-gradient-to-tr from-cyan-800 to-white bg-clip-text'>
            Uses of the EHISP
          </h1>
          <div className='space-y-8'>
            {uses.map((use, index) => (
              <ScrollFx duration={1 + index * 0.2} key={index}>
                <div className='font-raleway font-light cursor-pointe space-y-3 text-pretty'>
                  <div
                    className={`flex flex-col ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } justify-between gap-4 w-full`}>
                    <div className='md:w-1/2 max-h-60 overflow-hidden'>
                      <img
                        className='w-full object-bottom mx-auto'
                        src={use.image}
                        alt={use.title}
                      />
                    </div>
                    <div className='md:w-1/2'>
                      <h1 className='text-3xl font-semibold'>{use.title}</h1>
                      <div className='space-y-4 text-lg font-cormorant-garamond font-light'>
                        {use.content.map((text, t_index) => (
                          <p key={t_index}>{text}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                  <hr className='border-dashed' />
                </div>
              </ScrollFx>
            ))}
          </div>
        </div>
      </section>
      {/* FAQs */}
      <section className='py-16 px-4 md:px-0 bg-black bg-[url("/black-grid-texture.png")]'>
        <div className='md:w-2/3 mx-auto'>
          <h1 className='text-5xl font-raleway font-bold text-transparent bg-gradient-to-tr from-purple-800 to-red bg-clip-text'>
            Frequently Asked Questions
          </h1>
          <Accordion.Root type='single' collapsible className='space-y-6 py-10'>
            {faqs.map((faq, index) => (
              <Accordion.Item
                className={index !== faqs.length - 1 ? "border-b pb-3" : ""}
                key={index}
                value={index + 1}>
                <Accordion.Header className='flex items-center justify-between text-xl'>
                  <span className='font-afacad-flux text-xl md:text-2xl font-semibold'>
                    {faq.question}
                  </span>
                  <Accordion.Trigger className='text-3xl data-[state=open]:text-purple-700 data-[state=open]:rotate-45 data-[state=open]:translate-x-1 data-[state=open]:text-4xl font-bold'>
                    +
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className='font-extralight AccordionChevron'>
                  <div className='py-2'>{faq.answer}</div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>
    </div>
  );
};

export default Product;
