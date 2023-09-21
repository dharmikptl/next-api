import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";

export async function getStaticProps() {
  const res1 = await fetch("http://localhost:3001/api/user");
  const res2 = await fetch("http://localhost:3001/api/product");
  const user = await res1.json();
  const product = await res2.json();
  return {
    props: {
      user,
      product,
    },
  };
}

export default function Home(props: { user: any; product: any}) {
  return (
    <>
      <h1> {props.user.name}</h1>
      <h1>{props.product.productName}</h1>
    </>
  );
}
