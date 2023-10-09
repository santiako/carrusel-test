import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Navigation } from 'swiper/modules';
import Cards from '../../data/cards.json';
import Card from '../Card';
import Button from '../Button';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const CardSliderDesktop = () => (
  <Swiper
    autoplay= {{ delay: 2000, disableOnInteraction: true }}
    breakpoints={{
      1920: {
        slidesPerView: 4,
        spaceBetween: 48,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
    }}
    modules={[A11y, Autoplay, Navigation]}
    navigation={{
      nextEl: '.nextslider',
      prevEl: '.prevslider',
    }}
    loop={true}
  >
    <div className="lg:self-stretch w-full pr-[143px] lg:justify-between items-start inline-flex mb-8 lg:mb-16" slot="container-start">
      <div className="text-center">
        <span className="text-white text-[40px] font-normal font-KaytekHeadline leading-[44px]">
          Explore the&nbsp;
        </span>
        <span className="text-white text-[40px] font-bold font-AvenirNext leading-[44px]">
          latest business I.T. insights
        </span>
      </div>
      <div class="justify-start items-start gap-6 flex">
        <div className="prevslider">
          <Button />
        </div>
        <div className="nextslider">
          <Button right />
        </div>
      </div>
    </div>
    {Cards.map((card, index) => (
      <SwiperSlide>
        <Card
          description={card?.description}
          image={card?.image}
          link={card?.link}
          odd={!(index % 2 === 0)}
          title={card?.title}
        />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default CardSliderDesktop;
