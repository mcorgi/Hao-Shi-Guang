import MainSlider from "@/src/components/sliders/MainSlider";
import TestimonialsCarousel from "@/src/components/sliders/TestimonialsCarousel";
import Layouts from "@/src/layouts/Layouts";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import MenuItem from "@/src/components/MenuItem";

const featuredDishes = [
  {
    id: 1,
    name: "Sizzling Tofu and Sea Urchin",
    price: "$18.50",
    image: "/images/braisedporkwithtofu.jpg", 
    link:"https://order.toasttab.com/online/haoshiguang/item-h08-sizzling-tofu-and-sea-urchin-in-stone-pot_1c0b5485-e9d5-40e4-839c-5fa6bc251da8",
  },
  {
    id: 2,
    name: "Lamb Skewers (2pcs)",
    price: "$8.00",
    image: "/images/lambskewers.jpg",
    link:"https://order.toasttab.com/online/haoshiguang/item-b01lamb-skewers_09aeec61-204d-4ef4-ac5d-44f167106231",
  },
  {
    id: 3,
    name: "Kung Pao Chicken",
    price: "$16.50",
    image: "/images/kungpaochicken.jpg",
    link:"https://order.toasttab.com/online/haoshiguang/item-h32-kung-pao-chickencan-not-make-it-nonspicy_78c86502-4994-4a18-a19d-4374093457a2",
  },
  {
    id: 4,
    name: "Fried Noodles With Beef",
    price: "$17.50",
    image: "/images/friednoodleswbeef.jpg",
    link:"https://order.toasttab.com/online/haoshiguang",
  },
  {
    id: 5,
    name: "Shredded Tofu Salad",
    price: "$8.80",
    image: "/images/shreddedtofusalad.jpg",
    link:"https://order.toasttab.com/online/haoshiguang/item-a03shredded-tofu-skin-salad_3a38b739-11fb-45e2-86cc-b55fa7284c97",
  },
];


const Index = () => {
  return (
    <Layouts>
      {/* Section Started Slider */}
      <MainSlider />

      {/* Section about Seasonal Dishes Here */}
        <div className="container2" style={{ paddingLeft: "40px", paddingRight: "40px" }}>
      
          <div className="kf-titles align-center" style={{ marginTop: "100px" }}>
             <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              Special Picks
            </div>
            
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
              Featured Dishes
            </h3>
          </div>

      
      <div className="row justify-content-center">
  {featuredDishes.map((dish) => (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4" key={dish.id}>
      <a
        href={dish.link || "#"}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="kf-menu-item element-anim-1 scroll-animate" data-animate="active">
          <div
            className="image kf-image-hover"
            style={{
              backgroundImage: `url(${dish.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "300px",
              width: "100%",
            }}
          />
          <div className="desc text-center pt-3">
            <h5 className="name">{dish.name}</h5>
            <div className="subname">{dish.price}</div>
          </div>
        </div>
      </a>
    </div>
  ))}
</div>
</div>

 
      {/* Section Menu */}
      <section
        className="section kf-menu kf-parallax section-bg "
        
      >
        <div className="container">
          <div className="kf-titles align-center" style={{ marginTop: "100px" }}>
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              Choose Your Favorites
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
              MENU
            </h3>
          </div>
          <div
            className="kf-menu-items"
            
          >
            <div className="row">
              <MenuItem
              image="images/malalambspine.jpeg"
              name="Mala Lamb Spine"
              description="麻辣羊蝎子"
              price="25.00"
              link="https://order.toasttab.com/online/haoshiguang/item-h01mala-lamb-spinecan-not-make-it-nonspicy_44d67566-a986-410a-bfc4-282f1de46cc8"
            />
            <MenuItem
              image="images/greenbeans.jpeg"
              name="Stir Fried Green Beans"
              description="爆炒下饭豆角丝"
              price="21.50"
              link="https://order.toasttab.com/online/haoshiguang/item-h02-stir-fried-green-bean-with-pork-and-dried-shrimp_04d2f85b-59de-43f3-8238-2c3e67c6410f"
            />
            <MenuItem
              image="images/friedchicken.png"
              name="Fried Chicken with Bay Leaves"
              description="不一样的鸡翅"
              price="19.50"
              link="https://order.toasttab.com/online/haoshiguang/item-h03-fried-chicken-wings-with-bay-leaves_a231083c-3dc0-4087-9ec7-3f9958057a71"
            />
            <MenuItem
              image="images/claypotbeef.png"
              name="Clay Pot Sauteed Beef"
              description="干锅小炒牛肉"
              price="22.50"
              link="https://order.toasttab.com/online/haoshiguang/item-h07-clay-pot-sauteed-beef_ab0bf2e0-4e91-4896-b11a-d840b6bf0209"
            />
            <MenuItem
              image="images/boiledfishfillet.png"
              name="Boiled Fish Fillet"
              description="椒盐沸腾鱼片"
              price="30.50"
              link="https://order.toasttab.com/online/haoshiguang/item-h06-boiled-fish-fillet-with-salt-and-peppercan-not-make-it-nonspicy_1f10697c-4569-468e-87ec-fcad94a511d2"
            />
            <MenuItem
              image="images/eggplantsalad.jpg"
              name="Eggplant Salad with Peanuts and Egg Crumble"
              description="香茄子"
              price="10.50"
              link="https://order.toasttab.com/online/haoshiguang/item-h10eggplant-salad-with-peanuts-and-egg-crumble_cc017f14-a12d-4430-aeee-0f24354ebe05"
            />
              
              <Link href="https://order.toasttab.com/online/haoshiguang" className="kf-btn menu-view-btn">
                    <span>view full menu</span>
                    <i className="fas fa-chevron-right" />
              </Link>
            </div>
            
            
            
          </div>
          
          
        </div>

        

      </section>
      {/* Section About */}
      <section className="section kf-about section-bg">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5">
              <div className="kf-titles">
                <div
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  About Us
                </div>
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                 Our Culinary Journey 
                </h3>
              </div>
              <div
                className="kf-text element-anim-1 scroll-animate"
                data-animate="active"
              >
                <p>
                  Hao Shi Guang is a one-of-a-kind culinary establishment with a menu inspired by the idea of simple and honest cooking. Starting in 2022, we developed a unique dining experience for all of our guests using fresh and sustainable ingredients—taking you on a culinary journey like no other.
                </p>
                <br></br>
                <p>From classic recipes to new-age kitchen adventures, each dish reflects our passion for high-quality food presented in a simple yet pleasing manner. Dive right in, and take a bite; join us today.</p>
                <br></br>
              </div>
              <Link href="about" className="kf-btn dark-btn">
                    <span>read more</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
              <div
                className="kf-about-quote element-anim-1 scroll-animate"
                data-animate="active"
              >
                
                <img src="images/mainchef.jpg" alt="image" />
                <div>
                  "Every day, I must bring my best to the stove to ensure that customers leave the restaurant satisfied with their meal.
"
                </div>

              </div>
              <br></br>
              
            </div>
            
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
              <div
                className="kf-about-image element-anim-1 scroll-animate"
                data-animate="active"
              >
                <img src="images/mainchef.jpg" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <br></br>

      {/* 3 Pictures Slider*/}
      {/*
      <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              Seasonal Dishes
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
              Seasonal Dishes
            </h3>
          </div>
      <section className="section kf-grid-carousel">
        <div className="container">
          <Swiper {...sliderProps.kfGridCarousel} className="swiper-container">
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/grid_gal2.jpg" className="has-popup-image">
                    <img src="images/grid_gal2.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Latte</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/grid_gal3.jpg" className="has-popup-image">
                    <img src="images/grid_gal3.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Cappuccino</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/grid_gal4.jpg" className="has-popup-image">
                    <img src="images/grid_gal4.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Iced Coffee</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/grid_gal5.jpg" className="has-popup-image">
                    <img src="images/grid_gal5.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Espresso</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/grid_gal1.jpg" className="has-popup-image">
                    <img src="images/grid_gal1.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Black Coffee</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/grid_gal2.jpg" className="has-popup-image">
                    <img src="images/grid_gal2.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Latte</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/grid_gal3.jpg" className="has-popup-image">
                    <img src="images/grid_gal3.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Cappuccino</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/grid_gal4.jpg" className="has-popup-image">
                    <img src="images/grid_gal4.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Iced Coffee</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/grid_gal5.jpg" className="has-popup-image">
                    <img src="images/grid_gal5.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Espresso</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/grid_gal1.jpg" className="has-popup-image">
                    <img src="images/grid_gal1.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Black Coffee</h5>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      */}
      
      {/* Section Services */}
      {/*
      <section className="section kf-services section-bg">
        <div className="container">
          <div className="kf-services-items row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-services-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="menu-restaurant">
                    <img src="images/service1.jpg" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                  <div className="icon">
                    <i className="las la-utensils" />
                  </div>
                  <h5 className="name">Restaurant Menu</h5>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-services-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="menu-coffee">
                    <img src="images/service2.jpg" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                  <div className="icon">
                    <i className="las la-coffee" />
                  </div>
                  <h5 className="name">Coffee Menu</h5>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-services-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="services">
                    <img src="images/service3.jpg" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                  <div className="icon">
                    <i className="las la-glass-cheers" />
                  </div>
                  <h5 className="name">Food Services</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}
      {/*
      Section Choose
      <section className="section kf-choose section-bg">
        <div className="container">
          <div className="kf-parallax-icon pi-1" data-jarallax-element={-60}>
            <div
              className="p-icon"
              style={{ backgroundImage: "url(images/parallax_icon1.png)" }}
            />
          </div>
          <div className="kf-parallax-icon pi-2" data-jarallax-element={-80}>
            <div
              className="p-icon"
              style={{ backgroundImage: "url(images/parallax_icon2.png)" }}
            />
          </div>
          <div className="kf-parallax-icon pi-3" data-jarallax-element={-40}>
            <div
              className="p-icon"
              style={{ backgroundImage: "url(images/parallax_icon3.png)" }}
            />
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div
                className="kf-choose-image element-anim-1 scroll-animate"
                data-animate="active"
              >
                <img src="images/choose_img.jpg" alt="image" />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 offset-lg-1 align-self-center">
              <div className="kf-titles">
                <div
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Why Choose Us
                </div>
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  New London Coffee Founded For Extraordinary Test
                </h3>
              </div>
              <div
                className="kf-text element-anim-1 scroll-animate"
                data-animate="active"
              >
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptate
                  accusantium doloremque laudantium, totam rem aperiam eaque
                  ipsa quae abillo inventore veritatis
                </p>
              </div>
              <div className="kf-choose-list">
                <ul>
                  <li
                    className="element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <img src="images/choose_icon1.png" alt="image" />
                    </div>
                    <div className="desc">
                      <h5 className="name">Natural Coffee Beans</h5>
                      <div className="subname">
                        Sed ut perspiciatis unde omnis iste natus error
                        voluptate accusantium doloremque
                      </div>
                    </div>
                  </li>
                  <li
                    className="element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <img src="images/choose_icon2.png" alt="image" />
                    </div>
                    <div className="desc">
                      <h5 className="name">100% ISO Certification</h5>
                      <div className="subname">
                        Sed ut perspiciatis unde omnis iste natus error
                        voluptate accusantium doloremque
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <Link
                href="about"
                className="kf-btn element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>explore more</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      */}

      
      {/* Section Testimonials Carousel */}
      {/* <TestimonialsCarousel /> */}
      
      
      
      {/* Section CTA */}
      <section
        className="section kf-cta kf-parallax"
       
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
              <div className="kf-titles">
                <div
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  
                </div>
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Interested in Joining Our Team?
                </h3>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 align-self-center align-right">
              <Link
                href="reservation"
                className="kf-btn element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>join us</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Index;
