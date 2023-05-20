import prisma from "../../../lib/prisma";

const handler = async (req,res) => {
    if(req.method === 'GET'){

        const allForum = await prisma.Forum.findMany({ include : 
            { 
                person : true , 
                comment : {
                    include: {
                        person: true
                      }
                }
            } 
        });
    
        return res.status(200).json(allForum);
    
    }
    else{ 
        return res.status(404).json({ message: 'permintaan anda tidak diizinkan' })
    }
}

export default handler;