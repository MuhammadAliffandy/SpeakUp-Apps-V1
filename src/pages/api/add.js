import prisma from "../../../lib/prisma";

const handler = async (req,res) => {
    if(req.method === 'POST'){

        const { title , speak , personId } = req.body; 

        if( !title ||  !speak ){
            return res.status(404).json({message: ' form wajib diisi  '})
        }

        const addForum = await prisma.Forum.create({
             data : {
                title: title,
                speak:  speak,
                personId: personId
            }
        })

        return res.status(200).json({message: 'speak berhasil ditambahkan'})
    }else{
        return res.status(404).json({ message: 'permintaan anda tidak diizinkan' })
    }
}

export default handler; 


