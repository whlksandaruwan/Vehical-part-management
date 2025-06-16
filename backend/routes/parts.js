const express = require('express');
const router = express.Router();
const Part = require('../models/Part');

// GET /parts - Get all parts with optional filters
router.get('/', async (req, res) => {
  try {
    const filters = {
      search: req.query.search,
      partType: req.query.partType,
      status: req.query.status
    };
    
    const parts = await Part.getAll(filters);
    res.json(parts);
  } catch (error) {
    console.error('Error fetching parts:', error);
    res.status(500).json({ error: 'Failed to fetch parts' });
  }
});

// GET /parts/:id - Get part by ID
router.get('/:id', async (req, res) => {
  try {
    const part = await Part.getById(req.params.id);
    if (!part) {
      return res.status(404).json({ error: 'Part not found' });
    }
    res.json(part);
  } catch (error) {
    console.error('Error fetching part:', error);
    res.status(500).json({ error: 'Failed to fetch part' });
  }
});

// POST /parts - Add new part
router.post('/', async (req, res) => {
  try {
    const part = await Part.create(req.body);
    res.status(201).json(part);
  } catch (error) {
    console.error('Error creating part:', error);
    res.status(500).json({ error: 'Failed to create part' });
  }
});

// PUT /parts/:id - Update existing part
router.put('/:id', async (req, res) => {
  try {
    const part = await Part.update(req.params.id, req.body);
    if (!part) {
      return res.status(404).json({ error: 'Part not found' });
    }
    res.json(part);
  } catch (error) {
    console.error('Error updating part:', error);
    res.status(500).json({ error: 'Failed to update part' });
  }
});

// DELETE /parts/:id - Delete part
router.delete('/:id', async (req, res) => {
  try {
    await Part.delete(req.params.id);
    res.json({ message: 'Part deleted successfully' });
  } catch (error) {
    console.error('Error deleting part:', error);
    res.status(500).json({ error: 'Failed to delete part' });
  }
});

module.exports = router;