import { middleware } from "../../../lib/middleware";
import prisma from "../../../lib/prisma";



export default middleware(
   async function (req,res) {

        if(req.method === 'POST'){
    
            const personId = req.Person.personId;

            const { comment , forumId  } = req.body; 
    
            if( !comment ||  !forumId ||  !personId ){
                return res.status(404).json({message: ' comment wajib diisi  '})
            }
    
            const addComment = await prisma.Comment.create({
                 data : {
                    comment: comment,
                    forumId: forumId,
                    personId : personId
                }
            })
    
            return res.status(200).json({message: 'comment berhasil ditambahkan '})
        }else{
            return res.status(404).json({ message: 'permintaan anda tidak diizinkan' })
        }
    }
) 


