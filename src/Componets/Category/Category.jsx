import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./Category.css";

// Import category icons
import icon1 from "../../assets/Imges/icon-animal-products-drumsticks.png";
import icon2 from "../../assets/Imges/icon-bread-baguette.png";
import icon3 from "../../assets/Imges/icon-bread-herb-flour.png";
import icon4 from "../../assets/Imges/icon-soft-drinks-bottle.png";
import icon5 from "../../assets/Imges/icon-vegetables-broccoli.png";
import icon6 from "../../assets/Imges/icon-wine-glass-bottle.png";

function Category() {
    const categoryData = [
        { id: 1, name: "Fruits & Veges", icon: icon1 },
        { id: 2, name: "Breads & Sweets", icon: icon2 },
        { id: 3, name: "Fruits & Veges", icon: icon3 },
        { id: 4, name: "Fruits & Veges", icon: icon4 },
        { id: 5, name: "Fruits & Veges", icon: icon5 },
        { id: 6, name: "Fruits & Veges", icon: icon6 },
        { id: 7, name: "Fruits & Veges", icon: icon1 },
        { id: 8, name: "Breads & Sweets", icon: icon2 },
        { id: 9, name: "Fruits & Veges", icon: icon3 },
        { id: 10, name: "Fruits & Veges", icon: icon4 },
        { id: 11, name: "Fruits & Veges", icon: icon5 },
        { id: 12, name: "Fruits & Veges", icon: icon6 },
    ];

    // Custom navigation arrows
    const NextArrow = ({ onClick }) => (
        <div className="arrow next" onClick={onClick}>
            <KeyboardArrowRightIcon />
        </div>
    );

    const PrevArrow = ({ onClick }) => (
        <div className="arrow prev" onClick={onClick}>
            <KeyboardArrowLeftIcon />
        </div>
    );

    // Slick settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <div className="category-container">
            {/* Category Header */}
            <div className="category-header">
                <h2>Category</h2>
            </div>

            {/* Category Carousel */}
            <Slider {...settings}>
                {categoryData.map((item) => (
                    <div key={item.id}>
                        <div className="category-card">
                            <img src={item.icon} alt={item.name} />
                            <p>{item.name}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Category;
