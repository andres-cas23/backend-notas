const supabase = require('../supabase');

const getAll = async (req, res) => {
  const { data, error } = await supabase
    .from('materias')
    .select('*');

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

module.exports = { getAll };