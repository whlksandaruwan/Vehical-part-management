import React, { useState, useEffect } from 'react';
import { partsAPI } from '../services/api';

const PartForm = ({ partId, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    part_type: 'Battery',
    brand: '',
    quantity_in_stock: 0,
    price: 0
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const partTypes = ['Battery', 'Tire', 'Oil Filter', 'Brake Pad', 'Spark Plug', 'Air Filter', 'Other'];

  useEffect(() => {
    if (partId) {
      fetchPart();
    }
  }, [partId]);

  const fetchPart = async () => {
    try {
      const response = await partsAPI.getPartById(partId);
      setFormData(response.data);
    } catch (error) {
      setError('Failed to fetch part details');
    }
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseFloat(value) || 0 : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (partId) {
        await partsAPI.updatePart(partId, formData);
      } else {
        await partsAPI.createPart(formData);
      }
      onSave();
    } catch (error) {
      setError('Failed to save part');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="part-form">
      <h2>{partId ? 'Edit Part' : 'Add New Part'}</h2>
      
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Part Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="part_type">Part Type:</label>
          <select
            id="part_type"
            name="part_type"
            value={formData.part_type}
            onChange={handleChange}
            required
            className="form-input"
          >
            {partTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="brand">Brand:</label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="quantity_in_stock">Quantity in Stock:</label>
          <input
            type="number"
            id="quantity_in_stock"
            name="quantity_in_stock"
            value={formData.quantity_in_stock}
            onChange={handleChange}
            min="0"
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price (LKR):</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            min="0"
            step="0.01"
            required
            className="form-input"
          />
        </div>

        <div className="form-actions">
          <button type="submit" disabled={loading} className="btn btn-primary">
            {loading ? 'Saving...' : (partId ? 'Update Part' : 'Add Part')}
          </button>
          <button type="button" onClick={onCancel} className="btn btn-secondary">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default PartForm;