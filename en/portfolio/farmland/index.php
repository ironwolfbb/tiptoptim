<?
$en = true;
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Farmland");
?>    <div class="promo-page">

      <div class="wrap w-100">
        <div class="wrap__inner">
          <div class="wrap__heading heading d-flex align-items-center justify-content-between flex-wrap w-100">
            <h1 class="heading__title flex-grow">Advertising campaign <br> "Good Health Pharmacy"</h1>
          </div>

          <div class="promo-page__content">
            <div class="promo-page__content-item">
              <div class="f-row">
                <div class="f-col-lg-3">
                  <div class="team__title h4">Customer </div>
                </div>
                <div class="f-col-lg-9">
                  <div class="promo-page__content-text">Pharmacy chain "Farmland" </div>
                </div>
              </div>
            </div>
            <div class="promo-page__content-item">
              <div class="f-row">
                <div class="f-col-lg-3">
                  <div class="team__title h4">Purpose </div>
                </div>
                <div class="f-col-lg-9">
                  <div class="promo-page__content-text">To develop and implement an advertising campaign for the Pharmland pharmacy chain.</div>
                </div>
              </div>
            </div>
            <div class="promo-page__content-item">
              <div class="f-row">
                <div class="f-col-lg-3">
                  <div class="team__title h4">Tasks </div>
                </div>
                <div class="f-col-lg-9">
                  <div class="promo-page__content-text">
                    <div>1. Select and use in the campaign an ambassador who meets the needs of the target audience (women 50+ years old);</div> 
                    <div>2. Present in advertising the idea of a healthy lifestyle, good spirits and endless positives;</div> 
                    <div>3. Strengthen customer loyalty by creating an image of “your own, home, simple and affordable pharmacy”.</div> 
                  </div>
                </div>
              </div>
            </div>
            <div class="promo-page__content-item">
              <div class="f-row">
                <div class="f-col-lg-3">
                  <div class="team__title h4">Creative </div>
                </div>
                <div class="f-col-lg-9">
                  <div class="promo-page__content-text">
                    <p>In this campaign, we decided to move away from the classic image of a doctor in pharmacy advertising and show not the treatment of diseases, but a healthy lifestyle, with the help of which these diseases can be avoided.</p>
                    <p>Our advertising campaign is not about negativity and pain relief, but about a positive and active lifestyle. Therefore, Gennady Malakhov was chosen as the face of the company - the author of original methods for improving health, the popular host of the program "Good health!" on Channel One. Malakhov is the personification of vigor of body and spirit, a healthy and happy life.</p>
                    <p>On the basis of the concept of its transmission, the idea of the “Good Health Pharmacy” advertising campaign was born.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="promo-page__content-item">
              <div class="f-row">
                <div class="f-col-lg-3">
                  <div class="team__title h4">Mechanism </div>
                </div>
                <div class="f-col-lg-9">
                  <div class="promo-page__content-text">
                  Within the framework of the campaign, an image video, promotional videos and outdoor advertising were developed.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="portfolio">
            <div class="title-1">Videos</div>
            <div class="portfolio__inner">
              <div class="portfolio__item " data-category="campaigns">
                <div class="portfolio__content" data-target="modalVimeo" data-modal-open="" data-src="https://player.vimeo.com/video/360124038?color=ffffff&amp;portrait=0">
                  <div class="portfolio__image" style="background-image: url('/upload/iblock/af1/af1b3afeda9e70058cf35fc0e5c952a7.jpg');"></div>
                  <div class="portfolio__info">
                    <p class="portfolio__title">Хоккейный клуб «Салават Юлаев» </p>
                    <p class="portfolio__text">Зур хоккей </p>
                  </div>
                </div>
              </div>
              <div class="portfolio__item " data-category="campaigns">
                <div class="portfolio__content" data-target="modalVimeo" data-modal-open="" data-src="https://player.vimeo.com/video/360124038?color=ffffff&amp;portrait=0">
                  <div class="portfolio__image" style="background-image: url('/upload/iblock/af1/af1b3afeda9e70058cf35fc0e5c952a7.jpg');"></div>
                  <div class="portfolio__info">
                    <p class="portfolio__title">Хоккейный клуб «Салават Юлаев» </p>
                    <p class="portfolio__text">Зур хоккей </p>
                  </div>
                </div>
              </div>
              <div class="portfolio__item " data-category="campaigns">
                <div class="portfolio__content" data-target="modalVimeo" data-modal-open="" data-src="https://player.vimeo.com/video/360124038?color=ffffff&amp;portrait=0">
                  <div class="portfolio__image" style="background-image: url('/upload/iblock/af1/af1b3afeda9e70058cf35fc0e5c952a7.jpg');"></div>
                  <div class="portfolio__info">
                    <p class="portfolio__title">Хоккейный клуб «Салават Юлаев» </p>
                    <p class="portfolio__text">Зур хоккей </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="promo-page__card">
            <div class="f-row">
              <div class="f-col-lg-6">
                <div class="promo-page__card-img flex-img">
                  <img src="/local/build/images/fl.png" alt="">
                </div>
              </div>
              <div class="f-col-lg-6">
                <div class="promo-page__card-title">Наружная реклама </div>
              </div>
            </div>
          </div>

          <div class="backstage">
            <div class="title-1">Backstage </div>
            <div class="backstage__content">
            <video class="backstage__content-video" controls="controls" poster="video/duel.jpg">
              <source src="/local/build/drugstore.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
            </video>
            </div>
          </div>

        </div>
      </div>

    </div>

    <script>
      document.getElementById('mainFormControl').value = 'Ddwd3wq1';
      let mainFormControl = document.getElementById('mainFormControl').value;
      let formMain = document.getElementById('mainForm'); // Форма на главной странице
      formMain.onsubmit = function() {
        if ($("#mainForm").valid() && mainFormControl == 'Ddwd3wq1') {
          let formMainName = document.getElementById('formMainName').value;
          let formMainTel = document.getElementById('formMainTel').value;
          let formMainDescription = document.getElementById('formMainDescription').value;
          let formBody = 'Имя: ' + formMainName + '<br><br>' + 'Телефон: ' + formMainTel + '<br><br>' + 'Сообщение: ' + formMainDescription;
          // axios.post('/API/callBackElem.php', {}, {
          //     params: {
          //         formMainName: formMainName,
          //         formMainTel: formMainTel,
          //         formMainDescription: formMainDescription,
          // 		formTheme: 'Запрос из формы обратной связи',
          // 		formBody: formBody,
          //     }
          // })
          axios.post('/API/callBackElem.php', {
              formMainName: formMainName,
              formMainTel: formMainTel,
              formMainDescription: formMainDescription,
              formTheme: 'Запрос из формы обратной связи',
              formBody: formBody,
            })
            .then(function(response) {
              let url = window.location.hostname;
              if (document.documentElement.lang == 'en') {
                window.location.href = 'https://' + url + "/en/success";
              } else {
                window.location.href = 'https://' + url + "/success";
              }
            })
            .catch(function(error) {
              if (document.documentElement.lang == 'en') {
                document.getElementById('mainForm-button').innerHTML = '<span class="button__text">Ошбика при отправке</span>';
              } else {
                document.getElementById('mainForm-button').innerHTML = '<span class="button__text">Error</span>';
              }
            });
        } else {
          return false;
        };
      };
    </script><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>