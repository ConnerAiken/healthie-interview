class AddClientJournalAssociation < ActiveRecord::Migration[7.2]
  def change
    add_reference :journals, :client, foreign_key: true
  end
end
