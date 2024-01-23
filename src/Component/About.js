import React from "react";
import "../Component/About.css";
import Follow from "./Follow";

function About() {
  return (
    <>
      <div className="all-container">
        <div className="about-us">
          <h1>About Us</h1>
        </div>

        <div className="small">
          <small>
            Misfits Market is dedicated to making affordable, high-quality food
            more accessible while helping break the cycle of food waste.
            We work directly with farmers and makers to rescue organic produce
            and other grocery items that might
            otherwise go to waste, then deliver them to your door—all
            while passing the savings on to you. Every Misfits Market box
            you order benefits farmers, helps prevent food waste, and
            ultimately helps save our environment.
          </small>

          <h1>We start by finding inefficiencies in the food system</h1>

          <small>
            This distressing fact is really what started it all: Almost a third
            of what’s grown in the U.S. never gets harvested because it doesn’t
            meet the superficial standards of a traditional grocery store.
            Because we work closely with farmers and food makers, we know just
            how much food is going to waste every single day. And yet, there are
            millions of food-insecure households in the U.S. By being committed
            to fighting food waste, we’ve unlocked a new way to make healthy,
            quality food more affordable for more people. We’re not doing it
            alone, though. Our direct relationships with organic farmers and
            sustainably minded makers play a big part.
          </small>

          <h1>How we fight food waste</h1>

          <small>
            Three years ago, when we launched as a four-person team based in
            Philadelphia, we were hyper-focused (and still are) on rescuing
            “misfit” produce (hence the name and all.) We take in high-quality
            organic produce that sometimes looks a little different. Fruits and
            veggies that are too big, too small, or just sort of funny-looking.
            Oftentimes, though, it’s produce that’s simply considered “surplus.”
            Today, our scope has expanded to include other items you would find
            in a regular grocery store: cooking supplies, pantry staples, and
            much more. Similar to how we partner with farmers, we also work with
            food makers to reduce their waste. We take in their excess
            inventory—ranging from surplus to out-of-date packaging to
            short-dated items. (Short-dated means goods stamped with a “best-by”
            date that’s fewer than 6 weeks out.)
          </small>

          <h1>Quality at value</h1>

          <small>
            Organic, sustainable, and responsibly sourced are usually synonymous
            with paying a premium for the quality. But that’s not how we do
            things. We’re committed to providing quality at a value. Regardless
            of whether it looks a little different, our stuff is high quality
            and tends to be fresher than what you’d find in stores because it
            doesn’t hang out with middlemen or in storage.
          </small>

          <h1>Our location=your location</h1>

          <small>
            Food insecurity takes many forms, including not having convenient
            access to a grocery store. Whenever we launch in a new state, we aim
            to serve every zip code, regardless of how urban or how rural the
            area is—or what the median income per household happens to be. Click
            <a href=""> here</a> to see where we deliver.
          </small>
        </div>
      </div>
      <Follow/>
    </>
  );
}
export default About;
