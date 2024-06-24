
const ServiseCard = ({servise}) => {
const {title, img, price} = servise;

 return (
<div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={img}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{title}</h2>
    <p className="text-orange-500">Price : ${price}</p>
    <div className="card-actions">
      <button className="btn btn-warning">Buy Now</button>
    </div>
  </div>
</div>
 );
};

export default ServiseCard;