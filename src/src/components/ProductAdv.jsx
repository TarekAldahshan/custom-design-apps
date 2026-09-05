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

  return (
      <div className="page-layout" style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          overflow: 'hidden',
          fontFamily: 'system-ui, sans-serif',

          /* Page-wide Background Configuration */
          backgroundColor: '#fbfaf7',
          backgroundImage: `
    linear-gradient(30deg, #f3efe6 12%, transparent 12.5%, transparent 87%, #f3efe6 87.5%, #f3efe6),
    linear-gradient(150deg, #f3efe6 12%, transparent 12.5%, transparent 87%, #f3efe6 87.5%, #f3efe6),
    linear-gradient(30deg, #f3efe6 12%, transparent 12.5%, transparent 87%, #f3efe6 87.5%, #f3efe6),
    linear-gradient(150deg, #f3efe6 12%, transparent 12.5%, transparent 87%, #f3efe6 87.5%, #f3efe6),
    linear-gradient(60deg, #f5f2eb 25%, transparent 25.5%, transparent 75%, #f5f2eb 75.5%, #f5f2eb),
    linear-gradient(60deg, #f5f2eb 25%, transparent 25.5%, transparent 75%, #f5f2eb 75.5%, #f5f2eb)
  `,
          backgroundSize: '80px 140px',
          backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px'
      }}>

          {/* Frozen Company Logo Header */}
          <header className="company-header" style={{ width: '100%', backgroundColor: '#fff', zIndex: 1000, boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
              <div className="logo-container" style={{ width: '100%', textAlign: 'center', padding: '20px 0' }}>
                  <img src="/CustomDesign.jpg"
                      alt="Company Logo"
                      style={{
                          width: '100%',
                          height: '150px', /* Maintains the correct aspect ratio while scaling full width */
                          display: 'block'
                      }} 
                  />
              </div>
          </header>

          {/* Scrollable Products Section */}
          <main style={{ flex: 1, overflowY: 'auto', padding: '40px 20px', backgroundColor: 'transparent' }}>
              <section className={`product-adv ${isHorizontal ? "horizontal" : "vertical"}`}>
                  <div className="adv-title">
                      <p>Discover our latest products</p>
                  </div>

                  {isHorizontal && (
                      <button className="adv-arrow adv-arrow-left" onClick={scrollLeft} aria-label="Previous products">
                          ‹
                      </button>
                  )}

                  <div ref={containerRef} className="products-container">
                      {products.map((product) => (
                          <article className="product-card" key={product.id}>
                              <div className="product-image">
                                  <img src={product.image} alt={product.title} />
                              </div>
                              <div className="product-content">
                                  <h3>{product.title}</h3>
                                  <p>{product.description}</p>
                              </div>
                          </article>
                      ))}
                  </div>
              </section>
          </main>

          <footer className="company-footer" style={{
              width: '100%',
              backgroundColor: '#0f172a',
              color: '#f8fafc',
              padding: '16px 40px', /* Reduced vertical padding for a cleaner single-line look */
              zIndex: 1000,
              borderTop: '1px solid #334155',
              boxSizing: 'border-box'
          }}>
              <div className="footer-container" style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between', /* Pushes content to the left, center, and right edges */
                  maxWidth: '1200px',
                  margin: '0 auto',
                  width: '100%'
              }}>
                  {/* Left Side: Bright Heading */}
                  <h4 style={{ margin: 0, fontSize: '0.875rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#38bdf8' }}>
                      Get In Touch
                  </h4>

                  {/* Center: Contact Links */}
                  <div className="contact-links" style={{ display: 'flex', alignItems: 'center' }}>
                      <a href="mailto:tdsystemsforyou@gmail.com" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500', backgroundColor: '#1e293b', padding: '8px 16px', borderRadius: '20px', border: '1px solid #475569', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                          ✉️ tdsystemsforyou@gmail.com
                      </a>
                  </div>

                  {/* Right Side: Copyright */}
                  <p style={{ margin: 0, fontSize: '0.75rem', color: '#94a3b8' }}>
                      © 2026 · All rights reserved.
                  </p>
              </div>
          </footer>
      </div>
  );
}
