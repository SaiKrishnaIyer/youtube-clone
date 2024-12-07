# YouTube Clone

This documentation outlines the steps to create and understand a **YouTube Clone** application using **React** and **Html**.

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Project Setup](#project-setup)
5. [File Structure](#file-structure)
6. [Components](#components)
7. [API Integration](#api-integration)
8. [Styling](#styling)
9. [Known Issues & Fixes](#known-issues-and-fixes)
10. [Future Enhancements](#future-enhancements)


## Introduction
The YouTube Clone is a responsive, single-page application mimicking core YouTube features like video playback, recommendations, categories, and comments. It is built using React with **Vite** for fast development.


## Features
- **Video Playback**: Embedded YouTube videos with metadata display.
- **Search Functionality**: Dynamic search powered by the YouTube API.
- **Categories**: Filter videos based on predefined categories.
- **Recommendations**: Display related videos.
- **Comments Section**: Fetch and display comments for a selected video.


## Tech Stack
### Frontend:
- **React**: For building the user interface.
- **Vite**: Development environment for fast and optimized builds.
- **CSS**: For styling (or use frameworks like TailwindCSS).

### APIs:
- **YouTube Data API v3**: For fetching video details, comments, and related videos.


## Project Setup
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repository/youtube-clone.git
   cd youtube-clone
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Environment Variables**:
   Create a `.env` file in the root directory and add your YouTube API key:
   ```env
   VITE_YOUTUBE_API_KEY=your_api_key
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

## File Structure
```plaintext
src/
├── assets/           # Images and static assets
├── components/       # Reusable components (Sidebar, VideoCard, etc.)
├── pages/            # Page components (HomePage, VideoPage)
├── styles/           # CSS files or styling frameworks
├── utils/            # Helper functions
├── App.jsx           # Main app entry point
├── main.jsx          # React DOM entry point
```


## Components
### 1. **Sidebar**
- Displays categories like Gaming, Sports, Technology, etc.
- Allows users to filter videos.

### 2. **VideoCard**
- Displays thumbnail, title, views, and channel info for a single video.

### 3. **VideoPlayer**
- Embeds a selected YouTube video.
- Shows metadata like title, views, and description.

### 4. **Comments**
- Fetches and displays comments for the video.

### 5. **Recommended**
- Shows related videos for the current video.


## API Integration
### Endpoints Used:
1. **Fetch video details**:
   ```http
   GET https://www.googleapis.com/youtube/v3/videos
   ```
   Parameters:
   - `part=snippet,contentDetails,statistics`
   - `id=videoId`
   - `key=API_KEY`

2. **Fetch related videos**:
   ```http
   GET https://www.googleapis.com/youtube/v3/search
   ```
   Parameters:
   - `part=snippet`
   - `relatedToVideoId=videoId`
   - `type=video`
   - `key=API_KEY`

3. **Fetch comments**:
   ```http
   GET https://www.googleapis.com/youtube/v3/commentThreads
   ```
   Parameters:
   - `part=snippet`
   - `videoId=videoId`
   - `key=API_KEY`


## Styling
- **CSS Modules** or **Global CSS** can be used.
- Example:
  ```css
  .sidebar {
    background-color: #fff;
    width: 250px;
    padding: 20px;
  }
  ```


## Known Issues and Fixes
1. **Images not displaying correctly**:
   - Verify file paths and ensure images are imported properly in components.

2. **API quota exceeded**:
   - Consider applying for a higher quota or use a backup API key.

3. **Sidebar icons misaligned**:
   - Ensure consistent `flexbox` styling for alignment.


## Future Enhancements
1. **Authentication**:
   - Allow users to log in using Google OAuth.
2. **Custom Video Player**:
   - Add controls like playback speed, resolution selection.
3. **Dark Mode**:
   - Implement a toggle for dark/light themes.
4. **Offline Support**:
   - Cache video data using service workers.
