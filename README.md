# NativeScript Browser

This is a simple web browser app built with NativeScript and Angular. It is designed to be a minimalistic, lightweight web browser, capable of basic navigation functions such as going back, going forward, and entering a URL.

## Features

- A back button for navigating to previously viewed pages
- A forward button for navigating to pages that have been backed out of
- A URL text field for directly entering website URLs
- A WebView component from NativeScript core for webpage rendering

## Project Structure

The project has a typical NativeScript project structure with Angular:

```text
.
├── App_Resources // Platform-specific resources like app icons and launch screens
├── hooks // Scripts executed at specific points in the app lifecycle
├── platforms // The iOS and Android platform-specific code
├── src // Source code for the application
│   ├── app // Angular application
│   │   ├── app-routing.module.ts // Angular routes
│   │   ├── app.component.html // Main app component template
│   │   ├── app.component.ts // Main app component logic
│   │   └── browser // Browser component
│   │       ├── browser.component.html // Browser component template
│   │       └── browser.component.ts // Browser component logic
│   ├── app.css // Global CSS for the application
│   ├── main.ts // Main entry point for the application
│   └── polyfills.ts // Polyfills required by Angular
├── tsconfig.json // TypeScript configuration
└── webpack.config.js // Webpack configuration
```

## Getting Started

Prerequisites:

- Node.js and npm installed
- NativeScript CLI installed (`npm install -g nativescript`)

To get started with this project:

1. Clone the repository: `git clone <repo_url>`
2. Install dependencies: `npm install`
3. Run the app on iOS: `ns run ios`
4. Run the app on Android: `ns run android`

# Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
