import { Router } from 'express';
import ContactController from './controllers/ContactController';

const router = Router();

router.post('/contacts', ContactController.createContact);
router.get('/contacts', ContactController.readContacts);
router.put('/contacts/:id', ContactController.updateContact);
router.delete('/contacts/:id', ContactController.deleteContact);
router.get('/contacts/:id', ContactController.showContact);

export default router;