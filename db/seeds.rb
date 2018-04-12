# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Transaction.create(date: '2018-04-02', description: 'Netflix', category: 'Entertainment', amount: '7.99')
Transaction.create(date: '2018-04-04', description: 'Tax Return', category: 'Income', amount: '1523.72')
Transaction.create(date: '2018-04-01', description: 'Electric & Gas', category: 'Home', amount: '184.31')
Transaction.create(date: '2018-04-08', description: 'Dog Food', category: 'Entertainment', amount: '39.99')
Transaction.create(date: '2018-04-10', description: 'Birthday Money', category: 'Income', amount: '100')
Transaction.create(date: '2018-04-05', description: 'Groceries', category: 'Home', amount: '122.30')
