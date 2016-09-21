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
    var data = dataService.data('sucursales');

    data.save({

            nombre: viewModel.get('nombre'),

            direccion: viewModel.get('direccion'),

            latitud: viewModel.get('latitud'),

            longitud: viewModel.get('longitud'),

            activo: viewModel.get('activo'),

            serie: viewModel.get('serie'),

            celular: viewModel.get('celular'),

            telefono: viewModel.get('telefono'),

            horario: viewModel.get('horario'),

            radio: viewModel.get('radio'),

            // save properties

        })
        .then(onRequestSuccess.bind(this))
        .catch(onRequestFail.bind(this));
};

// additional functions
function pageLoaded(args) {
    var page = args.object;

    helpers.platformInit(page);

    viewModel.set('nombre', '');

    viewModel.set('direccion', '');

    viewModel.set('latitud', '');

    viewModel.set('longitud', '');

    viewModel.set('activo', '');

    viewModel.set('serie', '');

    viewModel.set('celular', '');

    viewModel.set('telefono', '');

    viewModel.set('horario', '');

    viewModel.set('radio', '');

    viewModel.set('imagen', '');

    // init properties

    page.bindingContext = viewModel;

    // additional pageLoaded
}

// START_CUSTOM_CODE_sucursalesModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_sucursalesModel
exports.pageLoaded = pageLoaded;