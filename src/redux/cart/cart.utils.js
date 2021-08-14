export const addItemToCart = (cartItems, item) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === item.id 
    );
    if (existingCartItem) {
        return cartItems.map( cartItem => 
            cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, {...item, quantity : 1}]
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === itemToRemove.id 
    );
    if (existingCartItem.quantity === 1) {
        return cartItems.filter( cartItem => 
            cartItem.id !== itemToRemove.id
        );
    }

    return cartItems.map(cartItem => cartItem.id === itemToRemove.id
        ? {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    );
}