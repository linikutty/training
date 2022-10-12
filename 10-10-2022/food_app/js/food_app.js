    // first restursnt
    let restaurants=[
        {
           r_name:"KFC",
           img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fb72cfzokrs42hgrjifz",
           foodList:"Snacks,Burgers,Briyani_Bucket",
           category:{
            bugers:[
                {
                foodName:"Chicken Burger Buddy Meal",
                price:"Rs 499.05",
                type:"non-veg",
                desc:"Share 2 Classic Chicken Zingers & a Medium Popcorn in this delightful combo for 2",
            },
            {
                foodName:"Mixed Chicken Zinger Burger Doubles",
                price:"Rs 344.76",
                type:"non-veg",
                desc:"Best-seller combo of classic chicken zinger & tandoori zinger",
            },
            {
                foodName:"2 X Veg Krisper Burgers",
                price:'Rs 187.76',
                type:"veg",
                desc:"2 delicious veg value burgers - at a deal price",
            },

            ],
            snacks:[
                {
                    foodName:"Strips & Rice Combo",
                    price:"Rs 359.05",
                    type:"non-veg",
                    desc:"4 strips, 1 Dips, flavorful Rice & Gravy at a deal price [serves 1-2]",
                },
                {
                    foodName:"Biryani Rice",
                    price:"Rs 139.07",
                    type:"veg",
                    desc:"Flavorful aromatic rice to pair with your KFC favorites",
                },
                {
                    foodName:"Hot & Crispy Chicken -2pc",
                    price:"Rs 154.75",
                    type:"non-veg",
                    desc:"Signature Hot & crispy chicken",
                },
            ],
            briyani_bucket:[
                {
                    foodName:"Classic Chicken Biryani Bucket-Large",
                    price:"Rs 475.86",
                    type:"non-veg",
                    desc:"Large portions of our new Hyderabadi style Biryani rice served with 2 pc Hot & Crispy Chicken & 2 Spicy Gravies [serves 2]",
                },
                {
                    foodName:"Veg Biryani Bucket",
                    price:"Rs 188.57",
                    type:"veg",
                    desc:"New Hyderabadi style Biryani rice served with a crispy Veg Patty & a Spicy Gravy [serves 1]",
                },
                {
                    foodName:"Smoky Grilled Chicken Biryani Bucket",
                    price:"Rs 288.34",
                    type:"non-veg",
                    desc:"New Hyderabadi style Biryani rice served with 1 pc Smoky Red Chicken & a Spicy Gravy [serves 1]",
                },
                ]
            },
           
        },
        {
            r_name:"Pizza Hut",
            img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/s8zftqffandletniusqd",
            foodList:"Veg pizza,Non-veg pizza",
            category:{
                veg_pizza:[
                    {
                        foodName:"Momo Mia Pizza - Veg",
                        price:"Rs 299",
                        type:"veg",
                        desc:"Epic combination of signature pan crust, delicious paneer & veg momos topped with spicy Schezwan sauce, onion, capsicum, sweet corn & 100% mozzarella",
                    },
                    {
                        foodName:"Tandoori Onion",
                        price:"Rs 209",
                        type:"veg",
                        desc:"Cheese & Onion in tandoori sauce",
                    },
                    {
                        foodName:"Veggie Feast",
                        price:"Rs 244",
                        type:"veg",
                        desc:"Herbed onion & green capsicum, sweet corn.",
                    }
                ],
                non_veg_pizza:[
                    {
                        foodName:"Chicken Sausage",
                        price:"Rs 249",
                        type:"non-veg",
                        desc:"Cheesy Chicken Sausages | Onion",
                    },
                    {
                        foodName:"Spiced Chicken Meatballs",
                        price:"Rs 309",
                        type:"n0n-veg",
                        desc:"Schezwan chicken meatball & onion",
                    },
                    {
                        foodName:"Chicken Pepperoni",
                        price:"Rs 369",
                        type:"non-veg",
                        desc:"Chicken Pepperoni |topped with cheese",
                    }
                ]

            }
        }


           

           
       
    ]


    const container=document.getElementById("restaurantList")

    if(!localStorage.getItem("restaurants")){
        localStorage.setItem("restaurants",JSON.stringify(restaurants));
    }
    let restaurant_arr=JSON.parse(localStorage.getItem("restaurants"));

    console.log(restaurant_arr);

    //for(let i=0;i<resturant_arr.length;i++){
       // document.getElementById("image").src=resturant_arr[i].img;
       // document.getElementById("resturant-name").innerHTML=resturant_arr[i].r_name;
    //}







    function returnCards(restaurants) {
        return "<div class=\"restaurantCard\">" + restaurants.map(restaurants => `
        <div id = "restaurantCards">
            <a href = "view.html?r_name=${restaurants.r_name}">
            
                <div class="card-item Card">
                    <img src="${restaurants.img}" class="card-img-top" alt=""/>
                        <div class="card-body">
                            <h5 class="card-title">${restaurants.r_name}</h5>
                            <p class="card-text">${restaurants.foodList}</p>
                        </div>
                </div>
            </a>
    </div>`).join('') + "</div>";
      }

      
      container.innerHTML = returnCards(restaurants);
            
 //login page

 

 function store(){

    let name = document.getElementById('name');
    let pw = document.getElementById('pw');
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;
    
    if(name.value.length == 0){
        alert('Please fill in email');
    
    }else if(pw.value.length == 0){
        alert('Please fill in password');
    
    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');
    
    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        alert('Your account has been created');
    }
    }

function check(){
    let storedName = localStorage.getItem('name');
    let storedPw = localStorage.getItem('pw');
    
    let userName = document.getElementById('userName');
    let userPw = document.getElementById('userPw');
    let userRemember = document.getElementById("rememberMe");
    
    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
    }else{
        alert('Error on login');
    }
    }




//login end here

 

    

        
    