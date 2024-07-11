# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
conner = Provider.create!(name: 'Conner Aiken', email: 'conner@fittedtech.com')
jenny = Provider.create!(name: 'Jenny Aiken', email: 'jenny@fittedtech.com')

stella = Client.create!(name: 'Stella', email: 'stella@fittedtech.com', plan: 'basic')
axel = Client.create!(name: 'Axel', email: 'axel@fittedtech.com', plan: 'basic')

Journal.create(name: 'My First RoR API', content: 'I have dabbled with Ruby/RoR in the past but this is my first API from scratch', client: stella)
Journal.create(name: 'RoR is pretty neat', content: 'It is starting to grow on me!', client: stella)
Journal.create(name: 'RoR can be frustrating', content: 'Once I got the hang of migrations and models, it isnt too bad though.', client: axel)

CareTeam.create!(provider_id: conner.id, client_id: axel.id, is_primary_provider: true)
CareTeam.create!(provider_id: jenny.id, client_id: axel.id, is_primary_provider: false)

CareTeam.create!(provider_id: conner.id, client_id: stella.id, is_primary_provider: false)
CareTeam.create!(provider_id: jenny.id, client_id: stella.id, is_primary_provider: true)