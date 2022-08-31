import { Router } from 'express'
import { AccountController } from '../controller/AccountController'
import { UserController } from '../controller/UserController'
import { Authenticated } from '../middleware/Authenticated'

const router = Router()

const userController = new UserController()
const accountController = new AccountController()

router.post('/auth/register', userController.register)
router.post('/auth/sign_in', userController.sign_in)

router.post('/account',Authenticated(),accountController.create)

export { router }