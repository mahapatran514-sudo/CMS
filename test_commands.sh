# A. Get All patients
curl -X GET "https://probable-acorn-r7p45vrv54gfxpv7-8000.app.github.dev/api/patients/"

# B. Get One patient
curl -X GET "http://localhost:8000/api/patient/1"

# C. Create patients
curl -X POST "https://probable-acorn-r7p45vrv54gfxpv7-8000.app.github.dev/api/patients" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Alice Johnson",
    "age": 47,
    "gender": "male",
    "contact": 6371404057
  }'

# D. Update patients
curl -X PUT "https://probable-acorn-r7p45vrv54gfxpv7-8000.app.github.dev/api/patients/1" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Olivia Newman",
    "age": 40,
    "gender": "Female",
    "contact": 8762503456
  }'

# E. Delete patients
curl -X DELETE "https://probable-acorn-r7p45vrv54gfxpv7-8000.app.github.dev/api/patients/1"


##################### DB Observation Via SQLite Web
- install https://github.com/coleifer/sqlite-web
- pip install sqlite-web
- sqlite_web students.db