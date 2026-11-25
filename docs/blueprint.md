# **App Name**: DMR App Launcher

## Core Features:

- App Menu: Dynamically generate a menu of available apps using data from a configuration file or array.
- Iframe Loading: Load selected applications within an iframe to maintain a consistent user experience and isolate application contexts. Takes URLs of applications as parameters.
- Active State Indication: Visually indicate the currently active application in the menu using distinct styling.
- Configuration: Load the menu items based on the contents of the apps array specified in the HTML source.

## Style Guidelines:

- Primary color: Tailwind Blue (#3B82F6), derived from the styling example, providing a familiar and consistent brand experience.
- Background color: Light gray (#F9FAFB) to offer a clean and modern look that is easy on the eyes.
- Accent color: A slightly lighter shade of blue (#60A5FA) than the primary color to highlight interactive elements.
- Font: 'Inter' (sans-serif) for clear and accessible headlines and body text, following the request from the provided HTML source.
- Simple, modern line icons from a library such as Heroicons, used inline with app names for quick visual identification. The HTML source already uses such icons.
- Sidebar navigation with a fixed width on the left for easy access to all applications; main content area uses the remaining space.
- Subtle transition effect when switching between applications in the iframe, like a fade-in, to improve user experience. Consider preloading or caching applications.