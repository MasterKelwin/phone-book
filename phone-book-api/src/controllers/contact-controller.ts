import { Request, Response } from "express";
import { prisma } from "../database";

export default{
  async createContact(req: Request, res: Response) {
    try {
      const { name, lastname, number } = req.body;
      const contact = await prisma.contact.create({
        data: {
          name,
          lastname,
          number
        }
      });

      return res.json({
        error: false,
        message: 'Contact created!',
        contact
      })

    } catch(error) {
      return res.json({ error: true, message: error.message });
    }
  },

  async readContacts(req: Request, res: Response) {
    try {
      const contacts = await prisma.contact.findMany();

      return res.json({ error: false, res: contacts })

    } catch(error) {
      return res.json({ error: true, message: error.message });
    }
  },

  async updateContact(req: Request, res: Response) {
    try {
      const { name, lastname, number } = req.body;
      const { id } = req.params;
      const contact = await prisma.contact.update({
        where: {
          id: Number(id)
        },
        data: {
          name,
          lastname,
          number
        },
      });

      return res.json({
        error: false,
        message: 'Contact updated!',
        contact
      })

    } catch(error) {
      return res.json({ error: true, message: error.message });
    }
  },

  async deleteContact(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedContact = await prisma.contact.delete({
        where: {
          id: Number(id), 
        },
      });

      return res.json({
        error: false,
        res: `Contact ${deletedContact.name} deleted`
      })

    } catch(error) {
      return res.json({ error: true, message: error.message });
    }
  },

  async showContact(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const contact = await prisma.contact.findUnique({
        where: {
          id: Number(id), 
        },
      });

      return res.json({
        error: false,
        res: contact
      })

    } catch(error) {
      return res.json({ error: true, message: error.message });
    }
  }
}