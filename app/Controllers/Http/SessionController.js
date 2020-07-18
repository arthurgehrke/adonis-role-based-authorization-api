'use strict'

class SessionController {
  async store({ request, response, auth }) {
    const { email, password } = request.post()

    const token = await auth.attempt(email, password)

    return response.status(200).json(token)
  }
}

module.exports = SessionController
