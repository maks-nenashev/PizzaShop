function something() 
{
    var x = window.localStorage.getItem('aaa');
    
    x = x * 1 + 1;

    window.localStorage.setItem('aaa',555);
    
    alert (x); //("Hello!!");
    
}

function add_to_cart(id)
{        //Refactoring
    var key = 'product_' + id; //Sozdaem peremennuy "key" so znacheniem 

    var x = window.localStorage.getItem(key);
    
    x = x * 1 + 1;
    
    window.localStorage.setItem(key,x);
    
}

