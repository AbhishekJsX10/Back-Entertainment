import Express from "express";
import { userRegister, userLogin, userLogout, getMyProfile, getUserById } from "../controllers/userControllers.js";
import { isAuthenticated } from "../middleware/auth.js";


const router = Express.Router();


router.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'We are in home route'
    })
})


router.post('/register', userRegister);
router.post('/login', userLogin);
router.get('/logout', userLogout);
router.get('/getMyProfile', isAuthenticated, getMyProfile);
router.get('/:id', getUserById)


export default router;