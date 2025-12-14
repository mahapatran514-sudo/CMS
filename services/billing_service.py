# Contains business logic for Billing / Payments
# Does NOT know about HTTP — only works with Python data

from database.billing_queries import (
    db_get_all,
    db_get_one,
    db_create
)


def service_get_all():
    return db_get_all()


def service_get_one(bill_id):
    return db_get_one(bill_id)


def service_create(data):
    required = ["patient_id", "doctor_id", "amount"]

    for field in required:
        if field not in data:
            raise ValueError(f"{field} is required")

    # Default payment status
    data.setdefault("payment_status", "PENDING")

    return db_create(data)
