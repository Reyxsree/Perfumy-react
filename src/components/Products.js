import perfume1 from "../assets/images/perfume1.jpg"
import perfume2 from "../assets/images/perfume2.jpg"
import perfume3 from "../assets/images/perfume3.jpg"

function Products(){
    return(
      <div className="products">
         <div className="box">
          <img src={perfume1} alt="perfume1" style={{ width: '200px', height: '200px' }} />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis et minima perferendis fugiat illum accusantium, neque reprehenderit illo? Voluptatum, suscipit!</p>
         </div>
         <div className="box">
          <img src={perfume2} alt="perfume2" style={{ width: '200px', height: '200px' }} />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis et minima perferendis fugiat illum accusantium, neque reprehenderit illo? Voluptatum, suscipit!</p>
         </div>
         <div className="box">
          <img src={perfume3} alt="perfume3" style={{ width: '200px', height: '200px' }} />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis et minima perferendis fugiat illum accusantium, neque reprehenderit illo? Voluptatum, suscipit!</p>
         </div>
      </div>
    );
  }

export default Products