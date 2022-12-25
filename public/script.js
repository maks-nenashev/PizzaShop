function something() 
{
    var x = window.localStorage.getItem('aaa');
    
    x = x * 1 + 1;

    window.localStorage.setItem('aaa',555);
    
    alert (x); //("Hello!!");
    
}

function add_to_cart(id)
{
    alert('You added pizza with id:' + id);
}

