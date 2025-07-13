import axios from 'axios';

const API_BASE = '/api';

// Get All
export const fetchAllProducts = async () => {
    const response = await axios.get(`${API_BASE}/products`);
    return response.data;
};

// Get by asc
export const fetchProductsAsc = async () => {
    const response = await axios.get(`${API_BASE}/products?asc=true`);
    return response.data;
};

// Get by desc
export const fetchProductsDesc = async () => {
    const response = await axios.get(`${API_BASE}/products?desc=true`);
    return response.data;
};

// Get favorite products
export const fetchFavoriteProducts = async () => {
    const response = await axios.get(`${API_BASE}/favorite-products`);
    return response.data;
};

// Get personal product
export const fetchPersonalProducts = async () => {
    const response = await axios.get(`${API_BASE}/personal-products`);
    return response.data;
};

// Get bestselling
export const fetchBestSellingProducts = async () => {
    const response = await axios.get(`${API_BASE}/best-selling-products`);
    return response.data;
};

// Toggle favorite
export const toggleFavorite = async (productCode) => {
    const response = await axios.post(`${API_BASE}/toggle-favorite/${productCode}`);
    return response.data;
};

// Mask look over
export const lookProduct = async (productCode) => {
    const response = await axios.post(`${API_BASE}/look-product/${productCode}`);
    return response.data;
};

// Send message to chatbot
export const chatWithBot = async (message) => {
    const response = await axios.get(`${API_BASE}/chatbot`, {
        params: { message }
    });
    return response.data.text;
};
