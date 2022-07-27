export function Mobiles({ mobile }) {


  return (
    <div className="phone-container">
      <img className='phone-img' src={mobile.img} alt={mobile.title}></img>
      <h2 className='phone-name'> {mobile.title} </h2>
      <p className='phone-rating'> ⭐ {mobile.rating} </p>
      <h5 className='phone-price'>{mobile.price} </h5>
      <h4 className='final-price'> {mobile.final_price} </h4>

    </div>
  );
}
