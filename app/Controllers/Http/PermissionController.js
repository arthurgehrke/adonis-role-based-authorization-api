'use strict'

const Permission = use('Permission')

class PermissionController {
  async index({ response }) {
    const permissions = await Permission.all()

    return response.status(200).json(permissions)
  }

  async store({ request, response }) {
    const data = request.only(['name', 'slug', 'description'])

    const permission = await Permission.create(data)

    return response.status(201).json(permission)
  }

  async update({ request, response, params: { id } }) {
    const data = request.only(['name', 'slug', 'description'])

    const permission = await Permission.findOrFail(id)

    permission.merge(data)

    await permission.save(data)

    return response.status(202).json(permission)
  }

  async destroy({ params: { id }, response }) {
    const permission = await Permission.findOrFail(id)

    permission.delete()

    return response.status(404)
  }
}

module.exports = PermissionController
