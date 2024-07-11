#!/usr/bin/ruby

# ===================
# This examples makes use of Ruby Threads which I read about here: https://www.rubyguides.com/2015/07/ruby-threads/
# ===================
print "How many seconds should we spend searching for prime numbers: ";
duration = gets.strip
print "-> find_prime_number(#{duration})\n"

# -----------------------------------
def is_prime_number(number) 
    is_prime = true 

    # Check if the number is <= 1
    if (number <= 1) 
        puts "-> Please try again but with a number that is <= 1"
        is_prime = false
        return is_prime
    end 

    # Loop numbers 2 to target - 1 
    (2..(number-1)).each do |x|  
        if (number % x == 0)
            is_prime = false
        end  
    end 

    return is_prime
end 

def find_prime_number(duration) 
    start_time = Time.now 
    largest_prime_number = 2
    
    # Assign a thread for the prime number generation
    prime_number_thread = Thread.new {
        (2..Float::INFINITY).each do |x| 
            if(is_prime_number(x)) 
                largest_prime_number = x 
            end   
        end
    }

    # Sleep for the requested amount of time then kill the prime number thread 
    diff = Time.now.to_f - start_time.to_f
    sleep duration.to_f - diff; 
    Thread.kill(prime_number_thread);  

    # Output the largest found, i wanted to get this to exactly 3 seconds but this is the best I could do in the time given and my exp. level
    diff2 = Time.now.to_f - start_time.to_f
    print "-> The largest found prime number was #{largest_prime_number} in #{diff2} seconds"  

    return nil
end
  

find_prime_number(duration)