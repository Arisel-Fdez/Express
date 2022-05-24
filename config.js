module.exports = {
    api:{
        port: process.env.API_PORT || 3000,
    },
    db:{
        user: 'postgres',
        host: 'localhost',
        database: 'CSDB',
        password: 'yeremi224',
        port: '5432'
    }
}