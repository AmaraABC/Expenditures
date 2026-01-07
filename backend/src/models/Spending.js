import pool from "../config/db.mysql.js";

class Spending {
  constructor({ id, category_id, amount, spending_description, spending_date, created_at }) {
    this.id = id;
    this.category_id = category_id;
    this.amount = amount;
    this.spending_description = spending_description;
    this.spending_date = spending_date;
    this.created_at = created_at;
  }

  static async create({ client_id, category_id, amount, spending_description, spending_date }) {
    const [result] = await pool.query(
      `INSERT INTO spendings (client_id, category_id, amount, spending_description, spending_date)
       VALUES (?, ?, ?, ?, ?)`,
      [client_id, category_id, amount, spending_description, spending_date]
    );

    return new Spending({ id: result.insertId, client_id, category_id, amount, spending_description, spending_date });
  }

  static async findAll() {
    const [rows] = await pool.query(`SELECT * FROM spendings`);
    return rows.map(row => new Spending(row));
  }

  static async findById(id) {
    const [rows] = await pool.query(`SELECT * FROM spendings WHERE id = ?`, [id]);
    if (rows.length === 0) return null;
    return new Spending(rows[0]);
  }

  async update() {
    if (!this.id) throw new Error("Cannot update this spending");

    await pool.query(
      `UPDATE spendings
       SET client_id = ?, category_id = ?, amount = ?, spending_description = ?, spending_date = ?
       WHERE id = ?`,
      [this.client_id, this.category_id, this.amount, this.spending_description, this.spending_date, this.id]
    );

    return this;
  }

  async delete() {
    if (!this.id) throw new Error("Cannot delete this spending");

    await pool.query(`DELETE FROM spendings WHERE id = ?`, [this.id]);
    return true;
  }
}

export default Spending;