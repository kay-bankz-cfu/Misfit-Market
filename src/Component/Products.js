import React from "react";
import Productcard from "./Produtcard";
import Follow from "./Follow";
import Button from "./Button";
import { Link } from "react-router-dom";

function Products() {
  const goods = [
    {
      images: ["2image.jpg", "strawberry1.jpg", "4image.jpg"],
      name: "Strawbery",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Strawberries, scientifically known as Fragaria × ananassa, ar...",
      price: "$1500",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "fruit.jpg", "4image.jpg"],
      name: "Apple",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description: "Apple, scientifically known as Fragaria × ananassa, ar...",
      price: "$1100",
      percent: "$17",
    },
    {
      images: ["2image.jpg", "orange1.jpg", "4image.jpg"],
      name: "Orange",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description: "Orange, scientifically known as Fragaria × ananassa, ar...",
      price: "$1000",
      percent: "$9",
    },
    {
      images: ["2image.jpg", "3image.png", "4image.jpg"],
      name: "Biscuite",
      category: "Paster",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Biscuite, scientifically known as Fragaria × ananassa, ar...",
      price: "$900",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "2image.jpg", "4image.jpg"],
      name: "Strawbery",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Strawberries, scientifically known as Fragaria × ananassa, ar...",
      price: "$1500",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "8image.png", "4image.jpg"],
      name: "Orange",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description: "Orange, scientifically known as Fragaria × ananassa, ar...",
      price: "$1600",
      percent: "$13",
    },
    {
      images: ["2image.jpg", "9image.png", "4image.jpg"],
      name: "Chocolate",
      category: "Paster",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Chocolate, scientifically known as Fragaria × ananassa, ar...",
      price: "$1600",
      percent: "$12",
    },
    {
      images: ["2image.jpg", "20image.jpg", "4image.jpg"],
      name: "Strawbery",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Strawberries, scientifically known as Fragaria × ananassa, ar...",
      price: "$1500",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "1image.jpg", "4image.jpg"],
      name: "Strawbery",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Strawberries, scientifically known as Fragaria × ananassa, ar...",
      price: "$1500",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "24image.jpg", "4image.jpg"],
      name: "Orange",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description: "Orange, scientifically known as Fragaria × ananassa, ar...",
      price: "$1200",
      percent: "$15",
    },
    {
      images: ["2image.jpg", "17image.jpg", "4image.jpg"],
      name: "Strawbery",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Strawberries, scientifically known as Fragaria × ananassa, ar...",
      price: "$1500",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "15image.jpg", "4image.jpg"],
      name: "Strawbery",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Strawberries, scientifically known as Fragaria × ananassa, ar...",
      price: "$1500",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "19image.jpg", "4image.jpg"],
      name: "Strawbery",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Strawberries, scientifically known as Fragaria × ananassa, ar...",
      price: "$1500",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "20image.jpg", "4image.jpg"],
      name: "Strawbery",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Strawberries, scientifically known as Fragaria × ananassa, ar...",
      price: "$1500",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "15image.jpg", "4image.jpg"],
      name: "Apple",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Strawberries, scientifically known as Fragaria × ananassa, ar...",
      price: "$1500",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "19image.jpg", "4image.jpg"],
      name: "Strawbery",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Strawberries, scientifically known as Fragaria × ananassa, ar...",
      price: "$1500",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "10image.jpg", "4image.jpg"],
      name: "Strawbery",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Strawberries, scientifically known as Fragaria × ananassa, ar...",
      price: "$1500",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "20image.jpg", "4image.jpg"],
      name: "Strawbery",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Strawberries, scientifically known as Fragaria × ananassa, ar...",
      price: "$1500",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "6image.png", "4image.jpg"],
      name: "Galic",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description: "Galic, scientifically known as Fragaria × ananassa, ar...",
      price: "$1000",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "13image.png", "4image.jpg"],
      name: "Strawbery",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Strawberries, scientifically known as Fragaria × ananassa, ar...",
      price: "$1500",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "17image.jpg", "4image.jpg"],
      name: "Strawbery",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Strawberries, scientifically known as Fragaria × ananassa, ar...",
      price: "$1500",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "2image.jpg", "4image.jpg"],
      name: "Strawbery",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Strawberries, scientifically known as Fragaria × ananassa, ar...",
      price: "$1500",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "19image.jpg", "4image.jpg"],
      name: "Strawbery",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Strawberries, scientifically known as Fragaria × ananassa, ar...",
      price: "$1500",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "10image.jpg", "4image.jpg"],
      name: "Strawbery",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Strawberries, scientifically known as Fragaria × ananassa, ar...",
      price: "$1500",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "23image.jpg", "4image.jpg"],
      name: "Strawbery",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Strawberries, scientifically known as Fragaria × ananassa, ar...",
      price: "$1500",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "strawberry1.jpg", "4image.jpg"],
      name: "Strawbery",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Strawberries, scientifically known as Fragaria × ananassa, ar...",
      price: "$1500",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "fruit.jpg", "4image.jpg"],
      name: "Apple",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description: "Apple, scientifically known as Fragaria × ananassa, ar...",
      price: "$1100",
      percent: "$17",
    },
    {
      images: ["2image.jpg", "orange1.jpg", "4image.jpg"],
      name: "Orange",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description: "Orange, scientifically known as Fragaria × ananassa, ar...",
      price: "$1000",
      percent: "$9",
    },
    {
      images: ["2image.jpg", "3image.png", "4image.jpg"],
      name: "Biscuite",
      category: "Paster",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Biscuite, scientifically known as Fragaria × ananassa, ar...",
      price: "$900",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "2image.jpg", "4image.jpg"],
      name: "Strawbery",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Strawberries, scientifically known as Fragaria × ananassa, ar...",
      price: "$1500",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "8image.png", "4image.jpg"],
      name: "Orange",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description: "Orange, scientifically known as Fragaria × ananassa, ar...",
      price: "$1600",
      percent: "$13",
    },
    {
      images: ["2image.jpg", "9image.png", "4image.jpg"],
      name: "Chocolate",
      category: "Paster",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Chocolate, scientifically known as Fragaria × ananassa, ar...",
      price: "$1600",
      percent: "$12",
    },
    {
      images: ["2image.jpg", "20image.jpg", "4image.jpg"],
      name: "Strawbery",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Strawberries, scientifically known as Fragaria × ananassa, ar...",
      price: "$1500",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "1image.jpg", "4image.jpg"],
      name: "Strawbery",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Strawberries, scientifically known as Fragaria × ananassa, ar...",
      price: "$1500",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "24image.jpg", "4image.jpg"],
      name: "Orange",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description: "Orange, scientifically known as Fragaria × ananassa, ar...",
      price: "$1200",
      percent: "$15",
    },
    {
      images: ["2image.jpg", "17image.jpg", "4image.jpg"],
      name: "Strawbery",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Strawberries, scientifically known as Fragaria × ananassa, ar...",
      price: "$1500",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "15image.jpg", "4image.jpg"],
      name: "Strawbery",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Strawberries, scientifically known as Fragaria × ananassa, ar...",
      price: "$1500",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "19image.jpg", "4image.jpg"],
      name: "Strawbery",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Strawberries, scientifically known as Fragaria × ananassa, ar...",
      price: "$1500",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "20image.jpg", "4image.jpg"],
      name: "Strawbery",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Strawberries, scientifically known as Fragaria × ananassa, ar...",
      price: "$1500",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "15image.jpg", "4image.jpg"],
      name: "Apple",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Strawberries, scientifically known as Fragaria × ananassa, ar...",
      price: "$1500",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "19image.jpg", "4image.jpg"],
      name: "Strawbery",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Strawberries, scientifically known as Fragaria × ananassa, ar...",
      price: "$1500",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "10image.jpg", "4image.jpg"],
      name: "Strawbery",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Strawberries, scientifically known as Fragaria × ananassa, ar...",
      price: "$1500",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "20image.jpg", "4image.jpg"],
      name: "Strawbery",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Strawberries, scientifically known as Fragaria × ananassa, ar...",
      price: "$1500",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "6image.png", "4image.jpg"],
      name: "Galic",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description: "Galic, scientifically known as Fragaria × ananassa, ar...",
      price: "$1000",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "13image.png", "4image.jpg"],
      name: "Strawbery",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Strawberries, scientifically known as Fragaria × ananassa, ar...",
      price: "$1500",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "17image.jpg", "4image.jpg"],
      name: "Strawbery",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Strawberries, scientifically known as Fragaria × ananassa, ar...",
      price: "$1500",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "2image.jpg", "4image.jpg"],
      name: "Strawbery",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Strawberries, scientifically known as Fragaria × ananassa, ar...",
      price: "$1500",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "19image.jpg", "4image.jpg"],
      name: "Strawbery",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Strawberries, scientifically known as Fragaria × ananassa, ar...",
      price: "$1500",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "10image.jpg", "4image.jpg"],
      name: "Strawbery",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Strawberries, scientifically known as Fragaria × ananassa, ar...",
      price: "$1500",
      percent: "$10",
    },
    {
      images: ["2image.jpg", "23image.jpg", "4image.jpg"],
      name: "Strawbery",
      category: "Fruit",
      // luscious and vibrant fruits celebrated for their sweet and refreshing flavor.
      description:
        "Strawberries, scientifically known as Fragaria × ananassa, ar...",
      price: "$1500",
      percent: "$10",
    },
  ];

  const style = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  };

  return (
    <div>
      <div className="misfits">
        <h2>
          <a href="/">
            Misfits Market🛍️
            <span style={{ margin: "10px" }}> {/* <FiCamera /> */}</span>
          </a>
        </h2>

        <input type="search" id="search" placeholder="Search" />

        <div className="about">
          <div className="about-header">
            <h3>
              <a href="/about">About Us</a>
            </h3>

            {/* <ul className="about-list">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Sevices</li>
                  </ul> */}
          </div>
          <h3>
            <a href="/login">Login</a>
          </h3>

          <a href="/register">
            <h3>Sign in</h3>
          </a>

          <Button />
        </div>
      </div>

      <div style={style}>
        {" "}
        {goods.length > 0 ? (
          goods.map((item, index) => {
            return (
              <Productcard
                key={index}
                id={index + 1}
                images={item.images[1]}
                name={item.name}
                category={item.category}
                description={item.description}
                price={item.price}
                percent={item.percent}
              />
            );
          })
        ) : (
          <p>We don't have product</p>
        )}
      </div>
      <Follow />
    </div>
  );
}
export default Products;
