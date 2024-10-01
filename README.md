# 📰 NEWS-Mag

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## 📚 Overview

**NEWS-Mag** is a modern, responsive web application designed to deliver the latest news articles from around the world. Built with React and integrated with a news API, it provides a user-friendly interface for browsing through various news categories, including technology, sports, entertainment, business, and more.

## 🎯 Features

- **📰 Real-time News Feed:** Stay updated with the latest news articles fetched from a reliable news API.
- **📂 Category-wise Filtering:** Browse news by categories such as Technology, Sports, Business, etc.
- **⚡ Fast & Responsive:** Optimized for performance and mobile-first design.

## 🛠️ Tech Stack

- **Frontend:** React, HTML5, CSS3, JavaScript (ES6+)
- **API Integration:** News API
- **State Management:** React Hooks, Context API

## 🚀 Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AnandaMuhuri/NEWS-Mag.git
   cd NEWS-Mag
2. **Install dependencies:**

   ```bash
   npm install
3. **Set up API Key:**
 Create a .env file and add your API key:
   ```bash
   REACT_APP_NEWS_API_KEY=your_api_key_here


4. **Start the app:**

   ```bash
   npm start

## 🤝 Contributing

Contributions are welcome! Please submit an issue or pull request.

## 📌 Known Issues

### CORS Error with News API

While using the [News API](https://newsapi.org/), you may encounter the following error:

{
    "status": "error",
    "code": "corsNotAllowed",
    "message": "Requests from the browser are not allowed on the Developer plan, except from localhost."
}

This is due to the API's CORS policy. To resolve this, either run the app locally or proxy requests through a backend server. Alternatively, consider upgrading to a higher API plan.


## 🌟 Acknowledgements

   - News API for providing the news data.
   - The React community for amazing tools and libraries.

## 📬 Contact

   - **GitHub:** AnandaMuhuri
   - **LinkedIn:** Ananda Muhuri

## Happy coding! 🚀



