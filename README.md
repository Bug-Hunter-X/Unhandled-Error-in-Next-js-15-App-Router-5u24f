# Next.js 15 App Router Error Handling
This repository demonstrates an unhandled error within a page component using Next.js 15's App Router and how to handle such situations.

## Bug Description
The `pages/about.js` file intentionally throws an error.  In a production environment, this would cause the application to crash.  Next.js 15's App Router has specific requirements for gracefully handling errors within page components.

## Solution
The provided solution showcases implementing proper error handling using `next/navigation`'s `notFound()` function to handle the error effectively.