import { Router } from 'express';
import ContactController from './controllers/contact-controller';
import { contactMiddleware } from './middlewares/contact-middleware';

const router = Router();

router.post('/contacts', contactMiddleware, ContactController.createContact);

router.get('/contacts', ContactController.readContacts);

router.put('/contacts/:id', contactMiddleware, ContactController.updateContact);

router.delete('/contacts/:id', ContactController.deleteContact);

router.get('/contacts/:id', ContactController.showContact);

export default router;