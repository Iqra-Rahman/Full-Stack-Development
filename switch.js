let price = 0
function selectMenu(item){
    switch(item){
        case 'coffee': 
            price=2 
            break;
        case 'donut':
            price = 5;
            break;
        case 'tea':
            price = 1
            break;
        default: 
            return "item not availabe"
    }

    return `you selected ${item} and price is $${price}`
}

// console.log("Availabl item: Coffee, Tea, Donut");
let selectedItem  = "biiscuitss"

console.log(selectMenu(selectedItem))

