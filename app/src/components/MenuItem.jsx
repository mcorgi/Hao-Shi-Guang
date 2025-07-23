const MenuItem = ({ image, name, description, price, link }) => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="kf-menu-item element-anim-1 scroll-animate" data-animate="active">
          <div className="image kf-image-hover">
            <img src={image} alt={name} />
          </div>
          <div className="desc">
            <h5 className="name">{name}</h5>
            <div className="subname">{description}</div>
            <div className="price">${price}</div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default MenuItem;
