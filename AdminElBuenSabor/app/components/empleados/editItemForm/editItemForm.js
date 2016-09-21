'use strict';

var helpers = require('../../../utils/widgets/helper'),
    // additional requires
    dataService = require('../../../dataProviders/elBuenSabor'),
    Observable = require('data/observable').Observable,
    viewModel = new Observable({}),
    context;

function goBack() {
    helpers.navigate({
        moduleName: 'components/empleados/itemDetails/itemDetails',
        context: context
    });
}

function onRequestSuccess() {

    context.nombre = viewModel.get('nombreEdit');

    context.apellido = viewModel.get('apellidoEdit');

    context.celular = viewModel.get('celularEdit');

    context.sucursal = viewModel.get('sucursalEdit');

    context.activo = viewModel.get('ativoEdit');

    // refresh edited properties

    goBack();
}

function onRequestFail(err) {
    alert(JSON.stringify(err));
    return err;
}

exports.onCancelTap = function onCancelTap() {
    goBack();
};

exports.onSaveTap = function onSaveTap() {
    var data = dataService.data('empleados');

    data.updateSingle({

            nombre: viewModel.get('nombreEdit'),

            apellido: viewModel.get('apellidoEdit'),

            celular: viewModel.get('celularEdit'),

            sucursal: viewModel.get('sucursalEdit'),

            activo: viewModel.get('ativoEdit'),

            // save properties

            Id: viewModel.get('id')
        })
        .then(onRequestSuccess.bind(this))
        .catch(onRequestFail.bind(this));
};

function onNavigatedTo(args) {
    context = args.object.navigationContext;

    viewModel.set('id', context.Id);

    viewModel.set('nombreEdit', context.nombre);

    viewModel.set('apellidoEdit', context.apellido);

    viewModel.set('celularEdit', context.celular);

    viewModel.set('sucursalEdit', context.sucursal);

    viewModel.set('ativoEdit', context.activo);

    // read properties

}
exports.onNavigatedTo = onNavigatedTo;

// additional functions
function pageLoaded(args) {
    var page = args.object;

    helpers.platformInit(page);

    page.bindingContext = viewModel;

    // additional pageLoaded
}

// START_CUSTOM_CODE_empleadosModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_empleadosModel
exports.pageLoaded = pageLoaded;