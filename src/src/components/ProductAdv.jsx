import { useEffect, useRef, useState } from "react";
import "./ProductAdv.css";

const products = [
  {
    id: 1,
        image: "/products/Accounting.jpg",
        title: "MicroAccount",
    description: "برنامج متكامل به دورة محاسبية كاملة."
  },
  {
    id: 2,
      image: "/products/Inventory.jpg",
      title: "MicroStore",
    description: "إدارة المخزون الدقيق يفيد فى مخازن قطع الغيار وأى نشاط به عدد كبير من الأصناف."
  },
  {
    id: 3,
      image: "/products/HrBackground.jpg",
      title: "HR",
    description: "الموارد البشرية والمرتبات."
  },
  {
    id: 4,
      image: "/products/VariableWages.jpg",
      title: "VariableWages",
    description: "الأجور المتغيرة للعمالة غير المنتظمة."
  },
  {
    id: 5,
      image: "/products/Production1.jpg",
      title: "AgroPorts",
    description: "إدارة محطات تصدير الحاصلات الزراعية."
    },
    {
        id: 6,
        image: "/products/SecurityBackground.jpg",
        title: "Security",
        description: "متابعة أحوال الأمن على البوابات."
    },
    {
        id: 7,
        image: "/products/Car2.jpg",
        title: "TransportServices",
        description: "إدارة أنشطة مكاتب النقل."
    },
    {
        id: 8,
        image: "/products/Charities.jpg",
        title: "Charities",
        description: "الجمعيات الخيرية."
    },
    {
        id: 9,
        image: "/products/Clinic.jpg",
        title: "ClinicSystem",
        description: "إدارة العيادات الطبية."
    },
    {
        id: 10,
        image: "/products/PetrolStation.jpg",
        title: "PetrolStations",
        description: "إدارة محطات الوقود."
    },
    {
        id: 11,
        image: "/products/Mezan2.jpg",
        title: "TruckScale",
        description: "تسجيل قراءات ميزان البسكول بشكل ألى عن طريق الإتصال بالميزان دون تدخل بشرى."
    },
    {
        id: 12,
        image: "/products/Logisty.jpg",
        title: "LogistyDocsCreator",
        description: "إصدار وثائق النقل على منصة لوجيستى بالمملكة العربية السعودية."
    }
];

export default function ProductAdv() {
  const containerRef = useRef(null);
  const [isHorizontal, setIsHorizontal] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsHorizontal(window.innerWidth < 900);
    };

    checkSize();

    window.addEventListener("resize", checkSize);

    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  const scrollLeft = () => {
    containerRef.current?.scrollBy({
      left: -300,
      behavior: "smooth"
    });
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({
      left: 300,
      behavior: "smooth"
    });
  };

  return (
    <section className={`product - adv ${ isHorizontal ? "horizontal" : "vertical" } `}>

      <div className="adv-title">
        <p>Discover our latest products</p>
      </div>

      {isHorizontal && (
        <button
          className="adv-arrow adv-arrow-left"
          onClick={scrollLeft}
          aria-label="Previous products"
        >
          ‹
        </button>
      )}

      <div
        ref={containerRef}
        className="products-container"
      >
        {products.map((product) => (
          <article className="product-card" key={product.id}>

            <div className="product-image">
              <img
                src={product.image}
                alt={product.title}
              />
            </div>

            <div className="product-content">
              <h3>{product.title}</h3>

              <p>
                {product.description}
              </p>

              <button className="product-button">
                View Product
              </button>
            </div>

          </article>
        ))}
      </div>

      {isHorizontal && (
        <button
          className="adv-arrow adv-arrow-right"
          onClick={scrollRight}
          aria-label="Next products"
        >
          ›
        </button>
      )}

    </section>
  );
}
