import { NextFunction, Request, Response } from "express";

export const contactMiddleware = (req: Request, res: Response, next: NextFunction) => {

  const { name, lastname, number } = req.body;

  if (!name) {
    return res.status(400).json({ 
      error: true, 
      message: 'Name is required.' 
    });
  }

  if (!lastname) {
    return res.status(400).json({ 
      error: true, 
      message: 'Last Name is required.' 
    });
  }

  if (!number) {
    return res.status(400).json({ 
      error: true, 
      message: 'Number is required.' 
    });
  }

  next();
  
};