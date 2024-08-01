import React, { useState,useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import './Newmeeting.css';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import img1 from "../../assets/MEDIA & ASSESTS/banfire 5.webp";
import img2 from "../../assets/MEDIA & ASSESTS/christ8.webp";
import img3 from "../../assets/MEDIA & ASSESTS/christmas 3.webp";
import img4 from "../../assets/MEDIA & ASSESTS/valen 2.webp";
import img5 from "../../assets/MEDIA & ASSESTS/christmas 3.webp";
import img6 from "../../assets/MEDIA & ASSESTS/bonfire 3.webp";

const cardsData = [
  { id: 1, image: img1, title: 'New Years eve Dinner 1', description: 'Description 1', date: '2024-01-01', time: '07.00 pm' },
  { id: 2, image: img2, title: 'New Years eve Dinner 2', description: 'Description 2', date: '2024-02-01', time: '07.00 pm' },
  { id: 3, image: img3, title: 'New Years eve Dinner 3', description: 'Description 3', date: '2024-03-01', time: '07.00 pm' },
  { id: 5, image: img4, title: 'New Years eve Dinner 5', description: 'Description 5', date: '2024-05-01', time: '07.00 pm' },
  { id: 6, image: img5, title: 'New Years eve Dinner 6', description: 'Description 6', date: '2024-06-01', time: '07.00 pm' },
  { id: 7, image: img6, title: 'New Years eve Dinner 7', description: 'Description 7', date: '2024-07-01', time: '07.00 pm' },
];

const NewMeeting = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);



  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cardsData.length) % cardsData.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const visibleCards = [
    cardsData[(currentIndex - 1 + cardsData.length) % cardsData.length],
    cardsData[currentIndex],
    cardsData[(currentIndex + 1) % cardsData.length],
  ];

  return (
    <>
      <div className='location-title new-meeting-mtitle'>MEETING & EVENTS</div>
      <div className="new-meeting-card-carousel" {...handlers}>
        <button className="new-meeting-nav-button" onClick={handlePrev}><LeftOutlined /></button>
        <div className="new-meeting-cards-container">
          {visibleCards.map((card, index) => (
            <div key={card.id} className={`new-meeting-card ${index === 1 ? 'new-meeting-active' : 'new-meeting-non-active'}`}>
              <img src={card.image} alt={card.title} />
              <div className={`new-meeting-card-content ${index === 1 ? 'new-meeting-active-content' : 'new-meeting-overlay-content'}`}>
                <h4 className='new-meeting-title'>{card.title}</h4>
                <p className='new-meeting-dis'>{card.description}</p>
                <p className='new-meeting -date'><span>{card.date}</span>&nbsp; | &nbsp;<span>{card.time}</span></p>
              </div>
            </div>
          ))}
        </div>
        <button className="new-meeting-nav-button" onClick={handleNext}><RightOutlined /></button>
      </div>
    </>
  );
};

export default NewMeeting;
