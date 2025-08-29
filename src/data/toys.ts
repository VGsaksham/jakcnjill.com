export interface Toy {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  age: string;
  image: string;
  images: string[]; // Array of image variants
  features: string[];
  inStock: boolean;
  rating: number;
  reviews: number;
  showPrice: boolean;
}

export const toys: Toy[] = [
  {
    id: 1,
    name: "8688 4*4 Jeep",
    description: "Premium 4x4 electric jeep with 6 powerful motors, built-in music system, LED headlights, and remote control. Perfect for outdoor adventures with 100kg weight capacity.",
    price: 25999,
    category: "cars/rideables",
    age: "2-14 years",
    image: "/img/jeep/img34.jpg",
    images: [
      "/img/jeep/img34.jpg",
      "/img/jeep/img35.jpg", 
      "/img/jeep/img36.jpg",
      "/img/jeep/img40.jpg"
    ],
    features: ["WEIGHT CAPACITY: 100 Kgs", "SELF DRIVING: Yes", "REMOTE CONTROL: Yes", "6 Motors", "Built-in Music System", "LED Headlights", "4x4 Drive"],
    inStock: true,
    rating: 4.8,
    reviews: 156,
    showPrice: false
  },
  {
    id: 2,
    name: "KP- 906",
    description: "High-performance electric jeep with advanced motor system, music player, and smooth handling. Features LED lighting and long battery life for extended playtime.",
    price: 18999,
    category: "cars/rideables",
    age: "6+ years",
    image: "/img/jeep/img35.jpg",
    images: [
      "/img/jeep/img35.jpg",
      "/img/jeep/img36.jpg"
    ],
    features: ["LED headlights", "Rechargeable battery", "Range up to 50 meters", "Music System", "Remote Control", "Safety Seat Belt"],
    inStock: true,
    rating: 4.6,
    reviews: 89,
    showPrice: false
  },
  {
    id: 3,
    name: "Mercedes Jeep",
    description: "Luxury Mercedes-style electric jeep with premium design, music system, and smooth ride. Features authentic Mercedes styling with modern electric technology.",
    price: 22499,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img36.jpg",
    images: [
      "/img/jeep/img36.jpg",
      "/img/jeep/img40.jpg"
    ],
    features: ["Mercedes Design", "Music System", "LED Lights", "Remote Control", "Safety Features", "Premium Build Quality"],
    inStock: true,
    rating: 4.7,
    reviews: 203,
    showPrice: false
  },
  {
    id: 4,
    name: "1166 Model Jeep Medium",
    description: "Medium-sized electric jeep perfect for younger drivers. Features easy controls, music system, and durable construction for safe outdoor adventures.",
    price: 17999,
    category: "cars/rideables",
    age: "3-14 years",
    image: "/img/jeep/img40.jpg",
    images: [
      "/img/jeep/img40.jpg",
      "/img/jeep/img41.jpg"
    ],
    features: ["Medium Size", "Easy Controls", "Music System", "LED Lights", "Safety Features", "Durable Construction"],
    inStock: true,
    rating: 4.9,
    reviews: 178,
    showPrice: false
  },
  {
    id: 5,
    name: "2188 Model Jeep",
    description: "Advanced electric jeep with enhanced features including GPS tracking, music system, and superior motor performance for the ultimate riding experience.",
    price: 28999,
    category: "cars/rideables",
    age: "8-14 years",
    image: "/img/jeep/img41.jpg",
    images: [
      "/img/jeep/img41.jpg"
    ],
    features: ["GPS Tracking", "Advanced Motor System", "Music Player", "LED Display", "Safety Alerts", "Long Battery Life"],
    inStock: true,
    rating: 4.5,
    reviews: 92,
    showPrice: false
  },
  {
    id: 6,
    name: "New Pobo Jeep",
    description: "Latest Pobo electric jeep with innovative design, superior motor system, and enhanced safety features. Perfect for adventurous kids.",
    price: 19999,
    category: "cars/rideables",
    age: "5-12 years",
    image: "/img/jeep/img42.jpg",
    images: [
      "/img/jeep/img42.jpg",
      "/img/jeep/img57.jpg"
    ],
    features: ["Innovative Design", "Superior Motors", "Enhanced Safety", "Music System", "LED Lights", "Remote Control"],
    inStock: true,
    rating: 4.4,
    reviews: 67,
    showPrice: false
  },
  {
    id: 7,
    name: "Mercedes Logo Jeep",
    description: "Premium Mercedes-branded electric jeep with authentic styling, powerful motors, and advanced features. Experience luxury in kids' electric vehicles.",
    price: 32499,
    category: "cars/rideables",
    age: "4-10 years",
    image: "/img/jeep/img58.jpg",
    images: [
      "/img/jeep/img58.jpg",
      "/img/jeep/img73.jpg"
    ],
    features: ["Mercedes Branding", "Powerful Motors", "Advanced Features", "Music System", "LED Display", "Premium Quality"],
    inStock: true,
    rating: 4.6,
    reviews: 134,
    showPrice: false
  },
  {
    id: 8,
    name: "Pobo Jeep 4*4",
    description: "4x4 Pobo electric jeep with advanced motor system, music player, and authentic jeep styling. Features Ford and Mercedes logo variants.",
    price: 24999,
    category: "cars/rideables",
    age: "8-16 years",
    image: "/img/jeep/img57.jpg",
    images: [
      "/img/jeep/img57.jpg",
      "/img/jeep/img58.jpg"
    ],
    features: ["4x4 Drive System", "Advanced Motors", "Music System", "Multiple Logo Options", "LED Lights", "Remote Control"],
    inStock: true,
    rating: 4.8,
    reviews: 245,
    showPrice: false
  },
  {
    id: 9,
    name: "Model-Dirt Bike",
    description: "Electric dirt bike for adventurous kids with powerful motor, rugged design, and off-road capabilities. Perfect for outdoor excitement.",
    price: 18999,
    category: "cars/rideables",
    age: "4-8 years",
    image: "/img/jeep/img74.jpg",
    images: [
      "/img/jeep/img74.jpg",
      "/img/test1.png"
    ],
    features: ["Off-road Design", "Powerful Motor", "Rugged Construction", "LED Lights", "Safety Features", "Long Battery Life"],
    inStock: true,
    rating: 4.7,
    reviews: 112,
    showPrice: false
  },
  {
    id: 10,
    name: "Model No-KP-906",
    description: "Compact electric vehicle with efficient motor system and modern design. Perfect for younger drivers with easy controls and safety features.",
    price: 15999,
    category: "cars/rideables",
    age: "5+ years",
    image: "/img/jeep/img73.jpg",
    images: [
     "/img/jeep/img73.jpg",
    ],
    features: ["Compact Design", "Efficient Motor", "Easy Controls", "Safety Features", "LED Lights", "Music System"],
    inStock: true,
    rating: 4.3,
    reviews: 88,
    showPrice: false
  },
  {
    id: 11,
    name: "Eord Jeep",
    description: "Ford-style electric jeep with authentic design, powerful motors, and premium features. Experience the Ford legacy in kids' electric vehicles.",
    price: 27499,
    category: "cars/rideables",
    age: "8+ years",
    image: "/img/jeep/img80.jpg",
    images: [
      "/img/jeep/img80.jpg",
      "/img/jeep/img81.jpg",
    ],
    features: ["Ford Design", "Powerful Motors", "Premium Features", "Music System", "LED Display", "Safety Alerts"],
    inStock: true,
    rating: 4.5,
    reviews: 156,
    showPrice: false
  },
  {
    id: 12,
    name: "Vintage mercedese",
    description: "Classic Mercedes-style electric jeep with vintage design elements and modern electric technology. Perfect blend of classic style and contemporary features.",
    price: 29999,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img89.jpg",
    images: [
      "/img/jeep/img89.jpg"
    ],
    features: ["Vintage Design", "Modern Technology", "Music System", "LED Lights", "Remote Control", "Premium Quality"],
    inStock: true,
    rating: 4.4,
    reviews: 298,
    showPrice: false
  },
  {
    id: 13,
    name: "Tractor",
    description: "Electric tractor with removable trolley for farm-style adventures. Features realistic tractor design with working parts and educational value.",
    price: 15999,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img96.jpg",
    images: [
      "/img/jeep/img96.jpg",
      "/img/jeep/img97.jpg"
    ],
    features: ["Removable Trolley", "Realistic Design", "Educational Value", "LED Lights", "Music System", "Safety Features"],
    inStock: true,
    rating: 4.4,
    reviews: 298,
    showPrice: false
  },
  {
    id: 14,
    name: "Ferrari Style",
    description: "Luxury Ferrari-style electric car with sleek aerodynamic design, powerful motor system, and premium features. Features authentic Ferrari styling with modern electric technology and smooth handling.",
    price: 8999,
    category: "cars/rideables",
    age: "3-12 years",
    image: "/img/jeep/img100.jpg",
    images: [
      "/img/jeep/img100.jpg"
    ],
    features: ["Ferrari Design", "Powerful Motor", "Premium Features", "Music System", "LED Lights", "Remote Control"],
    inStock: true,
    rating: 4.6,
    reviews: 234,
    showPrice: false
  },
  {
    id: 15,
    name: "Porsche",
    description: "Premium Porsche electric car with iconic design, advanced motor system, and superior performance. Features authentic Porsche styling with cutting-edge electric technology and smooth ride.",
    price: 6499,
    category: "cars/rideables",
    age: "4-10 years",
    image: "/img/jeep/img102.jpg",
    images: [
      "/img/jeep/img102.jpg"
    ],
    features: ["Porsche Design", "Advanced Motor", "Superior Performance", "Music System", "LED Display", "Premium Quality"],
    inStock: true,
    rating: 4.7,
    reviews: 189,
    showPrice: false
  },
  {
    id: 16,
    name: "Rolls Royce",
    description: "Luxury Rolls Royce electric car with elegant design, powerful motor system, and premium features. Features authentic Rolls Royce styling with sophisticated electric technology and smooth handling.",
    price: 12499,
    category: "cars/rideables",
    age: "5-14 years",
    image: "/img/jeep/img103.jpg",
    images: [
      "/img/jeep/img103.jpg"
    ],
    features: ["Rolls Royce Design", "Powerful Motor", "Premium Features", "Music System", "LED Lights", "Remote Control"],
    inStock: true,
    rating: 4.8,
    reviews: 156,
    showPrice: false
  },
  {
    id: 17,
    name: "Pagani Hybrid Style",
    description: "Exotic Pagani hybrid-style electric car with unique design, advanced motor system, and cutting-edge features. Features authentic Pagani styling with innovative hybrid technology and exceptional performance.",
    price: 3499,
    category: "cars/rideables",
    age: "6-14 years",
    image: "/img/jeep/img108.jpg",
    images: [
      "/img/jeep/img108.jpg",
      "/img/jeep/img109.jpg",
      "/img/jeep/img110.jpg"
    ],
    features: ["Pagani Design", "Hybrid Technology", "Advanced Motor", "Music System", "LED Display", "Remote Control"],
    inStock: true,
    rating: 4.5,
    reviews: 98,
    showPrice: false
  },
  {
    id: 18,
    name: "Thar Style Jeep",
    description: "Rugged Thar-style electric jeep with off-road design, powerful motor system, and adventure-ready features. Features authentic Thar styling with robust electric technology and excellent terrain handling.",
    price: 4499,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img113.jpg",
    images: [
      "/img/jeep/img113.jpg",
      "/img/jeep/img114.jpg"
    ],
    features: ["Thar Design", "Off-road Capability", "Powerful Motor", "Music System", "LED Lights", "Remote Control"],
    inStock: true,
    rating: 4.6,
    reviews: 112,
    showPrice: false
  },
  {
    id: 19,
    name: "6622 Kids Bike",
    description: "Rechargeable battery operated bike for kids. Features comfortable seating, safe design, and long battery life.",
    price: 3999,
    category: "bikes",
    age: "5-12 years",
    image: "/img/bikes/img01.jpg",
    images: [
      "/img/bikes/img01.jpg"
    ],
    features: ["Rechargeable Battery", "Safe Design", "Comfortable Seat", "Durable Build", "Easy Controls", "Parent Control"],
    inStock: true,
    rating: 4.4,
    reviews: 87,
    showPrice: false
  },
  {
    id: 20,
    name: "RE-17 Kids Bike",
    description: "Battery operated kids bike with vehicle model design. Features realistic styling and safe riding experience for children.",
    price: 8999,
    category: "bikes",
    age: "4-12 years",
    image: "/img/bikes/img05.jpg",
    images: [
      "/img/bikes/img05.jpg"
    ],
    features: ["Battery Operated", "Vehicle Model Design", "Safe Controls", "Sturdy Build", "LED Lights", "Music System"],
    inStock: true,
    rating: 4.7,
    reviews: 345,
    showPrice: false
  },
  {
    id: 21,
    name: "CB005 Mini Bike",
    description: "Indian electric mini bike designed specifically for kids. Features compact size and easy handling for young riders.",
    price: 12999,
    category: "bikes",
    age: "6-14 years",
    image: "/img/bikes/img05.png",
    images: [
      "/img/bikes/img05.png",
      "/img/bikes/img02.png"
    ],
    features: ["Electric Powered", "Compact Size", "Easy Handling", "Safety Features", "Durable Build", "Long Battery Life"],
    inStock: true,
    rating: 4.8,
    reviews: 267,
    showPrice: false
  },
  {
    id: 22,
    name: "6688 Tricycle",
    description: "3 wheel battery operated ride on bike for kids aged 1 to 2.5 years. Perfect first bike with extra stability and safety features.",
    price: 5999,
    category: "bikes",
    age: "1-2.5 years",
    image: "/img/bikes/img07.jpg",
    images: [
      "/img/bikes/img07.jpg",
      "/img/bikes/img08.jpg"
    ],
    features: ["3 Wheels", "Battery Operated", "Extra Stable", "Safe Design", "Parent Handle", "Comfortable Seat"],
    inStock: true,
    rating: 4.5,
    reviews: 178,
    showPrice: false
  },
  {
    id: 23,
    name: "A608 RO Green Bike",
    description: "Battery operated ride on bike in stylish green color. Features modern design and comfortable riding experience.",
    price: 7999,
    category: "bikes",
    age: "6-12 years",
    image: "/img/bikes/img09.jpg",
    images: [
      "/img/bikes/img09.jpg",
      "/img/bikes/img10.jpg"
    ],
    features: ["Modern Design", "Battery Powered", "Comfortable Seat", "LED Lights", "Safe Controls", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 234,
    showPrice: false
  },
  {
    id: 24,
    name: "PR Police Bike",
    description: "Police-themed battery operated bike for kids. Features authentic police styling and fun interactive elements.",
    price: 7999,
    category: "bikes",
    age: "6-12 years",
    image: "/img/bikes/img11.jpg",
    images: [
      "/img/bikes/img11.jpg",
      "/img/bikes/img12.jpg"
    ],
    features: ["Police Theme", "Siren Sounds", "LED Lights", "Safe Design", "Battery Operated", "Comfortable Ride"],
    inStock: true,
    rating: 4.6,
    reviews: 234,
    showPrice: false
  },
  {
    id: 25,
    name: "Vespa Classic",
    description: "Vespa-style battery operated ride on bike with MP3/USB/TF music functionality. Classic scooter design with modern features.",
    price: 7999,
    category: "bikes",
    age: "6-12 years",
    image: "/img/bikes/img13.jpg",
    images: [
      "/img/bikes/img13.jpg",
      "/img/bikes/img14.jpg"
    ],
    features: ["Music System", "USB Support", "Classic Design", "Battery Powered", "LED Lights", "Comfortable Seat"],
    inStock: true,
    rating: 4.6,
    reviews: 234,
    showPrice: false
  },
  {
    id: 26,
    name: "DL16530 Sport Bike",
    description: "Sporty battery operated ride on bike in vibrant red color. Features dynamic design and smooth performance.",
    price: 7999,
    category: "bikes",
    age: "6-12 years",
    image: "/img/bikes/img16.jpg",
    images: [
      "/img/bikes/img16.jpg",
      "/img/bikes/img15.jpg"
    ],
    features: ["Sport Design", "Battery Operated", "Dynamic Look", "Safe Controls", "LED Lights", "Comfortable Ride"],
    inStock: true,
    rating: 4.6,
    reviews: 234,
    showPrice: false
  },
  {
    id: 27,
    name: "PL6644 Lamborg",
    description: "Premium sports bike inspired by Lamborghini design. Features sleek styling and advanced features for young riders.",
    price: 7999,
    category: "bikes",
    age: "6-12 years",
    image: "/img/bikes/img17.jpg",
    images: [
      "/img/bikes/img17.jpg",
      "/img/bikes/img18.jpg"
    ],
    features: ["Sports Design", "Premium Build", "LED Lights", "Music System", "Safe Controls", "Battery Powered"],
    inStock: true,
    rating: 4.6,
    reviews: 234,
    showPrice: false
  },
  {
    id: 28,
    name: "Vespa Gulf",
    description: "12V big size Vespa scooter bike for kids. Features Gulf racing theme and premium build quality.",
    price: 7999,
    category: "bikes",
    age: "6-12 years",
    image: "/img/bikes/img19.jpg",
    images: [
      "/img/bikes/img19.jpg",
      "/img/bikes/img20.jpg"
    ],
    features: ["12V Power", "Gulf Theme", "Large Size", "Premium Quality", "LED Lights", "Music System"],
    inStock: true,
    rating: 4.6,
    reviews: 234,
    showPrice: false
  },
  {
    id: 29,
    name: "R3 Sport Bike",
    description: "Rechargeable battery operated ride on bike with R3 sports styling. Features dynamic design and excellent performance.",
    price: 7999,
    category: "bikes",
    age: "6-12 years",
    image: "/img/bikes/img21.jpg",
    images: [
      "/img/bikes/img21.jpg",
      "/img/bikes/img23.jpg"
    ],
    features: ["Sports Design", "Rechargeable", "Dynamic Look", "LED Lights", "Safe Controls", "Music System"],
    inStock: true,
    rating: 4.6,
    reviews: 234,
    showPrice: false
  },
  {
    id: 30,
    name: "R15 Electric",
    description: "R15 6666 battery operated kids electric ride on bike. Features racing inspired design and advanced safety features.",
    price: 7999,
    category: "bikes",
    age: "6-12 years",
    image: "/img/bikes/img24.jpg",
    images: [
      "/img/bikes/img24.jpg",
      "/img/bikes/img25.jpg"
    ],
    features: ["Racing Design", "Electric Powered", "Safety Features", "LED Lights", "Music System", "Comfortable Seat"],
    inStock: true,
    rating: 4.6,
    reviews: 234,
    showPrice: false
  },
  {
    id: 31,
    name: "V10 Premium",
    description: "V10 rechargeable battery-powered kids premium ride-on bike. Features high-end build quality and advanced features.",
    price: 7999,
    category: "bikes",
    age: "6-12 years",
    image: "/img/bikes/img26.jpg",
    images: [
      "/img/bikes/img26.jpg",
      "/img/bikes/img27.jpg"
    ],
    features: ["Premium Build", "Rechargeable", "Advanced Features", "LED Lights", "Music System", "Parent Control"],
    inStock: true,
    rating: 4.6,
    reviews: 234,
    showPrice: false
  },
  {
    id: 32,
    name: "HSV6 Electric Scooty",
    description: "Kids electric scooty bike with premium features. Battery-powered ride-on with smooth handling and modern design for young riders.",
    price: 7999,
    category: "bikes",
    age: "6-12 years",
    image: "/img/bikes/img28.png",
    images: [
      "/img/bikes/img28.png",
      "/img/bikes/img29.jpg"
    ],
    features: ["Electric Powered", "Smooth Handling", "Modern Design", "LED Lights", "Safe Controls", "Parent Remote"],
    inStock: true,
    rating: 4.6,
    reviews: 234,
    showPrice: false
  },
  {
    id: 33,
    name: "Ducati Sport",
    description: "Rechargeable battery operated bike with authentic Ducati styling. Features sporty design and premium build quality for an exciting riding experience.",
    price: 7999,
    category: "bikes",
    age: "6-12 years",
    image: "/img/bikes/img30.jpg",
    images: [
      "/img/bikes/img30.jpg"
    ],
    features: ["Ducati Design", "Sports Styling", "Battery Powered", "LED Lights", "Racing Sound", "Safe Controls"],
    inStock: true,
    rating: 4.6,
    reviews: 234,
    showPrice: false
  },
  {
    id: 34,
    name: "V30 Motorbike",
    description: "Battery operated kids motorbike with realistic design. Features advanced ride-on capabilities and premium safety features for young riders.",
    price: 7999,
    category: "bikes",
    age: "6-12 years",
    image: "/img/bikes/img31.jpg",
    images: [
      "/img/bikes/img31.jpg",
      "/img/bikes/img32.png",
      "/img/bikes/img33.png"
    ],
    features: ["Realistic Design", "Battery Operated", "Safe Controls", "LED Display", "Music System", "Comfortable Seat"],
    inStock: true,
    rating: 4.6,
    reviews: 234,
    showPrice: false
  },
  {
    id: 35,
    name: "Harley Chopper",
    description: "24V electric scooter bike with Harley-inspired chopper cruiser design. Premium kids' ride-on with authentic styling and powerful performance.",
    price: 7999,
    category: "bikes",
    age: "6-12 years",
    image: "/img/bikes/img34.png",
    images: [
      "/img/bikes/img34.png",
      "/img/bikes/img35.png"
    ],
    features: ["24V Power", "Chopper Design", "Cruiser Style", "LED Lights", "Custom Sound", "Premium Build"],
    inStock: true,
    rating: 4.6,
    reviews: 234,
    showPrice: false
  },
  {
    id: 36,
    name: "Adult E-Bike",
    description: "Electric cycle for adults with dual pedal and battery operation. Features high-performance motor and comfortable riding position for daily commute.",
    price: 7999,
    category: "bikes",
    age: "16+ years",
    image: "/img/bikes/img36.png",
    images: [
      "/img/bikes/img36.png",
      "/img/bikes/img37.png"
    ],
    features: ["Pedal Assist", "Battery Power", "Adult Size", "Comfortable Seat", "High Performance", "Long Range"],
    inStock: true,
    rating: 4.6,
    reviews: 234,
    showPrice: false
  },
  {
    id: 37,
    name: "Monkey Bike",
    description: "Petrol ride-on bike for ages 5+ with impressive 150 kg weight capacity. Features authentic monkey bike design and reliable performance.",
    price: 7999,
    category: "bikes",
    age: "5+ years",
    image: "/img/bikes/img38.png",
    images: [
      "/img/bikes/img38.png"
    ],
    features: ["150kg Capacity", "Petrol Powered", "Authentic Design", "Durable Build", "Safe Controls", "High Performance"],
    inStock: true,
    rating: 4.6,
    reviews: 234,
    showPrice: false
  },
  {
    id: 38,
    name: "Adult E-Scooter",
    description: "Battery operated electric scooter designed for adults. Features modern design and efficient performance for urban mobility.",
    price: 7999,
    category: "bikes",
    age: "16+ years",
    image: "/img/bikes/img39.png",
    images: [
      "/img/bikes/img39.png",
      "/img/bikes/img40.png"
    ],
    features: ["Adult Size", "Battery Powered", "Urban Design", "Foldable", "LED Lights", "Quick Charging"],
    inStock: true,
    rating: 4.6,
    reviews: 234,
    showPrice: false
  },
  {
    id: 39,
    name: "Electric Kids Bike (1)",
    description: "Battery operated kids bike. New image upload.",
    price: 7999,
    category: "bikes",
    age: "4-12 years",
    image: "/img/bikes/img (1).jpeg",
    images: [
      "/img/bikes/img (1).jpeg"
    ],
    features: ["Battery Operated", "LED Lights", "Safe Controls", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 40,
    name: "Electric Kids Bike (12)",
    description: "Battery operated kids bike. New image upload.",
    price: 7999,
    category: "bikes",
    age: "4-12 years",
    image: "/img/bikes/img (12).jpeg",
    images: [
      "/img/bikes/img (12).jpeg"
    ],
    features: ["Battery Operated", "LED Lights", "Safe Controls", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 41,
    name: "Electric Kids Bike (17)",
    description: "Battery operated kids bike. New image upload.",
    price: 7999,
    category: "bikes",
    age: "4-12 years",
    image: "/img/bikes/img (17).jpeg",
    images: [
      "/img/bikes/img (17).jpeg"
    ],
    features: ["Battery Operated", "LED Lights", "Safe Controls", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 42,
    name: "Electric Kids Bike (20)",
    description: "Battery operated kids bike. New image upload.",
    price: 7999,
    category: "bikes",
    age: "4-12 years",
    image: "/img/bikes/img (20).jpeg",
    images: [
      "/img/bikes/img (20).jpeg"
    ],
    features: ["Battery Operated", "LED Lights", "Safe Controls", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 43,
    name: "Electric Kids Bike (25)",
    description: "Battery operated kids bike. New image upload.",
    price: 7999,
    category: "bikes",
    age: "4-12 years",
    image: "/img/bikes/img (25).jpeg",
    images: [
      "/img/bikes/img (25).jpeg"
    ],
    features: ["Battery Operated", "LED Lights", "Safe Controls", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 44,
    name: "Electric Kids Bike (29)",
    description: "Battery operated kids bike. New image upload.",
    price: 7999,
    category: "bikes",
    age: "4-12 years",
    image: "/img/bikes/img (29).jpeg",
    images: [
      "/img/bikes/img (29).jpeg"
    ],
    features: ["Battery Operated", "LED Lights", "Safe Controls", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 45,
    name: "Electric Kids Bike (41)",
    description: "Battery operated kids bike. New image upload.",
    price: 7999,
    category: "bikes",
    age: "4-12 years",
    image: "/img/bikes/img (41).jpeg",
    images: [
      "/img/bikes/img (41).jpeg"
    ],
    features: ["Battery Operated", "LED Lights", "Safe Controls", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 46,
    name: "Electric Jeep (2)",
    description: "Electric ride-on jeep. New image upload.",
    price: 15999,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img (2).jpeg",
    images: [
      "/img/jeep/img (2).jpeg"
    ],
    features: ["Remote Control", "LED Lights", "Music System", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 47,
    name: "Electric Jeep (3)",
    description: "Electric ride-on jeep. New image upload.",
    price: 15999,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img (3).jpeg",
    images: [
      "/img/jeep/img (3).jpeg"
    ],
    features: ["Remote Control", "LED Lights", "Music System", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 48,
    name: "Electric Jeep (4)",
    description: "Electric ride-on jeep. New image upload.",
    price: 15999,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img (4).jpeg",
    images: [
      "/img/jeep/img (4).jpeg"
    ],
    features: ["Remote Control", "LED Lights", "Music System", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 49,
    name: "Electric Jeep (5)",
    description: "Electric ride-on jeep. New image upload.",
    price: 15999,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img (5).jpeg",
    images: [
      "/img/jeep/img (5).jpeg"
    ],
    features: ["Remote Control", "LED Lights", "Music System", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 50,
    name: "Electric Jeep (6)",
    description: "Electric ride-on jeep. New image upload.",
    price: 15999,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img (6).jpeg",
    images: [
      "/img/jeep/img (6).jpeg"
    ],
    features: ["Remote Control", "LED Lights", "Music System", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 51,
    name: "Electric Jeep (7)",
    description: "Electric ride-on jeep. New image upload.",
    price: 15999,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img (7).jpeg",
    images: [
      "/img/jeep/img (7).jpeg"
    ],
    features: ["Remote Control", "LED Lights", "Music System", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 52,
    name: "Electric Jeep (8)",
    description: "Electric ride-on jeep. New image upload.",
    price: 15999,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img (8).jpeg",
    images: [
      "/img/jeep/img (8).jpeg"
    ],
    features: ["Remote Control", "LED Lights", "Music System", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 53,
    name: "Electric Jeep (9)",
    description: "Electric ride-on jeep. New image upload.",
    price: 15999,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img (9).jpeg",
    images: [
      "/img/jeep/img (9).jpeg"
    ],
    features: ["Remote Control", "LED Lights", "Music System", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 54,
    name: "Electric Jeep (10)",
    description: "Electric ride-on jeep. New image upload.",
    price: 15999,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img (10).jpeg",
    images: [
      "/img/jeep/img (10).jpeg"
    ],
    features: ["Remote Control", "LED Lights", "Music System", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 55,
    name: "Electric Jeep (11)",
    description: "Electric ride-on jeep. New image upload.",
    price: 15999,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img (11).jpeg",
    images: [
      "/img/jeep/img (11).jpeg"
    ],
    features: ["Remote Control", "LED Lights", "Music System", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 56,
    name: "Electric Jeep (13)",
    description: "Electric ride-on jeep. New image upload.",
    price: 15999,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img (13).jpeg",
    images: [
      "/img/jeep/img (13).jpeg"
    ],
    features: ["Remote Control", "LED Lights", "Music System", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 57,
    name: "Electric Jeep (14)",
    description: "Electric ride-on jeep. New image upload.",
    price: 15999,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img (14).jpeg",
    images: [
      "/img/jeep/img (14).jpeg"
    ],
    features: ["Remote Control", "LED Lights", "Music System", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 58,
    name: "Electric Jeep (18)",
    description: "Electric ride-on jeep. New image upload.",
    price: 15999,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img (18).jpeg",
    images: [
      "/img/jeep/img (18).jpeg"
    ],
    features: ["Remote Control", "LED Lights", "Music System", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 59,
    name: "Electric Jeep (19)",
    description: "Electric ride-on jeep. New image upload.",
    price: 15999,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img (19).jpeg",
    images: [
      "/img/jeep/img (19).jpeg"
    ],
    features: ["Remote Control", "LED Lights", "Music System", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 60,
    name: "Electric Jeep (21)",
    description: "Electric ride-on jeep. New image upload.",
    price: 15999,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img (21).jpeg",
    images: [
      "/img/jeep/img (21).jpeg"
    ],
    features: ["Remote Control", "LED Lights", "Music System", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 61,
    name: "Electric Jeep (23)",
    description: "Electric ride-on jeep. New image upload.",
    price: 15999,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img (23).jpeg",
    images: [
      "/img/jeep/img (23).jpeg"
    ],
    features: ["Remote Control", "LED Lights", "Music System", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 62,
    name: "Electric Jeep (27)",
    description: "Electric ride-on jeep. New image upload.",
    price: 15999,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img (27).jpeg",
    images: [
      "/img/jeep/img (27).jpeg"
    ],
    features: ["Remote Control", "LED Lights", "Music System", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 63,
    name: "Electric Jeep (28)",
    description: "Electric ride-on jeep. New image upload.",
    price: 15999,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img (28).jpeg",
    images: [
      "/img/jeep/img (28).jpeg"
    ],
    features: ["Remote Control", "LED Lights", "Music System", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 64,
    name: "Electric Jeep (30)",
    description: "Electric ride-on jeep. New image upload.",
    price: 15999,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img (30).jpeg",
    images: [
      "/img/jeep/img (30).jpeg"
    ],
    features: ["Remote Control", "LED Lights", "Music System", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 65,
    name: "Electric Jeep (31)",
    description: "Electric ride-on jeep. New image upload.",
    price: 15999,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img (31).jpeg",
    images: [
      "/img/jeep/img (31).jpeg"
    ],
    features: ["Remote Control", "LED Lights", "Music System", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 66,
    name: "Electric Jeep (32)",
    description: "Electric ride-on jeep. New image upload.",
    price: 15999,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img (32).jpeg",
    images: [
      "/img/jeep/img (32).jpeg"
    ],
    features: ["Remote Control", "LED Lights", "Music System", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 67,
    name: "Electric Jeep (33)",
    description: "Electric ride-on jeep. New image upload.",
    price: 15999,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img (33).jpeg",
    images: [
      "/img/jeep/img (33).jpeg"
    ],
    features: ["Remote Control", "LED Lights", "Music System", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 68,
    name: "Electric Jeep (34)",
    description: "Electric ride-on jeep. New image upload.",
    price: 15999,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img (34).jpeg",
    images: [
      "/img/jeep/img (34).jpeg"
    ],
    features: ["Remote Control", "LED Lights", "Music System", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 69,
    name: "Electric Jeep (35)",
    description: "Electric ride-on jeep. New image upload.",
    price: 15999,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img (35).jpeg",
    images: [
      "/img/jeep/img (35).jpeg"
    ],
    features: ["Remote Control", "LED Lights", "Music System", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 70,
    name: "Electric Jeep (36)",
    description: "Electric ride-on jeep. New image upload.",
    price: 15999,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img (36).jpeg",
    images: [
      "/img/jeep/img (36).jpeg"
    ],
    features: ["Remote Control", "LED Lights", "Music System", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 71,
    name: "Electric Jeep (37)",
    description: "Electric ride-on jeep. New image upload.",
    price: 15999,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img (37).jpeg",
    images: [
      "/img/jeep/img (37).jpeg"
    ],
    features: ["Remote Control", "LED Lights", "Music System", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 72,
    name: "Electric Jeep (38)",
    description: "Electric ride-on jeep. New image upload.",
    price: 15999,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img (38).jpeg",
    images: [
      "/img/jeep/img (38).jpeg"
    ],
    features: ["Remote Control", "LED Lights", "Music System", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 73,
    name: "Electric Jeep (42)",
    description: "Electric ride-on jeep. New image upload.",
    price: 15999,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img (42).jpeg",
    images: [
      "/img/jeep/img (42).jpeg"
    ],
    features: ["Remote Control", "LED Lights", "Music System", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 74,
    name: "Electric Jeep (43)",
    description: "Electric ride-on jeep. New image upload.",
    price: 15999,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img (43).jpeg",
    images: [
      "/img/jeep/img (43).jpeg"
    ],
    features: ["Remote Control", "LED Lights", "Music System", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 75,
    name: "Electric Jeep (44)",
    description: "Electric ride-on jeep. New image upload.",
    price: 15999,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img (44).jpeg",
    images: [
      "/img/jeep/img (44).jpeg"
    ],
    features: ["Remote Control", "LED Lights", "Music System", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 76,
    name: "Electric Jeep (45)",
    description: "Electric ride-on jeep. New image upload.",
    price: 15999,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img (45).jpeg",
    images: [
      "/img/jeep/img (45).jpeg"
    ],
    features: ["Remote Control", "LED Lights", "Music System", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 77,
    name: "Electric Jeep (46)",
    description: "Electric ride-on jeep. New image upload.",
    price: 15999,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img (46).jpeg",
    images: [
      "/img/jeep/img (46).jpeg"
    ],
    features: ["Remote Control", "LED Lights", "Music System", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },

  {
    id: 79,
    name: "Electric Jeep (48)",
    description: "Electric ride-on jeep. New image upload.",
    price: 15999,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img (48).jpeg",
    images: [
      "/img/jeep/img (48).jpeg"
    ],
    features: ["Remote Control", "LED Lights", "Music System", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 80,
    name: "Electric Jeep (49)",
    description: "Electric ride-on jeep. New image upload.",
    price: 15999,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img (49).jpeg",
    images: [
      "/img/jeep/img (49).jpeg"
    ],
    features: ["Remote Control", "LED Lights", "Music System", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 81,
    name: "Electric Jeep (50)",
    description: "Electric ride-on jeep. New image upload.",
    price: 15999,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img (50).jpeg",
    images: [
      "/img/jeep/img (50).jpeg"
    ],
    features: ["Remote Control", "LED Lights", "Music System", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  },
  {
    id: 82,
    name: "Electric Jeep (51)",
    description: "Electric ride-on jeep. New image upload.",
    price: 15999,
    category: "cars/rideables",
    age: "4-12 years",
    image: "/img/jeep/img (51).jpeg",
    images: [
      "/img/jeep/img (51).jpeg"
    ],
    features: ["Remote Control", "LED Lights", "Music System", "Durable Build"],
    inStock: true,
    rating: 4.6,
    reviews: 0,
    showPrice: false
  }
];

export const categories = [
  { id: "cars/rideables", name: "Cars & Rideables", icon: "🚗" },
  { id: "bikes", name: "Bikes & Rideables", icon: "🚲" },
  { id: "rakhdi", name: "Rakhdi", icon: "🎪" },
  { id: "cradles baby toys", name: "Cradles & Baby Toys", icon: "👶" },
  { id: "electronics", name: "Electronics", icon: "📱" }
]; 