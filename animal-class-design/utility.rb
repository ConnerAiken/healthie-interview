def feed_animal(animal, food)   
    puts "*feeds #{animal.class.name} #{food.class.name}*"
    puts animal.consume_food(food.is_appetizing(animal.class.name))  
end  