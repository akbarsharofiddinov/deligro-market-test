import { Banner, Cart, Products, SearchInput } from "@/components";
import { useEdisonContext } from "@/context/EdisonContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const { isOpen } = useEdisonContext();

  const navigate = useNavigate();

  function navigateCategoriesPage() {
    navigate("/categories");
  }

  return (
    <section className="section-home">
      <div className="container">
        <div
          className="home-inner"
          style={isOpen ? { display: "none" } : { display: "block" }}
        >
          <Banner />
          <SearchInput navigateCategoriesPage={navigateCategoriesPage} />
          <Products />
        </div>
        <Cart isOpen={isOpen} />
      </div>
    </section>
  );
}

export default Home;
