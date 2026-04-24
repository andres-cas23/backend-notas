const supabase = require('../supabase');

const getAll = async (req, res) => {
  const { data, error } = await supabase
    .from('estudiantes')
    .select('*');

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

const getByCedula = async (req, res) => {
  const { cedula } = req.params;
  const { data, error } = await supabase
    .from('estudiantes')
    .select('*')
    .eq('cedula', cedula)
    .single();

  if (error) return res.status(404).json({ error: 'Estudiante no encontrado' });
  res.json(data);
};

const create = async (req, res) => {
  const { cedula, nombre, correo, celular } = req.body;

  if (!cedula || !nombre) {
    return res.status(400).json({ error: 'Cédula y nombre son obligatorios' });
  }

  const { data, error } = await supabase
    .from('estudiantes')
    .insert([{ cedula, nombre, correo, celular }])
    .select()
    .single();

  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data);
};

module.exports = { getAll, getByCedula, create };