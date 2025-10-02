# Next.js MongoDB Customer Management System

A full-stack CRUD application built with Next.js 14, MongoDB, and Tailwind CSS for managing customer data.

## Features

- ✅ Complete CRUD operations for customers
- ✅ RESTful API endpoints
- ✅ MongoDB database integration with Mongoose
- ✅ Responsive UI with Tailwind CSS
- ✅ Form validation
- ✅ Real-time data updates
- ✅ Professional customer detail pages

## Tech Stack

- **Frontend:** Next.js 14, React, Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** MongoDB Atlas with Mongoose ODM
- **Form Handling:** React Hook Form

## Customer Data Model

- **Name** (String, required)
- **Date of Birth** (Date, required)
- **Member Number** (Number, required, unique)
- **Interests** (String, required)

## API Endpoints

### Customer Operations

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/customer` | Get all customers |
| GET | `/api/customer/[id]` | Get single customer |
| POST | `/api/customer` | Create new customer |
| PUT | `/api/customer` | Update customer (full) |
| PATCH | `/api/customer` | Update customer (partial) |
| DELETE | `/api/customer/[id]` | Delete customer |

See [`Customer_API_Documentation.md`](Customer_API_Documentation.md) for detailed API documentation with curl examples.

## Getting Started

### Prerequisites

- Node.js 18+ 
- MongoDB Atlas account (or local MongoDB)
- pnpm (or npm/yarn)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd next-mongo
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Edit `.env` and add your MongoDB connection string:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.xxxxx.mongodb.net/dbname
```

5. Run the development server:
```bash
pnpm dev
```

6. Open [http://localhost:3000/customer](http://localhost:3000/customer) in your browser

## Project Structure

```
├── app/
│   ├── api/
│   │   └── customer/
│   │       ├── route.js          # Main CRUD endpoints
│   │       └── [id]/
│   │           └── route.js      # Single customer operations
│   ├── customer/
│   │   ├── page.js               # Customer list & CRUD UI
│   │   └── [id]/
│   │       └── page.js           # Customer detail page
│   └── layout.js
├── models/
│   └── Customer.js               # Mongoose schema
├── lib/
│   └── db.js                     # Database connection
└── Customer_API_Documentation.md # API documentation
```

## UI Features

### Customer List Page (`/customer`)
- View all customers
- Add new customers with form
- Edit existing customers inline
- Delete customers with confirmation
- Click customer name to view details

### Customer Detail Page (`/customer/[id]`)
- Professional card-based layout
- All customer information displayed
- Formatted date of birth
- Back to list navigation

## Testing the API

Test all endpoints using curl:

```bash
# Get all customers
curl http://localhost:3000/api/customer

# Create a customer
curl -X POST http://localhost:3000/api/customer \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","dateOfBirth":"1990-01-15","memberNumber":1001,"interests":"movies, sports"}'

# Get single customer
curl http://localhost:3000/api/customer/{id}

# Update customer
curl -X PUT http://localhost:3000/api/customer \
  -H "Content-Type: application/json" \
  -d '{"_id":"{id}","name":"John Doe Updated","dateOfBirth":"1990-01-15","memberNumber":1001,"interests":"movies, sports, reading"}'

# Delete customer
curl -X DELETE http://localhost:3000/api/customer/{id}
```

## Development

```bash
# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## License

MIT

## Author

Built as part of WAD2025 Final Project
