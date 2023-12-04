import React from "react";
import bestFashionImage from "../../assets/unsplash__3Q3tsJ01nc.png";
import Container from "../Container";
import Flexx from "../Flexx";
import Reviews from "../Reviews";
import Image from "../Image";
import Heading from "../Heading";
import Paragraph from "../Paragraph"

const Fashion = () => {
  return ( 
<Container >
<div className="pt-[80px] pb-[180px] relative bg-orange-200 z-10 ">
  <Flexx className="gap-[125px]">
    <div >
      <Image src={bestFashionImage} />
      
    </div>
    <div className="w-[437px] mt-[70px]">
      <Heading className="text-5xl font-bold  tracking-wider leading-[70px]" text="Best Fashion Since 2010" as="h3" />
      <Paragraph
        className="text-2xl leading-10 font-semibold text-black mt-[60px] "
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. "
      />
    </div>
  </Flexx>
  <div className="pb-16">
          <Flexx className="absolute right-[50px] bottom-24 -z-20 ">
            <Reviews number="2010" text="Founded"/>
            <Reviews number="5000+" text="Product sold"/>
            <Reviews number="45000+" text="Best Reviews"/>
          </Flexx>
        </div>
 
  
   
</div>
</Container>
);
};

export default Fashion;
