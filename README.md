# HealthLink Smart ID - Prototype

A comprehensive mobile app prototype for Malaysia's Smart Health ID system, connecting Citizens, Guardians, and Healthcare Providers.

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/HealthLink.git
cd HealthLink
```

### 2. Open the Prototype
```bash
# Open the citizen app index
cd prototype/citizen
start index.html        # Windows
open index.html         # macOS
xdg-open index.html     # Linux
```

Or simply double-click `prototype/citizen/index.html` in your file explorer.

### 3. Enter Presentation Mode
For the best demo experience:

| Action | How |
|--------|-----|
| **Press `P`** | Toggle presentation mode (recommended) |
| **Click button** | Blue button in bottom-right corner |
| **Press `ESC`** | Exit presentation mode |

**Presentation Mode** fills the screen with just the phone interface — perfect for demos and judging!

---

## 📱 App Structure

### Citizen App (Main App)
The unified app includes both personal health management and **Guardian Mode** for managing dependents.

| # | Screen | Description |
|---|--------|-------------|
| 1 | **Sign Up** | MyKad / QR / NFC / Fingerprint verification |
| 1b | **Fingerprint Scan** | MyKad biometric fingerprint verification |
| 2 | **Verification Complete** | Identity verified successfully |
| 3 | **Dashboard** | Smart ID card (tap for QR) + role switcher |
| 3b | **Guardian Mode** | Manage dependents (integrated) |
| 3c | **Dependent Detail** | View dependent's health info |
| 3d | **My Permissions** | View guardian access rights |
| 3e | **Guardian Alerts** | Notifications for dependents |
| 4 | **Health Records** | Vaccinations, visits, lab results |
| 5 | **Medications** | NFC scan, dosage tracking |
| 6 | **Appointments** | Calendar, booking system |
| 7 | **Benefits** | Government subsidies |
| 8 | **My Guardians** | Delegation system with permissions |
| 9 | **Emergency Mode** | One-tap emergency with auto-share |
| 10 | **Nearby Map** | Find clinics/hospitals |
| 11 | **Chatbot** | Voice + text assistant |
| 12 | **Child Dashboard** | Parent view for children |

### Healthcare Provider App
| # | Screen | Description |
|---|--------|-------------|
| P1 | **Smart Check-In** | QR/NFC patient scanner |
| P2 | **Patient Info** | Full patient details |
| P3 | **NFC Wristband** | Hospital tag management |
| P4 | **Prescription** | New prescription with auto-sync |

---

## ✨ Key Features

### Smart ID Card
- Tap the card on Dashboard to show **QR Code** for clinic check-in
- Displays blood type and allergies

### Role Switcher
- Toggle between **My Health** and **Guardian Mode**
- Badge shows pending alerts for dependents

### Presentation Mode
- Press **P** to enter fullscreen demo mode
- Phone scales to fit window
- Hides all prototype navigation
- Persists across page navigation

---

## 🎨 Design Highlights

- **Accessibility First**: Large icons, high contrast, voice support
- **Modern UI**: Soft shadows, gradients, smooth animations
- **Mobile-First**: Optimized for smartphone interactions
- **Universal Design**: Suitable for elderly, children, and PWD users

---

## 📁 File Structure

```
HealthLink/
├── prototype/
│   ├── citizen/              # Main Citizen App screens
│   │   ├── index.html        # Screen selector
│   │   ├── 01-signup.html    # Sign up screen
│   │   ├── 03-dashboard.html # Main dashboard
│   │   ├── 03b-guardian-dashboard.html  # Guardian mode
│   │   └── ...
│   ├── provider/             # Healthcare Provider screens
│   ├── shared-styles.css     # Global styles
│   └── transitions.js        # Page transitions + presentation mode
└── README.md
```

---

## 🛠️ Technology

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables & animations
- **JavaScript** - Interactions & presentation mode
- **FontAwesome 6** - Icon library
- **Plus Jakarta Sans** - Typography

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `P` | Toggle Presentation Mode |
| `ESC` | Exit Presentation Mode |

---

## 📄 License

This prototype is created for demonstration purposes for the Smart ID Health System project.

---

*Built with ❤️ for Malaysia's healthcare future*
