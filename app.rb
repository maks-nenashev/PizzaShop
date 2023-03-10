#encoding: utf-8
require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

                          #Sozdanie bazy dannyh
set :database, {adapter: "sqlite3", database: "pizzashop.db"}
#set :database, "sqlite3:pizzashop.db" #Sozdanie bazy dannyh

# (rake db:create_migration NAME=create_products) <Code dla sozdanija faila s bazami danyh db>
class Product < ActiveRecord::Base
  
end

get '/' do
	@products = Product.all
  erb :index	
  end

get '/about' do
	erb :about
  end

 # + to app.rb
post '/cart' do
  @orders_input = params[:orders]

  @items = parse_orders_input @orders_input

  @items.each do |item|
    # id, cnt
    item[0] = Product.find(item[0])
  end

  erb :cart
  end

# Parse orders line:
def parse_orders_input orders_input

  s1 = orders_input.split(/,/)

  arr = []

  s1.each do |x|
    s2 = x.split(/\=/)
    s3 = s2[0].split(/_/)

    id = s3[1]
    cnt = s2[1]

    arr2 = [id, cnt]
    arr.push arr2
  end

  return arr
end