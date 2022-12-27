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
    update_orders_input()
    update_orders_button()
}

function update_orders_input()
{                               //Podkluchenie
  var orders = cart_get_orders();  
  $('#orders_input').val(orders);
}

function update_orders_button()
{
  var text = 'Cart (' + cart_get_number_of_items() + ')';
  $('#orders_button').val(text);
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

function cart_get_orders()
{
  var orders = '';

  for (var i = 0; i < window.localStorage.length; i++)
  {
    var key = window.localStorage.key(i); // получаем ключ
    var value = window.localStorage.getItem(key); // получаем значение

    if(key.indexOf('product_') == 0)
    {
      orders = orders + value + '=' + value + ',';
    }
  }
  return orders;
}