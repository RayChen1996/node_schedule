//const fetch = require('node-fetch');
//const schedule = require('node-schedule');
import fetch from 'node-fetch';
import schedule from 'node-schedule';

// 設定API網址
const apiUrl = 'https://homesecuritypro-api.onrender.com'; // 將此處替換為你的API網址

// 定義發送GET請求的函數
async function sendGetRequest() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('API response:', data);
  } catch (error) {
    console.error('Error fetching the API:', error);
  }
}

// 設置每五分鐘發送一次GET請求
const job = schedule.scheduleJob('*/5 * * * *', () => {
  console.log('Sending GET request to API...');
  sendGetRequest();
});

console.log('Scheduled job set to run every 5 minutes.');
