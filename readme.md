
# 🍴 VINGO — Food Delivery Platform

Vingo is a full-stack food delivery platform designed to connect **customers, restaurant owners, and delivery partners** through a unified ordering and delivery workflow.

The platform supports restaurant discovery, menu browsing, cart management, multi-restaurant checkout, secure online payments, role-based access, and location-aware delivery tracking.

---

## 🚀 Key Features

### 👤 Role-Based Food Delivery Workflow

Vingo provides dedicated workflows for three primary roles:

- **Customers**
  - Discover restaurants
  - Browse menus
  - Add items to cart
  - Place orders
  - Make online payments
  - Track delivery status

- **Restaurant Owners**
  - Manage restaurant information
  - Manage menu items
  - Receive and process incoming orders
  - Update order preparation status

- **Delivery Partners**
  - View assigned deliveries
  - Access delivery information
  - Update delivery progress
  - Share delivery location for tracking

---

### 🔐 Authentication & Authorization

- Authentication and user identity management using **Clerk**
- Role-based access control for customer, restaurant-owner, and delivery-partner workflows
- Protected application routes and role-specific functionality
- Secure user sessions and account recovery

---

### 🍔 Restaurant & Menu Management

- Restaurant discovery and browsing
- Restaurant-specific menu management
- Food item and pricing management
- Cart-based food selection
- Support for orders containing items from multiple restaurants

---

### 🛒 Multi-Restaurant Checkout

Vingo separates restaurant-specific order processing while maintaining a unified customer checkout experience.


Customer Cart
      │
      ├── Restaurant A items
      │
      └── Restaurant B items
              │
              ▼
        Checkout Processing
              │
              ▼
      Restaurant-specific
          Order Handling


This allows individual restaurants to process their own orders independently.

---

### 💳 Razorpay Payments

Vingo integrates **Razorpay** for online payment processing.

The checkout flow follows a secure client-server architecture:


Customer
   │
   ▼
Pay Now
   │
   ▼
Backend Order Validation
   │
   ▼
Razorpay Payment Order
   │
   ▼
Razorpay Checkout
   │
   ▼
Payment
   │
   ▼
Backend Verification
   │
   ▼
Order Confirmation


Payment-related operations are handled through the backend rather than trusting payment information directly from the client.

---

### 📍 Location-Aware Delivery Tracking

**Geoapify** provides location and geospatial services used throughout the delivery workflow.

The platform uses location information for:

* Address geocoding
* Location-aware restaurant discovery
* Distance-based delivery operations
* Delivery location tracking
* Map-based delivery visualization


Address
   │
   ▼
Geoapify
   │
   ▼
Geographic Coordinates
   │
   ▼
Restaurant / Delivery
Location Processing
   │
   ▼
Map-Based Tracking


---

### 📦 Four-Stage Order Lifecycle

Orders progress through a defined four-stage workflow:


Pending
   ↓
Preparing
   ↓
Out for Delivery
   ↓
Delivered


Each stage represents a different point in the delivery process and allows the appropriate role to perform the next business operation.



## 🏗️ System Architecture

Vingo follows a full-stack web architecture built around Next.js and React.js.


                    VINGO
                      │
              ┌───────┴───────┐
              │               │
        Next.js + React.js    │
              │               │
              ▼               │
       Application / API      │
              │               │
        ┌─────┼─────┐         │
        │     │     │         │
        ▼     ▼     ▼         ▼
      SQL   Clerk  Razorpay  Geoapify
       │      │      │          │
       ▼      ▼      ▼          ▼
    Relational Auth  Payments  Location
     Data


### Core Architectural Responsibilities

| Layer        | Responsibility                                                     |
| ------------ | ------------------------------------------------------------------ |
| **Next.js**  | Full-stack application framework and server-side application logic |
| **React.js** | Component-based user interface                                     |
| **SQL**      | Relational application and order data                              |
| **Clerk**    | Authentication, sessions, and role-based access                    |
| **Razorpay** | Online payment processing                                          |
| **Geoapify** | Geocoding and location-based services                              |



## 🧩 Core Application Modules

The system is organized around the following major modules:

* Authentication
* User & role management
* Restaurant management
* Menu management
* Restaurant discovery
* Cart management
* Checkout
* Payment processing
* Order management
* Delivery assignment
* Location services
* Delivery tracking
* Role-specific dashboards



## 🔄 End-to-End Order Flow

A typical customer order follows this workflow:


1. Customer Authentication
          ↓
2. Restaurant Discovery
          ↓
3. Menu Browsing
          ↓
4. Add Items to Cart
          ↓
5. Multi-Restaurant Checkout
          ↓
6. Razorpay Payment
          ↓
7. Payment Verification
          ↓
8. Order Creation
          ↓
9. Restaurant Processes Order
          ↓
10. Delivery Partner Handles Delivery
          ↓
11. Geoapify Location Tracking
          ↓
12. Order Delivered




## 🛠️ Tech Stack

### Frontend & Application

* **Next.js**
* **React.js**

### Database

* **SQL**

### Authentication & Authorization

* **Clerk**

### Payments

* **Razorpay**

### Maps & Location Services

* **Geoapify**



## 🔒 Security Considerations

The platform separates authentication, authorization, and payment responsibilities.

### Authentication

Clerk manages user identity and authenticated sessions.

### Authorization

Role-based access ensures that application functionality is restricted according to the user's role.


Authenticated User
       │
       ▼
     Role
       │
 ┌─────┼─────────┐
 ▼     ▼         ▼
User  Owner    Delivery


### Payment Security

Payment verification is performed on the server because client-side payment information cannot be treated as trusted input.

---

## 📊 Core Data Model

The relational database is designed around entities such as:


User
 │
 ├── Customer
 │
 ├── Restaurant Owner
 │
 └── Delivery Partner

Restaurant
 │
 └── Menu Items

Customer
 │
 └── Orders

Order
 │
 ├── Order Items
 ├── Payment
 └── Delivery
 

The relational model allows the system to maintain clear relationships between users, restaurants, menu items, orders, payments, and deliveries.

---

## ⚙️ Engineering Highlights

* Designed a **4-stage order lifecycle** for predictable order processing.
* Implemented **3 role-specific workflows** for customers, restaurant owners, and delivery partners.
* Integrated **Razorpay** into the checkout and payment workflow.
* Integrated **Geoapify** for geocoding and location-aware delivery functionality.
* Implemented **role-based access control** through Clerk.
* Designed the checkout workflow to support **multiple restaurants**.
* Separated payment processing from order confirmation through server-side verification.
* Structured the application around reusable React components and full-stack Next.js workflows.

---

## 🚀 Getting Started

### 1. Clone the repository


git clone https://github.com/Devanshujangid/Vingo.git

cd Vingo


### 2. Install dependencies


npm install


### 3. Configure environment variables



### 4. Start the development server


npm run dev


The application will be available locally through the development server.



## 🌐 Deployment

**Live Demo:**
[https://vingo-b1ff.vercel.app/](https://vingo-b1ff.vercel.app/)

**GitHub:**
[https://github.com/Devanshujangid/Vingo](https://github.com/Devanshujangid/Vingo)

---

## 🎯 Project Objective

Vingo was designed as a practical full-stack system for understanding how modern food delivery applications coordinate:

* Multiple user roles
* Restaurant and menu management
* Cart and checkout workflows
* Online payments
* Relational data
* Authentication and authorization
* Geospatial services
* Delivery tracking
* Multi-stage order processing

The project focuses on the engineering challenges involved in connecting these independent subsystems into a single end-to-end workflow.

````

