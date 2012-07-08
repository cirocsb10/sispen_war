$.fn.validateDate = function(){
    $(this).change(function(event){
        $valor = $(this).val();
        if($valor){
            $erro = "";
            var expReg = /^((0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/[1-2][0-9]\d{2})$/;
            if($valor.match(expReg)){
                var $dia  = parseFloat($valor.substring(0,2));
                var $mes  = parseFloat($valor.substring(3,5));
                var $ano  = parseFloat($valor.substring(6,10));

                if(($mes==4 && $dia>30) || ($mes==6 && $dia>30) || ($mes==9 && $dia>30) || ($mes==11 && $dia>30)){
                    $erro = "Data incorreta! O mês especificado contém 30 dias.";
                }else{
                    if($ano%4!=0 && $mes==2 && $dia>28){
                        $erro = "Data incorreta!! O mês especificado contém 28 dias."
                    }else{
                        if($ano%4==0 && $mes==2 && $dia>29){
                            $erro = "Data incorreta!! O mês especificado contém 29 dias.";
                        }
                    }
                }
            }else{
                $erro = "Formato de data inválido";
            }
            if($erro){
                $(this).val('');
                $('#list-msg-warn').show();
                $('#msg-warn').html($erro);
                setTimeout(function(){ $(this).focus();},50);

                setTimeout(function(){ $('.list-msg').fadeOut("slow");}, 2000);
            }else{
                return $(this);
            }
        }else{
            return $(this);
        }
    });
}