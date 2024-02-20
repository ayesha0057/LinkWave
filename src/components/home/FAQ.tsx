import React, { useState } from 'react';
import { ASSETS } from '../../assets';

const FAQ = () => {
  const faqData = [
    {
      id: 1,
      question: 'What is Linkwave?',
      answer: 'Discover a universe of possibilities with effortless link sharing and management. ',
    },
    {
      id: 2,
      question: 'What types of links we can add to linkwave?',
      answer: 'Discover a universe of possibilities with effortless link sharing and management',
    },
    {
      id: 3,
      question: 'What types of links we can add to linkwave?',
      answer: 'Discover a universe of possibilities with effortless link sharing and management',
    },
    {
      id: 4,
      question: 'what if my username is already taken??',
      answer: 'Discover a universe of possibilities with effortless link sharing and management',
    },
    {
      id: 5,
      question: 'Is it only for famous people??',
      answer: 'Discover a universe of possibilities with effortless link sharing and management',
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="faq-wrap sizing">
        <div className="faq-heading">
          <h1>You might have some question!</h1>
          <h4>Here are some frequently asked questions</h4>
        </div>
        <div className="faq-boxes-wrap ">
          <div className="boxs">
            {faqData.map((item, index) => (
              <div key={item.id} className={`${openIndex === index ? 'faq-item open' : ' faq-item closed'}`}>
                <div className="question open-bg">
                  <div className="q">
                    <h4> {item.question} </h4>
                    <img
                      src={openIndex === index ? ASSETS.close : ASSETS.expand}
                      alt=""
                      onClick={() => toggleAnswer(index)}
                    />
                  </div>
                </div>
                {openIndex === index && (
                  <div className="answer">
                    <h6>{item.answer}</h6>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
