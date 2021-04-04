const { SEGUROS } = require('./in-memory-db');

exports.salvarSeguro = (req, res) => {
    const seguro = req.body;
    console.log('Seguro adicionado', seguro);
    SEGUROS.push(seguro);
    res.status(200).json({message: 'Seguro adicionado con exito'});
}

exports.listarSeguros = (req, res) => {
    res.status(200).json(SEGUROS);
}