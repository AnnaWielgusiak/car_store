/* 
	price - PLN
	odometer - kilometers
	power - horsepower
 */
const CARS = [
	{
		'id': 1,
		'brand': 'Fiat',
		'model': '500',
		'price': 24900,
		'year': 2011,
		'odometer': 212000,
		'power': 69,
		'picture': 'https://images.pexels.com/photos/7469142/pexels-photo-7469142.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		'accessories': [
			{
				'id': 1,
				'name': 'Opony zimowe',
				'price': 2000,
			},
			{
				'id': 2,
				'name': 'Felgi aluminiowe',
				'price': 1000
			},
			{
				'id': 3,
				'name': 'Isofix',
				'price': 300
			},
			{
				'id': 4,
				'name': 'Bluetooth',
				'price': 300
			},
			{
				'id': 5,
				'name': 'Alarm',
				'price': 500
			}
		]
	},
	{
		'id': 2,
		'brand': 'Audi',
		'model': 'A6',
		'price': 296900,
		'year': 2022,
		'odometer': 5,
		'power': 204,
		'picture': 'https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		'accessories': [
			{
				'id': 1,
				'name': 'Opony zimowe',
				'price': 4000,
			},
			{
				'id': 2,
				'name': 'Felgi aluminiowe',
				'price': 5000
			},
			{
				'id': 3,
				'name': 'Isofix',
				'price': 400
			},
			{
				'id': 4,
				'name': 'CarPlay/AndroidAuto',
				'price': 3000
			},
			{
				'id': 5,
				'name': 'Skórzana tapicerka',
				'price': 500
			}
		]
	},
	{
		'id': 3,
		'brand': 'BMW',
		'model': '530',
		'price': 44500,
		'year': 2007,
		'odometer': 241800,
		'power': 272,
		'picture': 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		'accessories': [
			{
				'id': 1,
				'name': 'Opony zimowe',
				'price': 4000,
			},
			{
				'id': 2,
				'name': 'Felgi aluminiowe',
				'price': 5000
			},
			{
				'id': 3,
				'name': 'Isofix',
				'price': 400
			},
			{
				'id': 4,
				'name': 'CarPlay/AndroidAuto',
				'price': 3000
			},
			{
				'id': 5,
				'name': 'Skórzana tapicerka',
				'price': 500
			}
		]
	},
	{
		'id': 4,
		'brand': 'Volkswagen',
		'model': 'Passat',
		'price': 73900,
		'year': 2018,
		'odometer': 149793,
		'power': 150,
		'picture': 'https://cdn.pixabay.com/photo/2015/07/30/00/30/pkw-866769_960_720.jpg',
		'accessories': [
			{
				'id': 1,
				'name': 'Opony zimowe',
				'price': 3000,
			},
			{
				'id': 2,
				'name': 'Felgi aluminiowe',
				'price': 2000
			},
			{
				'id': 3,
				'name': 'Isofix',
				'price': 350
			},
			{
				'id': 4,
				'name': 'CarPlay/AndroidAuto',
				'price': 800
			},
			{
				'id': 5,
				'name': 'Alarm',
				'price': 500
			}
		]
	},
	{
		'id': 5,
		'brand': 'Opel',
		'model': 'Insignia',
		'price': 36999,
		'year': 2011,
		'odometer': 103350,
		'power': 140,
		'picture': 'https://cdn.pixabay.com/photo/2014/07/05/03/42/auto-384543_960_720.jpg',
		'accessories': [
			{
				'id': 1,
				'name': 'Opony zimowe',
				'price': 3000,
			},
			{
				'id': 2,
				'name': 'Felgi aluminiowe',
				'price': 2000
			},
			{
				'id': 3,
				'name': 'Isofix',
				'price': 350
			},
			{
				'id': 4,
				'name': 'CarPlay/AndroidAuto',
				'price': 800
			},
			{
				'id': 5,
				'name': 'Alarm',
				'price': 500
			}
		]
	},
	{
		'id': 6,
		'brand': 'Ford',
		'model': 'Mustang',
		'price': 170000,
		'year': 1965,
		'odometer': 999999,
		'power': 200,
		'picture': 'https://images.pexels.com/photos/9187027/pexels-photo-9187027.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		'accessories': [
			{
				'id': 1,
				'name': 'Opony zimowe',
				'price': 3000,
			},
			{
				'id': 2,
				'name': 'Felgi aluminiowe',
				'price': 3000
			},
			{
				'id': 3,
				'name': 'Zamek centralny',
				'price': 1000
			},
			{
				'id': 4,
				'name': 'Zmieniarka płyt CD',
				'price': 300
			},
			{
				'id': 5,
				'name': 'Alarm',
				'price': 500
			}
		]
	},
	{
		'id': 7,
		'brand': 'Mercedes',
		'model': 'S 500',
		'price': 199000,
		'year': 2014,
		'odometer': 191000,
		'power': 455,
		'picture': 'https://images.pexels.com/photos/3778776/pexels-photo-3778776.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		'accessories': [
			{
				'id': 1,
				'name': 'Opony zimowe',
				'price': 4000,
			},
			{
				'id': 2,
				'name': 'Felgi aluminiowe',
				'price': 5000
			},
			{
				'id': 3,
				'name': 'Isofix',
				'price': 400
			},
			{
				'id': 4,
				'name': 'CarPlay/AndroidAuto',
				'price': 3000
			},
			{
				'id': 5,
				'name': 'Skórzana tapicerka',
				'price': 500
			}
		]
	},
	{
		'id': 8,
		'brand': 'Renault',
		'model': 'Megane',
		'price': 24900,
		'year': 2009,
		'odometer': 169000,
		'power': 180,
		'picture': 'https://images.pexels.com/photos/1005633/pexels-photo-1005633.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		'accessories': [
			{
				'id': 1,
				'name': 'Opony zimowe',
				'price': 3000,
			},
			{
				'id': 2,
				'name': 'Felgi aluminiowe',
				'price': 2000
			},
			{
				'id': 3,
				'name': 'Isofix',
				'price': 350
			},
			{
				'id': 4,
				'name': 'CarPlay/AndroidAuto',
				'price': 800
			},
			{
				'id': 5,
				'name': 'Alarm',
				'price': 500
			}
		]
	},
	{
		'id': 9,
		'brand': 'Toyota',
		'model': 'Auris',
		'price': 79950,
		'year': 2017,
		'odometer': 76000,
		'power': 99,
		'picture': 'https://cdn.pixabay.com/photo/2014/05/18/19/13/toyota-347288_960_720.jpg',
				'accessories': [
			{
				'id': 1,
				'name': 'Opony zimowe',
				'price': 3000,
			},
			{
				'id': 2,
				'name': 'Felgi aluminiowe',
				'price': 2000
			},
			{
				'id': 3,
				'name': 'Isofix',
				'price': 350
			},
			{
				'id': 4,
				'name': 'CarPlay/AndroidAuto',
				'price': 800
			},
			{
				'id': 5,
				'name': 'Alarm',
				'price': 500
			}
		]
	},
	{
		'id': 10,
		'brand': 'Skoda',
		'model': 'Superb',
		'price': 125900,
		'year': 2017,
		'odometer': 137707,
		'power': 190,
		'picture': 'https://cdn.pixabay.com/photo/2019/07/12/12/37/skoda-4332791_960_720.jpg',
		'accessories': [
			{
				'id': 1,
				'name': 'Opony zimowe',
				'price': 4000,
			},
			{
				'id': 2,
				'name': 'Felgi aluminiowe',
				'price': 5000
			},
			{
				'id': 3,
				'name': 'Isofix',
				'price': 400
			},
			{
				'id': 4,
				'name': 'CarPlay/AndroidAuto',
				'price': 3000
			},
			{
				'id': 5,
				'name': 'Skórzana tapicerka',
				'price': 500
			}
		]
	}
];