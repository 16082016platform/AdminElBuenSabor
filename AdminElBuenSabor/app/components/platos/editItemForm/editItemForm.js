'use strict';

var helpers = require('../../../utils/widgets/helper'),
    // additional requires
    dataService = require('../../../dataProviders/elBuenSabor'),
    Observable = require('data/observable').Observable,
    viewModel = new Observable({}),
    context;

function goBack() {
    helpers.navigate({
        moduleName: 'components/platos/itemDetails/itemDetails',
        context: context
    });
}

function onRequestSuccess() {

    context.nombre = viewModel.get('nombrePlatoEdit');

    context.ingredientes = viewModel.get('ingredientesEdit');

    context.categoria = viewModel.get('categoriaEdit');

    context.tipo = viewModel.get('tipoEdit');

    context.precio = viewModel.get('precioEdit');

    context.activo = viewModel.get('activoEdit');

    context.dias = viewModel.get('diasEdit');

    context.personalizacion = viewModel.get('personalizacionEdit');

    context.imagen = viewModel.get('imagenEdit');

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
    var data = dataService.data('platos');

    data.updateSingle({

            nombre: viewModel.get('nombrePlatoEdit'),

            ingredientes: viewModel.get('ingredientesEdit'),

            categoria: viewModel.get('categoriaEdit'),

            tipo: viewModel.get('tipoEdit'),

            precio: viewModel.get('precioEdit'),

            activo: viewModel.get('activoEdit'),

            dias: viewModel.get('diasEdit'),

            personalizacion: viewModel.get('personalizacionEdit'),

            imagen: viewModel.get('imagenEdit'),

            // save properties

            Id: viewModel.get('id')
        })
        .then(onRequestSuccess.bind(this))
        .catch(onRequestFail.bind(this));
};

function onNavigatedTo(args) {
    context = args.object.navigationContext;

    viewModel.set('id', context.Id);

    viewModel.set('nombrePlatoEdit', context.nombre);

    viewModel.set('ingredientesEdit', context.ingredientes);

    viewModel.set('categoriaEdit', context.categoria);

    viewModel.set('tipoEdit', context.tipo);

    viewModel.set('precioEdit', context.precio);

    viewModel.set('activoEdit', context.activo);

    viewModel.set('diasEdit', context.dias);

    viewModel.set('personalizacionEdit', context.personalizacion);

    viewModel.set('imagenEdit', context.imagen);

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

// START_CUSTOM_CODE_platosModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_platosModel
exports.pageLoaded = pageLoaded;