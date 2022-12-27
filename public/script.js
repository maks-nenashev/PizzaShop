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
      // wywod kol-wo itomow  w window s podsczetom
    alert('Items in your cart:' + cart_get_number_of_items()); 
}

function cart_get_number_of_items()
{
  var cnt = 0;

  for (var i = 0; i < window.localStorage.length; i++)
  {
    var key = window.localStorage.key(i); // получаем ключ
    var value = window.localStorage.getItem(key); // получаем значение

    if(key.indexOf('product_') == 0)
    {
      cnt = cnt + value * 1;
    }
  }

  return cnt;
}