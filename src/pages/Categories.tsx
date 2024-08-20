import React from "react";
import { SearchInput } from "@/components";
import apple from "../images/categories/apple.png";
import { FaAngleDown } from "react-icons/fa6";

const Categories: React.FC = () => {
  const categories = [
    {
      id: 0,
      name: "Category-1",
      image: apple,
      subCategories: [
        {
          id: 101,
          name: "Sub Category-1",
          image: apple,
        },
        {
          id: 102,
          name: "Sub Category-2",
          image: apple,
        },
        {
          id: 103,
          name: "Sub Category-3",
          image: apple,
        },
      ],
    },
    {
      id: 1,
      name: "Category-2",
      image: apple,
    },
    {
      id: 2,
      name: "Category-3",
      image: apple,
    },
    {
      id: 3,
      name: "Category-4",
      image: apple,
    },
    {
      id: 4,
      name: "Category-5",
      image: apple,
    },
    {
      id: 5,
      name: "Category-6",
      image: apple,
    },
  ];

  return (
    <>
      <main className="categories-page">
        <div className="container">
          <div className="page-inner">
            <SearchInput autoFocus={true} />
            <div className="categories">
              {categories.map((category) =>
                category.subCategories ? (
                  <div
                    className="category-item"
                    key={category.id}
                    onClick={() => {
                      document
                        .querySelector(".inner-category")
                        ?.classList.toggle("show");
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="category-inner">
                      <img src={category.image} alt="" />
                      <div className="body">
                        <h3 className="title">{category.name}</h3>
                        <span className="expand-btn">
                          <FaAngleDown />
                        </span>
                      </div>
                    </div>

                    <div className="inner-category">
                      {category.subCategories.map((subCategory) => (
                        <a
                          href="#"
                          className="subCategory-item"
                          key={subCategory.id}
                          style={{ color: "#333" }}
                        >
                          <img src={subCategory.image} alt="image" />
                          <div className="body">
                            <h3 className="title">{subCategory.name}</h3>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a href="#" className="category-item" key={category.id}>
                    <div className="category-inner">
                      <img src={category.image} alt="" />
                      <div className="body">
                        <h3 className="title">{category.name}</h3>
                        <span className="expand-btn">
                          <FaAngleDown />
                        </span>
                      </div>
                    </div>
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Categories;
