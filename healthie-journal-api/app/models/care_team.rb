class CareTeam < ApplicationRecord
    belongs_to :client
    belongs_to :provider
end
