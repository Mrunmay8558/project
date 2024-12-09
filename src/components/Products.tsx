import React from "react";
import { ArrowRight, Beaker, Shield, Truck } from "lucide-react";
import photo1 from "../assets/images/magnite.png";
import photo2 from "../assets/images/black_iron.png";
import photo3 from "../assets/images/micronized_iron.png";
import photo4 from "../assets/images/hemitie.jpg";

const products = [
  {
    name: "Magnetite (Fe3O4)",
    description: "High-grade magnetic iron oxide with exceptional purity",
    specs: [
      "Purity: 98% min",
      "Size: 45-150 microns",
      "Magnetic Strength: Superior",
    ],
    image: photo1,
  },
  {
    name: "Black Iron Oxide (Fe3O4)",
    description: "Premium quality black iron oxide for industrial applications",
    specs: ["Fe3O4 Content: 95% min", "Moisture: <0.5%", "pH Value: 6-8"],
    image: photo2,
  },
  {
    name: "Micaceous Iron Oxide (Fe2O3)",
    description: "Specialized iron oxide with micaceous structure",
    specs: ["Fe2O3: 85% min", "Particle Size: 45μm", "Aspect Ratio: >10:1"],
    image: photo3,
  },
  {
    name: "Hematite (Fe2O3)",
    description: "High-purity hematite for diverse industrial uses",
    specs: [
      "Fe2O3: 92% min",
      "Water Absorption: <0.5%",
      "Specific Gravity: 4.9-5.3",
    ],
    image: photo4,
  },
];

const features = [
  {
    icon: Beaker,
    title: "Quality Tested",
    description: "All products undergo rigorous quality testing",
  },
  {
    icon: Shield,
    title: "Certified Products",
    description: "International quality certifications",
  },
  {
    icon: Truck,
    title: "Global Shipping",
    description: "Worldwide delivery capabilities",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our Products</h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Delivering premium quality iron oxide products with consistent
          specifications and reliable performance
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                  {product.name}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.specs.map((spec, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <ArrowRight className="w-4 h-4 text-orange-500 mr-2" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-gray-50">
              <feature.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
