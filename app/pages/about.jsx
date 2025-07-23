import TestimonialsCarousel from "@/src/components/sliders/TestimonialsCarousel";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";

const About = () => {
  return (
    <Layouts>
      {/* Section Started Inner */}
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{ backgroundImage: "url(images/history_inner_bg.jpg)" }}
        />
        <div className="container">
          <h1
            className="kf-h-title text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            About Us
          </h1>
        </div>
      </section>

      {/* Section Our Roots */}
     
<section className="section kf-choose kf-choose-2">
  <div className="container">
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 align-self-center">
        <div className="kf-titles">
          <div
            className="kf-subtitle element-anim-1 scroll-animate"
            data-animate="active"
          >
            About Hao Shi Guang
          </div>
          <h3
            className="kf-title element-anim-1 scroll-animate"
            data-animate="active"
          >
            Our Roots
          </h3>
        </div>

        <div className="kf-text" data-animate="active" style={{ fontSize: "1.15rem", lineHeight: "1.7rem" }}>
          
          <p>
            Ever since its founding in <strong>2011</strong>, Z&N Restaurant Group has aimed to create a diverse array of restaurants showcasing <strong>different flavors of China</strong>. We have restaurants that offer <strong>Chinese BBQ</strong>, traditional Chinese cuisine, and even cafés. Now, we believe it’s time to bring this vision to <strong>Boston</strong>.
          </p>

          <h4 className="element-anim-1 scroll-animate" data-animate="active" style={{ marginTop: "1.5rem" }}>
            What We Stand For
          </h4>
          <p>
            While Hao Shi Guang means <strong>“Good Times”</strong> in a simple Chinese translation, the pun suggests otherwise. Guests will not only have a <strong>good time</strong>, but the delicacy on their plate will also be <strong>emptied by the time they leave</strong>.
          </p>

          <h4 className="element-anim-1 scroll-animate" data-animate="active" style={{ marginTop: "1.5rem" }}>
            Our Philosophy
          </h4>
          <p>
            <strong>Devotion, precision, and determination</strong> are words to live by every day here at Hao Shi Guang. Each dish is freshly prepared — and their key ingredients? <strong>Passion and love</strong>.
          </p>

          <h4 className="element-anim-1 scroll-animate" data-animate="active" style={{ marginTop: "1.5rem" }}>
            Our Mission
          </h4>
          <p>
            We believe good food and company can bring <strong>unity</strong> among family and friends and foster <strong>memorable experiences</strong>. Our mission is for you to trace back to those moments where <strong>food is the reason you’re smiling</strong>.
          </p>
        </div>
      </div>

      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 offset-lg-1">
        <div
          className="kf-choose-image element-anim-1 scroll-animate"
          data-animate="active"
        >
          <img src="images/about_img2.jpg" alt="image" />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Section Interview */}
     
<section
  className="section interview-section"
  style={{ color: "#404a32", backgroundColor: "#eaf0e0", padding: "60px 0" }}
>
  <div className="container">
    {/* Business Description */}
    <div className="kf-titles">
      <div
        className="kf-subtitle element-anim-1 scroll-animate"
        data-animate="active"
      >
        Behind the Vision
      </div>
      <h3
        className="kf-title element-anim-1 scroll-animate"
        data-animate="active"
      >
        Intro
      </h3>
    </div>
    <p>
      At HaoShiGuang, we specialize in <strong>authentic Northeastern Chinese cuisine</strong>. Located at <strong>48 Harvard Avenue in Allston</strong>, we operate an intimate space with <strong>14 tables</strong>. While many Chinese restaurants in America are predominantly Cantonese, we offer a glimpse into <strong>Dongbei (Northeast) cuisine</strong>, focusing on <strong>braising, wok cookery, and simmering</strong>, highlighting hearty flavors perfect for the region's harsh winters. All of our chefs come from <strong>Northern China</strong>, with our Head Chef <strong>Hou Liang</strong> hailing from <strong>Shenyang</strong>. His experience in the mainland of China brings <strong>complex flavors</strong> that stand out in Boston's dining scene.
    </p>

    {/* General Manager */}
    <div className="kf-titles" style={{ marginTop: "40px" }}>
      <h3
        className="kf-title element-anim-1 scroll-animate"
        data-animate="active"
      >
        Meet Theodore Lai – General Manager
      </h3>
    </div>
    <p>
      Hello, I am <strong>Theodore Lai</strong>, and I am the General Manager for Z&N LLC’s HaoShiGuang. We are a multicultural establishment bringing together <strong>Chinese chefs and a diverse staff</strong>. Being Chinese-American, I act as a <strong>bridge between cultures</strong> and languages. I first began my journey in restaurants after leaving my path in the <strong>Naval ROTC program</strong> due to personal loss. Restaurants gave me a new purpose. I started as a <strong>Sushi cook</strong> and worked under <strong>James Beard-nominated Chef Theo Adley</strong> at Marigold, before contributing at Michelin-starred Beckon, Corrida, and Champagne Tiger, eventually becoming the GM at HaoShiGuang.
    </p>
    <p>
      The most important advice I’ve received is: <strong>“Aim for a 1% improvement every day.”</strong>
    </p>

    {/* Executive Chef */}
    <div className="kf-titles" style={{ marginTop: "40px" }}>
      <h3
        className="kf-title element-anim-1 scroll-animate"
        data-animate="active"
      >
        Meet Hou Liang – Executive Chef
      </h3>
    </div>
    <p>
      Hello, I am <strong>Hou Liang</strong>, the Executive Chef for HaoShiGuang. My journey began in <strong>Shandong Province</strong>, near my hometown of Liaoning. I trained under the renowned Chef <strong>Shushan Dong</strong>, specializing in <strong>traditional Shandong cuisine</strong>. My philosophy is: <strong>“If you do not continuously make small steps forward in a flowing stream, you will eventually be left behind.”</strong> I lead my team with this mindset — ensuring our flavors and techniques are always evolving.
    </p>
  </div>
</section>


      {/* Meet Our Chefs */}
      <section className="section kf-team section-bg">
        <div className="container">
          <div className="kf-titles align-center">
            <div className="kf-subtitle element-anim-1 scroll-animate" data-animate="active">
              Experience Team Member
            </div>
            <h3 className="kf-title element-anim-1 scroll-animate" data-animate="active">
              Meet Our Professional Chefs
            </h3>
          </div>
          <div className="kf-team-items row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div className="kf-team-item element-anim-1 scroll-animate" data-animate="active">
                <div className="desc">
                  <h5 className="name">Anthony J. Bowman</h5>
                  <div className="subname">Senior Chefs</div>
                </div>
                <div className="image kf-image-hover">
                  <img src="images/team1.jpg" alt="image" />
                  <div className="info">
                    <div className="label">bowmankf@gmail.com</div>
                    <div className="label">+012 (345) 678 99</div>
                  </div>
                  <div className="social">
                    <a href="#"><i className="fab fa-facebook-f" /></a>
                    <a href="#"><i className="fab fa-twitter" /></a>
                    <a href="#"><i className="fab fa-linkedin" /></a>
                    <a href="#"><i className="fab fa-youtube" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div className="kf-team-item element-anim-1 scroll-animate" data-animate="active">
                <div className="desc">
                  <h5 className="name">Kenny V. Gonzalez</h5>
                  <div className="subname">Senior Chefs</div>
                </div>
                <div className="image kf-image-hover">
                  <img src="images/team2.jpg" alt="image" />
                  <div className="info">
                    <div className="label">gonzalezkf@gmail.com</div>
                    <div className="label">+012 (345) 678 99</div>
                  </div>
                  <div className="social">
                    <a href="#"><i className="fab fa-facebook-f" /></a>
                    <a href="#"><i className="fab fa-twitter" /></a>
                    <a href="#"><i className="fab fa-linkedin" /></a>
                    <a href="#"><i className="fab fa-youtube" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div className="kf-team-item element-anim-1 scroll-animate" data-animate="active">
                <div className="desc">
                  <h5 className="name">Joseph M. Lawrence</h5>
                  <div className="subname">Senior Chefs</div>
                </div>
                <div className="image kf-image-hover">
                  <img src="images/team3.jpg" alt="image" />
                  <div className="info">
                    <div className="label">lawrencekf@gmail.com</div>
                    <div className="label">+012 (345) 678 99</div>
                  </div>
                  <div className="social">
                    <a href="#"><i className="fab fa-facebook-f" /></a>
                    <a href="#"><i className="fab fa-twitter" /></a>
                    <a href="#"><i className="fab fa-linkedin" /></a>
                    <a href="#"><i className="fab fa-youtube" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div className="kf-team-item element-anim-1 scroll-animate" data-animate="active">
                <div className="desc">
                  <h5 className="name">Charles K. Smith</h5>
                  <div className="subname">Senior Chefs</div>
                </div>
                <div className="image kf-image-hover">
                  <img src="images/team4.jpg" alt="image" />
                  <div className="info">
                    <div className="label">smithkf@gmail.com</div>
                    <div className="label">+012 (345) 678 99</div>
                  </div>
                  <div className="social">
                    <a href="#"><i className="fab fa-facebook-f" /></a>
                    <a href="#"><i className="fab fa-twitter" /></a>
                    <a href="#"><i className="fab fa-linkedin" /></a>
                    <a href="#"><i className="fab fa-youtube" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Section CTA */}
      <section
        className="section kf-cta kf-parallax"
        style={{ backgroundImage: "url(images/cta_bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
              <div className="kf-titles">
                <div className="kf-subtitle element-anim-1 scroll-animate" data-animate="active">
                  Need a Table On Coffee House
                </div>
                <h3 className="kf-title element-anim-1 scroll-animate" data-animate="active">
                  Booking Table For Your &amp; Family Members
                </h3>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 align-self-center align-right">
              <Link href="reservation" className="kf-btn element-anim-1 scroll-animate" data-animate="active">
                <span>booking table</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default About;
