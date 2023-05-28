import prisma from "../../../lib/prisma";

const handler = async (req, res) => {


  if (req.method === 'POST') {

    const {
      id,
      person
    } = req.body;

    const existLike = await prisma.Like.findMany({
      where: {
        personId: person,
        forumId: id
      }
    });

    if(existLike.length > 0){
      return res.status(200).json(existLike);
    }else{
      return res.status(200).json([{condition : false}]);
    }
    

  } else if (req.method === 'PUT') {

    const {
      id,
      like,
      condition,
      person
    } = req.body;

    const updateLike = await prisma.Forum.update({
      where: {
        id: id,
      },
      data: {
        countLike: like
      },
    })

    const existLike = await prisma.Like.findMany({
      where: {
        personId: person,
        forumId: id
      }
    });

    if (existLike.length > 0) {
      const changeLike = await prisma.Like.updateMany({
        where: {
          personId: person,
          forumId: id
        },
        data: {
          condition: condition,
        }

      });
      return res.status(200).json({
        message: 'like berhasil '
      })
    } else {
      const createLike = await prisma.Like.create({
        data: {
          forumId: id,
          personId: person,
          condition: condition,
        },
      })
    }

    return res.status(200).json({
      message: 'anda berhasil like  '
    })
  } else {
    return res.status(404).json({
      message: 'permintaan anda tidak diizinkan'
    })
  }
};

export default handler;