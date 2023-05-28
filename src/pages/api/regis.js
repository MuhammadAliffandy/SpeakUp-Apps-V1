import { hash } from 'bcrypt';
import prisma from '../../../lib/prisma';


const handler = async (req,res) => {
    if ( req.method === 'PUT' ) {

        const { username , email , password , nickname , avatar  } = req.body; 

        if ( !username || !email || !password ) { 
            return res
            .status(401)
            .json({ message: 'semua ketentuan wajib diisi' })
        }

        const existPerson = await prisma.Person.findUnique({ where: { email } });

        if ( existPerson ) {
            return res
            .status(402)
            .json({ message: 'email sudah ada ' })
        }

        const hashedPass = await hash( password, 10 );

        const person = await prisma.Person.create({
            data: {
                username, 
                nickname,
                avatar,
                email,
                password: hashedPass,
            }
        })

        return res
            .status(200)
            .json({ message: 'akun berhasil ditambahkan ' })

    }


}

export default handler;