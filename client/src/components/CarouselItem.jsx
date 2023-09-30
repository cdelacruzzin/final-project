import "./css/CarouselItem.scss";

export const CarouselItem = ({name, price, image}) => {
  return (
    <div className="carousel-item">
      <div className="item--image">
        <img src={image} alt="item image" />
      </div>
      <div className="item--info">
        <h1 className="item--name">{name}</h1>
        <p className="itme--info-price">$ {price} CAD</p>
      </div>
    </div>
  );
}