// try {
//     console.log(nome);

// } catch (error) {
//     return res.status(500).json('Erro interno')
//console.log(error.status);
// }


try {
    console.log('Olá');

    throw new ReferenceError('Lancei um erro')

} catch (error) {
    console.log(error.message);
}