hh = {}

loop do

    print "Enter priduct id:"
    id = gets.chomp 

    print"Enter amout (how much items you want to order:)"
    m = gets.chomp.to_i 



    x = hh[id].to_i # Zpis w hash "Znaczenija"
    x = x + m       #
    hh[id] = x

    puts hh.inspect
    puts"//////////////////"
  end

"Program finished. Press Enter to exit."
gets
 
# Sozdanie hesha dla magazina :Primer