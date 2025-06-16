import React, { useState } from 'react';
import PartList from './components/PartList';
import PartForm from './components/PartForm';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('list');
  const [editingPartId, setEditingPartId] = useState(null);

  const handleAddPart = () => {
    setEditingPartId(null);
    setCurrentView('form');
  };

  const handleEditPart = (partId) => {
    setEditingPartId(partId);
    setCurrentView('form');
  };

  const handleSavePart = () => {
    setCurrentView('list');
    setEditingPartId(null);
  };

  const handleCancel = () => {
    setCurrentView('list');
    setEditingPartId(null);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Vehicle Parts Inventory System</h1>
        {currentView === 'list' && (
          <button onClick={handleAddPart} className="btn btn-primary">
            Add New Part
          </button>
        )}
      </header>

      <main className="app-main">
        {currentView === 'list' ? (
          <PartList onEditPart={handleEditPart} />
        ) : (
          <PartForm
            partId={editingPartId}
            onSave={handleSavePart}
            onCancel={handleCancel}
          />
        )}
      </main>
    </div>
  );
}

export default App;