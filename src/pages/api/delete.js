
import prisma from "../../../lib/prisma";

const handler = async(req,res) => {
    if( req.method === 'DELETE' ){

        const { id } = req.body;

        const cekCom = await prisma.comment.findMany({
          where: {
            forumId : id
          }
        })

        if ( cekCom ) {
          const deleteComment = await prisma.comment.deleteMany({
            where: {
              forumId: id,
            },
          })
        }

        const deleteSpeak = await prisma.Forum.delete({
            where: {
              id: id,
            },
          })

        return res.status(200).json({message: 'speak berhasil dihapus'});
    }else{
        return res.status(404).json({ message: 'permintaan anda tidak diizinkan' })
    }
}

export default handler;