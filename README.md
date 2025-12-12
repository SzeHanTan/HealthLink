# CitizenHealth Smart ID - Prototype

A comprehensive mobile app prototype for Malaysia's Smart Health ID system, connecting Citizens, Guardians, and Healthcare Providers.

## 🚀 Quick Start

Open the prototype in your browser:

```bash
# Navigate to the prototype folder
cd prototype

# Open in browser (Windows)
start complete-prototype.html

# Or simply double-click the HTML file
```

## 📱 Prototype Screens

### Citizen App (12 screens)

| # | Screen | Description |
|---|--------|-------------|
| 1 | **Sign Up** | MyKad/QR/NFC verification onboarding |
| 2 | **Role Detection** | Profile type selection (Adult/Child/Elderly/PWD) |
| 3 | **Dashboard** | Main hub with Smart ID card and quick actions |
| 4 | **My Health Records** | Vaccinations, visits, prescriptions, lab results |
| 5 | **My Medications** | NFC scan, dosage tracking, drug interactions |
| 6 | **My Appointments** | Calendar, booking, pre-visit instructions |
| 7 | **My Benefits** | Government subsidies, vaccination programs |
| 8 | **My Guardians** | Secure delegation system with permissions |
| 9 | **Emergency Mode** | One-tap emergency with auto-share |
| 10 | **Emergency Map** | Nearby clinics/hospitals finder |
| 11 | **Chatbot** | Voice + text assistant (accessible) |
| 12 | **Child Dashboard** | Parent view for managing dependents |

### Guardian App (6 screens)

| # | Screen | Description |
|---|--------|-------------|
| G1 | **Guardian Dashboard** | Overview of all dependents (children/elderly/PWD) |
| G2 | **Dependent Detail** | Detailed view of specific dependent |
| G3 | **Book Appointment** | Book appointments for dependents |
| G4 | **Guardian Alerts** | Notifications, reminders, medication alerts |
| G5 | **Manage Permissions** | View granted permissions per dependent |
| G6 | **Emergency Received** | Alert when dependent activates emergency |

### Healthcare Provider (4 screens)

| # | Screen | Description |
|---|--------|-------------|
| 13 | **Smart ID Check-In** | QR/NFC patient scanner |
| 14 | **Patient Info** | Full patient details after scan |
| 15 | **NFC Wristband** | Hospital tag management system |
| 16 | **Prescription** | New prescription with auto-sync |

## 🎨 Design Features

- **Accessibility First**: Large icons, high contrast, screen reader friendly
- **Multilingual**: EN / BM / 中文 / Tamil support
- **Universal Design**: Suitable for elderly, children, and PWD users
- **Modern UI**: Soft shadows, rounded corners, gradient accents
- **Mobile-First**: Optimized for smartphone interactions

## 📁 File Structure

```
HealthLink/
├── prototype/
│   ├── all-screens.html         # Main entry - Citizen screens 1-6
│   ├── screens-part2.html       # Citizen screens 7-12
│   ├── screens-guardian.html    # Guardian App screens (G1-G6)
│   ├── screens-provider.html    # Healthcare Provider screens (13-16)
│   ├── styles.css               # Base styles
│   ├── styles-part2.css         # Dashboard & Records styles
│   ├── styles-part3.css         # Appointments & Benefits styles
│   ├── styles-part4.css         # Map & Chatbot styles
│   ├── styles-provider.css      # Healthcare provider styles
│   └── script.js                # Interactive behaviors
└── README.md
```

## 🛠️ Technology

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables
- **JavaScript** - Basic interactions
- **FontAwesome 6** - Icon library
- **Plus Jakarta Sans** - Typography

## 🔧 Customization

### Colors
Edit CSS variables in `styles.css`:

```css
:root {
    --primary: #0066FF;
    --secondary: #00C48C;
    --emergency: #FF3B30;
    /* ... more colors */
}
```

### Phone Frame Size
```css
:root {
    --phone-width: 375px;
    --phone-height: 812px;
}
```

## 📋 Features by User Type

### Citizens
- ✅ Secure health identity
- ✅ Unified health records
- ✅ Medication tracking
- ✅ Appointment management
- ✅ Benefits verification

### Guardians
- ✅ Manage dependents (children/elderly/PWD)
- ✅ Book appointments
- ✅ Upload records
- ✅ View medications
- ✅ Permission controls

### Healthcare Providers
- ✅ Fast patient check-in
- ✅ Instant access to records
- ✅ NFC tracking system
- ✅ Prescription sync
- ✅ Treatment logging

## 🎯 Key Innovations

1. **One-Minute Setup** - Simple verification with MyKad/QR/NFC
2. **Emergency Mode** - Life-saving instant access to critical info
3. **Voice Assistant** - Accessible for blind/elderly users
4. **Guardian Delegation** - Secure family health management
5. **NFC Integration** - Hospital wristband tracking

## 📄 License

This prototype is created for demonstration purposes for the Smart ID Health System project.

---

*Built with ❤️ for Malaysia's healthcare future*

