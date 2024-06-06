import React, { useState, useEffect } from "react";
import HotelRoomCard from "../../components/common/HotelRoomCard";
import img1 from "../../assets/images/SingleRoomwithSharedBathroom.jpg";
// import img2 from "../../assets/images/Loungebar 1.jpg";
import img2 from "../../assets/images/DoubleEnsuite.jpg";
import img3 from "../../assets/images/TwinRoom.jpg";
import img4 from "../../assets/images/Tripleroomwithsharedbathroom.jpg";
import { Row, Col, Modal } from "antd";
import Card from "../common/Card";
import "../../css/BasicRoom.css";
import { useNavigate } from "react-router-dom";
import RoomInformation from "../home/RoomInformation";
import personIcon2 from "../../assets/icons/two.png";
import bedIcon2 from "../../assets/icons/rest.png";
import bedIcon1 from "../../assets/icons/bed.png";
import personIcon1 from "../../assets/icons/people.png";
import personIcon3 from "../../assets/icons/Three.png";
import UrlLib from "../common/UrlLib";
import SiteCard from "../Sitecard/siteCard";

const BasicRoom = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookingUrl, setBookingUrl] = useState('');
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 767px)").matches
  );

  const handleViewMoreClick = (room, url) => {
    setSelectedRoom(room);
    setBookingUrl(url);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const getUrlById = (id) => {
    const urlObject = UrlLib.find((url) => url.id === id);
    return urlObject ? urlObject.url : "#";
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const BasicroomData = [
    {
      id: 2,
      image: img1,
      title: "SINGLE ROOM WITH SHARED BATHROOM",
      icon:img1,
      cardTitle: "1x Single Bed",
      imageUrl: getUrlById(2),
    },
    {
      id: 5,
      image: img2,
      title: "DOUBLE ROOM WITH SHARED BATHROOM",
      cardTitle: "1x Double Bed",
      imageUrl: getUrlById(5),
    },
    {
      id: 11,
      image: img3,
      title: "TWIN ROOM WITH SHARED BATHROOM",
      cardTitle: "2x Single Bed",
      imageUrl: getUrlById(11),
    },
    {
      id: 9,
      image: img4,
      title: "TRIPLE ROOM WITH SHARED BATHROOM",
      cardTitle: "3x Single Bed",
      imageUrl: getUrlById(9),
    },
  ];

  return (
    <div >
      <div className="BasicRoom-cardContainor">
        {isMobile ? (
          <div className="BasicRoom-sitecard">
            <SiteCard />
          </div>
        ) : null}
        {!isMobile ? (
          <div className="BasicRoom-card">
            <Card title="Card Title 2" description="Description for Card 2" />
          </div>
        ) : null}
      </div>
      <div className="BasicRoom-containor">
        <div className="">
          <div className="BasicRoom-TextWrapper">
            <h1 className="BasicRoom-aboutH1">BASIC ROOMS</h1>
          </div>
        </div>
      </div>
      <div className="basic-room-main">
      <Row className="hotelRoomMainRow">
        <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img1}
            // title=SINGLE ROOM WITH SHARED BATHROOM  
            title={
              <>
                SINGLE ROOM WITH SHARED BATHROOM  <img src={personIcon1} alt="Person Icon" className="room-icon" />
                <img src={bedIcon1} alt="Bed Icon" className="room-icon" />
              </>
            }
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            price="£48"
            buttonText="Book Now"
            cardtitle="1x single bed"
            onViewMoreClick={handleViewMoreClick}
            link={getUrlById(8)}
          />{" "}
        </Col>
        <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img2}
            // title=DOUBLE ROOM WITH SHARED BATHROOM  
            title={
              <>
                DOUBLE ROOM WITH SHARED BATHROOM  <img src={personIcon2} alt="Person Icon" className="room-icon" />
                <img src={bedIcon2} alt="Bed Icon" className="room-icon" />
              </>
            }
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            onViewMoreClick={handleViewMoreClick}
            price="£58"
            buttonText="Book Now"
            cardtitle="1x single bed"
            link={getUrlById(3)}
          />{" "}
        </Col>
        <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img3}
            // title=TWIN ROOM WITH SHARED BATHROOM  
            title={
              <>
                TWIN ROOM WITH SHARED BATHROOM  <img src={personIcon2} alt="Person Icon" className="room-icon" />
                <img src={bedIcon2} alt="Bed Icon" className="room-icon" />
              </>
            }
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            onViewMoreClick={handleViewMoreClick}
            price="£85"
            buttonText="Book Now"
            cardtitle="1x single bed"
            link={getUrlById(12)}
          />{" "}
        </Col>
      </Row>
      <Row className="hotelRoomMainRow">
        <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img4}
            // title="TRIPLE ROOM WITH SHARED BATHROOM"
            title={
              <>
                TRIPLE ROOM WITH SHARED BATHROOM  <img src={personIcon3} alt="Person Icon" className="room-icon" />
                <img src={bedIcon2} alt="Bed Icon" className="room-icon" />
              </>
            }
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            onViewMoreClick={handleViewMoreClick}
            price="$200"
            buttonText="Book Now"
            cardtitle="3x single bed"
            link={getUrlById(10)}
          />{" "}
        </Col> 
      </Row> 
      </div>
      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width="80%"
      >
        <RoomInformation room={selectedRoom} bookingUrl={bookingUrl} />
      </Modal>
    </div>
  );
};

export default BasicRoom;
