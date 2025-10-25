import logo from "../assets/logo.png"; // you should re-import image based on your image location
const Logo = () => {
  return (
    <div className="flex items-center gap-1 ">
      <img className="w-10 " src={logo} alt="" />
      <h2 className="text-xl font-bold text-shadow-xs">
        Taxi
        <span className="text-primary"> Kitchen</span>
      </h2>
    </div>
  );
};

export default Logo;