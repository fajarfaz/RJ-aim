import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container m-auto  px-5 py-12">
      <div className="grid md:grid-cols-2 shadow-2xl sm:grid-cols-1 grid-rows-1  mx-auto  bg-gray-100 max-w-7xl rounded">
        <ProductImage />
        <ProductInfo
          isDiskon="yes"
          judul="Kemasan Biji Kopi"
          kategori="KEMASAN"
        />
      </div>

      <ReviewProduk />
    </div>
  );
}

function ReviewProduk() {
  //data dummy
  const users = [
    {
      id: 1,
      name: "Fajar Faz",
      review: "Barang bagus dan harga terjangkau.. Mantab.",
      foto:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 2,
      name: "GAs Ranma",
      review: "Barang bagus dan harga terjangkau.. Mantab.",
      foto:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 3,
      name: "Norway goway",
      review: "Barang bagus dan harga terjangkau.. Mantab.",
      foto:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ];

  const listReview = users.map((itemReview) => (
    <div className="md:col-start-1 sm:col-span-1 p-5 ">
      <div class="flex-shrink-0">
        <img
          class="h-14 w-14 rounded bg-cover"
          src={itemReview.foto}
          alt="Workflow"
        />
      </div>
      <h1 className="font-black"> {itemReview.name}</h1>
      <h1 className="font-normal"> {itemReview.review}</h1>
    </div>
  ));
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 grid-rows-1  mx-auto mt-7 max-w-7xl ">
      <div className="md:col-span-2 sm:col-span-2  p-5">
        <h2 className=" text-black text-3xl font-black tracking-wide uppercase">
          Review
        </h2>
      </div>
      {listReview}
    </div>
  );
}
function CheckDiskon(props) {
  const { isDiskon } = props;
  if (isDiskon == "yes") {
    return <p className="text-1xl font-bold m-2">Diskon 50% off</p>;
  } else if (isDiskon == "coming") {
    return <p className="text-1xl font-bold m-2">Akan ada Diskon</p>;
  } else {
    return <p className="text-1xl font-bold m-2">Belum ada Diskon</p>;
  }
}

function ProductImage() {
  return (
    <div className="md:col-span-1 sm:col-span-2   p-5">
      <img src="img1.png" className="mx-auto" />
    </div>
  );
}

function ProductInfo(props) {
  const { judul, kategori, isDiskon } = props;
  const benefits = ["Alumunium tahan karat", "Besi Ringan", "Custom Warna"];
  const listBenefits = benefits.map((itemBenefits) => <li>{itemBenefits}</li>);

  return (
    <div className="md:col-span-1 sm:col-span-2  px-4 py-6  bg-white ">
      <h2 className="text-base text-gray-400 font-semibold tracking-wide uppercase">
        {kategori}
      </h2>

      <h1 className="text-3xl  text-black tracking-wide uppercase mt-4 font-black ">
        {judul}
      </h1>

      <h1 className="text-2xl  text-green-400 font-semibold tracking-wide mt-2 uppercase">
        IDR 76.000.000
      </h1>

      <p className="mt-4 max-w-2xl text-xl text-gray-500 ">
        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
        voluptatum cupiditate veritatis in accusamus quisquam.Lorem ipsum dolor
        sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate
        veritatis in accusamus quisquam.Lorem ipsum dolor sit amet consect
        adipisicing elit.
        <ul className="list-disc ml-5 mt-2">{listBenefits}</ul>
      </p>

      <button
        onClick={(f) => AddCart(judul, f)}
        className="bg-blue-500  py-2 px-4 rounded mt-6  text-white cursor-pointer hover:bg-blue-600 duration-150 items-center inline-flex  font-semibold"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="fill-current w-4 h-4 mr-2"
        >
          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span>Add to Cart</span>
      </button>
      <CheckDiskon isDiskon={isDiskon} />
    </div>
  );
}
function AddCart(f) {
  return console.log("Membeli Product " + f);
}

export default App;
