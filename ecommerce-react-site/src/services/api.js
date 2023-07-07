const loadProducts = async (path) => {
    const request = await fetch(`https://fakestoreapi.com/products/${path}`);
    const response = request.json();
    return response;
}

export { loadProducts };