import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import prisma from '../../../lib/prisma';

const JWT_SECRET = "my_secret_key";

const handler = async (req,res) => {
    if ( req.method === 'POST' ) {
       const { email , password } = req.body;

       if ( !email || !password ) { 
        return res
        .status(401)
        .json({ message: 'email dan password wajib diisi' })
       }

       const person = await prisma.Person.findUnique({ where: { email } });

       if ( !person ) { 
        return res
        .status(402)
        .json({ message: 'email atau password salah ' })
       }

       const passPerson = await compare(password, person.password) 

       if ( !passPerson ) { 
        return res
        .status(403)
        .json({ message: ' password anda salah  ' })
       }


       const token = sign( { personId: person.id } , JWT_SECRET , { expiresIn: '1h' } );

       return res.status(200).json({ token })
    
    }


}

export default handler;