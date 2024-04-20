let foodContainer = document.querySelector('.food-container');

const fooditem=[
    {
        FoodName: "Yogurt Parfait",
        foodimg: '../imagef/yogurt.jpg',
        price: "$ 4.00",
        type: "breakFast",
        des: "A simple treat for the morning. Topped with ganola and organic fruit"
    },
    {
        FoodName: "Pancakes",
        foodimg: '../imagef/pancake.png',
        price: "$ 8.00",
        type: "breakFast",
        des: "An all American classic breakfast option. Served with butter and syrup"
    },
    {
        FoodName: "Waffles",
        foodimg: '../imagef/waffle.png',
        price: "$ 7.00",
        type: "breakFast",
        des: "You can never go wrong with this breakfast staple. Served with syrup."
    },
    {
        FoodName: "Hamburger",
        foodimg: '../imagef/burger.jpg',
        price: "$ 8.00",
        type: "Lunch",
        des: "The true American staple of any eatery. Available with or without toppings and cheese."
    },
    {
        FoodName: "Fried Chicken",
        foodimg: '../imagef/chicken.png',
        price: "$ 7.00",
        type: "Lunch",
        des: "Simple, but not any less delicious. Hand breaded and freshly fried, available with a variety of dipping sauces."
    },
    {
        FoodName: "Salad",
        foodimg: '../imagef/salad.jpg',
        price: "$ 6.00",
        type: "Lunch",
        des: "A slightly healthier option if that is what you prefer. Available with ranch or other assorted dressings."
    },
    {
        FoodName: "Coffee",
        foodimg: '../imagef/coffee.jpg',
        price: "$ 5.00",
        type: "Beverages",
        des: "Freshly ground and freshly brewed. Decaf is also available, but freshness is not guaranteed"
    },

    {
        FoodName: "Iced Tea",
        foodimg: '../imagef/tea.jpeg',
        price: "$ 4.00",
        type: "Beverages",
        des: "Freshly made tea with ice. Available in lemon, peach or sweet options."
    },
    {
        FoodName: "Fountain Drink",
        foodimg: '../imagef/soda.jpeg',
        price: "$ 4.00",
        type: "Beverages",
        des: "Choose from all the classic soda options. Self serve at your own convenience"
    },

    {
        FoodName: "Coming Soon",
        foodimg: '../images/uhdining.jpeg',
        price: "$ 0.00",
        type: "Extra",
        des:"Expect more options to release and become available as time goes on and trends are set. "
    }
]


const food = fooditem.map(item => {
    const listitem = ` <div class="col-md-6 foodbox ${item.type}">
    <!-- content div -->
    <div class="content b my-2">
        <!-- image -->
        <div class="c-image">
            <img src="${item.foodimg}" alt="">
        </div>
        <div class="t-n-p my-2">
            <div class="heading">  
                <!-- title -->
                <span class="title">${item.FoodName}</span>
                <!-- price -->
                <span class="price">${item.price}</span>
            </div>
            <!-- Description -->
            <div class="des my-3 ">
                <p>${item.des}</p>
            </div>
        </div>   
    </div>
</div>`;
foodContainer.innerHTML += listitem;
})
const foodbox = document.querySelectorAll('.foodbox');
const menu = document.querySelectorAll('ul');

menu.forEach(m => {
    m.addEventListener('click', e=>{
        console.log(e.target.innerHTML)
        foodbox.forEach(box => {
            box.classList.add('d-none')
            if(e.target.innerHTML === 'All')
            {
                box.classList.remove('d-none')
            }
            else if(e.target.innerHTML==='Breakfast'){
                if(box.classList.contains('breakFast'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='Lunch'){
                if(box.classList.contains('Lunch'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='Beverages'){
                if(box.classList.contains('Beverages'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='Dinner'){
                if(box.classList.contains('Dinner'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='Order Now'){
                location.assign('../html/order.html')
            }
        })
        
    })
})