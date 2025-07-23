import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const MainSlider = () => {
  return (
    <section className="section kf-started-slider">
      <Swiper className="swiper-container" {...sliderProps.mainSliderSelector}>
        <SwiperSlide className="swiper-slide">
          <div className="kf-started-item">
            <div
              className="slide js-parallax"
              style={{ backgroundImage: "url(images/started_img_n6.jpg)" }}
            />
            <div className="container">
              <div className="description align-left element-anim-1">
                <div className="subtitles">Welcome to</div>
                <h2 className="name text-anim-1" data-splitting="chars">
                  HAO SHI GUANG
                </h2>
                <div className="kf-bts">
                  <Link href="https://tables.toasttab.com/restaurants/93a7c5b8-22cf-45d6-8742-259e7bc967d8/findTime" className="kf-btn h-btn">
                    <span>book a table</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                  <Link href="https://order.toasttab.com/online/haoshiguang" className="kf-btn dark-btn">
                    <span>order online</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="kf-started-item">
            <div
              className="slide js-parallax"
              style={{ backgroundImage: "url(images/started_img_n5.jpg)" }}
            />
            <div className="container">
              <div className="description align-left element-anim-1">
                <div className="subtitles">HAO SHI GUANG</div>
                <h2 className="name text-anim-1" data-splitting="chars">
                  Eating in America, <br />
                  Tastes like home.
                </h2>
                <div className="kf-bts">
                  <Link href="reservation" className="kf-btn h-btn">
                    <span>book a table</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                  <Link href="https://order.toasttab.com/online/haoshiguang" className="kf-btn dark-btn">
                    <span>order online</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
        <div className="mainSlider-prev swiper-button-prev" />
        <div className="mainSlider-next swiper-button-next" />
      </Swiper>
    </section>
      
    

    
  );
};
export default MainSlider;

/*

    <section className="section kf-started-slider">
      <Swiper className="swiper-container" {...sliderProps.mainSliderSelector}>
        <SwiperSlide className="swiper-slide">
          <div className="kf-started-item">
            <div
              className="slide js-parallax"
              style={{ backgroundImage: "url(images/started_img_n6.jpg)" }}
            />
            <div className="container">
              <div className="description align-left element-anim-1">
                <div className="subtitles">Welcome to</div>
                <h2 className="name text-anim-1" data-splitting="chars">
                  HAO SHI GUANG
                </h2>
                <div className="kf-bts">
                  <Link href="reservation" className="kf-btn h-btn">
                    <span>book a table</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                  <Link href="https://order.toasttab.com/online/haoshiguang" className="kf-btn dark-btn">
                    <span>order online</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="kf-started-item">
            <div
              className="slide js-parallax"
              style={{ backgroundImage: "url(images/started_img_n5.jpg)" }}
            />
            <div className="container">
              <div className="description align-left element-anim-1">
                <div className="subtitles">HAO SHI GUANG</div>
                <h2 className="name text-anim-1" data-splitting="chars">
                  Eating in America, <br />
                  Tastes like home.
                </h2>
                <div className="kf-bts">
                  <Link href="reservation" className="kf-btn">
                    <span>book a table</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                  <Link href="menu" className="kf-btn dark-btn">
                    <span>pick up</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                  <Link href="menu" className="kf-btn dark-btn">
                    <span>get delivery</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
        <div className="mainSlider-prev swiper-button-prev" />
        <div className="mainSlider-next swiper-button-next" />
      </Swiper>
    </section>
    
*/