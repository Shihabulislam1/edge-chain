// Function to display time until a specific timestamp is reached
function showTimeTill(timestamp) {
    const targetTime = new Date(timestamp).getTime();
  
    const intervalId = setInterval(() => {
      const currentTime = new Date().getTime();
      const remainingTime = targetTime - currentTime;
  
      if (remainingTime > 0) {
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  
        console.log(`Time remaining: ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
      } else {
        console.log('Specified time reached!');
        clearInterval(intervalId);
      }
    }, 1000); // Update every second
  }
  
  // Example usage with the provided timestamp
  const timestamp = 'Sat Dec 09 2023 19:26:50 GMT+0600 (Bangladesh Standard Time)';
  showTimeTill(timestamp);