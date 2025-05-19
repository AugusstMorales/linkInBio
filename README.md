# Link In Bio

This project is built with *HTML*, *CSS*, and *JavaScript* (using Vanta.JS).  
The main goal is to showcase all my links in one place—with full control over customization, functionality, and code optimization.

Creating a **Link in Bio** from scratch offers several advantages over using third-party platforms:

-  **Full Customization**: Design it exactly the way you want—no branding restrictions, no limited themes.
-  **Complete Control**: Own your code, structure, and features. Add animations, effects, or integrations as you see fit.
-  **Better Performance**: No unnecessary bloat or ads. Just clean, optimized code.
-  **Free & Fast Hosting with Vercel**: Deploy in seconds, get a custom domain or use the default one, and enjoy blazing-fast global CDN.

By building it yourself and deploying it with Vercel, you turn your bio link into a lightweight, elegant, and professional micro-website.

## Project Structure

``` zsh

├── assets
│   └── Images
│       ├── icos
│       │   └── linkbio.ico
│       └── profile
│           └── UserProfile.jpg
├── css
│   └── global.css
├── index.html
├── js
│   └── main.js
└── README.md

``` 

## Vanta.JS Configuration
The *Birds* effect in Vanta.JS is simple to set up. A few key values are fine-tuned to create a unique, clean visual experience.

``` JavaScript

VANTA.BIRDS({
  el: "#vanta-container",          // The DOM element where the effect will be rendered (CSS selector)
  mouseControls: true,            // Enable interaction with the mouse (movement affects animation)
  touchControls: true,            // Enable touch interactions on mobile devices
  gyroControls: false,            // Disable gyroscope input (used for motion on mobile)
  minHeight: 200.00,              // Minimum height (in pixels) of the canvas
  minWidth: 200.00,               // Minimum width (in pixels) of the canvas
  scale: 1.00,                    // Scaling factor for non-mobile devices
  scaleMobile: 1.00,              // Scaling factor for mobile devices
  color1: 0xff82,                 // Primary color of the birds (in hexadecimal)
  color2: 0xffee00,               // Secondary color of the birds (in hexadecimal)
  colorMode: "lerp",              // Color interpolation mode ("lerp" = linear interpolation)
  birdSize: 0.60,                 // Size of each bird (0.0 to ~3.0, relative scale)
  separation: 61.00,              // Distance between birds (higher value = more spread out)
  quantity: 2.10,                 // Number of birds (non-integer values allowed for tuning density)
  backgroundAlpha: 0.0            // Background opacity (0.0 = fully transparent, 1.0 = opaque)
});


``` 

## Collaborations or Forks

Feel free to collaborate or fork this project—it's intended for learning and experimentation.  
If you find it useful or inspiring, consider leaving a star to show your support.
