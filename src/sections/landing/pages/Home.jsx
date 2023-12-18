/* eslint-disable import/no-extraneous-dependencies */
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Mousewheel, Pagination } from 'swiper';
import { Credit } from '../components/home-section';

SwiperCore.use([Mousewheel, Pagination, EffectFade]);

const swiperOptions = {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 1,
  mousewheel: true,
  pagination: true,
  effect: 'fade',
  speed: 1000,
};

const Home = () => (
    <>
      <Swiper {...swiperOptions}>
        <SwiperSlide>{({ isActive }) => <Credit isActive={isActive} />}</SwiperSlide>
      </Swiper>
    </>
  );

export default Home;
