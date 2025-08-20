const { User, Automovil } = require('../../models')

const metrics = async (_req, res) => {
  try {
    const [users, vehicles] = await Promise.all([User.count(), Automovil.count()])
    res.json({ users, vehicles, updatedAt: new Date().toISOString() })
  } catch (e) {
    console.error('metrics error:', e.message)
    res.status(500).json({ error: 'No se pudieron obtener métricas' })
  }
}

module.exports = { metrics }

