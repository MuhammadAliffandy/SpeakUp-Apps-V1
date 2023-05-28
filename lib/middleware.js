import { verify ,sign} from "jsonwebtoken";

const JWT_SECRET = "my_secret_key";

export function middleware (handler){
    return async (req,res) => {
        const authorizationHeader = req.headers['authorization'];

        if ( !authorizationHeader ) {
            return res
            .status(404)
            .json({ message: 'Authorization header is missing '});
        }
    
        const token = authorizationHeader.replace('Bearer ', '');
    
        try{
            const decoded = verify(token, JWT_SECRET);

            const now = Math.floor(Date.now() / 1000);

            const waktuExp = decoded.exp;
    
            if ( waktuExp - now < 60 * 30 ) {
                const tokenBaru = sign({...decoded, exp: now + 60 * 60}, JWT_SECRET);
                res.setHeader('Authorization', `Bearer ${tokenBaru}`);
            }

            req.Person = decoded;
            return handler(req,res);
        }catch( e ){
            return res
            .status(401)
            .json({ message: 'token gagal '})
        }
    } 
}

 