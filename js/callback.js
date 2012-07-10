/* Callback handle requests to server */
function handleRequest(xhr, status, args) {

    /* Conditional for message exibition in popup  */
    if(args.showMsgInPopup == true){

        $('.dialog-msg').show();
        $('.msg-error').html(args.msgInfo);

        setTimeout(function(){
            $('.dialog-msg').fadeOut("slow");
        }, 2000);

    }else{

        if(args.success){
            $('#list-msg-info').show();
            $('#msg-info').html(args.msgInfo);
        }else{
            $('#list-msg-warn').show();
            $('#msg-warn').html(args.msgInfo);
        }

        if(window.dlg != undefined)
            dlg.hide();

        if(window.dlg2 != undefined)
            dlg2.hide();

        setTimeout(function(){
            $('.list-msg').fadeOut("slow");
        }, 2000);

    }

    prepareFilterComponents();
}

/* Callback handle requests to server */
function updateChartData(xhr, status, args) {
    chart.series[0].setData(eval(args.chartData));
}