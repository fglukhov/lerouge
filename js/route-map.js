

document.addEventListener("DOMContentLoaded", function (event) {
  ymaps.ready(function () {

    // Создаем карту с добавленными на нее кнопками.
    var myMap = new ymaps.Map('routeMap', {
      center: [55.750625, 37.626],
      zoom: 17
    }, {
      //buttonMaxWidth: 300
    });

    // var balloonLayout = ymaps.templateLayoutFactory.createClass(
    //   "<div class='my-balloon'>" +
    //   "{{ properties.balloonContent }}" +
    //   "</div>", {
    //
    //     build: function () {
    //       this.constructor.superclass.build.call(this);
    //       this._$element = $('.my-balloon', this.getParentElement());
    //       this._$element.find('.close')
    //         .on('click', $.proxy(this.onCloseClick, this));
    //     },
    //
    //     onCloseClick: function (e) {
    //       e.preventDefault();
    //       this.events.fire('userclose');
    //     }
    //   }
    // );

    var routePoints = new Array();

    for (i = 0; i < pointsArray.points.length; i++) {

      pointPlacemark = new ymaps.Placemark(pointsArray.points[i].coords, {
        balloonContent: pointsArray.points[i].name
      }, {

      },{

      });

      routePoints.push(pointPlacemark);

    }


    var myRoute = new ymaps.multiRouter.MultiRoute({
      // Описание опорных точек мультимаршрута.
      referencePoints: routePoints,
      // Параметры маршрутизации.
      params: {
        // Ограничение на максимальное количество маршрутов, возвращаемое маршрутизатором.
        //results: 1,
        routingMode: 'pedestrian'
      }
    }, {
      // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
      boundsAutoApply: true,
      //balloonLayout: balloonLayout
    });

    // Добавляем мультимаршрут на карту.
    myMap.geoObjects.add(myRoute);

    myRoute.events.add("update",function () {
      var wayPoints = myRoute.getWayPoints();

      wayPoints.options.set({

        iconLayout: "default#imageWithContent",
        iconImageHref: "/layout/images/route-pin.png",
        iconImageSize: [43, 60],
        iconImageOffset: [-21, -60]
      });

      // wayPoints.get(0).properties.set({
      //   iconContent: "1"
      // });

      //console.log(wayPoints.get(0).properties.get("iconContent"))

      for (i = 0; i < wayPoints.getLength(); i++) {

        var curWayPoint = wayPoints.get(i);

        curWayPoint.properties.set({
          pointId: pointsArray.points[i].id,
          balloonContent: pointsArray.points[i].name
        });

        ymaps.geoObject.addon.balloon.get(curWayPoint);

        curWayPoint.options.set({
          iconContentLayout: ymaps.templateLayoutFactory.createClass(
            '<div class="route-icon-content">' + parseInt(i + 1) +'</div>'
          ),
          balloonContentLayout: ymaps.templateLayoutFactory.createClass(
            curWayPoint.properties.get("balloonContent")
          ),
          balloonPanelMaxMapArea: 0,
          balloonMaxWidth: 150
        });

      }

      $(".object-map-link").click(function () {

        if ($("#mobile-indicator").css("display") == "block") {
          $(".sidebar-route-map").fadeIn(150,function () {

            myMap.container.fitToViewport();

          });
        }

        var mapLink = $(this);

        for (i = 0; i < wayPoints.getLength(); i++) {

          var curWayPoint = wayPoints.get(i);

          if (curWayPoint.properties.get("pointId") == mapLink.data("id")) {

            ymaps.geoObject.addon.balloon.get(curWayPoint).open()

          }

        }

        return false;
      });

      // ymaps.geoObject.addon.balloon.get(yandexWayPoint);
      // yandexWayPoint.options.set({
      //
      // });

      //ymaps.geoObject.addon.balloon.get(yandexWayPoint).open();

    });


    $(".btn-route-map").on("click", function() {
      setTimeout(function () {
        myMap.container.fitToViewport();
      },350);
    });

    $(window).resize(function() {

      myMap.container.fitToViewport();

    });






  });
});