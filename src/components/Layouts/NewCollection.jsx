import React from 'react';
import Button from '../button';
import collectionImg from '../../assets/unsplash_3oq5S2owDDc.png'
import collectionImgTwo from '../../assets/unsplash_zDyJOj8ZXG0.png'
import collectionImgThree from '../../assets/unsplash_chmE8NgEAnk.png'
import Container from '../Container';
import Flexx from '../Flexx';
import Image from '../Image';
import Heading from '../Heading';


const NewCollection = () => {
    return (
        <Container>
          <div className="bg-orange-200 py-[160px] px-8">
        <Heading text="New Collection" className="text-center font-popins text-5xl font-semibold " as="h3" />
        <Flexx className="justify-between mt-[122px]">
          <div className="">
            <Image src={collectionImg} />
            <Button
              text="Sweater"
              className="px-[108px] py-2.5 rounded-[20px] relative start-[35px] bottom-[101px] bg-white  hover:bg-orange-300 duration-500"
            />
          </div>
          <div className="">
            <Image src={collectionImgTwo} />
            <Button
              text="Jeans"
              className="px-[140px] py-2.5 rounded-[20px] relative start-[18px] bottom-[101px] bg-white  hover:bg-orange-300 duration-500"
            />
          </div>
          <div className="">
            <Image src={collectionImgThree } />
            <Button
              text="Sweater"
              className="px-[130px] py-3.5 rounded-[20px] relative start-[35px] bottom-[101px] bg-white  hover:bg-orange-300 duration-500"
            />
          </div>
        </Flexx>
    </div>
      </Container>
  );
};

export default NewCollection;