import { useState } from "react";
import Layouts from "@/src/layouts/Layouts";
import MenuItem from "@/src/components/MenuItem";

const menuItemsData = [
  { id: 1, image: "images/malalambspine.jpeg", name: "Mala Lamb Spine", description: "麻辣羊蝎子", price: "25.00", category: "Must Try", link: ""},
  { id: 2, image: "images/greenbeans.jpeg", name: "Stir Fried Green Beans", description: "爆炒下饭豆角丝 ", price: "21.50", category: "Must Try", link: "" },
  { id: 3, image: "images/friedchicken.png", name: "Fried Chicken with Bay Leaves", description: "不一样的鸡翅", price: "19.50", category: "Must Try", link: ""  },
  { id: 4, image: "images/claypotbeef.png", name: "Clay Pot Sauteed Beef", description: "干锅小炒牛肉", price: "22.50", category: "Nust Try", link: ""  },
  { id: 5, image: "images/boiledfishfillet.png", name: "Boiled Fish Fillet", description: "椒盐沸腾鱼片", price: "30.50", category: "Must Try", link: ""  },
  { id: 6, image: "images/eggplantsalad.jpg", name: "Eggplant Salad with Peanuts and Egg Crumble", description: "香茄子", price: "10.50", category: "Must Try", link: ""  },
  { id: 7, image: "images/placeholder-img.png", name: "Hot Dish 2", description: "Flavor bomb", price: "14.00", category: "Hot Dish", link: ""  },
  { id: 8, image: "images/placeholder-img.png", name: "Appetizer 2", description: "Light bite", price: "9.00", category: "Appetizer", link: ""  },
];

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

const categories = ["All", "Must Try", "Hot Dish", "Mala", "Soup", "Appetizer", "Drink", "Dessert"];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? menuItemsData
    : menuItemsData.filter(item => item.category === activeCategory);

  return (
    <Layouts>
      {/* Section Menu */}
      <section className="section kf-menu section-bg" style={{ paddingTop: "120px" }}>
        
        <div className="container">
          {/* Category Filters */}
          <div className="kf-menu-filters align-center mb-40">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`menu-filter-btn ${activeCategory === cat ? "active" : ""}`}
                style={{
                  margin: "5px",
                  padding: "10px 20px",
                  border: activeCategory === cat ? "2px solid #2e2e2e" : "none",
                  background: activeCategory === cat ? "#9dab87" : "#cfdac0",
                  color: "#2e2e2e",
                  cursor: "pointer",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="kf-menu-items">
            <div className="row">
              {filteredItems.map((item) => (
                <MenuItem
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  link={item.link}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

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


    </Layouts>
  );
};

export default Menu;
