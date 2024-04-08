// Import useEffect from React
import { useEffect } from 'react';

const GoogleAnalytics = () => {
  useEffect(() => {
    // Define a function to send data to your server-side route
    const sendDataToServer = (data) => {
      fetch('/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        // Handle response if needed
      })
      .catch(error => {
        // Handle error if needed
      });
    }

    // Define the analytics configuration
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-JW5GP3SJJQ');

    // Send analytics data to your server-side route
    const analyticsData = {
      eventName: 'page_view', // Example event name
      // Add any other relevant data
    };
    sendDataToServer(analyticsData);
  }, []);

  return null;
}

export default GoogleAnalytics;