$(document).ready(function () {
   var typeSitePrice = 0;
   var cmsPrice = 0;
   var designPrice = 0;

   var contentPrice = 0;
   var addFuncPrice = 0;

   var radioLang = $('#radioLeng').val();
   var radioSiteCalc = $('#radioCalcInsite').val();
   var radioYourRoom = $('#radioYourRoom').val();
   var radioFeedback = $('#radioFeedback').val();
   var radioCell = $('#radioCell').val();
   var radioCard = $('#radioCard').val();





    $('#typeSite').change(function(){

        $('#resTypeSite').val($('#typeSite').val() + '$');

        typeSitePrice = $('#typeSite').val();


    });

    $('#cms').change(function(){

        $('#cmsType').val($('#cms').val() + '$');
        cmsPrice = $('#cms').val();

    });

    $('#design').change(function(){

        $('#designType').val($('#design').val() + '$');
        designPrice = $('#design').val();

    });

    $('#content').change(function(){

        $('#contentType').val($('#content').val() + '$');
        contentPrice = $('#content').val();

    });


    $('#addFunc').click(function () {
        $('#checkAddFunc').fadeToggle(400);
    })



    $('.resultBtn').click(function () {
        var resultPrice;
        resultPrice = parseInt(typeSitePrice) +
            parseInt(cmsPrice) + parseInt(designPrice) +
            parseInt(contentPrice);

        $('#endPrice').val(resultPrice + '$');

    })
    
});