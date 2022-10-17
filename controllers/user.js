//Ayuda tipado
const {request, response} = require('express')

const usuariosGet = (req = request, res = response) => {

    const {q, nombre = 'No name', apikey, page = 1,limit} = req.query;

    res.json({ 
        msg:'Get api - Controller',
        miquery : {
            q,
            nombre,
            apikey,
            page,
            limit
        }
    })
}

const usuariosPut = (req, res) => {

    const id = req.params.id

    res.json({
        msg:'Put api - Controller',
        id: id
    })
}

const usuariosPost = (req, res) => {

    const body = req.body

    res.json({
        msg:'Post api - Controller',
        body
    })
}

const usuariosDelete = (req, res) => {
    res.json({
        msg:'Delete api - Controller'
    })
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}