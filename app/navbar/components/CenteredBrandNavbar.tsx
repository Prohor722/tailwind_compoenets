const CenteredBrandNavbar = () => {
  return (
    <nav className="w-full max-w-4xl bg-blue-50 px-6 py-4 rounded flex flex-col md:flex-row md:items-center md:justify-between shadow">
      <div className="text-2xl font-semibold text-blue-700 text-center md:text-left">
        BrandName
      </div>
      <ul className="flex justify-center gap-6 mt-4 md:mt-0 font-medium text-blue-800">
        <li>
          <a href="#" className="hover:underline">
            Features
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Pricing
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Docs
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default CenteredBrandNavbar;
