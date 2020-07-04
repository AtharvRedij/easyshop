# Easyshop

Easyshop is an ecommerce app created using React, Redux and Firebase.

## Installation

Run following command in project root folder.

`npm i`

## Usage

Run following command to start the app.

`npm start`

Run following command to build.

`npm run build`

## Firestore DB collections

### products

stores all the products with their information

read - user & admin

write - admin

### orders

store all the orders

read - user can read only his orders, admin has full access

write - user can only add, admin has all writes permission

### users

stores the user document along with their cart. When order is placed this cart is moved to orders collection.

read - user can read only his document

write - user can write to only his document

## Features to add

1.  Admin Panel
    1.  admin can view all orders
    2.  admin can add items to stock
    3.  admin can add new products
2.  Search product by name
3.  Search & group products by category

## Known issues

1. If items are added to cart too fast i.e. double click, item gets added twice in redux store but only once in firestore.
