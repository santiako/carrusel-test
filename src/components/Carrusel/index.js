import React from 'react';
//import cn from 'classnames';

//@app
import CardSliderDesktop from '../CardSliderDesktop';
import CardSliderMobile from '../CardSliderMobile';

const Carrusel = () => (
  <div className="py-8 lg:py-16 bg-sky-600 flex-col justify-start items-center gap-16 lg:inline-flex">
    <div className="w-[98vw] pl-[146px] justify-start items-start gap-6 hidden lg:inline-flex">
      <CardSliderDesktop />
    </div>
    <div className="px-4 justify-start items-start gap-6 flex lg:hidden  max-w-[400px] mx-auto">
      <CardSliderMobile />
    </div>
  </div>
);

export default Carrusel;
