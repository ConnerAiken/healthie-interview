#!/usr/bin/ruby
require './utility.rb'
require './animals.rb'
require './food.rb'
  
# Instantiate our animals
intervieweesDog = Dog.new("Stella")    
friendsCat = Cat.new("Meatloaf")   

# Instantiate our pantry
blueBuffaloForDogs = DogFood.new()
purinaForCats = CatFood.new()
jerseyCowMilk = Milk.new()
costcoRotisserie = Chicken.new()
spamMusubi = HumanFood.new()

# Illustrate the logic
puts "---------------------------------------------"
puts "Let's observe which animals like which foods"
puts "---------------------------------------------" 

# - Blue Buffalo
puts "> Let's try feeding the animals blue buffalo" 
feed_animal(intervieweesDog, blueBuffaloForDogs)
feed_animal(friendsCat, blueBuffaloForDogs)

# - Purina
puts "> Let's try feeding the animals purina" 
feed_animal(intervieweesDog, purinaForCats)
feed_animal(friendsCat, purinaForCats)

# - Jersey Cow Milk
puts "> Let's try feeding the animals the best milk on earth" 
feed_animal(intervieweesDog, jerseyCowMilk)
feed_animal(friendsCat, jerseyCowMilk)

# - Chicken
puts "> Let's try feeding some costco rotisserie chicken" 
feed_animal(intervieweesDog, costcoRotisserie)
feed_animal(friendsCat, costcoRotisserie)

# - Spam Musubi
puts "> Let's try feeding some spam musubi" 
feed_animal(intervieweesDog, spamMusubi)
feed_animal(friendsCat, spamMusubi)
 