let menuSelect = JSON.parse(localStorage.getItem("restaurants"));
          const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const url = urlParams.get('r_name')
        alert(url);
        
        
        let menuContainer = document.getElementById("menuList")


        for(let i =0; i < menuSelect.length; i++){
            if(url == menuSelect[i].r_name){
               let menu = menuSelect[i].foodMenu;
               let ele = "";
              for(let i = 0; i < menu.length; i++){
                
              ele+= '<div class="card mb-3  col-6" ><img src='+menu[i].img+'><div class="card-body"><h5 class="card-title"><a href="view.html?id='+menu[i].foodName+' "target=_blank"><p>'+menu[i].price+'</p></a></h5><p class="card-text"><small class="text-muted">'+menu[i].type+'</small></p><p>'+menu[i].desc+'</p><button type="button" class="cart_button btn btn-danger"id="add_item"onclick="add()" ><a href="cart.html">Add Cart</a></button></div></div>';

              menuContainer.innerHTML = ele;
              
              }
            }
        }
      
       
      
        function add(){
         
              
          if(localStorage.getItem("cart_item")){
            localStorage.setItem("cart_item",JSON.stringify([]));
            console.log(cart_item);
        }
         let cart_list=JSON.parse(localStorage.getItem("cart_item"));
          
  
          for(let i=0;i<menu.length;i++){
            if(cart_list == menu[i].foodMenu){
                cart_list.push(menu[i]);
              }
            }
            
            localStorage.setItem("cart_item",JSON.stringify(cart_list));
            //console.log(cart_list);
          }
        

       























