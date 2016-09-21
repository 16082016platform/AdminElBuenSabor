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
    var data = dataService.data('empleados');

    data.save({

            nombre: viewModel.get('nombreAdd'),

            apellido: viewModel.get('apellidoAdd'),

            sucursal: viewModel.get('sucursal'),

            activo: viewModel.get('activoAdd'),

            // save properties

        })
        .then(onRequestSuccess.bind(this))
        .catch(onRequestFail.bind(this));
};

// additional functions
function pageLoaded(args) {
    var page = args.object;

    helpers.platformInit(page);

    viewModel.set('nombreAdd', '');

    viewModel.set('apellidoAdd', '');

    viewModel.set('sucursal', '');

    viewModel.set('activoAdd', '');

    // init properties

    page.bindingContext = viewModel;

    // additional pageLoaded
}

// START_CUSTOM_CODE_empleadosModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_empleadosModel
exports.pageLoaded = pageLoaded;