
import prisma from "../../../lib/prisma";

const handler = async (req,res)  => {
   if(req.method === 'PUT'){
        
        const { id, title , speak  } = req.body; 

        if(  !title || !speak ){
            return res.status(404).json({message: ' form wajib diisi  '})
        }

        const updateForum = await prisma.Forum.update({
            where: {
              id: id,
            },
            data: {
              title: title,
              speak: speak,
            },
          })
        return res.status(200).json({message: 'speak berhasil diupdate  '})
    }else{
        return res.status(404).json({ message: 'permintaan anda tidak diizinkan' })
    }
};

export default handler;