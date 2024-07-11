class Provider < ApplicationRecord
    has_many :care_team 
    has_many :client, through: :care_team
end
