import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Mass Gainer",
    series: "performance",
    seriesName: "Performance Series",
    type: "High Calorie Weight Gain Formula (Low Fat)",
    price: 3999,
    mrpPrice: 3999,
    servings: "20 Servings",
    netWt: "3 Kg (6.61 Lbs)",
    flavor: "Double Rich Chocolate",
    flavorsList: [
      { name: "Double Rich Chocolate", color: "#4a2c11" },
      { name: "Vanilla Ice Cream", color: "#f3e5ab" },
      { name: "Cookies & Cream", color: "#d1d5db" }
    ],
    image: "/images/mass_gainer.png",
    shortDesc: "40g Protein, 760+ Calories with digestive enzymes for power, size, and strength.",
    keyIngredients: [
      "40g Whey Protein Concentrate",
      "760+ Clean Calories",
      "Digestive Enzyme Matrix",
      "Complex Carbohydrates",
      "Essential Vitamins & Minerals"
    ],
    benefits: [
      "High calorie weight gain formula to build serious mass and size",
      "Supports muscle growth, recovery, and workout endurance",
      "Enriched with digestive enzymes for enhanced nutrient absorption",
      "Delicious Double Rich Chocolate taste that mixes easily"
    ]
  },
  {
    id: 2,
    name: "Pre-Workout",
    series: "performance",
    seriesName: "Performance Series",
    type: "Amino Acids, Caffeine with Vitamins Powder",
    price: 2999,
    mrpPrice: 2999,
    servings: "30 Servings",
    netWt: "360g",
    flavor: "Litchi, Green Apple",
    flavorsList: [
      { name: "Litchi Punch", color: "#fb7185" },
      { name: "Green Apple", color: "#84cc16" },
      { name: "Fruit Punch", color: "#ef4444" },
      { name: "Blue Raz", color: "#38bdf8" }
    ],
    image: "/images/preworkout.png",
    shortDesc: "Ignite explosive energy, sharpen mental focus, and achieve massive muscle pumps.",
    keyIngredients: [
      "3000mg L-Citrulline Malate",
      "1500mg Beta-Alanine",
      "500mg Taurine",
      "250mg Alpha-GPC",
      "200mg Caffeine Anhydrous"
    ],
    benefits: [
      "Explosive clean energy boost with Caffeine & Taurine",
      "Beta-Alanine delays muscle fatigue for higher endurance",
      "Alpha-GPC & Tyrosine support laser-sharp focus",
      "Citrulline Malate drives Nitric Oxide for intense pumps",
      "Added electrolytes to sustain peak cellular hydration"
    ]
  },
  {
    id: 3,
    name: "Whey Protein",
    series: "performance",
    seriesName: "Performance Series",
    type: "Whey Protein Concentrate & Digestive Enzymes Blend",
    price: 10500,
    mrpPrice: 10500,
    servings: "51 Servings",
    netWt: "1.81 Kg (4 Lbs / 1814g)",
    flavor: "Double Rich Chocolate",
    flavorsList: [
      { name: "Double Rich Chocolate", color: "#3b2210" },
      { name: "Cafe Mocha", color: "#78350f" },
      { name: "Vanilla Bean", color: "#fef3c7" },
      { name: "Strawberry Swirl", color: "#f472b6" }
    ],
    image: "/images/whey.png",
    shortDesc: "Premium fast-absorbing whey protein with digestive enzyme matrix for maximum bioavailability.",
    keyIngredients: [
      "Whey Protein Concentrate",
      "Digestive Enzyme Blend",
      "BCAAs & Essential Amino Acids",
      "Zero Added Sugar",
      "Zero Maltodextrin"
    ],
    benefits: [
      "Supports lean muscle growth and accelerated post-workout repair",
      "Infused with digestive enzymes for fast and easy digestion",
      "Reduces muscle soreness and structural fatigue",
      "Zero banned substances & transparent label formulation"
    ]
  },
  {
    id: 4,
    name: "EAA + BCAA",
    series: "performance",
    seriesName: "Performance Series",
    type: "Essential Amino Acids with Electrolytes Powder",
    price: 2499,
    mrpPrice: 2499,
    servings: "30 Servings",
    netWt: "360g",
    flavor: "Mango, Watermelon",
    flavorsList: [
      { name: "Alphonso Mango", color: "#f59e0b" },
      { name: "Watermelon Rush", color: "#ef4444" },
      { name: "Lemon Iced Tea", color: "#eab308" },
      { name: "Blueberry Bliss", color: "#6366f1" }
    ],
    image: "/images/eaa_bcaa.png",
    shortDesc: "Complete spectrum of Essential Amino Acids combined with hydration electrolytes.",
    keyIngredients: [
      "Full Spectrum EAAs",
      "Branched-Chain Amino Acids (BCAAs)",
      "Hydration Electrolyte Matrix",
      "L-Citrulline Malate & Taurine"
    ],
    benefits: [
      "Delays intra-workout muscle breakdown and fatigue",
      "Accelerates recovery between sets and post-training",
      "Essential electrolytes maintain cellular hydration during training",
      "Supports athletic endurance and active lifestyle demands"
    ]
  },
  {
    id: 5,
    name: "Creatine Monohydrate",
    series: "core",
    seriesName: "Core Series",
    type: "100% Micronized Creatine Monohydrate Powder",
    price: 1099,
    mrpPrice: 1099,
    servings: "83 Servings",
    netWt: "250g",
    flavor: "Unflavored",
    flavorsList: [
      { name: "100% Pure Unflavored", color: "#94a3b8" },
      { name: "Fruit Punch", color: "#f43f5e" }
    ],
    image: "/images/creatine.png",
    shortDesc: "Pure, ultra-micronized creatine for maximum ATP resynthesis and power output.",
    keyIngredients: [
      "Pure Micronized Creatine Monohydrate",
      "No Fillers",
      "No Additives",
      "Third-Party Tested"
    ],
    benefits: [
      "Replenishes cellular ATP (Adenosine Triphosphate) rapidly",
      "Significantly enhances strength, power, and training volume",
      "Aids intracellular muscle cell hydration for fuller look",
      "100% unflavored for versatile stacking with any drink"
    ]
  },
  {
    id: 6,
    name: "L-Glutamine",
    series: "core",
    seriesName: "Core Series",
    type: "Pure Micronized L-Glutamine Powder",
    price: 2999,
    mrpPrice: 2999,
    servings: "50 Servings",
    netWt: "250g",
    flavor: "Unflavored",
    flavorsList: [
      { name: "Unflavored Pure", color: "#94a3b8" }
    ],
    image: "/images/glutamine.png",
    shortDesc: "Conditionally essential amino acid supporting muscle repair, gut barrier integrity, and immunity.",
    keyIngredients: [
      "Pure Micronized L-Glutamine",
      "Zero Additives",
      "No Sugar or Preservatives"
    ],
    benefits: [
      "Minimizes post-workout muscle soreness and tissue catabolism",
      "Supports intestinal wall integrity and optimal gut microbiome",
      "Strengthens immune system function under heavy training stress",
      "Fast-dissolving micronized powder"
    ]
  },
  {
    id: 7,
    name: "ZMA Nighttime Formula",
    series: "recovery",
    seriesName: "Recovery Series",
    type: "Zinc, Magnesium Boron & Vitamin B6 Capsules",
    price: 2999,
    mrpPrice: 2999,
    servings: "30 Servings",
    netWt: "60 Capsules",
    flavor: "Unflavored (Capsules)",
    flavorsList: [
      { name: "Vegetarian Capsules", color: "#6366f1" }
    ],
    image: "/images/zma.png",
    shortDesc: "Advanced sleep & recovery matrix with highly absorbable Magnesium Bisglycinate and L-Theanine.",
    keyIngredients: [
      "200mg Active Magnesium (Bisglycinate)",
      "L-Theanine",
      "Zinc & Boron",
      "Vitamin B6",
      "Montmorency Tart Cherry Extract"
    ],
    benefits: [
      "2X faster natural sleep onset with reduced nightly anxiety",
      "Delivers up to 30% deeper, restorative slow-wave sleep cycles",
      "Relaxes muscles and prevents nighttime cramps",
      "Wake up 100% refreshed without morning grogginess"
    ]
  },
  {
    id: 8,
    name: "Liver Cleanse",
    series: "recovery",
    seriesName: "Recovery Series",
    type: "Herbal Detox & Rejuvenation Nutraceutical",
    price: 1299,
    mrpPrice: 1299,
    servings: "30 Servings",
    netWt: "60 Capsules",
    flavor: "Unflavored (Capsules)",
    flavorsList: [
      { name: "Herbal Extract Capsules", color: "#10b981" }
    ],
    image: "/images/liver_cleanse.png",
    shortDesc: "Botanical formulation designed to support hepatic detox pathways and digestion.",
    keyIngredients: [
      "Milk Thistle (Silymarin)",
      "Dandelion Extract",
      "Varunkutki & Giloy",
      "Curcuma Longa Root",
      "Licorice & Ginger Extracts"
    ],
    benefits: [
      "Milk thistle aids hepatocytes in toxin neutralization",
      "Dandelion supports bile flow and digestive processing",
      "Curcuma and Ginger deliver high-potency antioxidant protection",
      "Flushes metabolic waste and protects liver from oxidative stress"
    ]
  },
  {
    id: 9,
    name: "Shred Factor",
    series: "recovery",
    seriesName: "Recovery Series",
    type: "Complete Thermogenic Fat Burner Support",
    price: 1299,
    mrpPrice: 1299,
    servings: "30 Servings",
    netWt: "60 Capsules",
    flavor: "Unflavored (Capsules)",
    flavorsList: [
      { name: "Thermogenic Capsules", color: "#f97316" }
    ],
    image: "/images/shred_factor.png",
    shortDesc: "Multi-action thermogenic formula for metabolic elevation, appetite balance, and clean focus.",
    keyIngredients: [
      "CLA (Conjugated Linoleic Acid)",
      "Acetyl L-Carnitine",
      "Green Coffee Bean Extract",
      "Garcinia Cambogia & Gymnema",
      "Choline, L-Theanine, Cayenne & Black Pepper"
    ],
    benefits: [
      "L-Carnitine transports fatty acids into mitochondria for energy",
      "Green Coffee and Cayenne boost baseline metabolic calorie burn",
      "Garcinia Cambogia and Gymnema help suppress sugar cravings",
      "Provides long-lasting energy without severe caffeine crashes"
    ]
  },
  {
    id: 10,
    name: "Multivitamin for Men",
    series: "essential",
    seriesName: "Essential Series",
    type: "Daily Micronutrient, Mineral & Antioxidant Support",
    price: 1199,
    mrpPrice: 1199,
    servings: "30 Servings",
    netWt: "60 Capsules",
    flavor: "Unflavored (Capsules)",
    flavorsList: [
      { name: "Multivitamin Tablets", color: "#eab308" }
    ],
    image: "/images/multivitamin_men.png",
    shortDesc: "High-potency daily nutritional support tailored for male vitality, stamina, and bone health.",
    keyIngredients: [
      "Vitamin B-Complex Matrix",
      "Vitamin C & Vitamin D3",
      "Zinc & Magnesium",
      "Antioxidant Super-Complex"
    ],
    benefits: [
      "Fills daily nutritional micronutrient gaps completely",
      "B-vitamins convert food into usable metabolic energy",
      "Zinc and D3 support natural testosterone and immune defense",
      "Protects cells against oxidative damage and physical exhaustion"
    ]
  }
];
