import { Router } from 'express'
import { UserController } from '../controller/UserController'

const router = Router()

const userController = new UserController()

router.post('/auth/register', userController.register)
router.post('/auth/sign_in', userController.sign_in)

export { router }