const prisma  = require('../database/prisma')

/* criar usuario
    esta funcao é chamada quando alguem fizer um POST

    exports.createUser
    -> aqui exporta a funcao para outros arquivos usarem
    -> no caso aqui o userRoutes.js


    req = request (dados que chegam do cliente)
    res = response (resposta que o servidor vai enviar para o cliente)

*/

exports.createUser = async (req, res) => {
    /* 
        req.body
        -> aqui pegamos os dados que o cliente enviou para criar o usuario
        -> ou seja, os dados enviado no POST
        -> que vem do frontend ou Postman tipo:

        {
            "username": "diego do grau",
            "name": "Diegão o miorzinho do moment",
            "password": "123"
        }
    */

    const { username, name, password } = req.body

    /* 
        agora como to usando o prisma ele mesmo tem o negocio que faz o inset
        prisma.user.create()

        prisma    -> nosso client
        user      -> a tabela que queremos mexer
        create()  -> a funcao para criar um novo registro
        data     -> aqui passamos os dados para criar o usuario , ou seja, oq sera inserido no banco
    */

        try {
            const user = await prisma.user.create({
                data: {
                    username,
                    name, 
                    password
                }
            })
            /* 
                res.json() -> aqui enviamos a resposta para o cliente em formato json
                responde com o usuario criado
            */
            res.json(user)
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar o usuario'})
        }
}

exports.getUser = async (req, res) => {
    
}