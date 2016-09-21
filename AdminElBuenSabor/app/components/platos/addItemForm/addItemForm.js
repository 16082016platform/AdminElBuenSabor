'use strict';

var isInit = true,
    helpers = require('../../../utils/widgets/helper'),
    // additional requires
    dataService = require('../../../dataProviders/elBuenSabor'),
    viewModel = require('./addItemForm-view-model');

function onRequestSuccess() {
    helpers.back();
}

function onRequestFail(err) {
    alert(JSON.stringify(err));
    return err;
}

exports.onCancelTap = function onCancelTap() {
    helpers.back();
};

exports.onSaveTap = function onSaveTap() {
    var data = dataService.data('platos');

    data.save({

            nombre: viewModel.get('nombrePlatoAdd'),

            ingredientes: viewModel.get('ingredientesAdd'),

            precio: viewModel.get('precioAdd'),

            etiqueta: viewModel.get('etiquetaAdd'),

            categoria: viewModel.get('categoriaAdd'),

            tipo: viewModel.get('tipo'),

            dias: viewModel.get('diasAdd'),

            personalizacion: viewModel.get('personalizacionAdd'),

            // save properties

        })
        .then(onRequestSuccess.bind(this))
        .catch(onRequestFail.bind(this));
};

// additional functions
function pageLoaded(args) {
    var page = args.object;

    helpers.platformInit(page);

    viewModel.set('nombrePlatoAdd', '');

    viewModel.set('ingredientesAdd', '');

    viewModel.set('precioAdd', '');

    viewModel.set('etiquetaAdd', '');

    viewModel.set('categoriaAdd', '');

    viewModel.set('tipo', '');

    viewModel.set('diasAdd', '');

    viewModel.set('personalizacionAdd', '');

    // init properties

    page.bindingContext = viewModel;

    // additional pageLoaded
}

// START_CUSTOM_CODE_platosModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_platosModel
exports.pageLoaded = pageLoaded;