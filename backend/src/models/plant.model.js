const { model, Schema } = require('mongoose');

const plantSchema = new Schema({
  picture: { type: String, default: 'https://previews.123rf.com/images/yupiramos/yupiramos1612/yupiramos161203915/66885261-dise%C3%B1o-de-ilustraci%C3%B3n-de-vector-de-%C3%A1rbol-planta-silueta-icono.jpg' },
  scientific_name: String,
  common_name: String,
  recommended_temperature: String,
  sun_exposure: String,
  watering_per_week: Number,
  soil: [String],
  description: String
});

module.exports = model('Plant', plantSchema);
