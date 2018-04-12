class Transaction < ApplicationRecord
  validates :date, presence: true
  validates :description, presence: true
  validates :category, presence: true
  validates :amount, presence: true
end
