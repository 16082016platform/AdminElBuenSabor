'use strict';

var helpers = require('../../../utils/widgets/helper'),
    // additional requires
    dataService = require('../../../dataProviders/elBuenSabor'),
    Observable = require('data/observable').Observable,
    viewModel = new Observable({}),
    context;

function goBack() {
    helpers.navigate({
        moduleName: 'components/sucursales/itemDetails/itemDetails',
        context: context
    });
}

function onRequestSuccess() {

    context.nombre = viewModel.get('nombre');

    context.direccion = viewModel.get('direccion');

    context.activo = viewModel.get('activo');

    context.horario = viewModel.get('horario');

    context.celular = viewModel.get('celular');

    context.telefono = viewModel.get('telefono');

    context.serie = viewModel.get('serie');

    context.radio = viewModel.get('radio');

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
    var data = dataService.data('sucursales');

    data.updateSingle({

            nombre: viewModel.get('nombre'),

            direccion: viewModel.get('direccion'),

            activo: viewModel.get('activo'),

            horario: viewModel.get('horario'),

            celular: viewModel.get('celular'),

            telefono: viewModel.get('telefono'),

            serie: viewModel.get('serie'),

            radio: viewModel.get('radio'),

            // save properties

            Id: viewModel.get('id')
        })
        .then(onRequestSuccess.bind(this))
        .catch(onRequestFail.bind(this));
};

function onNavigatedTo(args) {
    context = args.object.navigationContext;

    viewModel.set('id', context.Id);

    viewModel.set('nombre', context.nombre);

    viewModel.set('direccion', context.direccion);

    viewModel.set('activo', context.activo);

    viewModel.set('horario', context.horario);

    viewModel.set('celular', context.celular);

    viewModel.set('telefono', context.telefono);

    viewModel.set('serie', context.serie);

    viewModel.set('radio', context.radio);

    viewModel.set('imagen', '');

    viewModel.set('imagenimagen', context.imagen);

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

// START_CUSTOM_CODE_sucursalesModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_sucursalesModel
exports.pageLoaded = pageLoaded;