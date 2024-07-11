# Provider Form DB Design

> We want to model providers (e.g. dietitians), their clients, and journal entries.
>
> - Both providers and clients have a name and an email address.
> - Providers have many clients
> - Clients usually have one Provider but can have more than one.
> - Clients have a plan that they paid for, signified by the string "basic" or "premium". For each provider that a client is signed up with, they have 1 plan.
> - Clients post journal entries. These consist of freeform text.
>   We want to be able to do these queries:
> - Find all clients for a particular provider
> - Find all providers for a particular client
> - Find all of a particular client's journal entries, sorted by date posted
> - Find all of the journal entries of all of the clients of a particular provider, sorted by date posted

Using ActiveRecord, Django, or another system you enjoy using, create the classes and schema migrations for this, including indexes.

## Versions

- Rails 7.2.0.beta3
- Ruby 3.3.3

## How I approached creating this (as a ruby newby)

To create this, I ran:

- `rails new HealthieAPIs --api`
- `ruby bin/rails g scaffold Provider name:string email:string`
- `ruby bin/rails generate scaffold Client name:string email:string plan:string`
- `ruby bin/rails generate scaffold Journal name:string content:string`
- `ruby bin/rails generate scaffold ClientProviders`
- I then created some migrations/model changes, adjusted the `config/routes.rb` and ran`ruby bin/rails db:migrate`

## How to get this running

1. Clone the repo
2. Apply the db migration: `rails db:migrate`
3. Seed the database: `bundle exec rails db:seed` or run the commands below with `rails console`
4. Run the curl commands in the validation section or load the URLs in a browser since they are all GET requests

## Seeding the DB

I didn't quite have time/knowledge yet to seed it properly with the `db/seeds.rb` so I seeded with the `rails console` command.

```
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
```

## Curl commands to validate

- Find all clients => `curl --location http://localhost:3000/clients`
- Find all providers => `curl --location http://localhost:3000/providers`
- Find all clients for a particular provider => `curl --location http://localhost:3000/providers/1/clients`
- Find all providers for a particular client => `curl --location http://localhost:3000/clients/1/providers`
- Find all of a particular client's journal entries, sorted by date posted => `curl --location http://localhost:3000/clients/1/journals`
- Find all of the journal entries of all of the clients of a particular provider, sorted by date posted => `curl --location http://localhost:3000/journals/all/provider/1`

## Assumptions

- I assume we don't need any error handling
