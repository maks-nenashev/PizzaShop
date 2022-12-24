class CreateProducts < ActiveRecord::Migration[7.0]
  def change
  
    create_table :products do |t|
      t.string :title
      t.text :description
      t.decimal :prise
      t.decimal :size 
      t.boolean :is_spicy
      t.boolean :is_veg
      t.boolean :is_best_offer
      t.string :path_to_image

      t.timestamps # ((created_at vs updated_at)) "Sozdanie stolbca s datoy sozdanija datoy wpisa"
  end
 end
end