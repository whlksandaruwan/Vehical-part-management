import React, { useState, useEffect } from 'react';
import { partsAPI } from '../services/api';
import SearchFilter from './SearchFilter';

const PartList = ({ onEditPart }) => {
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({});

  useEffect(() => {
    fetchParts();
  }, [filters]);

  const fetchParts = async () => {
    try {
      setLoading(true);
      const response = await partsAPI.getAllParts(filters);
      setParts(response.data);
    } catch (error) {
      setError('Failed to fetch parts');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this part?')) {
      try {
        await partsAPI.deletePart(id);
        fetchParts(); // Refresh the list
      } catch (error) {
        setError('Failed to delete part');
      }
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-LK', {
      style: 'currency',
      currency: 'LKR'
    }).format(price);
  };

  if (loading) return <div className="loading">Loading parts...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="part-list">
      <SearchFilter filters={filters} onFilterChange={setFilters} />
      
      <div className="parts-table-container">
        <table className="parts-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
              <th>Brand</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parts.length === 0 ? (
              <tr>
                <td colSpan="8" className="no-data">No parts found</td>
              </tr>
            ) : (
              parts.map(part => (
                <tr key={part.id}>
                  <td>{part.id}</td>
                  <td>{part.name}</td>
                  <td>{part.part_type}</td>
                  <td>{part.brand}</td>
                  <td>{part.quantity_in_stock}</td>
                  <td>{formatPrice(part.price)}</td>
                  <td>
                    <span className={`status ${part.status.toLowerCase().replace(' ', '-')}`}>
                      {part.status}
                    </span>
                  </td>
                  <td>
                    <button
                      onClick={() => onEditPart(part.id)}
                      className="btn btn-sm btn-edit"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(part.id)}
                      className="btn btn-sm btn-delete"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PartList;