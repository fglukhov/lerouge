var is_mobile = false; //initiate as false
// device detection
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
  is_mobile = true;
}

var isIE9OrBelow = function() {
  return /MSIE\s/.test(navigator.userAgent) && parseFloat(navigator.appVersion.split("MSIE")[1]) < 10;
}

var numFormat = wNumb({
  thousand: ' '
});

$(window).on("scroll touchmove", function () {

  var scrollPos = $(window).scrollTop();

  if (scrollPos > 0) {

    if (!$("header").hasClass("header-fixed")) {

      $("header").css({
        paddingTop: $(".header-inner").height()
      });

      $("header").addClass("header-fixed");
    }


  } else {

    if ($("header").hasClass("header-fixed")) {

      $("header").removeClass("header-fixed");

      $("header").css({
        paddingTop: 0
      });

    }


  }

  // if (scrollPos > 300) {
  //   $(".up-link").fadeIn(150);
  // } else {
  //   $(".up-link").fadeOut(150);
  // }

});

$(window).resize(function () {


});

$(window).on("load", function () {


});

var baseUrl = ""

$(document).ready(function () {

  // Events slider

  $(".events-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: false
  });

  // Events slider END

  // Gallery slider

  $(".gallery-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
    responsive: [
      {
        breakpoint: 1870,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  });

  // Gallery slider END



  // FAQ

  $(".faq-item h3, .faq-item .h3, .faq-item .btn-collapse").click(function () {

    $(this).closest(".faq-item").find(".faq-item-content").slideToggle(500,function () {

      $(this).closest(".faq-item").toggleClass("active");

    });

  });

  // FAQ END

  // Show more

  $("body").on("click", ".show-more", function () {

    var moreLink = $(this),
        moreUrl = $(this).attr("href");

    if (!moreLink.hasClass("loading")) {

      moreLink.addClass("loading");

      $.ajax({
        url: moreUrl,
        dataType: "html"
      }).done(function(data) {

        moreLink.closest(".show-more-wrapper").before($(data));

        moreLink.closest(".show-more-wrapper").remove();

      });

    }

    return false;

  });

  // Show more END

  $(".up-link").click(function () {

    $("html, body").animate({
      scrollTop: 0
    },1000);

  });


  // Anchors

  $("a").click(function () {

    if ($("a[name='" + $(this).attr("href").replace("#","") + "']").length) {
      var aTarget = $("a[name='" + $(this).attr("href").replace("#","") + "']");
      $("html,body").animate({
        scrollTop: aTarget.offset().top - 50
      },1000)
      
      if ($(this).closest(".menu-nav-wrapper").length) {

        $(".menu-nav-wrapper").fadeOut(150);
        $("body").removeClass("nav-open");

        $(".menu-nav-trigger").toggleClass("active");
        
      }
      
    }
  });

  $("[data-video]").click(function () {
    $(this).html('<iframe width="100%" height="100%" src="' + $(this).data("video") + '?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
  });

  var scrollPos = $(window).scrollTop();

  if (scrollPos > 0) {

    if (!$("header").hasClass("header-fixed")) {

      $("header").css({
        paddingTop: $(".header-inner").height()
      });

      $("header").addClass("header-fixed");

    }


  } else {

    if ($("header").hasClass("header-fixed")) {

      $("header").removeClass("header-fixed");

      $("header").css({
        paddingTop: 0
      });

    }

  }

  // Main menu

  $(".navbar-trigger").click(function () {

    $(this).toggleClass("active");

    $(".navbar-wrapper").fadeToggle(150);
    $("body").toggleClass("menu-open");

  });

  $(".navbar-wrapper .close").click(function () {

    $(".navbar-wrapper").fadeOut(150);
    $("body").removeClass("menu-open");

  });

  $(".navbar-wrapper").click(function (e) {

    if (!$(e.target).hasClass("navbar-row") && !$(e.target).parents().hasClass("navbar-row")) {

      $(".navbar-wrapper").fadeOut(150);
      $("body").removeClass("menu-open");

      $(".navbar-trigger").toggleClass("active");

    }


  });
  
  // Main menu END
  
  // Menu categories

  $(".menu-nav-trigger").click(function () {

    $(this).toggleClass("active");

    $(".menu-nav-wrapper").fadeToggle(150);
    $("body").toggleClass("nav-open");

  });

  $(".menu-nav-wrapper .close").click(function () {

    $(".menu-nav-wrapper").fadeOut(150);
    $("body").removeClass("nav-open");

  });

  $(".menu-nav-wrapper").click(function (e) {

    if (!$(e.target).hasClass("menu-nav-wrapper") && !$(e.target).parents().hasClass("menu-nav-wrapper")) {

      $(".menu-nav-wrapper").fadeOut(150);
      $("body").removeClass("nav-open");

      $(".menu-nav-trigger").toggleClass("active");

    }


  });

  // Menu categories END

  // Expandable

  $("body").on("click", ".expandable-trigger", function () {

    var exTrigger = $(this);

    if (!exTrigger.hasClass("active")) {

      exTrigger.closest(".expandable").find(".expandable-content").slideDown(500, function () {
        exTrigger.addClass("active").html(exTrigger.data("collapsetext"));
        exTrigger.closest(".expandable").addClass("open");
      });

    } else {

      exTrigger.closest(".expandable").find(".expandable-content").slideUp(500, function () {
        exTrigger.removeClass("active").html(exTrigger.data("expandtext"));
        exTrigger.closest(".expandable").removeClass("open");
      });

    }

  });

  // Datepicker

  var monthsRus = ["янавря", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

  $(".input-date").each(function () {

    var pickerField = $(this);

    pickerField.pickadate({
      monthsFull: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      format: 'd.mm.yyyy',
      min: new Date(),
      selectYears: true,
      selectMonths: true
    });

  });

  // Numeric input

  $(document).on("input", ".numeric", function() {
    this.value = this.value.replace(/\D/g,'');
  });


  // Fancybox

  $("a.fancybox").fancybox();

  // Forms

  $("select").not(".picker__select--month, .picker__select--year").each(function () {
    if ($(this).attr("multiple")) {
      $(this).selectpicker({
        selectAllText: "Выбрать всё",
        deselectAllText: "Снять выбор",
        selectedTextFormat: "count",
        countSelectedText: function(count) {
          return count + " " + declOfNum(count, ['элемент', 'элемента', 'элементов']);
        }
      });
    } else {
      $(this).selectpicker({
        selectAllText: "Выбрать всё",
        deselectAllText: "Снять выбор"
      });
    }
  });

  if ($("input:text").length) {
    $("input:text").each(function() {
      if ($(this).val()) {
        $(this).prev(".placeholder").hide();
      }
    });
  }

  if ($("textarea").length) {
    $("textarea").each(function() {
      if ($(this).val()) {
        $(this).prev(".placeholder").hide();
      }
    });
  }

  $("body").on("focus","input, textarea",function() {
    var el = $(this);

    if (el.parent().find(".placeholder").length) {
      var placeholder = el.parent().find(".placeholder");

      placeholder.hide();

    }

  });

  $("body").on("blur","input, textarea",function() {
    var el = $(this);

    if (el.parent().find(".placeholder").length) {
      var placeholder = el.parent().find(".placeholder");

      if (!el.val() || (el.hasClass("input-phone") && ! /^(?=.*[0-9])[- +()0-9]+$/.test(el.val()))) {
        placeholder.show();
      }

    }

  });

  $("body").on("click",".placeholder",function(e) {
    if ($(this).parent().find("input").length) {
      $(this).parent().find("input").trigger("focus");
    }
    if ($(this).parent().find("textarea").length) {
      $(this).parent().find("textarea").trigger("focus");
    }
  });

  $("body").on("focus","input[type=text], input[type=email], input[type=password], textarea", function () {
    $(this).closest(".form-item").addClass("focus");
  });

  $("body").on("blur","input[type=text], input[type=email], input[type=password], textarea", function () {
    $(this).closest(".form-item").removeClass("focus")
  });

  validateForms();


  // Contacts map

  ymaps.ready(function () {

    var myMap = new ymaps.Map('contactsMap', {
        center: [55.767190, 37.606791],
        zoom: 16,
        controls: []
      }, {}),

      myPlacemark = new ymaps.Placemark([55.767190, 37.607709], {
        hintContent: '',
        balloonContent: ''
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'images/map-pin.png',
        // Размеры метки.
        iconImageSize: [51, 83],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-25, -83]
      });

    myMap.behaviors.disable('scrollZoom');

    myMap.geoObjects
      .add(myPlacemark);

  });

  // Contacts map END

});

function validateForms() {

  $("input.input-phone").mask("+7 (999) 999-99-99");

  jQuery.validator.addClassRules('phone-email-group', {
    require_from_group: [1, ".phone-email-group"]
  });

  $("select").on("change", function () {
    if (!$(this).closest(".picker").length) {
      $(this).valid();
    }
  });

  $("body").on("click", ".form-item", function (e) {
    if ($(this).find(".bootstrap-select").length && !$(e.target).hasClass("bootstrap-select") && !$(e.target).parents().hasClass("bootstrap-select")) {
      $(e.target).closest(".form-item").find("select").selectpicker('toggle');
    }
  });

  $("form").each(function() {

    form = $(this);

    $(this).validate({
      focusInvalid: true,
      sendForm : false,
      errorPlacement: function(error, element) {
        if (element[0].tagName == "SELECT") {
          element.closest(".form-item").addClass("error");
          element.closest(".btn-group").addClass("btn-group-error");
          if (element.closest(".form-item").length) {
            error.insertAfter(element.closest(".form-item"));
          } else {
            error.insertAfter(element.closest(".btn-group"));
          }
        } else {
          if (element.attr("type") == "checkbox") {
            element.siblings("label").addClass("checkbox-label-error")
          } else {
            error.insertAfter(element);
          }
        }

      },
      unhighlight: function(element, errorClass, validClass) {
        $(element).removeClass(errorClass);
        $(element).closest(".form-item").removeClass("error").addClass("valid");

        if ($(element)[0].tagName == "SELECT") {
          $(element).closest(".form-item").removeClass("error");
          $(element).closest(".btn-group").removeClass("btn-group-error");
          if ($(element).closest(".form-item").length) {
            error.insertAfter(element.closest(".form-item"));
            $(element).closest(".form-item").next("label.error").remove();
          } else {
            $(element).closest(".btn-group").next("label.error").remove();
          }
        } else {
          $(element).next(".error").remove();
          if ($(element).attr("type") == "checkbox") {
            $(element).siblings("label").removeClass("checkbox-label-error")
          }
        }
      },
      invalidHandler: function(form, validatorcalc) {
        var errors = validatorcalc.numberOfInvalids();
        if (errors && validatorcalc.errorList[0].element.tagName == "INPUT") {
          validatorcalc.errorList[0].element.focus();
        }
      }
    });

    if ($(this).find("input.password").length && $(this).find("input.password-repeat").length) {
      $(this).find("input.password-repeat").rules('add', {
        equalTo: "#"+form.find("input.password").attr("id")
      });
    }

  });

}

jQuery.extend(jQuery.validator.messages, {
  required: "Не заполнено поле",
  remote: "Please fix this field.",
  email: "Введите правильный e-mail.",
  url: "Please enter a valid URL.",
  date: "Please enter a valid date.",
  dateISO: "Please enter a valid date (ISO).",
  number: "Please enter a valid number.",
  digits: "Please enter only digits.",
  creditcard: "Please enter a valid credit card number.",
  equalTo: "Пароли не совпадают.",

  accept: "Please enter a value with a valid extension.",
  maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
  minlength: jQuery.validator.format("Please enter at least {0} characters."),
  rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
  range: jQuery.validator.format("Please enter a value between {0} and {1}."),
  max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
  min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});

function declOfNum(number, titles) {
  cases = [2, 0, 1, 1, 1, 2];
  return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}

function formSuccess(form) {

  form.find(".form-group input, .form-group textarea").val("");
  form.find(".placeholder").show();
  $("#successModal").modal("show");
  form.closest(".modal").modal("hide");
}




