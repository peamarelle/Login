module.exports = { //este modulo lo utilizamos para exportar configuraciones
        mongodb: {
            URI: 'mongodb+srv://pato_login:pato12345@logindb-ismpk.mongodb.net/<dbname>?retryWrites=true&w=majority' //direccion de la db y nombre en este caso log-local
                //mongo db si no existe la db la crea
        }
    }
    //

//mongodb://localhost:27017/log-local