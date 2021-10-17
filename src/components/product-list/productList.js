import "./productList.css";
import Product from "../product/Product";
import {products} from "./extra-data/productData.js";

function ProductList() {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Lama</h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
          augue cursus, aliquet justo vulputate, hendrerit lacus. Quisque nisl
          odio, bibendum id dui a, eleifend fermentum nisi. Nulla ultricies,
          tortor eu tristique accumsan, felis dui scelerisque felis, et lobortis
          odio erat blandit lorem. Nullam sed ligula commodo, pharetra risus
          non, placerat est.
        </p>
      </div>
      <div className='pl-list'>
          {products.map(item=>(
              <Product key={item.id} img={item.img} link={item.link}></Product>
          ))}
      </div>
    </div>
  );
}

export default ProductList;
