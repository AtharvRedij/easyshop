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

read - admin

write - user can only add, admin has all writes permission

## Features to add

1.  Admin Panel
    1.  admin can view all orders
    2.  admin can add items to stock
    3.  admin can add new products
2.  Sign in for customers (users) so they can save cart items and view past orders.
3.  Search product by name
4.  Search & group products by category
5.  Persist state between tabs and page refresh
