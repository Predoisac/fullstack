import jwt from "jsonwebtoken"
import ServiceUser from "../services/user.js"

const JWTsegredo = "aboba"


export default function authMiddleware(roles = []) {
    return async (req, res, next) => {
        try {
            const token = req.headers['authorization']
            
            if (!token) {
                throw new Error("nao tem token");

            }
            const decoded = jwt.verify(token.split(' ')[1], JWTsegredo)

            const user = await ServiceUser.FindOne(decoded.id)

            if (roles.length && !roles.includes(user.permissao)) {
                throw new Error("Voce nao tem permissao para realizar essa ação");
            }

            req.headers.user = user
            next()
        } catch (error) {
            res.status(403).send({
                data: null,
                msg: error.message,
                error: true
            })
        }

    }
}
