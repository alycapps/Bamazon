# Overview
This is a CLI app for managing an imaginary store called Bamazon. The app begins by prompting users on what view they would like to access - Customer, Manager or Supervisor. 

# Customer
The Customer view allows users to see available items for sale as well as their prices. Users will then chose the quantity and id of the item they would like. If the quantity is in stock users will see the amount owed otherwise they will be alerted that there is not enough in stock.

![customersuccess](https://user-images.githubusercontent.com/38168385/44635816-2e21c400-a976-11e8-9ff6-f3d6b7388644.PNG)
_Example of successful transaction above_

![customerfailure](https://user-images.githubusercontent.com/38168385/44635842-527da080-a976-11e8-921c-c736b78f404f.PNG)
_Example of insufficent stock above_

# Manager
The Manager view allows users to View Products for Sale, View Low Inventory, Add to Inventory or Add a New Product.

## View Products for Sale
This view will list all items available along with relevant information.

![managerviewproducts](https://user-images.githubusercontent.com/38168385/44695189-0008b680-aa40-11e8-88c4-35d87d4d44cf.PNG)
_Example of manager viewing products for sale_

## View Low Inventory
This view will show any inventory with less than 5 items in stock or will "No items with low inventory" if all items have an inventory greater than 5.

![managerlowinventory](https://user-images.githubusercontent.com/38168385/44695144-b4eea380-aa3f-11e8-83c0-743df60388d0.PNG)
_Example of low inventory_

![managerlowinventoryfalse](https://user-images.githubusercontent.com/38168385/44695153-bf10a200-aa3f-11e8-81d0-5de8af4fc084.PNG)
_Example of response when no inventory is low_

## Add to Inventory
This view will allow users to add more inventory for a chosen item.

![manageraddinventory](https://user-images.githubusercontent.com/38168385/44695131-99839880-aa3f-11e8-8c85-d1b1a44563f1.PNG)
_Example of manager add inventory_

## Add a New Product
This view will allow users to add a new item that is in stock.

![managernewproduct](https://user-images.githubusercontent.com/38168385/44695174-e49dab80-aa3f-11e8-8cd1-d0383bcb1ca1.PNG)
_Example of manager add new product_

# Supervisor
The Supervisor view is currently under construction, please check back later.
