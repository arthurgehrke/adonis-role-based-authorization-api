'use strict'

const User = use('App/Models/User')

class UserController {
  async store({ request, response }) {
    const userData = request.body

    const user = await User.create(userData)

    return response.status(201).json(user)
  }
}

module.exports = UserController
