const supabase = require('../supabase');

const getByCedula = async (req, res) => {
  const { cedula } = req.params;

  const { data: estudiante, error: errEst } = await supabase
    .from('estudiantes')
    .select('id, nombre, cedula')
    .eq('cedula', cedula)
    .single();

  if (errEst) return res.status(404).json({ error: 'Estudiante no encontrado' });

  const { data: notas, error: errNotas } = await supabase
    .from('notas')
    .select('*, materias(nombre)')
    .eq('estudiante_id', estudiante.id);

  if (errNotas) return res.status(500).json({ error: errNotas.message });

  res.json({ estudiante, notas });
};

const create = async (req, res) => {
  const { cedula, materia_id, nota1, nota2, nota3, nota4 } = req.body;

  if (!cedula || !materia_id) {
    return res.status(400).json({ error: 'Cédula y materia son obligatorios' });
  }

  const { data: estudiante, error: errEst } = await supabase
    .from('estudiantes')
    .select('id')
    .eq('cedula', cedula)
    .single();

  if (errEst) return res.status(404).json({ error: 'Estudiante no encontrado' });

  const definitiva = ((
    parseFloat(nota1 || 0) +
    parseFloat(nota2 || 0) +
    parseFloat(nota3 || 0) +
    parseFloat(nota4 || 0)
  ) / 4).toFixed(2);

  const { data, error } = await supabase
    .from('notas')
    .insert([{
      estudiante_id: estudiante.id,
      materia_id,
      nota1, nota2, nota3, nota4,
      definitiva: parseFloat(definitiva)
    }])
    .select()
    .single();

  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data);
};

module.exports = { getByCedula, create };