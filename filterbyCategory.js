let products=[
    {name:"Shirt", category:"Clothing"},
    {name:"Pants", category:"Clothing"},
    {name:"Hats", category:"Accessories"},
    {name:"Sunglasses", category:"Accessories"},
]

const filterByCategory=(products)=>{
    return (category)=>{
        return products.filter((product)=>{
            return product.category===category
        })
    }
}

const clothingProduct=filterByCategory(products)("Clothing")

console.log(clothingProduct);