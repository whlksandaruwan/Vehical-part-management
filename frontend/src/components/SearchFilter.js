import React from 'react';

const SearchFilter = ({ filters, onFilterChange }) => {
  const partTypes = ['Battery', 'Tire', 'Oil Filter', 'Brake Pad', 'Spark Plug', 'Air Filter', 'Other'];
  const statusOptions = ['In Stock', 'Out of Stock'];

  return (
    <div className="search-filter-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search parts by name..."
          value={filters.search || ''}
          onChange={(e) => onFilterChange({ ...filters, search: e.target.value })}
          className="search-input"
        />
      </div>
      
      <div className="filter-dropdowns">
        <select
          value={filters.partType || ''}
          onChange={(e) => onFilterChange({ ...filters, partType: e.target.value })}
          className="filter-select"
        >
          <option value="">All Part Types</option>
          {partTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        
        <select
          value={filters.status || ''}
          onChange={(e) => onFilterChange({ ...filters, status: e.target.value })}
          className="filter-select"
        >
          <option value="">All Status</option>
          {statusOptions.map(status => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchFilter;