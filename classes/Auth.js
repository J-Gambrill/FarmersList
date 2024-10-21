const { Customer } = require("./Customer"); 

class Auth {
    constructor(customers){
        this.customers = []
    }

    register(name, email, shippingAddress){
        const customer = new Customer(name, email, shippingAddress)
        this.customers.push(customer)
    }

    login(email){
        const customer = this.customers.find(function (cust) { 
            return cust.email === email; // Use regular function to find customer
        });    
           
        if (customer) {
            console.log(`Welcome back, ${customer.name}!`);
            return customer;            
            } else {
                throw new Error('Customer not found');
        }
    }

}

module.exports = {
    Auth
}
