import axios from "axios";
import { useEffect, useState } from "react";
import CartStructure from "./CartStructure";
import cartLogo from "../../Images/cart-shopping-svgrepo-com.svg";


function CreateCart() {
  const cartList = [];
  const [carts, setCarts] = useState([]);

  function getCarts() {
    axios
      .get("http://localhost:8085/cart/get")
      .then((response) => {
        setCarts(response.data);
      })
      .catch(console.log());
  }
  useEffect(() => {
    getCarts();
  }, []);

  // for (let cart of carts) {
  //   cartList.push(<CartStructure key={cart.id} id={cart.id} />);
  // }

  const handleClick = () => {
    //if cart id dosnt exist (!cartId) then post call axios
    //else if then return null, console.log("cart already exists") - you need to pass in a unique another cart
    //alert("cart already created");

    // localStorage.setItem("cartId", createRandomCartID());

    axios
      .post("http://localhost:8085/cart/create", {
      })
      .then((response) => {
        console.log(`Cart Created, Cart ID: ${response.data.id}`);
        console.log(response);
         getCarts();
      })
      .catch((err) => {
        console.error(err);
        
      });
  };

  function cartExists(){
    return carts.length > 0;
  }
  return (
    <div>
      <div>
        <button disabled={cartExists()} className="btn btn-primary" onClick={handleClick}>Create New Cart <img style={{display: "inline" }} src={cartLogo} width="30px"/></button>
      </div>

      <div>{cartList}</div>
    </div>

  );
}

export default CreateCart;
