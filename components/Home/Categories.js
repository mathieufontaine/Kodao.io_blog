import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const categories = [
  "All Articles",
  "Opinion & Insights",
  "Case Studies",
  "Guides & Tutorials",
];

const Categories = ({ filterCategories, filterMobile, title, openMenu }) => {
  return (
    <section className="lg:sticky lg:top-0 relative z-10">
      <div className="container py-4">
        {/* mobile version */}
        <div className="md:hidden w-full">
          {categories.map((cat, index) => (
            <div
              key={index}
              className={`cursor-pointer ${
                openMenu || cat === title ? "block" : "hidden"
              }`}
              onClick={() => filterMobile(cat)}
            >
              <div className="flex justify-between items-center">
                <h4 className="text-left text-xl px-8 py-4">{cat}</h4>
                {index === 0 && openMenu && (
                  <FontAwesomeIcon icon={faAngleUp} className="mr-3 text-lg" />
                )}
                {cat === title && !openMenu && (
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="mr-3 text-lg"
                  />
                )}
              </div>
              <hr
                className={`mx-auto transition-all ${
                  cat === title ? "h-1 bg-accent mx-2" : "md:h-1 md:bg-gray-200"
                }`}
              />
            </div>
          ))}
        </div>

        {/* desktop version */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 w-full items-center text-center">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => filterCategories(cat)}
            >
              <h4 className="text-xl px-8 py-4 hover:text-accent">{cat}</h4>
              <hr
                className={`mx-auto transition-all ${
                  cat === title ? "h-1 bg-accent mx-2" : "h-1 bg-gray-200"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
