class Cart{
    constructor(products, total) {
     this.products = []
     this.total = 0   
    }
    
    addProduct(product, price){
        this.products.push(product)
        this.total += product.price //product.price idk chatgpt said so (The price should be a property of the product.) same with below
    }

    removeProduct(index){
       let removed = this.products.splice(index,1)[0]//this 0 means we access the first element of the returned array
       this.total -= removed.price //.price idk chatgpt said so
    }



}

module.exports = {
    Cart
}