import jwt from 'jsonwebtoken'

const Auth = async (req, res, next) => { 
    const token = req.header('auth-token');

    if (!token) {
        res.status(401).send({error: "Please Authenticate using valid token."});
    } else {
        try {
            const data = jwt.verify(token, "secret_token_key");
            req.user = data.user;
            next()
        } catch (error) { 
            res.status(401).send({error: "Please Authenticate using valid token."});
        }
    }
}

export default Auth

