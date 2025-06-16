const db = require('../config/database');

class Part {
  static async getAll(filters = {}) {
    let query = 'SELECT * FROM parts WHERE 1=1';
    const params = [];

    if (filters.search) {
      query += ' AND name LIKE ?';
      params.push(`%${filters.search}%`);
    }

    if (filters.partType) {
      query += ' AND part_type = ?';
      params.push(filters.partType);
    }

    if (filters.status) {
      query += ' AND status = ?';
      params.push(filters.status);
    }

    query += ' ORDER BY created_at DESC';

    const [rows] = await db.execute(query, params);
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.execute('SELECT * FROM parts WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(partData) {
    const { name, part_type, brand, quantity_in_stock, price } = partData;
    const status = quantity_in_stock > 0 ? 'In Stock' : 'Out of Stock';
    
    const [result] = await db.execute(
      'INSERT INTO parts (name, part_type, brand, quantity_in_stock, price, status) VALUES (?, ?, ?, ?, ?, ?)',
      [name, part_type, brand, quantity_in_stock, price, status]
    );
    
    return this.getById(result.insertId);
  }

  static async update(id, partData) {
    const { name, part_type, brand, quantity_in_stock, price } = partData;
    const status = quantity_in_stock > 0 ? 'In Stock' : 'Out of Stock';
    
    await db.execute(
      'UPDATE parts SET name = ?, part_type = ?, brand = ?, quantity_in_stock = ?, price = ?, status = ? WHERE id = ?',
      [name, part_type, brand, quantity_in_stock, price, status, id]
    );
    
    return this.getById(id);
  }

  static async delete(id) {
    await db.execute('DELETE FROM parts WHERE id = ?', [id]);
    return true;
  }
}

module.exports = Part;