import { middleware } from "../../../lib/middleware";
import prisma from "../../../lib/prisma";



export default middleware(
    async function handler(req,res) {
        if(req.method === 'POST'){

            const  personId  = req.Person.personId;
    
            const { title , speak , } = req.body; 
    
            if( !title ||  !speak ){
                return res.status(404).json({message: 'forum gagal'})
            }
    
            const addForum = await prisma.Forum.create({
                 data : {
                    title: title,
                    speak:  speak,
                    personId: personId ,
                    countLike : 0 ,
                }
            })
    
            return res.status(200).json({message: 'speak berhasil ditambahkan'})
        }else{
            return res.status(404).json({ message: 'permintaan anda tidak diizinkan' })
        }
    }
) 


