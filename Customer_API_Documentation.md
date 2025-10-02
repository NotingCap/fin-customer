# Customer API Documentation

## CRUD Operations

### 1. Create Customer

**Route:** `POST /api/customer`

**Payload (body):**
```json
{
  "name": "John Doe",
  "dateOfBirth": "1990-01-15",
  "memberNumber": 1001,
  "interests": "movies, football, gaming"
}
```

**Response:**
```json
{
  "_id": "68ddec49c83b0ebdd2043dba",
  "name": "John Doe",
  "dateOfBirth": "1990-01-15T00:00:00.000Z",
  "memberNumber": 1001,
  "interests": "movies, football, gaming",
  "createdAt": "2025-10-02T03:07:00.000Z",
  "updatedAt": "2025-10-02T03:07:00.000Z"
}
```

**File:** `/app/api/customer/route.js`

**Test:**
```bash
curl -X POST http://localhost:3000/api/customer \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "dateOfBirth": "1990-01-15",
    "memberNumber": 1001,
    "interests": "movies, football, gaming"
  }'
```

---

### 2. Read All Customers

**Route:** `GET /api/customer`

**Payload (body):** -

**Response:**
```json
[
  {
    "_id": "68ddec49c83b0ebdd2043dba",
    "name": "John Doe",
    "dateOfBirth": "1990-01-15T00:00:00.000Z",
    "memberNumber": 1001,
    "interests": "movies, football, gaming",
    "createdAt": "2025-10-02T03:07:00.000Z",
    "updatedAt": "2025-10-02T03:07:00.000Z"
  },
  {
    "_id": "68ddec49c83b0ebdd2043dbb",
    "name": "Jane Smith",
    "dateOfBirth": "1985-05-20T00:00:00.000Z",
    "memberNumber": 1002,
    "interests": "reading, yoga, cooking",
    "createdAt": "2025-10-02T03:08:00.000Z",
    "updatedAt": "2025-10-02T03:08:00.000Z"
  }
]
```

**File:** `/app/api/customer/route.js`

**Test:**
```bash
curl http://localhost:3000/api/customer
```

---

### 3. Read Single Customer

**Route:** `GET /api/customer/{id}`

**Payload (body):** -

**Response:**
```json
{
  "_id": "68ddec49c83b0ebdd2043dba",
  "name": "John Doe",
  "dateOfBirth": "1990-01-15T00:00:00.000Z",
  "memberNumber": 1001,
  "interests": "movies, football, gaming",
  "createdAt": "2025-10-02T03:07:00.000Z",
  "updatedAt": "2025-10-02T03:07:00.000Z"
}
```

**File:** `/app/api/customer/[id]/route.js`

**Test:**
```bash
curl http://localhost:3000/api/customer/68ddec49c83b0ebdd2043dba
```

---

### 4. Update Customer (Full Update)

**Route:** `PUT /api/customer`

**Payload (body):**
```json
{
  "_id": "68ddec49c83b0ebdd2043dba",
  "name": "John Doe Updated",
  "dateOfBirth": "1990-01-15",
  "memberNumber": 1001,
  "interests": "movies, football, gaming, reading"
}
```

**Response:**
```json
{
  "_id": "68ddec49c83b0ebdd2043dba",
  "name": "John Doe Updated",
  "dateOfBirth": "1990-01-15T00:00:00.000Z",
  "memberNumber": 1001,
  "interests": "movies, football, gaming, reading",
  "createdAt": "2025-10-02T03:07:00.000Z",
  "updatedAt": "2025-10-02T03:10:00.000Z"
}
```

**File:** `/app/api/customer/route.js`

**Test:**
```bash
curl -X PUT http://localhost:3000/api/customer \
  -H "Content-Type: application/json" \
  -d '{
    "_id": "68ddec49c83b0ebdd2043dba",
    "name": "John Doe Updated",
    "dateOfBirth": "1990-01-15",
    "memberNumber": 1001,
    "interests": "movies, football, gaming, reading"
  }'
```

---

### 5. Update Customer (Partial Update)

**Route:** `PATCH /api/customer`

**Payload (body):**
```json
{
  "_id": "68ddec49c83b0ebdd2043dba",
  "interests": "movies, football, gaming, reading, traveling"
}
```

**Response:**
```json
{
  "_id": "68ddec49c83b0ebdd2043dba",
  "name": "John Doe Updated",
  "dateOfBirth": "1990-01-15T00:00:00.000Z",
  "memberNumber": 1001,
  "interests": "movies, football, gaming, reading, traveling",
  "createdAt": "2025-10-02T03:07:00.000Z",
  "updatedAt": "2025-10-02T03:11:00.000Z"
}
```

**File:** `/app/api/customer/route.js`

**Test:**
```bash
curl -X PATCH http://localhost:3000/api/customer \
  -H "Content-Type: application/json" \
  -d '{
    "_id": "68ddec49c83b0ebdd2043dba",
    "interests": "movies, football, gaming, reading, traveling"
  }'
```

---

### 6. Delete Customer

**Route:** `DELETE /api/customer/{id}`

**Payload (body):** -

**Response:**
```json
{
  "_id": "68ddec49c83b0ebdd2043dba",
  "name": "John Doe Updated",
  "dateOfBirth": "1990-01-15T00:00:00.000Z",
  "memberNumber": 1001,
  "interests": "movies, football, gaming, reading, traveling",
  "createdAt": "2025-10-02T03:07:00.000Z",
  "updatedAt": "2025-10-02T03:11:00.000Z"
}
```

**File:** `/app/api/customer/[id]/route.js`

**Test:**
```bash
curl -X DELETE http://localhost:3000/api/customer/68ddec49c83b0ebdd2043dba
```

---

## Data Model

### Customer Schema

| Field | Type | Required | Unique | Description |
|-------|------|----------|--------|-------------|
| name | String | Yes | No | Customer's full name |
| dateOfBirth | Date | Yes | No | Customer's date of birth |
| memberNumber | Number | Yes | Yes | Unique member identification number |
| interests | String | Yes | No | Customer's interests (comma-separated) |
| createdAt | Date | Auto | No | Timestamp when record was created |
| updatedAt | Date | Auto | No | Timestamp when record was last updated |

---

## UI Pages

### Customer List Page
**Route:** `/customer`
- Displays all customers
- Form to add new customers
- Delete button for each customer
- Click on customer name to view details

### Customer Detail Page
**Route:** `/customer/{id}`
- Displays individual customer information
- Shows formatted date of birth
- Shows member number and interests

---

## Error Handling

All API endpoints return appropriate HTTP status codes:
- `200` - Success
- `404` - Customer not found
- `500` - Server error

Example error response:
```json
"Customer not found"