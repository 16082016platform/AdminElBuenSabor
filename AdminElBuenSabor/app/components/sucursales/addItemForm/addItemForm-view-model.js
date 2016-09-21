'use strict';
var ViewModel,
    Observable = require('data/observable').Observable;
// additional requires

ViewModel = new Observable({

    nombre: '',

    direccion: '',

    latitud: '',

    longitud: '',

    activo: '',

    serie: '',

    celular: '',

    telefono: '',

    horario: '',

    radio: '',

    imagen: '',

    // additional properties

});

// START_CUSTOM_CODE_sucursalesModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_sucursalesModel
module.exports = ViewModel;