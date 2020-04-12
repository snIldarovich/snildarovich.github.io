ymaps.ready(function () {
		    var myMap = new ymaps.Map('mapOne', {
		            center: [38.576984, -121.540168],
		            zoom: 9
		        }, {
		            searchControlProvider: 'yandex#search'
		        }),

		        // Создаём макет содержимого.
		        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
		            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
		        ),

		        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
		            hintContent: 'Собственный значок метки',
		            balloonContent: 'Это красивая метка'
		        }, {
		            // Опции.
		            // Необходимо указать данный тип макета.
		            iconLayout: 'default#image',
		            // Своё изображение иконки метки.
		            iconImageHref: 'img/location.png',
		            // Размеры метки.
		            iconImageSize: [75, 79],
		            // Смещение левого верхнего угла иконки относительно
		            // её "ножки" (точки привязки).
		            iconImageOffset: [-33, -33],
		        });
		        myMap.geoObjects
		        .add(myPlacemark);
		}); 
		ymaps.ready(function () {
		    var myMap = new ymaps.Map('mapTwo', {
		            center: [36.175031, -115.091194],
		            zoom: 9
		        }, {
		            searchControlProvider: 'yandex#search'
		        }),

		        // Создаём макет содержимого.
		        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
		            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
		        ),

		        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
		            hintContent: 'Собственный значок метки',
		            balloonContent: 'Это красивая метка'
		        }, {
		            // Опции.
		            // Необходимо указать данный тип макета.
		            iconLayout: 'default#image',
		            // Своё изображение иконки метки.
		            iconImageHref: 'img/location.png',
		            // Размеры метки.
		            iconImageSize: [75, 79],
		            // Смещение левого верхнего угла иконки относительно
		            // её "ножки" (точки привязки).
		            iconImageOffset: [-33, -33],
		        });
		    myMap.geoObjects
		        .add(myPlacemark);
		});
		ymaps.ready(function () {
		    var myMap = new ymaps.Map('mapThree', {
		            center: [51.506360, -0.129192],
		            zoom: 9
		        }, {
		            searchControlProvider: 'yandex#search'
		        }),

		        // Создаём макет содержимого.
		        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
		            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
		        ),

		        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
		            hintContent: 'Собственный значок метки',
		            balloonContent: 'Это красивая метка'
		        }, {
		            // Опции.
		            // Необходимо указать данный тип макета.
		            iconLayout: 'default#image',
		            // Своё изображение иконки метки.
		            iconImageHref: 'img/location.png',
		            // Размеры метки.
		            iconImageSize: [75, 79],
		            // Смещение левого верхнего угла иконки относительно
		            // её "ножки" (точки привязки).
		            iconImageOffset: [-33, -33],
		        });
		    myMap.geoObjects
		        .add(myPlacemark);
		});