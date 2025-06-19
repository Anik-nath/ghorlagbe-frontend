# Project Setup & Run Guide

Follow these steps to run this project locally:

## 1. Clone the Repository

```bash
git clone <repository-url>
cd ghore-lagbe-React_File
```

## 2. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) installed.

```bash
npm install
```

## 3. Configure Environment Variables

If the project uses environment variables, copy `.env.example` to `.env` and update values as needed:

```bash
cp .env.example .env
```

## 4. Start the Development Server

```bash
npm start
```

The app should now be running at [http://localhost:8080](http://localhost:8080).

## 5. Build for Production (Optional)

To create an optimized production build:

```bash
npm run build
```