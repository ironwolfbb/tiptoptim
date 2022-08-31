(function($) {

  'use strict';

  // Mask
  function mask() {
    $('.phone-mask').mask('+7 (000) 000-00-00', {
    });
  };

  // Brief Modal
  function briefModal() {
    let modal = $('#briefModal');
    let modal_content = $('#briefModal .modal-content');
    let btn = $(".modal-btn");
    let close_btn = $(".close", $(modal));

    function modalAnimate () {
      modal_content.toggleClass('animated');
    }

    function modalShow () {
      modal.toggleClass('visible');
      $('body').toggleClass('overflow-hidden');
    }

    btn.on('click', function(e) {
      e.preventDefault();
      modalShow();
      setTimeout(modalAnimate, 200);
    });
    close_btn.on('click', function() {
      modalAnimate();
      setTimeout(modalShow, 200);
    });
    $(document).mousedown(function(e) {
      if (modal.hasClass('visible')) {
          if (modal.is(e.target))
          {
              modalAnimate();
              setTimeout(modalShow, 200);
          }
      }
    });
  }

  // Collapse
  function collapse() {
    $('.collapse-button').click(function(e) {
      let $target = $($(this).attr('href'));
      if(!$(this).hasClass('active')) {
        e.preventDefault();
        $target.show(200);
        $(this).addClass('active');
      } else {
        e.preventDefault();
        $target.hide(200);
        $(this).removeClass('active');
      }
    })
  };

  // Brief validation
  function validation() {
    let standart_message = "Данное поле обязательно для заполнения";
    $("#briefForm").validate({
      rules: {
        formBriefName: "required",
        formBriefPhone: {
          required: true,
          minlength: 18
        },
        formBriefEmail: {
          required: true,
          email: true,
        },
		formBriefCompanyName: {
			required: true
		}
      },
      messages: {
        formBriefName: standart_message,
        formBriefPhone: {
          required: standart_message,
          minlength: 'Введите корректный номер телефона'
        },
        formBriefEmail: {
          email: 'Введите корректный E-mail'
        }
      }
    });
    $("#mainForm").validate({
      rules: {
        formMainName: "required",
        formMainTel: {
          required: true,
          minlength: 18
        },
        formMainDescription: "required",
      },
      messages: {
        formMainfName: standart_message,
        formMainTel: {
          required: standart_message,
          minlength: 'Введите корректный номер телефона'
        },
        formMainDescription: standart_message,
      }
    });
  }

  function socials() {
    $('.socials-link .socials-link__button').on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('active');
      $('.socials-link .socials-link__list').toggleClass('active');
    });
    
    $('body').on('click', function (e) {
      if (!$('.socials-link__list').is(e.target)
        && $('.socials-link__list').has(e.target).length === 0
        && !$('.socials-link__button').is(e.target)
        && $('.socials-link__button').has(e.target).length === 0
      ) {
        $('.socials-link__list').removeClass('active');
        $('.socials-link__button').removeClass('active');
      }
    });
  }

  $(document).ready(function() {
    mask();
    briefModal();
    collapse();
    validation();
    socials();
  });

})(jQuery);
