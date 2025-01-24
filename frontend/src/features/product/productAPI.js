// my base URL
const BASE_URL = "http://localhost:5000";

// i am snding POST req to create new product in db
export function createProduct(product) {
  return new Promise(async (resolve) => {
    const response = await fetch(`${BASE_URL}/products/createProduct`, {
      method: "POST",
      body: JSON.stringify(product),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

// Fetch products with optional filters
export function fetchProducts(filter = {}) {  //object containing key-value pairs
  return new Promise(async (resolve) => {
    let queryString = "";
    for (let key in filter) {
      if (filter[key]?.length) {
        queryString += `${key}=${filter[key]}&`;
      }
    }

    const response = await fetch(`${BASE_URL}/products/fetchProducts?${queryString}`);
    const data = await response.json();
    resolve({ data });
  });
}


// Fetch a single product by its ID
export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch(`${BASE_URL}/products/fetchProductById/${id}`);
    const data = await response.json();
     resolve({ data });  //it's returned as an object
  });
}

// Fetch all categories
export function fetchCategories() {
  return new Promise(async (resolve) => {
    const response = await fetch(`${BASE_URL}/categories/`);
    const data = await response.json();
    resolve({ data });
  });
}

// Fetch all colors
export function fetchColors() {
  return new Promise(async (resolve) => {
    const response = await fetch(`${BASE_URL}/colors/`);
    const data = await response.json();
    resolve({ data });
  });
}

// Fetch all sizes
export function fetchSizes() {
  return new Promise(async (resolve) => {
    const response = await fetch(`${BASE_URL}/sizes/`);
    const data = await response.json();
    resolve({ data });
  });
}

// Update a product by its ID
// export function updateProduct(product) {
//   return new Promise(async (resolve) => {
//     const response = await fetch(`${BASE_URL}/products/updateProductById/${product.id}`, {
//       method: "PATCH",
//       body: JSON.stringify(product),
//       headers: { "Content-Type": "application/json" },
//     });
//     const data = await response.json();
//     resolve({ data });
//   });
// }

// Delete a product by its ID
// export function deleteProduct(id) {
//   return new Promise(async (resolve) => {
//     const response = await fetch(`${BASE_URL}/products/deleteProductById/${id}`, {
//       method: "DELETE",
//     });
//     const data = await response.json();
//     resolve({ data });
//   });
// }

// Fetch related or recommended products
// export function fetchProductYouMayAlsoLike() {
//   return new Promise(async (resolve) => {
//     const response = await fetch(`${BASE_URL}/products/fetchProductYouMayAlsoLike`);
//     const data = await response.json();
//     resolve({ data });
//   });
// }

// Bulk update products (if supported)
// export function bulkUpdateProducts(products) {
//   return new Promise(async (resolve) => {
//     const response = await fetch(`${BASE_URL}/products/bulkUpdate`, {
//       method: "PATCH",
//       body: JSON.stringify(products),
//       headers: { "Content-Type": "application/json" },
//     });
//     const data = await response.json();
//     resolve({ data });
//   });
// }
