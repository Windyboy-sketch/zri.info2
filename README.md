
   ______      _____ 
  /      \    |  _  | 🌟
 /_______/    |_____| 🎮 ZRI Project Source Code

ZRI Project Source Code 🎉
Overview 📜
Welcome to the source code of the ZRI Project, a web-based platform hosted on zri.info! This project powers a variety of interactive features, including a games hub, a clock, a code editor, a movies section, and other recreational pages. It’s designed with a user-friendly, responsive, and visually engaging interface, featuring a consistent purple-themed aesthetic. The codebase includes local games, beta code management, and proxy configurations for enhanced functionality. This page is for viewing the source code—feel free to explore how it’s built! 🔍

🚨 REDISTRIBUTION POLICY - STRICTLY PROHIBITED 🚨
⚠️ WARNING: THIS PROJECT IS NOT TO BE REDISTRIBUTED UNDER ANY CIRCUMSTANCES! ⚠️
The ZRI Project and all its associated files, directories, and assets are the exclusive property of zri.info. Redistribution, sharing, or republishing of this project in any form—whether modified or unmodified—is STRICTLY FORBIDDEN 🚫. This includes, but is not limited to, uploading to other websites, sharing via file-sharing platforms, or distributing through any other means.

Why? To protect the intellectual property and ensure the project remains exclusive to zri.info.
Consequences: Violation of this policy may result in legal action 📜.
Usage: You may view and study this source code for educational purposes, but DO NOT SHARE it with others.

If you have any questions about usage or permissions, please contact the zri.info team (see Contact section below).

Features ✨
Here’s what the ZRI Project offers through its codebase:

Games Hub 🎲: A collection of local games with filtering, sorting, and favoriting capabilities.
Clock ⏰: A dynamic clock display.
Code Editor 💻: A simple code editor interface.
Movies Section 🎬: A page listing movies (functionality TBD).
Recreational Pages 🎈: Additional pages like aiden.html and recreation.html for various purposes.
Beta Code Management 🔐: A system to manage beta codes for restricted access to certain features or games.
Proxy Support 🌐: Configuration for proxy usage to bypass restrictions.
Responsive Design 📱: Optimized for desktop, tablet, and mobile devices.
Custom Styling 🎨: Uses the Roboto font and a consistent purple-themed design.


Directory Structure 📂
Explore the files and directories that make up the ZRI Project:

.idea/ 🛠️: Configuration files for JetBrains IDEs (e.g., IntelliJ IDEA), used for development.
games/ 🎮: Directory containing individual game folders (e.g., games/2048/index.html). Each game has its own subdirectory with an index.html file.
images/ 🖼️: Directory for image assets, including:
Screenshot 2025-04-02 222032.png
Screenshot 2025-04-07 000046.png


proxy/ 🌐: Directory for proxy configuration files or scripts, used to bypass restrictions.
.gitattributes ⚙️: Git configuration file for handling line endings and other attributes.
README.md 📝: This file, providing an overview of the source code.
Roboto-Regular.ttf 🅰️: The Roboto font file used for custom styling in some pages.
aiden.html & aiden.html; 🎭: Likely duplicate HTML files (the semicolon in the second filename may be a typo). Purpose TBD.
beta_codes.txt 🔑: Text file containing beta codes for restricted access features (e.g., certain games).
clock.html ⏰: HTML file for displaying a dynamic clock.
clock.js ⚡: JavaScript file powering the clock functionality in clock.html.
code.html 💻: HTML file for a simple code editor interface (functionality TBD).
game.html 🎲: Main games hub page with a grid of games, filtering, sorting, and a report section for known issues.
gencode.py 🐍: Python script, likely used to generate beta codes or automate other tasks.
index.html 🏠: The homepage of the ZRI project, serving as the entry point to other sections.
movies.html 🎬: HTML file for the movies section (functionality TBD).
recreation.html 🎉: HTML file for additional recreational content (details TBD).
styles.css 🎨: CSS file containing shared styles for the project, ensuring a consistent look.


Code Highlights 🚀
Games Hub (game.html) 🎮

Purpose: The core feature of the project, displaying a grid of games.
Features:
Filter games by platform (Windows/Linux), genre (Horror, RPG, Puzzle, Action), or favorites.
Sort by title, platform, or genre.
Mark games as favorites (saved in localStorage).
Pagination (16 games per page).
A "Game Issues Report" section listing known issues:
hexql: 404 Not Found
learntofly: 404 Not Found
omnombo: 404 Not Found
spacegarden: Loads Forever
subwaysurferssingapore: Requires Beta Code to Play
tombofthmask: 404 Not Found




Tech: Built with HTML, CSS (inline), and JavaScript (inline). Uses the Roboto font via Google Fonts.

Clock (clock.html & clock.js) ⏰

Purpose: Displays a dynamic clock.
Tech: clock.html for the structure, clock.js for the functionality.

Code Editor (code.html) 💻

Purpose: A simple interface for writing or testing code (functionality TBD).
Tech: HTML with potential JavaScript (not fully implemented).

Beta Codes (beta_codes.txt) 🔑

Purpose: Stores beta codes for restricted access features, like subwaysurferssingapore.
Format: Plain text file with codes (format TBD).

Proxy Support (proxy/) 🌐

Purpose: Contains configurations or scripts to bypass restrictions using a proxy.
Details: Specific implementation TBD.

Code Generation (gencode.py) 🐍

Purpose: A Python script, likely for generating beta codes or automating tasks.
Tech: Python 3.x.


For Developers 🛠️
This source code is shared for educational purposes. Here’s how you can understand the project:

Explore the Code 🔍: Open the HTML, JS, CSS, and Python files in a code editor to study their structure.
Styling 🎨: The project uses a purple-themed aesthetic with the Roboto font. Check styles.css and inline CSS in HTML files for details.
Game Issues ⚠️: The game.html file includes a report section highlighting games with issues—useful for understanding real-world challenges.
Beta Code System 🔐: See how beta_codes.txt integrates with the project for access control.

Reminder: This code is for viewing only. Do NOT attempt to run or redistribute it 🚫.

License 📜
© 2025 zri.info. All rights reserved.🚨 THIS PROJECT IS NOT TO BE REDISTRIBUTED. FOR EDUCATIONAL VIEWING ONLY. 🚨

Contact 📧
For inquiries, please contact the zri.info team at [insert contact email or link].
🌟 Thanks for exploring the ZRI Project source code! 🌟  
🚫 REMINDER: DO NOT REDISTRIBUTE! 🚫

