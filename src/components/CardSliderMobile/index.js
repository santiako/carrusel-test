import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Cards from '../../data/cards.json';
import Card from '../Card';
import cn from 'classnames';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const CardSliderMobile = () => {
  const cardsArray = Cards.slice(0, 5);

  return (
    <Swiper
      autoplay= {{ delay: 2000, disableOnInteraction: true }}
      centeredSlides={true}
      modules={[Autoplay, Pagination]}
      pagination={{ clickable: true, el: '.swiper-pagination', type: 'bullets' }}
      spaceBetween={24}
      slidesPerView={1}
      loop={true}
      wrapperClass='mb-10 max-w-[270px]'
    >
      <div className="lg:self-stretch w-full lg:justify-between items-start inline-flex mb-8" slot="container-start">
        <div className="text-center">
          <span className="text-white text-[40px] font-normal font-KaytekHeadline leading-[44px]">
            Explore the&nbsp;
          </span>
          <span className="text-white text-[40px] font-bold font-AvenirNext leading-[44px]">
            latest business I.T. insights
          </span>
        </div>
      </div>
      {cardsArray.map((card, index) => (
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
      <div className={cn(
        'swiper-pagination [&>.swiper-pagination-bullet]:bg-white [&>.swiper-pagination-bullet]:opacity-100',
        '[&>.swiper-pagination-bullet-active]:!bg-[#8EEBED]'
      )} />
    </Swiper>
  );
};

export default CardSliderMobile;
