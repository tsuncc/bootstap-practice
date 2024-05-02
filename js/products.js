// products.js
const products = [
    {
        id: 1,
        name: "Plant Squalane",
        category: "Skin & body",
        price: "$24.99",
        listImage: "imgs/products-1.webp",
        images: ["imgs/products-1-1.webp", "imgs/products-1-2.webp", "imgs/products-1-3.webp"],
        size: "4 FL OZ/ 118ML ALUMINUM TUBE",
        ingredients: "100% Plant Squalane",
        description: "So rich with moisturizing shea butter we should just call it a shea-ving cream. Niacinamide helps calm irritated skin.",
        usage: "Twist top off capsule, squeeze onto fingertips and apply to face and neck. Capsule can be dissolved in hot water after use."
    },

    {
        id: 2,
        name: "Daily Moisturizer",
        category: "Skin & body",
        price: "$19.99",
        listImage: "imgs/products-2.webp",
        images: ["imgs/products-2-1.webp", "imgs/products-2-2.webp", "imgs/products-2-3.webp"],
        size: "2.7 FL OZ/80 ML ALUMINUM POD",
        ingredients: "Water/Aqua, Cetearyl Alcohol, Helianthus Annuus (Sunflower) Seed Oil Glyceryl Stearate Citrate",
        description: "The Daily Moisturizer was formulated to work both day and night to help simplify your routine.  With barrier protecting prebiotics, moisture locking hyaluronic acid, and soothing macula oil this super soothing formula has you covered 24/7.",
        usage: "Apply a generous amount to clean skin, gently smoothing it over face and neck in the morning and night.  Can also be used on hands."
    },
    {
        id: 3,
        name: "Shaving Cream",
        category: "Hair",
        price: "$14.99",
        listImage: "imgs/products-3.webp",
        images: ["imgs/products-3-1.webp", "imgs/products-3-2.webp", "imgs/products-3-3.webp"],
        size: "4 FL OZ/ 118ML ALUMINUM TUBE",
        ingredients: "Water/Aqua, Glycerin, Myristic Acid, Stearic Acid",
        description: "So rich with moisturizing shea butter we should just call it a shea-ving cream. Perfect glide and slide for a clean rinse and a precise shave..",
        usage: "Apply a generous amount to your scruffy face and rub it in a circular motion until you've made a fat white beard over the area you want to shave."
    },

    {
        id: 4,
        name: "Old School Castile Soap",
        category: "Skin & body",
        price: "$12.99",
        listImage: "imgs/products-4.webp",
        images: ["imgs/products-4-1.webp", "imgs/products-4-2.webp", "imgs/products-4-3.webp"],
        size: "2.7 FL OZ/80 ML ALUMINUM POD",
        ingredients: "Water/Aqua, Cetearyl Alcohol, Helianthus Annuus (Sunflower) Seed Oil Glyceryl Stearate Citrate",
        description: "Get an update on your Grandpa's old timey soap with this concentrated castile soap.  Millions of uses in this bottle.  Well, not millions.  But many!  Well, not THAT many.  But at least a few, which is more than can be said for most products!",
        usage: "Add 3oz (6 tablespoons) of Phil's Castile Soap Concentrate to your Phil's Foamer bottle, then fill half-way with water (best with purified water).  Swirl to mix."
    },

    {
        id: 5,
        name: "Hand Soap rePhil",
        category: "Skin & body",
        price: "$1.00",
        listImage: "imgs/products-5.webp",
        images: ["imgs/products-5-1.webp", "imgs/products-5-2.webp", "imgs/products-5-3.webp"],
        size: ".5OZ/15G EACH",
        ingredients: "Sodium Cocoate, Sodium Sunflowerate (Saponified Organic Coconut Oil and Sunflower Oil)",
        description: "The Daily Moisturizer was formulated to work both day and night to help simplify your routine.  With barrier protecting prebiotics, moisture locking hyaluronic acid, and soothing macula oil this super soothing formula has you covered 24/7.",
        usage: "Add this sachet of concentrated castile soap to your Phil's foamer bottle, fill halfway with water."
  },

  {
        id: 6,
        name: "Shave + Face Bar",
        category: "Skin & body",
        price: "$19.99",
        listImage: "imgs/products-6.webp",
        images: ["imgs/products-6-1.webp", "imgs/products-6-2.webp", "imgs/products-6-3.webp"],
        size: "2.7 FL OZ/80 ML ALUMINUM POD",
        ingredients: "Sodium Palm Kernelate, Sodium Palmate, Water/ Aqua, Potassium Palm Kernelate, Palm Kernel Acid, Potassium Palmate",
        description: "Wake up with antioxidant rich upcycled coffee in this ultra-luxe lathering shave and facial cleansing bar.  Rich in shea butter and fragrance free for a precise, close shave or gentle everyday face wash.",
        usage: "Rub bar on wet hands until a rich lather forms, apply generously to face and shave with our Phil's Shave the Planet Razor."
},

{
        id: 7,
        name: "Shave + Face Bar",
        category: "Skin & body",
        price: "$19.99",
        listImage: "imgs/products-7.webp",
        images: ["imgs/products-7-1.webp", "imgs/products-7-2.webp", "imgs/products-7-3.webp"],
        size: "2.7 FL OZ/80 ML ALUMINUM POD",
        ingredients: "Water, Helianthus Annuus (sunflower) Seed Oil",
        description: "The Daily Moisturizer was formulated to work both day and night to help simplify your routine.  With barrier protecting prebiotics, moisture locking hyaluronic acid, and soothing macula oil this super soothing formula has you covered 24/7.",
        usage: "Apply a generous amount to clean skin, gently smoothing it over face and neck in the morning and night.  Can also be used on hands."
},

{
        id: 8,
        name: "Shave the Planet Razor",
        category: "Hair",
        price: "$48.00",
        listImage: "imgs/products-8.webp",
        images: ["imgs/products-8-1.webp", "imgs/products-8-2.webp", "imgs/products-8-3.webp"],
        size: "2.7 FL OZ/80 ML ALUMINUM POD",
        ingredients: "N/A",
        description: "German made, stainless steel safety razor classically crafted to be gentle on the skin.  Helps to avoid ingrown hairs, unlike those pesky plastic multi-blade systems.  A double edged blade allows for prolonged use with less waste.",
        usage: "Unscrew the razor handle head to reveal the cover plate with threads."
},

{
        id: 9,
        name: "The Everything Bar",
        category: "Hair",
        price: "$14.99",
        listImage: "imgs/products-9.webp",
        images: ["imgs/products-9-1.webp", "imgs/products-9-2.webp", "imgs/products-9-3.webp"],
        size: "3.1 OZ",
        ingredients: "Sodium Cocoyl Isethionate, Hydrogenated Vegetable Oil, Polyglyceryl-4 Laurate, Water/ Aqua, Glycerin, Natural Fragrance",
        description: "Tired of a shower full of plastic bottles? Tired of buying more things than you need? Soft, manageable hair AND clean pits AND smells like the freaking beach? Look no further that this guy right here that works from the ends of your hair to the tips of your toes. The only thing you need in the shower to get yourself squeaky with upcycled plant squalane and chia seed oil. ONE BAR TO RULE THEM ALL! ",
        usage: "Lather up and apply to wet hair working from scalp to tip.  Rinse thoroughly."
},
    
];
