// ================================
// AFFILIATE LINKS (update here only)
// ================================
const affiliateLinks = {
  dogToy: "https://www.amazon.com/dp/NEW-AFFILIATE-ID-1?tag=yourtag-20",
  petBed: "https://www.amazon.com/dp/NEW-AFFILIATE-ID-2?tag=yourtag-20",
  groomingKit: "https://www.amazon.com/dp/NEW-AFFILIATE-ID-3?tag=yourtag-20"
};

// ================================
// PRODUCT DATA
// ================================
const products = [
  {
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
    name: "Pet Grooming Kit",
    image: "IMAGES/shopping (4).webp",
    benefits: [
      "Easy home grooming",
      "Saves vet cost",
      "Beginner friendly"
    ],
    link: affiliateLinks.groomingKit
  }
];

// ================================
// RENDER PRODUCTS
// ================================
const container = document.getElementById("product-container");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "card";

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