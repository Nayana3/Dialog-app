#  Modular Dialog Component – React + Tailwind + TypeScript

This project is a clean and reusable dialog (modal) component built using React, Tailwind CSS, and TypeScript.  
It was created as part of a frontend task, with a focus on modularity, accessibility, and user experience enhancements.


##  Highlights

-  Modular Design  
  The dialog is broken down into 7 reusable components: `Dialog`, `Header`, `Footer`, `Content`, `Button`, `ButtonGroup`, and `IconAndText`.

-  Config-Based Rendering  
  Dialogs are generated dynamically using a config object — makes it easy to plug in variations (with/without buttons, footer notes, etc.).

-  Accessible by Default  
  Includes `role="dialog"`, `aria-labelledby`, closes with `Esc`, and ready for keyboard focus management.

-  User-Friendly Interactions  
  - Click outside the dialog to close  
  - Auto-close for common button actions like `OK`, `Close`, `Dismiss`, etc.  
  - Smooth fade-in animation using Framer Motion

-  Dark Mode Support 
  Easily toggle between light and dark themes using Tailwind’s built-in dark mode.

---

##  How to Run This

# Clone the repository
git clone https://github.com/Nayana3/Dialog-app.git
cd Dialog-app

# Install dependencies
npm install

# Start the dev server
npm run dev
