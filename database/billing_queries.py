# Actual SQL queries for Billing / Payments

from datetime import datetime
from .connection import get_connection


def db_get_all():
    conn = get_connection()
    rows = conn.execute("""
        SELECT * FROM billing ORDER BY id DESC
    """).fetchall()
    conn.close()
    return [dict(r) for r in rows]


def db_get_one(bill_id):
    conn = get_connection()
    row = conn.execute(
        "SELECT * FROM billing WHERE id = ?",
        (bill_id,)
    ).fetchone()
    conn.close()
    return dict(row) if row else None


def db_create(data):
    conn = get_connection()
    now = datetime.now().isoformat()

    cur = conn.execute("""
        INSERT INTO billing
        (patient_id, doctor_id, amount, payment_status, created_at)
        VALUES (?, ?, ?, ?, ?)
    """, (
        data["patient_id"],
        data["doctor_id"],
        data["amount"],
        data.get("payment_status", "PENDING"),
        now
    ))

    conn.commit()
    new_id = cur.lastrowid
    conn.close()
    return db_get_one(new_id)
