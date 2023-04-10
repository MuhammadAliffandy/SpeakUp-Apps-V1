import prisma from "../../../lib/prisma";
import { middleware } from "../../../lib/middleware"

export default middleware(
    async function handler(req, res){
    if (req.method === 'GET') {
        const  personId = req.Person.personId;

        const person = await prisma.Person.findUnique({ where: {id: personId}});

        if (!person) {
            return res.status(401).json({ message: 'token tidak valid' });
           
        }

        return res.status(200).json({ person });
    } else {
        return res.status(405).json({ message: 'permintaan anda tidak diizinkan' })
    }
});