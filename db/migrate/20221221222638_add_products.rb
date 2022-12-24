class AddProducts < ActiveRecord::Migration[7.0]
  def change
             # Dannye o Producte

             # 2 wariant ({    .......   })
  Product.create :title => 'Hawaiian', 
                 :description => 'This is Hawaiian pizza!', 
                 :prise => 10, 
                 :size => 30,
                 :is_spicy => false, 
                 :is_veg => false, 
                 :is_best_offer => false, 
                 :path_to_image => '/images/1.jpeg'

  Product.create :title => 'Pepperoni',                                                                      
                 :description => 'Nice Pepperoni pizza!', 
                 :prise => 20, 
                 :size  => 30,
                 :is_spicy => false, 
                 :is_veg => false, 
                 :is_best_offer => true, 
                 :path_to_image => '/images/2.jpeg'

  Product.create :title => 'Vegetarian', 
                 :description => 'Amazing Vegetarian pizza!', 
                 :prise => 15, 
                 :size  => 30,
                 :is_spicy => false, 
                 :is_veg => false, 
                 :is_best_offer => false, 
                 :path_to_image => '/images/3.jpeg'

    end
 end
