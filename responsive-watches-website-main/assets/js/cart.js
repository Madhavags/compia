// Sample product data structure
// const products = [
//     { id: 1, name: 'Product 1', price: 10 },
//     { id: 2, name: 'Product 2', price: 20 },
//     ...
// ];

const cart = [];

// Function to add item to cart
function addToCart(productId) {
    // Find the product by its ID
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartDisplay();
    }
}

// Function to delete item from cart
function deleteFromCart(productId) {
    const index = cart.findIndex(p => p.id === productId);
    if (index !== -1) {
        cart.splice(index, 1);
        updateCartDisplay();
    }
}

// Function to update cart display (for demonstration purposes)
function updateCartDisplay() {
    const cartContainer = document.querySelector('.cart__container');
    cartContainer.innerHTML = ''; // Clear current cart display

    cart.forEach(product => {
        const cartItem = document.createElement('article');
        cartItem.classList.add('cart__card');
        cartItem.innerHTML = `
            <div class="cart__box">
                <img src="assets/img/${product.id}.png" alt="" class="cart__img">
            </div>
            <div class="cart__details">
                <h3 class="cart__title">${product.name}</h3>
                <span class="cart__price">$${product.price}</span>
                <div class="cart__amount">
                    <div class="cart__amount-content">
                        <span class="cart__amount-box">
                            <i class='bx bx-minus'></i>
                        </span>
                        <span class="cart__amount-number">1</span>
                        <span class="cart__amount-box">
                            <i class='bx bx-plus'></i>
                        </span>
                    </div>
                    <i class='bx bx-trash-alt cart__amount-trash' onclick="removeFromCart('${product.id}')"></i>
                </div>
            </div>
        `;
        cartContainer.appendChild(cartItem);
    });
}

// Sample event listeners for adding products to cart
// document.getElementById('addProduct1').onclick = () => addToCart(1);
// document.getElementById('addProduct2').onclick = () => addToCart(2);
// ...
