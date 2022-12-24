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