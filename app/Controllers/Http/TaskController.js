'use strict'

const Task = use('App/Models/Task')

class TaskController {
  async store({ request, response, auth }) {
    const { id } = await auth.getUser()

    const taskData = request.body

    const task = await Task.create({ user_id: id, ...taskData })

    return response.status(201).json(task)
  }
}

module.exports = TaskController
