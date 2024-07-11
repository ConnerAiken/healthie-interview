class Client < ApplicationRecord   
    has_many :care_team
    has_many :provider, through: :care_team
end
