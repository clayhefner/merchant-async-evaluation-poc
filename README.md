# Merchant Async Evaluation POC

A modern React application for evaluating merchant data with a beautiful dark-themed UI, real-time validation, and asynchronous processing capabilities.

## 🚀 Features

- **Modern UI/UX**: Dark theme with glassmorphism effects and smooth animations
- **Real-time Validation**: Instant feedback on missing requirements
- **Asynchronous Processing**: Simulated backend evaluation with loading states
- **Responsive Design**: Built with Ant Design components for consistent UX
- **Background Processing**: Evaluation continues even when UI is closed
- **Interactive Navigation**: Sidebar navigation with collapsible menu
- **Form Management**: Comprehensive merchant data collection

## 🛠️ Tech Stack

- **React 18** - Frontend framework
- **TypeScript** - Type safety and developer experience
- **Ant Design 5** - UI component library
- **React Scripts** - Build tooling and development server
- **CSS3** - Custom styling with dark theme and glassmorphism

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download here](https://git-scm.com/)

## 🏗️ Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/merchant-evaluation-poc.git
cd merchant-evaluation-poc
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

## 📁 Project Structure

```
merchant-evaluation-poc/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── App.tsx             # Main application component
│   ├── App.css             # Global styles and dark theme
│   └── index.tsx           # Application entry point
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (irreversible)

## 🎨 UI Components

### Main Features:

- **Sidebar Navigation**: Collapsible menu with Dashboard, Merchant Evaluation, and Settings
- **Header**: User profile dropdown and menu toggle
- **Merchant Form**: 5 required fields with real-time validation
- **Missing Requirements Alert**: Dynamic badge showing incomplete fields
- **Loading Overlay**: Animated spinner with contextual messaging
- **Background Processing**: Notification system for async operations

### Form Fields:

1. **Merchant Name** - Business identification
2. **Business Type** - Category of business
3. **Contact Email** - Primary contact information
4. **Phone Number** - Contact number
5. **Address** - Business location

## 🔄 Evaluation Process

1. **Form Submission**: User fills out merchant information
2. **Validation**: Real-time checking of required fields
3. **Async Processing**: 6-second simulated backend evaluation
4. **Progress Feedback**: Loading spinner with status updates
5. **Results**: Updated missing requirements count
6. **Background Mode**: Evaluation continues if user closes window

## 🎯 Key Features Demo

### Real-time Validation

- Missing requirements counter updates as you type
- Color-coded badges (red for missing, green for complete)
- Dynamic alert messages

### Async Processing

- Simulated backend API calls
- Loading states with progress indicators
- Cancellation support with background processing

### Modern UI/UX

- Dark theme with glassmorphism effects
- Smooth animations and transitions
- Responsive design for all screen sizes

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to Common Platforms

**Netlify:**

```bash
npm run build
# Drag and drop the build folder to Netlify
```

**Vercel:**

```bash
npm install -g vercel
vercel
```

**GitHub Pages:**

```bash
npm install --save-dev gh-pages
# Add to package.json scripts:
# "deploy": "gh-pages -d build"
npm run deploy
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory for configuration:

```env
REACT_APP_API_URL=http://localhost:3001
REACT_APP_EVALUATION_TIMEOUT=6000
```

### Customization

- **Theme Colors**: Edit `src/App.css` for color scheme changes
- **Form Fields**: Modify `requiredFields` array in `App.tsx`
- **Evaluation Logic**: Update `simulateEventTrigger` function

## 🐛 Troubleshooting

### Common Issues:

**TypeScript Errors:**

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

**Port Already in Use:**

```bash
# Use different port
PORT=3001 npm start
```

**Build Errors:**

```bash
# Check for linting issues
npm run build
```

## 📝 Development Notes

### Code Organization:

- **State Management**: React hooks for local state
- **Form Handling**: Ant Design Form with validation
- **Styling**: CSS modules with dark theme variables
- **Type Safety**: TypeScript interfaces for data structures

### Performance Optimizations:

- Component memoization where appropriate
- Efficient re-renders with proper dependency arrays
- Optimized bundle size with tree shaking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Links

- [React Documentation](https://reactjs.org/)
- [Ant Design Components](https://ant.design/components/overview/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📧 Support

For questions or support, please open an issue in the GitHub repository.

---

**Built with ❤️ using React, TypeScript, and Ant Design**
