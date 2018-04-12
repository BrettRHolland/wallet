class Api::V1::TransactionsController < ApplicationController
  def index
    @transactions = Transaction.order(date: :desc)
    @total_monthly_expenses =   Transaction.where.not(category: 'Income').sum(:amount)
    @total_monthly_income =   Transaction.where(category: 'Income').sum(:amount)
    render json: { transactions: @transactions, total_monthly_income: @total_monthly_income, total_monthly_expenses: @total_monthly_expenses }
  end

end
