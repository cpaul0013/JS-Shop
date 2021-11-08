
   
let inventory  =[ {name: "Chips",
price: 1.99 
},

{
    name:"Soda",
    price: .99
},

{
    name:"Sandwich",
    price: 3.99
},

{
    name:"Soup",
    price: 2.99
},
]
let shoppingCart = [];

function addChipsToCart()
{
    shoppingCart.push(inventory[0]);


}

function addSodaToCart()
{
    shoppingCart.push(inventory[1]);
}

function addSandwichToCart()
{
    shoppingCart.push(inventory[2]);
}

function addSoupToCart()
{
    shoppingCart.push(inventory[3]);
}

function checkout()
{   let sum = 0;
    document.getElementById("cart").innerHTML = "";
    for(let i of shoppingCart)
    {   document.getElementById("cart").innerHTML+='<div>';   
         document.getElementById("cart").innerHTML+=(`${i.name} \n`);
                
            document.getElementById("cart").innerHTML+=(`${i.price}`);
            document.getElementById("cart").innerHTML+='</div>';   
            

    }
for(let i of shoppingCart)
{
    sum = i.price + sum;
}
    document.getElementById("cart").innerHTML+='<div>';
    document.getElementById("cart").innerHTML+=(`Total: ${sum.toFixed(2)}`);
    document.getElementById("cart").innerHTML+='</div>';
    shoppingCart = [];
}
function displayMenu()
{
for(let i of inventory)
{
   document.write(`${i.name}     ${i.price}`);
  
}

}