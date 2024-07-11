class Animal 
    def initialize(name)
       @name = name
       @primary_noise = nil
    end 

    def speak
        puts "#{@name} #{@primary_noise}s!"
    end

    def consume_food(is_appetizing)
        if(is_appetizing)
            self.speak()
            self.speak()
            self.speak()
        else 
            self.speak()
        end
    end
end

class Dog < Animal 
    def initialize(name)
       super(name)
       @primary_noise = 'woof'
    end  
 
end

class Cat < Animal
    def initialize(name)
       super(name)
       @primary_noise = 'meow'
    end   
end