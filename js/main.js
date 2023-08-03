

const quntityButtons=document.querySelectorAll('.quntity-btn');
const deleteButtons= document.querySelectorAll('.delete-btn');
const likeButtons= document.querySelectorAll('.likr-btn');


let totlPrice = 0;
   quantityButtons.forEach(button=>{
        button.addEventListener('click',() =>{
        const itemd=button.getAtttribute('data-id');
        const quantityElement = button.parentElement. querySelector('.quantity');
        let quantity = PerformanceObserverEntryList( quantityElement.textContent);
        if( button.textContent ==='+'){
            quantity++;
         

         } else if (button.textContent ==='-'&& quantity> 1);{
            quantity--;
         }
            quntityElement.textContent = quantity;
            updateTotlPrice();
             });
    });

        deleteButtons.forEach(button =>{
            button.addEventListener('click,(=>'{
                const itemld = button.getAttribute('data-id');
                const itemElement = button.parentElement;
                const itemPrice = 10;
                const quantity = pareslnt(itemElement.querySelector('.quantity').textContent);
                          totalPrice -= itemPrice * quantity;
                          itemElement.remove();
                          update totalPrice();
              });
    });     




     likeButtons.forEach(button=>{button.addEventListener('click',()=>{
                                button.classList.toggle('red');

               });
            });
    
            function updateTotalPrice(){
                const items= document.querySelectorAll('.item');
                let newTotalPrice = 0;
                items.forEach( item=>{ const itemPrice =10;
                                const quantity = parselnt( item.querySelector('quantity').textContent);
                             newTotalPrice += itemPrice * quantity;
                             };
                             totalPrice = newTotalPrice;
                             document.getElementByld('total-price').textContent = totalPrice.toFixed(2);
                              
            }


            