class CreateTransactions < ActiveRecord::Migration[5.1]
  def change
    create_table :transactions do |t|
      t.date :date, null: false
      t.string :description, null: false
      t.string :category, null: false
      t.decimal :amount, null: false, precision: 7, scale: 2

      t.timestamps
    end
  end
end
