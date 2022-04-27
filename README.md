# car_store - Kup auto
Webside for buing car

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
This project is a simple car store website. Customer may use it for buing a potential car

## Technologies
* HTML 5
* CSS3
* Bootstrap 5.1.3
* Java Script ES6

## Instalation and activation
Customer may open application by opening website at internet browser.

## Functional scope
* Searching for cars and filters. Cars are placed in database (JavaScript's objects).
* Filling order form with the name of the owner, delivery data (always 14 days) and choosing financing source.
* Showing summary.
* Data of a chosen car and order information are stored in localStorage until final purchase a car.

## Examples of use
1. Car searching and potential buing from the database
	a) Press link in navigation "Kup auto"
	b) All cars in database will be shown. Every car has its own brand, model, year of production, power and millage. The asking price is also given
	c) Press a field with car which you want choose
	d) Form field will be shown - customer may see data of your chosen car and the field to chose additional accessories, form to fill in delivery data (owners' name, financing, delivery data)
	e) Customer may add or delate additional accessories which leads a final price change.
	f) Customer needs to fill in given spaces with his name and surname - special signs and numbers are forbidden. If a customer makes a mistake, will be informed about that.
	g) A customer may chose financing - cash by default. It is possible by pressing radio button with description "Gotówka". Unpresses this button leasing will be automatically chose.
	h) Delivery day is within 14 days since purchase date.
	i) Customer may come back to the car list by selection "Powrót do wyboru"
	j) Customer may "buy" a car by pressing "Zakup".
	k) Pressing "Zakup" shows the summary with delivery data and car data.
2. Customer may refresh or close the window after choosing a car. All data from the form will be stored. Data storage is cleaned after completing the purchase process
3. Customer may search by brand (marka), model (model), year (rok) and price (cena). After choosing from these options and pressing "Szukaj" cars that meet the criteria will be shown.

## Project status
Project for further develop. Points which need to be added:
* Functionality of buttons: localisation and contact
* Searching by brand of cars which can be chosen from a carousel
* First field of searching fields (selects) - needs adding information that the customer has to chose from the given options to start searching (optional)

## Sources
Icons:
* https://www.flaticon.com/search?word=pointer&order_by=4&type=icon
* https://www.flaticon.com/search?word=phone&order_by=4&type=icon
* https://www.flaticon.com/free-icon/calendar_4744824#
* https://www.flaticon.com/free-icon/speedometer_3564796?term=odometer&page=1&position=4&page=1&position=4&related_id=3564796&origin=search
* https://www.flaticon.com/free-icon/energy_25018?term=power&page=1&position=5&page=1&position=5&related_id=25018&origin=search

Movie:
https://www.pexels.com/pl-pl/video/natura-wakacje-woda-chmury-5418124/

Car pictures:
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

Brand logos are used only for learning purpose - non commercial use

## Other informations
This webside was created to realise one of Wrocław WSB Univercity projects on the faculty of Frontend Developer with an Angular in 2021/2022.

