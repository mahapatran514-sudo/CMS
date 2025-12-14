# Contains business logic for Patients
# Does NOT know about HTTP — only works with Python data

from database.patient_queries import (
    db_get_all,
    db_get_one,
    db_create,
    db_update,
    db_delete
)


def service_get_all():
    return db_get_all()


def service_get_one(patient_id):
    return db_get_one(patient_id)


def service_create(data):
    # Basic validation example
    if not data.get("name"):
        raise ValueError("Patient name is required")

    return db_create(data)


def service_update(patient_id, data):
    return db_update(patient_id, data)


def service_delete(patient_id):
    return db_delete(patient_id)
