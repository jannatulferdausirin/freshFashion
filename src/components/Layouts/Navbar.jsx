import React from 'react';
import Container from '../Container';
import Image from '../Image';
import logo from '../../assets/Fresh.png'
import Flexx from '../Flexx';
import Menu from '../Menu';
import Button from '../button'; 





const Navbar = () => {
    return (
      <nav >
     <Container>
        <div className="bg-orange-200 pt-14">
          <Flexx className="justify-between">
          <div className="ps-16 w-1/4 pl-4">
          <Image src={logo} alt={logo}/>
          </div>
          <div   >
          <Menu className="w-1/2"/>
          </div>
          
          <Flexx  className="gap-2 w-1/4 justify-center pb-8">
            <Button
              text="Login"
              className="font-semibold text-twentyFour text-black px-3.5 py-2.5 bg-transparent border border-orange-300 rounded-xl hover:bg-orange-300 duration-500 "
            />
            <Button
              text="Sign up"
              className="font-semibold text-twentyFour text-black px-3.5 py-2.5 bg-transparent border border-orange-300 rounded-xl hover:bg-orange-300 duration-500 justify-center items-end"
            />
          </Flexx>
       
        </Flexx>
        </div>
      </Container>
     
     
    </nav>
    );
};

export default Navbar;
