import React from 'react';
import Container from '../Container';
import Flexx from '../Flexx';
import Button from '../button';
import sellerImg from '../../assets/unsplash_GJaUXfIIcwM.png';
import sellerImgTwo from '../../assets/unsplash_zDyJOj8ZXG0.png';
import icon from '../../assets/Stars note.png';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Image from '../Image';

const BestSeller = () => {
    return (
        <Container>
          <div className="bg-[#CFA485] pt-[50px] pb-[180px] ">
        <Flexx className="justify-end gap-[35px]">
          <div className="w-[437px]">
            <Heading className="text-6xl text-white font-bold font-popins " text="Best Seller product " as="h4" />
            <Paragraph
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus."
              className="text-xl font-frank font-bold text-white my-[50px] leading-8"
            />
            <Button
              text="Learn More"
              className="px-[66px] py-[22px] bg-black text-white font-semibold text-2xl rounded-xl  hover:bg-orange-300 duration-500"
            />
          </div>
          <Flexx className="gap-[30px]">
            <Flexx className="flex-col">
              <Image src={sellerImg} />

              <div className="w-[366px] h-[127px] bg-white py-2.5 pl-[22px]  ">
                <Image src={ icon } />
                <Paragraph
                  text="Sweater Shirt"
                  className="font-semibold text-[22px] text-black my-2.5 hover:text-orange-300 duration-500 cursor-pointer"
                />
                <div>
                  <span className="text-[#C4C4C4] text-[24px]">$45.99</span>
                  <span className="text-black text-[24px] ml-[40px]">
                    $35.99
                  </span>
                </div>
              </div>
            </Flexx>
            <Flexx className="flex-col">
              <Image src={sellerImgTwo} />

              <div className="w-[366px] h-[127px] bg-white py-2.5 pl-[22px]">
                <Image src={ icon } />
                <Paragraph
                  text="Pants fashion"
                  className="font-semibold text-[22px] text-black my-2.5  hover:text-orange-300 duration-500 cursor-pointer"
                />
                <div>
                  <span className="text-[#C4C4C4] text-[24px]">$55</span>
                  <span className="text-black text-[24px] ml-[40px]">
                    $44.99
                  </span>
                </div>
              </div>
            </Flexx>
          </Flexx>
        </Flexx>
    </div>
      </Container>
  );};

export default BestSeller;