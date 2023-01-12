function something() 
{
    var x = window.localStorage.getItem('aaa');
    
    x = x * 1 + 1;

    window.localStorage.setItem('aaa',555);
    
    alert (x); //("Hello!!");
    
}
//////////////////////////////////////////////////////////////////////////////////////////

// + to public/js/main.js

function add_to_cart(id)
{
  var key = 'product_' + id;

  var x = window.localStorage.getItem(key);
  x = x * 1 + 1;
  window.localStorage.setItem(key, x);

  update_orders_input();
  update_orders_button();
}

///////////////////////////////////////////////////////////////////////////////////
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

/////////////////////////////////////////////////////////////////////////////////////

function update_orders_input()
{
  orders = cart_get_orders();
  $('#orders_input').val(orders);
}

//////////////////////////////////////////////////////////////////////////////////////

function cart_get_orders()
{
  var orders = '';

  for (var i = 0; i < window.localStorage.length; i++)
  {
    var key = window.localStorage.key(i); // получаем ключ
    var value = window.localStorage.getItem(key); // получаем значение

    if(key.indexOf('product_') == 0)
    {
      orders = orders + key + '=' + value + ',';
    }
  }

  return orders;
}

//////////////////////////////////////////////////////////////////////////////////////////////

function update_orders_button()
{
  var text = 'Cart (' + cart_get_number_of_items() + ')';
  $('#orders_button').val(text);
}
  ///////////////////////////////////////////////////////////////////////////////
                
                   //"Obnulenie Korzyny Cancel"
function cancel_order()
{
  window.localStorage.clear();
  
  update_orders_input();
  update_orders_button();
  
  $('#cart').text("Your cart is now empty!"); //Obnulenie krasnoj knopki
  
  return false;
}