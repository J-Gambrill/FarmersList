const { Cart } = require("./classes/Cart");

class Customer {
    constructor(name, email, shippingAddress, orderHistory){
        this.name = name
        this.email = email
        this.shippingAddress = shippingAddress
        this.orderHistory = []
        
    }
    addToOrderHistory(cart){
        if (cart instanceof Cart) {
            this.orderHistory.push(cart)
        } else {
            throw new Error('Only cart instances can be added to the order history.')
        }
    }
}

module.exports = {
    Customer
}