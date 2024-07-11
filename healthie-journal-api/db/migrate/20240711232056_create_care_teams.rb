class CreateCareTeams < ActiveRecord::Migration[7.2]
  def change
    create_table :care_teams do |t|
      t.references :client, null: false, foreign_key: true
      t.references :provider, null: false, foreign_key: true
      t.boolean :is_primary_provider, null: false
      t.timestamps
    end
  end
end
