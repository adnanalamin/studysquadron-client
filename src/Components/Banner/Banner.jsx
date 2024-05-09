import bannerImg from "../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div className="">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Welcome to Study Squadron
            </h1>
            <p className="mb-5">
              Your ultimate academic companion, offering personalized tutoring,
              study resources, and a supportive community to help you excel in
              your educational journey. Join us today and soar to success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
