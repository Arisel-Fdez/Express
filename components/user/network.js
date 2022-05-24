const express = require('express');
const response = require('../../network/response.js');
const {getConnection} = require('../../model/db.js')


const router = express.Router();

router.get('/s',function (req, res) {
    /*res.send({
        success:"succes 1",
    });*/
    response.succes(req, res ,'', 200);
})

router.post('/login', function (req, res) {

    let userName = req.query.userName;
    let pasword = req.query.pasword;

    res.send({
        token: "",
        id_user: "1",
        success: "exito",
    })
})

router.post('/register', async function (req, res) {

    const client = await getConnection();

    let username = req.query.username;
    let email = req.query.email;
    let password = req.query.password;
    let phone_number = req.query.phone_number;

    const query_request ={
        text: 'INSERT INTO tbl_usersdb(username, email, password, phone_number) VALUES($1, $2, $3, $4)',
        values: [username, email, password, phone_number]
    };

    (await client).query(query_request)
    .then(r => {response.success(req,res,r,200);})
    .catch(e => {response.success(req,res,e.detail,200);})

})

module.exports = router;