```javascript
// pages/about.js
import { notFound } from 'next/navigation';

export default function About() {
  try {
    // Code that might throw an error
    throw new Error('Intentional error for demonstration');
  } catch (error) {
    console.error('Error in About page:', error);
    notFound(); // Redirect to a 404 page or handle the error appropriately
  }
}
```