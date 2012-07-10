$(document).ready(function() {

    /* Prepare components (inputs, buttons, links) to search rotine */
    prepareFilterComponents();

    /* Trigger search on datatable on keypress enter button */
    $('.btn-filter').live('click', function(){
        var e = jQuery.Event("keypress");
        e.which = 13; // Enter
        $('input#dataTable\\:name_filter').trigger(e);
        $('input.filter').trigger(e);
    });

    /* Validate date filter on blur */
    $('input.input-date-filter').validateDate();

    /* Validate date before filter */
    $('a.btn-filter').live('click', function(){
        $('input.input-date-filter').validateDate();
    });
});

/* Formatter inputs */
function prepareFilterComponents(){

    resetPrimefacesClasses();

    addCssClasses();

    restrictNumericCharacters();

    addDatepicker();

    addIconSearch();
}

function resetPrimefacesClasses(){
    /* Remove css classes primefaces */
    $('input').removeClass('ui-inputfield');
    $('input').removeClass('ui-inputtext');
    $('input').removeClass('ui-widget');
    $('input').removeClass('ui-state-default');
    $('input').removeClass('ui-corner-all');
}

/* Add css classes in input text filter */
function addCssClasses(){
    $('input#dataTable\\:name_filter').addClass('input-name-filter');
    $('input#dataTable\\:email_filter').addClass('input-email-filter');
    $('input#dataTable\\:authority_filter').addClass('input-authority-filter');
    $('input#dataTable\\:capacity_filter').addClass('input-capacity-filter');
    $('input#dataTable\\:stocking_filter').addClass('input-stocking-filter');
    $('input#dataTable\\:effective_filter').addClass('input-effective-filter');
    $('input#dataTable\\:municipality_filter').addClass('input-municipality-filter');
    $('input#dataTable\\:registration_criminal_filter').addClass('input-registration_criminal-filter');
    $('input#dataTable\\:sex_filter').addClass('input-sex-filter');
    $('input#dataTable\\:race_filter').addClass('input-race-filter');
    $('input#dataTable\\:time_penalty_filter').addClass('input-time_penalty-filter');
    $('input#dataTable\\:prisoner_filter').addClass('input-prisoner-filter filter');
    $('input#dataTable\\:undertaking_filter').addClass('input-undertaking-filter filter');
    $('input#dataTable\\:prison_unit_filter').addClass('input-prison_unit-filter');
    $('input#dataTable\\:admission_at_filter').addClass('input-date-filter');
    $('input#dataTable\\:demission_at_filter').addClass('input-date-filter');
    $('input#dataTable\\:workload_filter').addClass('input-workload-filter');
    $('input#dataTable\\:username_filter').addClass('input-username-filter filter');
    $('input#dataTable\\:ip_filter').addClass('input-ip-filter');
    $('input#dataTable\\:created_at_filter').addClass('input-date-filter');
    $('input#dataTable\\:init_date_filter').addClass('input-date-filter');
    $('input#dataTable\\:finish_date_filter').addClass('input-date-filter');

    $('select#dataTable\\:table_name_filter').addClass('select-table_name-filter');
    $('select#dataTable\\:operation_filter').addClass('select-operation-filter');
    $('select#dataTable\\:enable_filter').addClass('select-enable-filter');
}

/* Add numeric mask in input text filters numeric type */
function restrictNumericCharacters(){
    $('input#dataTable\\:capacity_filter').numeric();
    $('input#dataTable\\:stocking_filter').numeric();
    $('input#dataTable\\:effective_filter').numeric();
    $('input#dataTable\\:time_penalty_filter').numeric();
    $('input#dataTable\\:workload_filter').numeric();
}

/* Add datepicker in input texts filters date type */
function addDatepicker(){

    $('.input-date-filter').datepicker({
        nextText: 'Próximo',
        prevText: 'Anterior'
    });
}


/* Add icon search button in input text filters */
function addIconSearch(){

    $('input#dataTable\\:name_filter').parent().append('<a class="btn icon-option btn-filter"><span class="icon-search"></span></a>');
    $('input#dataTable\\:email_filter').parent().append('<a class="btn icon-option btn-filter"><span class="icon-search"></span></a>');
    $('input#dataTable\\:authority_filter').parent().append('<a class="btn icon-option btn-filter"><span class="icon-search"></span></a>');
    $('input#dataTable\\:capacity_filter').parent().append('<a class="btn icon-option btn-filter"><span class="icon-search"></span></a>');
    $('input#dataTable\\:stocking_filter').parent().append('<a class="btn icon-option btn-filter"><span class="icon-search"></span></a>');
    $('input#dataTable\\:effective_filter').parent().append('<a class="btn icon-option btn-filter"><span class="icon-search"></span></a>');
    $('input#dataTable\\:municipality_filter').parent().append('<a class="btn icon-option btn-filter"><span class="icon-search"></span></a>');
    $('input#dataTable\\:registration_criminal_filter').parent().append('<a class="btn icon-option btn-filter"><span class="icon-search"></span></a>');
    $('input#dataTable\\:sex_filter').parent().append('<a class="btn icon-option btn-filter"><span class="icon-search"></span></a>');
    $('input#dataTable\\:race_filter').parent().append('<a class="btn icon-option btn-filter"><span class="icon-search"></span></a>');
    $('input#dataTable\\:time_penalty_filter').parent().append('<a class="btn icon-option btn-filter"><span class="icon-search"></span></a>');
    $('input#dataTable\\:prisoner_filter').parent().append('<a class="btn icon-option btn-filter"><span class="icon-search"></span></a>');
    $('input#dataTable\\:undertaking_filter').parent().append('<a class="btn icon-option btn-filter"><span class="icon-search"></span></a>');
    $('input#dataTable\\:prison_unit_filter').parent().append('<a class="btn icon-option btn-filter"><span class="icon-search"></span></a>');
    $('input#dataTable\\:admission_at_filter').parent().append('<a class="btn icon-option btn-filter"><span class="icon-search"></span></a>');
    $('input#dataTable\\:demission_at_filter').parent().append('<a class="btn icon-option btn-filter"><span class="icon-search"></span></a>');
    $('input#dataTable\\:workload_filter').parent().append('<a class="btn icon-option btn-filter"><span class="icon-search"></span></a>');
    $('input#dataTable\\:username_filter').parent().append('<a class="btn icon-option btn-filter"><span class="icon-search"></span></a>');
    $('input#dataTable\\:ip_filter').parent().append('<a class="btn icon-option btn-filter"><span class="icon-search"></span></a>');
    $('input#dataTable\\:operation_filter').parent().append('<a class="btn icon-option btn-filter"><span class="icon-search"></span></a>');
    $('input#dataTable\\:created_at_filter').parent().append('<a class="btn icon-option btn-filter"><span class="icon-search"></span></a>');
    $('input#dataTable\\:init_date_filter').parent().append('<a class="btn icon-option btn-filter"><span class="icon-search"></span></a>');
    $('input#dataTable\\:finish_date_filter').parent().append('<a class="btn icon-option btn-filter"><span class="icon-search"></span></a>');

    $('select#dataTable\\:table_name_filter').parent().append('<a class="btn icon-option btn-filter"><span class="icon-search"></span></a>');
    $('select#dataTable\\:operation_filter').parent().append('<a class="btn icon-option btn-filter"><span class="icon-search"></span></a>');
    $('select#dataTable\\:enable_filter').parent().append('<a class="btn icon-option btn-filter"><span class="icon-search"></span></a>');
}