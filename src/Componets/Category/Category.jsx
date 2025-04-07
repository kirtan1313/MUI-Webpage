import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './Category.css';

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
        slidesToShow: 5, // Show 5 items at a time
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } }, // Tablets
            { breakpoint: 768, settings: { slidesToShow: 2 } },  // Mobile
            { breakpoint: 480, settings: { slidesToShow: 1 } },  // Small screens
        ],
    };

    return (
        <div style={{ padding: "40px 20px", }}>
            {/* Category Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" ,paddingBottom: "30px" }}>
                <h2 style={{ fontWeight: "bold", fontSize: "24px" }}>Category</h2>
            </div>

            {/* Category Carousel */}
            <Slider {...settings}>
                {categoryData.map((item) => (
                    <div key={item.id} style={{ padding: "10px", }}>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "12px",
                                // padding: "20px",
                                width:'250px',
                                height:'200px',
                                margin: "0 10px", 
                                background: "#fff",
                                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.3)",
                                textAlign: "center",
                                transition: "transform 0.3s ease",
                                

                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-8px) scale(1.02)"; 
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0) scale(1)"; 
                            }}
                        >
                            <img src={item.icon} alt={item.name} style={{ width: "50px", height: "50px" }} />
                            <p style={{ marginTop: "10px", fontWeight: "bold", color: "#222" }}>{item.name}</p>
                        </div>
                    </div>
                ))}
            </Slider>

            {/* Custom CSS for Arrows */}
            <style>
                {`
          .arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: #fff;
            border-radius: 50%;
            box-shadow: 0px 2px 10px rgba(0,0,0,0.2);
            cursor: pointer;
            padding: 10px;
            z-index: 10;
          }
          .next {
            right: -6px;
          }
          .prev {
            left: -25px;
          }
        `}
            </style>
        </div>
    );
}

export default Category;
