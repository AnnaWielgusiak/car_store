# car_store - Kup auto
Webside to buing car

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Instalation and activation](#instalation-and-activation)
* [Functional scope](#functional-scope)
* [Exaples of use](#examples-of-use)
* [Project status](#project-status)
* [Sources](#sources)
* [Other informations](#other-informations)

## General info
This project is a simple car store website. Customer may use it to "imagined" purchase of a car.

## Technologies
* HTML 5
* CSS3
* Bootstrap 5.1.3
* Java Script ES6

## Instalation and activation
Customer may open application by opening website at internet browser.

## Functional scope
* Cars searching and filtration. Cars are in database (JavaScript's objects).
* Filling order form with name of owner, delivery data (always 14 days) and choosing financing source.
* Showing summary.
* Data choosen car and order information are stored in localStorage since final purchase a car.

## Examples of use
1. Car searching and "buying" from all database
	a) Press link in navigation "Kup auto"
	b) All cars in database would be showed. Every car has its own brand, model, year of production, power and odometer. It has also its base price
	c) Press a field with car which you want choose
	d) Form field would be showed - you may see data of your choosen car, field to chose additional accessories of car, form to fill with delivery data (owner name, financing type, delivery data)
	e) Customer may add or delate additional accessories which is corresponding with changing a car final price.
	f) Customer need to write your first name and surname with one space - special signs and numbers ar forbidden. If customer make a mistake, will be informed about that.
	g) Customer may choose financing kind - money is default. It is might by pressing a radio button with description "Gotówka". If customer unpress this button, leasing would be automatically chose.
	h) Delivery day is always 14 days since current date.
	i) Customer may come back to car list by choosing "Powrót do wyboru"
	j) Customer may "buy" a car by choosing "Zakup".
	k) Pressing "Zakup" show a summary with delivery data and car data.
2. Customer may refresh or close window after choosing a car. All data from form would be stored in localStorage. They are clean after "buying".
3. Customer may search by brand (marka), model (model), year (rok) and price (cena). After choosing this options and "Szukaj" cars that meet the criteria will be shown.

## Project status
Project for develop. Points which need to be add:
* Functionality of buttons: localisation and contact
* Searching by brand of car showed in carousel
* First field of searching fields (selects) - add information that customer need to chose something to search (optional)

## Sources
Icons:
* https://www.flaticon.com/search?word=pointer&order_by=4&type=icon
* https://www.flaticon.com/search?word=phone&order_by=4&type=icon

Movie:
https://www.pexels.com/pl-pl/video/natura-wakacje-woda-chmury-5418124/

Cars pictures:
* https://images.pexels.com/photos/7469142/pexels-photo-7469142.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
* https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
* https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940,
* https://cdn.pixabay.com/photo/2015/07/30/00/30/pkw-866769_960_720.jpg,
* https://cdn.pixabay.com/photo/2014/07/05/03/42/auto-384543_960_720.jpg,
* https://images.pexels.com/photos/9187027/pexels-photo-9187027.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940,
* https://images.pexels.com/photos/3778776/pexels-photo-3778776.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940,
* https://images.pexels.com/photos/1005633/pexels-photo-1005633.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940,
* https://cdn.pixabay.com/photo/2014/05/18/19/13/toyota-347288_960_720.jpg,
* https://cdn.pixabay.com/photo/2019/07/12/12/37/skoda-4332791_960_720.jpg.

Carousel inspirated by:
* https://bootsnipp.com/snippets/dl6ez

Brand logos are used only in learn purpose - non commercial

## Other information
Webside was created for realisation one of projects on studies of faculty Frontend developer with Angular last on WSB University in Wrocław in 2021/2022 year.

