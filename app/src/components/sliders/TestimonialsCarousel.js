import { sliderProps } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const TestimonialsCarousel = () => {
  return (
    <section
      className="section kf-testimonials kf-testimonials-2 section-bg"
      style={{ backgroundImage: "url(images/testimonials_bg2.jpeg)" }}
    >
      <div className="container">
        <div className="kf-titles align-center">
          <div
            className="kf-subtitle element-anim-1 scroll-animate"
            data-animate="active"
          >
            Customer Feedback
          </div>
          <h3
            className="kf-title element-anim-1 scroll-animate"
            data-animate="active"
          >
            What Our Clients Say
          </h3>
        </div>
        <div className="kf-testimonials-carousel">
          <Swiper
            {...sliderProps.kfTestimonialsCarousel}
            className="swiper-container"
          >
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div
                  className="slide-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  
                  <div className="desc">
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <div className="text">
                      The MOST authentic Chinese restaurant in Boston. As Chinese, I’m pretty picky about home country food but it Taste like home! MUST GO. Service is wonderful and we came here almost everyday after we tried the first time. Very Delicious Chinese dishes with affordable prices. I love the taro and traditional Chinese yogurt for Dessert.
                    </div>
                    <h5 className="name">
                      Ruiying Yingying Xiong  <em>Local Guide</em>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  className="slide-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  
                  <div className="desc">
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <div className="text">
                      The food was delicious, came out quickly and with good service. Came with my friend who has a peanut allergy and they were very attentive about making sure they didn’t serve anything with peanuts. They even gave us a yogurt dessert which was very tasty as well. Excited to come back and try more dishes!
                    </div>
                    <h5 className="name">
                      Ruth Douglas <em>Customer</em>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  className="slide-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  
                  <div className="desc">
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <div className="kf-text">
                      Such wonderful service. My friend and I went on our Boston trip and they were accommodating and understanding when we ordered a dish super late because my friend can’t eat spicy Mapo tofu (which tasted good to me!) and we got another great dish. The owner, waitress, and chefs were all so kind and made us feel so welcome!!
                    </div>
                    <h5 className="name">
                      Griselda <em>Customer</em>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  className="slide-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  
                  <div className="desc">
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <div className="kf-text">
                      As soon as you open the doors a rush of excitement hits your nose as you breathe in the delicious food already being enjoyed by other customers. The beautiful ambiance, feels like a nice night out but the atmosphere makes you feel at home. If you are lucky enough to be great by Teddy the manager you will be in for a real treat. He instantly noticed me and my party were new to the restaurant so he walked us through the menu and gave us some excellent suggestions. My personal favorite was the beef fried rice in a barrel and the mango ice cream (enough for 2/3 people.) Every bite was hittin. 10 out of 10
                    </div>
                    <h5 className="name">
                      Manny Haile <em>Customer</em>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              
            </div>
            <div className="swiper-pagination" />
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default TestimonialsCarousel;
