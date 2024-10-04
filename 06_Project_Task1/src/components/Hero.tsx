import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero">
      {/* Flex Container */}
      <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
        {/* Left Item */}
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            Project Task 1
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi iste
            aliquid temporibus dolor! Consequatur itaque tenetur voluptatibus
            voluptates, veritatis neque earum quia, harum voluptas dicta maiores
            illum. Impedit, odio veritatis.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to="login"
              className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
            >
              Login
            </Link>
          </div>
        </div>
        {/* Image */}
        <div className="md:w-1/2 animate-fadeInDown">
          <img
            src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg"
            alt=""
            className="rounded-xl shadow-2xl" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
