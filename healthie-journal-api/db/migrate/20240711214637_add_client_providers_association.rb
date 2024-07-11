class AddClientProvidersAssociation < ActiveRecord::Migration[7.2]
  def change
    add_reference :clients, :provider, foreign_key: true   
  end
end
