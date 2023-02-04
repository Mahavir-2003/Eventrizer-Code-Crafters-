import express from 'express';
import { organizerSignUp, acceptTender , organizerLogin , venderSignUp , venderLogin ,addEvent,reqTender ,getEvents} from '../controllers';

const router = express.Router();

router.post('/RegisterOrganizer', organizerSignUp)
router.post('/RegisterVender', venderSignUp)
router.post('/LoginOrganizer', organizerLogin)
router.post('/LoginVender', venderLogin)
router.post('/AddEvent', addEvent)
router.post('/reqTender', reqTender)
router.post('/acceptTender', acceptTender)
router.get("/getEvents",getEvents)


export default router;