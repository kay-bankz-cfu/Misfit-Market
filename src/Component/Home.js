import React from "react";
// import { FiCamera } from "react-icons/fi";
// import { Link } from "react-router-dom";
import Button from "./Button";
import Card1 from "./Card1";
import Card3 from "./Card3";
import Cardb from "./Cardb";
import Check from "./Check";
import Form1 from "./Form1";
import Ugly from "./Ugly";
import Card4 from "./Card4";
import Follow from "./Follow";
import Signin from "./Signin";
import Login from "./Login";
import About from "./About";
import Contactus from "./Contactus";
// import Productcard from "./Productcard";
import Products from "./Products";
import { CiDollar } from "react-icons/ci";
import { TfiApple } from "react-icons/tfi";
import { FaRegThumbsUp } from "react-icons/fa";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div style={{ backgroundColor: "" }}>
        <div className="grocery">
          <div className="misfits">
            <h2>
              <a href="/">
                Misfits Market🛍️
                <span style={{ margin: "10px" }}>
                  {" "}
                  {/* <FiCamera /> */}
                </span>
              </a>
            </h2>

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
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0099ff"
              fill-opacity="1"
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            >
              {" "}
            </path>
          </svg> */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div className="cut">
              <h1>
                Cut your grocery <br /> bill and your food <br /> waste
              </h1>
              <div>
                Get exclusive savings on high-quality groceries that <br /> we
                save from going to waste.
              </div>
              <Button />
            </div>

            <div>
              <img
                src="/1image.jpg"
                style={{ width: "100%", height: "400px" }}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="join">
          <div className="free">
            <div className="dollar">
              <CiDollar />
            </div>{" "}
            <div>
              {" "}
              <h2>Join for free</h2>
              It pays to shop with us. You can
              <br /> <strong> save up to $1300 </strong>every year on
              <br /> high-quality grocery items.
            </div>
          </div>

          <div className="skip">
            <div className="dollar">
              <TfiApple />
            </div>
            <div>
              <h2>Skip The Store</h2>
              Customize your weekly order from <br />
              among 500+ produce, meat,
              <br />
              seafood, dairy, and bakery items.
            </div>
          </div>

          <div className="good">
            <div className="dollar">
              <FaRegThumbsUp />
            </div>
            <div>
              <h2>Do Some Good</h2>
              Joining for <strong>FREE</strong> helps fix a broken
              <br /> food system and build a more
              <br />
              sustainable future.
            </div>
          </div>
          <div className="based">
            *Based on a weekly average savings of $23.04 per order compared to
            retail grocery store. Actual savings may vary. **Customers in select
            delivery zip codes may be eligible for free shipping based on their
            free shipping threshold.
          </div>
        </div>

        <div className="card-text">
          <div className="card-div">
            <div>
              <Card1
                image="2image.jpg"
                name=" Organic
                  Blueberries"
                price="$3.99"
                trash="$5.99"
                percent="33% OFF"
              />
            </div>
            <div>
              <Card1
                image="3image.png"
                name=" Minor Figures Organic Oat Milk, 32 oz"
                price="$2.99"
                trash="$3.99"
                percent="25% OFF"
              />
            </div>
            <div>
              <Card1
                image="4image.png"
                name=" Cooks Venture
                Pasture-Raised, Heirloom"
                price="$5.99"
                trash="$9.99"
                percent="40% OFF"
              />
            </div>
            <div>
              <Card1
                image="5image.png"
                name="LesserEvil
                Organic Popcorn, Himalayan Pink"
                price="$2.99"
                trash="$3.99"
                percent="25% OFF"
              />
            </div>
            <div>
              <Card1
                image="6image.png"
                name="LesserEvil
                Organic Popcorn, Himalayan Pink"
                price="$5.79"
                trash="$7.99"
                percent="28% OFF"
              />
            </div>
            <div>
              <Card1
                image="8image.png"
                name="Organic Nectarines, 2lb Bag"
                price="$4.99"
                trash="$5.99"
                percent="17% OFF"
              />
            </div>
            <div>
              <Card1
                image="9image.png"
                name="Belgian Boys
                  X Misfits Upcycled Stroopwafel, 11.29"
                price="$6.99"
                trash="$9.99"
                percent="30% OFF"
              />
            </div>
            <div>
              <Card1
                image="10image.jpg"
                name="BelGioioso
                  Fresh Mozzarella"
                price="$5.49"
                trash="$7.99"
                percent="31% OFF"
              />
            </div>

            <div id="view">
              <Link style={{color: "black", fontSize:"30px", textDecoration:"none", fontWeight:"700"}} to="/Products">View</Link>
            </div>

            {/* <a href="/products" id="view">
              View More
            </a> */}

            {/* <div className="organic">
              <img src="2image.jpg" alt="" height={'60px'} width={'60px'}/>
              
              <p>33% off</p>

              <span>$3.99 <del>$5.99</del></span>
              <br/>
              Organic
              <br />
              Blueberries
            </div> */}
          </div>

          <div className="unlock">
            <h1>
              Cut your weekly <br />
              grocery bill
            </h1>

            <h2>
              Join for <span>FREE</span> and start saving
            </h2>
            <div className="some">
              <div className="mark">
                <IoCheckmarkDoneSharp />
              </div>
              <div>
                Unlock <b>savings of up to 40%</b> (sometimes
                <br /> more!) compared to grocery store prices.
              </div>
            </div>

            <div className="some">
              <div className="mark">
                <IoCheckmarkDoneSharp />
              </div>
              <div>
                Shop from <b>organic produce</b> and high
                <br /> quality{" "}
                <b>
                  meat, seafood, dairy products,
                  <br /> bakery
                </b>{" "}
                items, and other groceries that
                <br /> you’d typically pay a premium for
                <br /> elsewhere.
              </div>
            </div>
          
            <div className="some">
              <div className="mark">
                <IoCheckmarkDoneSharp />
              </div>
              Convenient weekly delivery that you can
              <br /> skip or pause anytime.
            </div>
          </div>
        </div>

        <marquee className="marque">
          Meat & Seafood·Fruits & Veggies·Bakery·Coffee & Tea·Snacks &
          Sweets·Dairy & Eggs·Deli·Pantry·Wine·Meat & Seafood·Fruits &
          Veggies·Bakery·Coffee & Tea·Snacks & Sweets·Dairy &
          Eggs·Deli·Pantry·Wine·
        </marquee>

        <div>
          <Check
            title="Check off your weekly grocery list"
            text="Shop everything from organic fruits and vegetables to high-quality meats and seafood, bakery items, and dairy products in just minutes—all while saving up to 40%. Plus, discover new sustainable brands you’ll love."
            image="12image.png"
          />
        </div>
        <div>
          <Ugly
            images="11image.png"
            titlee="The ugly problem"
            textt="It can be expensive to eat healthy. Yet almost half of the food grown in this country is thrown out because it can't be sold. That's where we come in."
          />
        </div>
        <div>
          <Check
            title="The funny-looking
              solution"
            text="We take in the high-quality food that grocery stores would rather let go to waste. Then, we find everything a good home. Your home."
            image="13image.png"
          />
        </div>

        <div className="image-banner">
          <img src="text.png" alt="" height={"420px"} width={"100%"} />
        </div>

        <div className="allcardb">
          <div>
            <Cardb
              image="14image.jpg"
              text="I love saving food so it doesn't go to waste. And I love the challenge of creating meals out of the products that are available each week."
              big="@chefjennyben"
            />
          </div>
          <div>
            <Cardb
              image="15image.jpg"
              text="I love saving food so it doesn't go to waste. And I love the challenge of creating meals out of the products that are available each week."
              big="@jesseahenning"
            />
          </div>
          <div>
            <Cardb
              image="16image.jpg"
              text="I love saving food so it doesn't go to waste. And I love the challenge of creating meals out of the products that are available each week."
              big="@Victoria"
            />
          </div>
        </div>

        <div className="explore">
          <h1>There's more to explore</h1>
          <p>
            Visit our blog for recipes, how-tos, and the latest Misfits Market
            news.
          </p>
          <div className="vegitable">
            <div>
              <Card3
                image="16image.jpg"
                text="Fruit and Vegitable that Don't Need To Be Refrigirated"
              />
            </div>
            <div>
              <Card3
                image="22image.jpg"
                text="Fruit and Vegitable that Don't Need To Be Refrigirated"
              />
            </div>
            <div>
              <Card3
                image="19image.jpg"
                text="Fruit and Vegitable that Don't Need To Be Refrigirated"
              />
            </div>
          </div>
          <div className="visit">
            <button>Visit Our Blog</button>
          </div>
        </div>

        <div className="made">
          <h1>If You Made It This Far...</h1>

          <small className="providing">
            Something tells us you would appreciate our newsletter: dinner
            <br />
            ideas, pics of funny fruit, and a bunch of other useful stuff.
          </small>

          <Form1 />

          <small className="providing">
            By providing your email address, you agree to our{" "}
            <a href=""> Terms of Service</a> and <a href="">Privacy policy</a>
          </small>
          <br />
          <button className="fun">Join the Fun</button>
        </div>

        <Follow />
      </div>
    </>
  );
}

export default Home;
