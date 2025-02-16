import { PrismaClient, ProjectBill } from "@prisma/client";
const prisma = new PrismaClient()
import * as status from 'http-status' 
import * as createError from 'http-errors'

async function getBill(id: number) {
  const bill = await prisma.projectBill.findFirst({
    where: {
      id: id,
    },
    include: {
      expenses: {
        include: {
          section: true,
        },
      },
      workers: {
        include: {
          Worker: true,
        },
      },
      revenues: true,
      sections: true,
      _count: true,
    },
  });
  return bill;
}

  export default async function handler(req, res) {
    const id = Number(req.query.id)
    const result = await getBill(id)
    res.status(200).json(result)
  }

