// ================================
// AFFILIATE LINKS (update here only)
// ================================
const affiliateLinks = {
  dogToy: "https://amzn.to/46gfgAK",
  petBed: "https://amzn.to/3MalWcL",
  groomingKit: "https://amzn.to/4bsM1ya",

  dogLeash: "https://amzn.to/4a3rKN6",
  catScratcher: "https://amzn.to/45NHIdf",
  petBowl: "https://amzn.to/3ZhMH20",
  petCarrier: "https://amzn.to/4rybZ89",
  trainingPads: "https://amzn.to/4ql0yjl"
};

// ================================
// PRODUCT DATA
// ================================
const products = [
  {
    id: "DogChewToy",
    name: "Dog Chew Toy",
    image: "IMAGES/shopping (2).webp",
    benefits: [
      "Keeps dogs active",
      "Safe & durable material",
      "Perfect for puppies"
    ],
    link: affiliateLinks.dogToy
  },
  {
    id: "ComfortablePetBed",
    name: "Comfortable Pet Bed",
    image: "IMAGES/shopping (3).webp",
    benefits: [
      "Soft & washable",
      "Reduces joint pain",
      "Loved by pets"
    ],
    link: affiliateLinks.petBed
  },
  {
    id: "PetGroomingKit",
    name: "Pet Grooming Kit",
    image: "IMAGES/shopping (4).webp",
    benefits: [
      "Easy home grooming",
      "Saves vet cost",
      "Beginner friendly"
    ],
    link: affiliateLinks.groomingKit
  },
  {
    id: "DogLeashHarness",
    name: "Dog Leash & Harness",
    image: "IMAGES/61bJLfvMwML._AC_UL480_FMwebp_QL65_ copy.webp",
    benefits: [
      "Strong & comfortable grip",
      "Ideal for daily walks",
      "Adjustable for all sizes"
    ],
    link: affiliateLinks.dogLeash
  },
  {
    id: "CatScratchingPost",
    name: "Cat Scratching Post",
    image: "IMAGES/71l5Jm8vJmL._SX679_.jpg",
    benefits: [
      "Protects furniture",
      "Keeps cats active",
      "Durable scratching surface"
    ],
    link: affiliateLinks.catScratcher
  },
  {
    id: "PetFoodBowl",
    name: "Pet Food & Water Bowl",
    image: "IMAGES/611ErB-dS0L._SX522_.jpg",
    benefits: [
      "Anti-slip base",
      "Easy to clean",
      "Perfect for dogs & cats"
    ],
    link: affiliateLinks.petBowl
  },
 
  {
    id: "PuppyTrainingPads",
    name: "Puppy Training Pads",
    image: "IMAGES/61L4yPBJOmL._AC_UL480_FMwebp_QL65_.webp",
    benefits: [
      "Highly absorbent",
      "Leak-proof design",
      "Ideal for house training"
    ],
    link: affiliateLinks.trainingPads
  }
];

// ================================
// RENDER PRODUCTS
// ================================
const container = document.getElementById("product-container");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "card";
  card.id = product.id;

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <ul>
      ${product.benefits.map(b => `<li>✔ ${b}</li>`).join("")}
    </ul>
    <a href="${product.link}" target="_blank" class="btn">
      Check Price on Amazon
    </a>
  `;

  container.appendChild(card);
});