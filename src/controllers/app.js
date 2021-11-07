const pool =require('../settings/db');



let index =(req, res)=>{
    res.render('home');
}

let insert =async(req, res)=>{

    const  {
        nombre_completo
        ,nombre_empresa
        ,correo
        ,numero_celular
        ,numero_nit }=req.body;
    console.log(nombre_completo
        ,nombre_empresa
        ,correo
        ,numero_celular
        ,numero_nit);

    const q =(`INSERT INTO  registros
            (id,nombre_completo, nombre_empresa, correo,numero_celular,numero_nit)
            VALUES 
            (null,"${nombre_completo}", "${nombre_empresa}", "${correo}","${numero_celular}", "${numero_nit}");`);



    pool.query(q, function(err){
        if(err) throw err
        res.redirect('/');

    })
}


let ver =async(req, res)=>{
    const consulta = await pool.query('SELECT * FROM registros')

    res.send(consulta); }


module.exports ={
    index,
    insert,
    ver,
}