import React from "react";
import Container from "../Container";
import Flexx from "../Flexx";
import bannerImg from "../../assets/Group 2.png";
import Button from "../button";
import Heading from "../Heading";
import Paragraph from "../Paragraph";

const Banner = () => {
  return (
    <Container>
      <div className="pt-[136px] pb-[103px] bg-orange-200">
      <Flexx className="justify-between">
        <div className="w-[550px] leading-[70px] pl-12">
         <Heading
             text="Find The Best Fashion Style For You" as="h1"
            className="mb-[38px] text-6xl font-bold font-popins leading-[70px] tracking-wider"
          />
          <Paragraph
            text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. "
            className=" text-2xl color-black mb-[76px] font-franklin"
          />
          <Button
            text="SHOP NOW"
            className="text-2xl font-bold py-6 px-[70px] bg-black text-white rounded-xl  hover:bg-orange-400 ease-in duration-500"
          />
        </div>
        <div>
      <img  className="535px" src={bannerImg} alt={bannerImg} />
        </div>
      </Flexx>
  </div>
    </Container>
);
};


export default Banner;
