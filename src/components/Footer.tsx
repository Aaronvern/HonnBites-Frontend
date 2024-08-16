
const Footer = () => {
  return (
    <footer className="bg-orange-400 mt-10 py-5 border-t-4 border-orange-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3">
            <h3 className= " font-semibold mb-2">
              HonnBites
            </h3>
            <p className="text-sm leading-relaxed">
              Order food online from local restaurants
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className=" font-semibold mb-2">
              About
            </h3>
            <ul className="text-sm leading-relaxed">
              <li>Team</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className=" font-semibold mb-2">
              Contact
            </h3>
            <ul className="text-sm leading-relaxed">
              <li><a href="https://youtu.be/xvFZjo5PgG0" target="_blank">lifesGood@honnbites.com</a></li>
              <li>+1 234 567 890</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-2 text-center">
        <p className="text-xs">
          &copy; {new Date().getFullYear()} HonnBites. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

