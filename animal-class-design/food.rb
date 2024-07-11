# ========================
# Top Level Classes
# ===================
class Food  
    def initialize() 
       @consumers = []
    end 

    def is_appetizing(animal) 
        if(@consumers.include?(animal))   
           return true 
        end 

        return false
    end 
end 
# ========================
# Species Sub-Classes
# ===================
class HumanFood < Food    
    def initialize() 
       super
       @consumers << 'Human'
       @consumers << 'Dog'
    end  
end 


class DogFood < Food   
    def initialize() 
       super
       @consumers << 'Dog'
    end  
end 

class CatFood < Food   
    def initialize() 
       super
       @consumers << 'Cat'
       @consumers << 'Dog'
    end  
end  
 
# ========================
# Food Sub-Classes
# ===================
class Chicken < HumanFood
    def initialize() 
        super
        @consumers << 'Cat'
    end  
end  

class Milk < HumanFood
    def initialize() 
        super
        @consumers << 'Cat'
    end  
end

class Lemon < HumanFood 
end
