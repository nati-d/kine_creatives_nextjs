import images from "./images";
export const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Shop",
    path: "/shop",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export const services = [
  {
    id: 1,
    title: "Custom Crafted Creations",
    description:
      "Let your imagination soar with our custom crafting service. From personalized jewelry to unique home decor, our artisans bring your vision to life with meticulous attention to detail. Each piece is a reflection of your style, making it a truly special addition to your collection or a thoughtful gift for someone dear.",
    img: images.ServiceOne,
  },
  {
    id: 2,
    title: "Artisan Workshops & Classes",
    description:"Discover the joy of craftsmanship in our artisan workshops. Learn traditional techniques from expert instructors in a hands-on environment. Whether you're a beginner or a seasoned crafter, our classes offer a creative space to explore new skills and express your unique style through handmade creations.",
    img: images.ServiceTwo,
  },
];

export const products = [
    {
      "id": 1,
      "name": "Handcrafted Leather Wallet",
      "description": "Indulge in timeless elegance with our handcrafted leather wallet. Each piece is meticulously stitched and designed to last a lifetime.",
      "price": 49.99,
      "category": "Accessories",
      "image": images.picOne,
      "sub_description": {
        "size": "4.5\" x 3.5\"",
        "material": "Genuine leather"
      }
    },
    {
      "id": 2,
      "name": "Handwoven Wool Throw Blanket",
      "description": "Wrap yourself in luxury with our handwoven wool throw blanket. Made from the finest wool, it's both soft and stylish, perfect for cozy nights at home.",
      "price": 79.99,
      "category": "Home Decor",
      "image": images.picOne,
      "sub_description": {
        "size": "50\" x 60\"",
        "material": "Wool"
      }
    },
    {
      "id": 3,
      "name": "Sterling Silver Gemstone Ring",
      "description": "Make a statement with our sterling silver gemstone ring. Featuring a stunning gemstone centerpiece, it adds a pop of color and elegance to any outfit.",
      "price": 99.99,
      "category": "Jewelry",
      "image": images.picOne,
      "sub_description": {
        "size": "Adjustable",
        "material": "Sterling Silver, Gemstone"
      }
    },
    {
      "id": 4,
      "name": "Handcrafted Ceramic Mug Set",
      "description": "Start your day in style with our handcrafted ceramic mug set. Each mug is lovingly hand-painted, making every sip a delightful experience.",
      "price": 39.99,
      "category": "Kitchen & Dining",
      "image": images.picOne,
      "sub_description": {
        "size": "Standard",
        "material": "Ceramic"
      }
    },
    {
      "id": 5,
      "name": "Handmade Wooden Serving Tray",
      "description": "Serve in style with our handmade wooden serving tray. Crafted from sustainable wood, it's both durable and eco-friendly, perfect for entertaining guests.",
      "price": 59.99,
      "category": "Kitchen & Dining",
      "image": images.picOne,
      "sub_description": {
        "size": "18\" x 12\"",
        "material": "Wood"
      }
    },
    {
      "id": 6,
      "name": "Hand-Embroidered Linen Pillow Cover",
      "description": "Add a touch of elegance to your living space with our hand-embroidered linen pillow cover. Intricately stitched, it's a timeless accent for any sofa or bed.",
      "price": 29.99,
      "category": "Home Decor",
      "image": images.picOne,
      "sub_description": {
        "size": "18\" x 18\"",
        "material": "Linen"
      }
    },
    {
      "id": 7,
      "name": "Artisan Handmade Silver Earrings",
      "description": "Elevate your look with our artisan handmade silver earrings. Featuring intricate designs, they're the perfect accessory for any occasion.",
      "price": 69.99,
      "category": "Jewelry",
      "image": images.picOne,
      "sub_description": {
        "size": "1.5\" drop",
        "material": "Sterling Silver"
      }
    },
    {
      "id": 8,
      "name": "Hand-painted Ceramic Plant Pot",
      "description": "Bring a touch of nature indoors with our hand-painted ceramic plant pot. Each pot is uniquely designed, adding a pop of color to your home decor.",
      "price": 19.99,
      "category": "Home Decor",
      "image": images.picOne,
      "sub_description": {
        "size": "6\" diameter",
        "material": "Ceramic"
      }
    },
    {
      "id": 9,
      "name": "Hand-carved Wooden Jewelry Box",
      "description": "Store your treasures in style with our hand-carved wooden jewelry box. With intricate detailing, it's a beautiful addition to any vanity or dresser.",
      "price": 49.99,
      "category": "Accessories",
      "image": images.picOne,
      "sub_description": {
        "size": "8\" x 6\" x 4\"",
        "material": "Wood"
      }
    },
    {
      "id": 10,
      "name": "Hand-dyed Silk Scarf",
      "description": "Wrap yourself in luxury with our hand-dyed silk scarf. Made from the finest silk, it's lightweight and versatile, perfect for any season.",
      "price": 89.99,
      "category": "Accessories",
      "image": images.picOne,
      "sub_description": {
        "size": "70\" x 20\"",
        "material": "Silk"
      }
    }
  ]

  export const blogPosts = [
    {
      id: 1,
      title: "The Art of Handcrafted Pottery",
      author: "Emily Johnson",
      date: "2024-05-01",
      content: "Discover the timeless beauty and artistry of handcrafted pottery. In this post, we explore the history of pottery-making, the techniques involved in handcrafting pottery, and the unique characteristics that make each piece of handcrafted pottery truly special. Whether you're a pottery enthusiast or simply appreciate fine craftsmanship, this post is sure to inspire.",
      tags: ["Handcraft", "Pottery", "Artisan"],
      image: images.picTwo
    },
    {
      id: 2,
      title: "Handmade Jewelry: A Labor of Love",
      author: "Michaela Davis",
      date: "2024-04-25",
      content: "Explore the world of handmade jewelry and the passion that goes into crafting each piece by hand. From delicate necklaces to intricate earrings, handmade jewelry offers a level of detail and uniqueness that mass-produced pieces simply can't match. Join us as we celebrate the artistry of jewelry-making and the talented artisans who bring their creations to life.",
      tags: ["Handmade", "Jewelry", "Artisan"],
      image: images.picTwo
    },
    {
      id: 3,
      title: "The Craft of Handmade Soap Making",
      author: "Sophia Patel",
      date: "2024-04-18",
      content: "Delve into the world of handmade soap making and discover the art and science behind creating luxurious, all-natural soaps. From selecting the finest ingredients to mastering the saponification process, handmade soap makers pour their creativity and passion into every batch. Join us as we explore the craft of handmade soap making and learn how to create your own beautiful and nourishing soaps at home.",
      tags: ["Handmade", "Soap Making", "Craft"],
      image: images.picTwo
    },
    {
      id: 4,
      title: "The Beauty of Handwoven Textiles",
      author: "Liam Garcia",
      date: "2024-04-10",
      content: "Experience the beauty and tradition of handwoven textiles from around the world. From intricate tapestries to cozy blankets, handwoven textiles showcase the skill and artistry of the artisans who create them. In this post, we'll take a closer look at the history of handweaving, the techniques used to create these exquisite textiles, and the cultural significance of handwoven fabrics.",
      tags: ["Handwoven", "Textiles", "Craftsmanship"],
      image: images.picTwo
    },
    {
      id: 5,
      title: "Crafting with Nature: Handmade Wooden Furniture",
      author: "Oliver Wang",
      date: "2024-04-03",
      content: "Discover the natural beauty and craftsmanship of handmade wooden furniture. From rustic farmhouse tables to elegant hardwood chairs, handmade wooden furniture adds warmth and character to any home. Join us as we explore the art of woodworking, the sustainable practices used by artisan furniture makers, and the timeless appeal of handmade wooden pieces.",
      tags: ["Handmade", "Woodworking", "Furniture"],
      image: images.picTwo
    },
    {
      id: 6,
      title: "The Art of Handmade Ceramics",
      author: "Isabella Nguyen",
      date: "2024-03-27",
      content: "Immerse yourself in the world of handmade ceramics and discover the artistry and creativity behind these unique pieces. From hand-thrown pottery to intricately sculpted figurines, handmade ceramics offer a tactile and visual experience unlike any other. In this post, we'll explore the techniques and traditions of ceramic making, and celebrate the artisans who continue to keep this ancient craft alive.",
      tags: ["Handmade", "Ceramics", "Artisan"],
      image: images.picTwo
    },
    {
      id: 7,
      title: "The Craftsmanship of Handmade Leather Goods",
      author: "Lucas Thompson",
      date: "2024-03-20",
      content: "Explore the world of handmade leather goods and the skilled artisans who create them. From hand-stitched wallets to beautifully crafted bags, handmade leather goods combine traditional craftsmanship with modern design. Join us as we delve into the art of leatherworking, the materials and tools used by artisans, and the timeless appeal of handmade leather goods.",
      tags: ["Handmade", "Leatherworking", "Craftsmanship"],
      image: images.picTwo
    },
    {
      id: 8,
      title: "Artisanal Candle Making: A Scented Journey",
      author: "Sophie Martin",
      date: "2024-03-13",
      content: "Embark on a scented journey into the world of artisanal candle making. From soy wax to essential oils, artisanal candle makers use natural ingredients to create candles that not only illuminate but also uplift the senses. In this post, we'll explore the craft of candle making, the different types of candles, and the artistry behind creating unique and aromatic scents.",
      tags: ["Artisanal", "Candle Making", "Craft"],
      image: images.picTwo
    },
    {
      id: 9,
      title: "The Art of Handmade Paper Crafts",
      author: "Ava Robinson",
      date: "2024-03-06",
      content: "Discover the artistry and versatility of handmade paper crafts. From intricate origami to handmade greeting cards, paper crafts offer endless opportunities for creativity and self-expression. Join us as we explore the techniques and tools used in paper crafting, and learn how to create beautiful and unique paper creations from the comfort of your own home.",
      tags: ["Handmade", "Paper Crafts", "Artistry"],
      image: images.picTwo
    },
    {
      id: 10,
      title: "Traditional Handicrafts: Preserving Cultural Heritage",
      author: "Elijah Wilson",
      date: "2024-02-28",
      content: "Celebrate the rich cultural heritage and traditions of traditional handicrafts from around the world. From indigenous textiles to hand-carved wooden masks, traditional handicrafts reflect the history, values, and identity of diverse communities. In this post, we'll take a journey through the world of traditional handicrafts, exploring the techniques, symbolism, and significance of these timeless treasures.",
      tags: ["Handicrafts", "Cultural Heritage", "Tradition"],
      image: images.picTwo
    },
    {
      id: 11,
      title: "The Art of Handmade Quilting",
      author: "Harper Adams",
      date: "2024-02-21",
      content: "Dive into the world of handmade quilting and discover the artistry and tradition behind this beloved craft. From patchwork quilts to intricately stitched designs, handmade quilts are cherished heirlooms passed down through generations. Join us as we explore the history of quilting, the techniques used by quilters, and the cultural significance of handmade quilts.",
      tags: ["Handmade", "Quilting", "Craftsmanship"],
      image: images.picTwo
    },
    {
      id: 12,
      title: "Creating Beauty with Handmade Embroidery",
      author: "Eva Patel",
      date: "2024-02-14",
      content: "Experience the art of handmade embroidery and the intricate beauty it brings to fabric. From delicate stitches to vibrant colors, handmade embroidery transforms plain cloth into works of art. In this post, we'll explore the history of embroidery, the different types of stitches, and the creative possibilities of this timeless craft.",
      tags: ["Handmade", "Embroidery", "Artistry"],
      image: images.picTwo
    },
  ];
  