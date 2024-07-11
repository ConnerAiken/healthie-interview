class CreateJournals < ActiveRecord::Migration[7.2]
  def change
    create_table :journals do |t|
      t.string :name
      t.string :content

      t.timestamps
    end
  end
end
