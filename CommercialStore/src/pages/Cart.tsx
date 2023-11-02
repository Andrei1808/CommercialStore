import React from "react";
import Helmet from "../components/Helmet/Helmet";
import s from "../style/pages/Cart.module.scss";
import Sidebar from "../components/SIdebar/Sidebar";
import { RiDeleteBinLine } from "react-icons/ri";
import { useAppSelector } from "../hooks/typedHooks";

export default function Cart() {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  
  return (
    <Helmet title="Cart">
      <main>
        <div className={s.wrapper}>
          <section className={s.path}>path</section>
          <Sidebar />
          <section className={s.products}>
            <div className={s.title}>
              <h5>product details</h5>
              <h5>price</h5>
              <h5>quantity</h5>
              <h5>shipping</h5>
              <h5>subtotal</h5>
              <h5>action</h5>
            </div>
            {
              cartItems.map((item, index) => {
                return (
                  <div className={s.product}>
                  <div className={s.productInfo}>
                    <img src="{item.img}" alt="{item.name}" />
                    <div className={s.productDesc}>
                      <h5 className={s.productName}>{item.name}</h5>
                      <p className={s.productSize}>Size</p>
                      <p className={s.productColor}>color</p>
                    </div>
                  </div>
                    <div className={s.productPrice}>{item.price}</div>
                    <div className={s.productQuantity}>{item.quantity}</div>
                  <div className={s.productShipping}>free</div>
                    <div className={s.productSubtotal}>{ item.totalPrice}</div>
                  <button className={s.removeProduct}>
                    <RiDeleteBinLine />
                  </button>
                </div> 
                )
              })
            }
          </section>
          <section className={s.totalPrice}>Total price Area</section>
        </div>
      </main>
    </Helmet>
  );
}
