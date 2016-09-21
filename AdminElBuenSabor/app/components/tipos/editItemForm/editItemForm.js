'use strict';

var helpers = require('../../../utils/widgets/helper'),
    // additional requires
    dataService = require('../../../dataProviders/elBuenSabor'),
    Observable = require('data/observable').Observable,
    viewModel = new Observable({}),
    context;

function goBack() {
    helpers.navigate({
        moduleName: 'components/tipos/itemDetails/itemDetails',
        context: context
    });
}

function onRequestSuccess() {

    context.nombre = viewModel.get('nombreEditar');

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
    var data = dataService.data('tipos');

    data.updateSingle({

            nombre: viewModel.get('nombreEditar'),

            // save properties

            Id: viewModel.get('id')
        })
        .then(onRequestSuccess.bind(this))
        .catch(onRequestFail.bind(this));
};

function onNavigatedTo(args) {
    context = args.object.navigationContext;

    viewModel.set('id', context.Id);

    viewModel.set('nombreEditar', context.nombre);

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

// START_CUSTOM_CODE_tiposModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_tiposModel
exports.pageLoaded = pageLoaded;