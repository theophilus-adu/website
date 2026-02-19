const productData = {
  // Cement
  "Supacem Cement 32.5N": [
    "images/cement/supacem-325-1.jpg",
    "images/cement/supacem-325-2.jpg"
  ],
  "Supacem Cement 42.5R": [
    "images/cement/supacem-425-1.jpg",
    "images/cement/supacem-425-2.jpg"
  ],

  // Blocks
  "6-inch Hollow Blocks": [
    "images/blocks/6-hollow-1.jpg",
    "images/blocks/6-hollow-2.jpg"
  ],
  "6-inch Solid Blocks": [
    "images/blocks/6-solid-1.jpg",
    "images/blocks/6-solid-2.jpg"
  ],

  // Bathroom
  "Modern Water Closet": [
    "images/bathroom/wc-modern-1.jpg",
    "images/bathroom/wc-modern-2.jpg"
  ],
  "Jacuzzi Water Closet": [
    "images/bathroom/jacuzzi-1.jpg",
    "images/bathroom/jacuzzi-2.jpg"
  ],

  // Paints
  "Shield Interior Paint": [
    "images/paints/shield-1.jpg",
    "images/paints/shield-2.jpg"
  ],
  "Leyland Exterior Paint": [
    "images/paints/leyland-1.jpg",
    "images/paints/leyland-2.jpg"
  ],

  // Hardware
  "Drilling Machine": [
    "images/tools/drill-1.jpg",
    "images/tools/drill-2.jpg"
  ],
  "Welding Machine": [
    "images/tools/welding-1.jpg",
    "images/tools/welding-2.jpg"
  ],

  // POP
  "POP Cement": [
    "images/pop/pop-cement-1.jpg",
    "images/pop/pop-cement-2.jpg"
  ],
  "Homecharm Fibre": [
    "images/pop/fibre-1.jpg",
    "images/pop/fibre-2.jpg"
  ]
};
function openProduct(name) {
  document.getElementById("modalTitle").innerText = name;

  const box = document.getElementById("modalImages");
  box.innerHTML = "";

  productData[name].forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    box.appendChild(img);
  });

  document.getElementById("modalOrderBtn").onclick =
    () => orderWhatsApp(name);

  document.getElementById("productModal").style.display = "flex";
}

function closeProduct() {
  document.getElementById("productModal").style.display = "none";
}