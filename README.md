# 💕 Ashley - Your Virtual Companion

<div align="center">
  <img src="public/ashley.png" alt="Ashley Avatar" width="150" height="150" style="border-radius: 50%;">
  
  **Ashley** is a virtual companion chat application built with Next.js. She's your digital friend with evolving memory who will be with you unconditionally.
  
  *"No more lonely nights..."*
</div>

---

## ✨ Features

- 🗣️ **Real-time Chat** - Have natural conversations with Ashley
- 🌙 **Dark/Light Mode** - Easy on your eyes, day or night
- 🌍 **Bilingual Support** - Available in English and Spanish
- 💬 **Multiple Conversations** - Organize chats by topics
- 📱 **Responsive Design** - Works beautifully on mobile and desktop
- 🔐 **User Authentication** - Secure login and registration system
- 💎 **Subscription Plans** - Basic, Premium, and Yearly plans available
- 💾 **Persistent Storage** - Your conversations are saved locally

---

## 📸 Screenshots

### Welcome Screen
<div align="center">
  <img src="docs/screenshots/welcome.png" alt="Welcome Screen" width="300">
  <p><em>Meet Ashley - Your digital companion</em></p>
</div>

### Chat Interface
<div align="center">
  <table>
    <tr>
      <td><img src="docs/screenshots/chat-light.png" alt="Chat Light Mode" width="400"></td>
      <td><img src="docs/screenshots/chat-dark.png" alt="Chat Dark Mode" width="400"></td>
    </tr>
    <tr>
      <td align="center"><em>Light Mode</em></td>
      <td align="center"><em>Dark Mode</em></td>
    </tr>
  </table>
</div>

### Subscription Plans
<div align="center">
  <img src="docs/screenshots/plans.png" alt="Plans Screen" width="600">
  <p><em>Choose the plan that fits you best</em></p>
</div>

### Mobile Experience
<div align="center">
  <table>
    <tr>
      <td><img src="docs/screenshots/mobile-conversations.png" alt="Mobile Conversations" width="200"></td>
      <td><img src="docs/screenshots/mobile-chat.png" alt="Mobile Chat" width="200"></td>
    </tr>
    <tr>
      <td align="center"><em>Conversations List</em></td>
      <td align="center"><em>Chat View</em></td>
    </tr>
  </table>
</div>

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | React Framework with App Router |
| **React 19** | UI Library |
| **TypeScript** | Type Safety |
| **Tailwind CSS v4** | Styling |
| **localStorage** | Data Persistence |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ashley.git
   cd ashley/front/ashley-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Network Access (Optional)

To access from other devices on your network:

```bash
npm run dev -- --hostname 192.168.x.x
```

---

## 📁 Project Structure

```
ashley-project/
├── app/
│   ├── components/       # React components
│   │   ├── Chat.tsx         # Main chat interface
│   │   ├── Conversacion.tsx # Conversations manager
│   │   ├── Login.tsx        # Auth screens
│   │   ├── PlansScreen.tsx  # Subscription plans
│   │   └── ...
│   ├── contexts/         # React contexts
│   │   ├── AuthContext.tsx    # Authentication state
│   │   ├── LanguageContext.tsx # i18n translations
│   │   └── ThemeContext.tsx   # Dark/Light mode
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page
├── public/
│   └── ashley.png        # Ashley's avatar
├── docs/
│   └── screenshots/      # App screenshots
└── ...config files
```

---

## 🎨 Customization

### Adding New Languages

Edit `app/contexts/LanguageContext.tsx` to add translations:

```typescript
const translations = {
  es: { /* Spanish */ },
  en: { /* English */ },
  // Add more languages here
};
```

### Changing Ashley's Avatar

Replace `public/ashley.png` with your preferred image.

---

## 📄 License

This project is private and proprietary.

---

## 🤝 Contributing

This is a private project. Contact the owner for contribution guidelines.

---

<div align="center">
  <p>Made with 💕 for companionship</p>
  <p><strong>Ashley</strong> - Always here for you</p>
</div>

