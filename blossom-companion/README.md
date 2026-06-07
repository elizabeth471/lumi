# Blossom Companion — Tier 3 Desktop Assistant

An always-visible, fully-animated Blossom character that appears as a desktop companion. Shows thinking process, state transitions, and real-time updates from Blossom OS.

## Features

- **Animated States**: Idle, thinking, speaking, processing, celebrating
- **Thinking Process Display**: Shows step-by-step reasoning when solving tasks
- **Configuration-Driven UI**: All colors, animations, and messages in JSON config
- **Always On Top**: Stays visible while you work
- **Lightweight & Fast**: Minimal overhead, optimized for continuous display
- **Accessibility**: WCAG 2.1 AA compliance, reduce motion support
- **Easy Updates**: Change appearance, animations, messages via config.json

## Architecture

```
blossom-companion/
├── main.js              # Electron main process
├── preload.js           # IPC bridge (secure context isolation)
├── config.json          # All configuration (colors, animations, messages)
├── renderer/
│   ├── index.html       # UI structure
│   ├── styles.css       # All CSS animations and themes
│   └── renderer.js      # Animation logic and state management
└── assets/              # Icons and images
```

## Setup & Installation

### Prerequisites
- Node.js 16+
- npm or yarn

### Install Dependencies
```bash
cd blossom-companion
npm install
```

### Run in Development
```bash
npm run dev
```

Opens Electron window with DevTools for debugging.

### Build for Production
```bash
npm run build         # Auto-detect platform
npm run build:mac     # macOS only
npm run build:win     # Windows only
```

## Configuration

All appearance, animation, and behavior settings live in `config.json`:

### Animation Speed
```json
{
  "animation": {
    "speed": 1.5,           // 0.5 to 2.0
    "enabled": true,
    "showThinkingProcess": true
  }
}
```

### Colors
```json
{
  "colors": {
    "primary": "#5a8a50",      // Main cactus green
    "accent": "#8fbc8f",       // Lighter green
    "background": "#f5f1e8",   // Warm sand
    "text": "#2c3e2c",         // Dark green
    "thinking": "#e8d4b8",     // Warm thinking bg
    "success": "#6ba85e",      // Success state
    "error": "#c85a54"         // Error state
  }
}
```

### Custom State Messages
```json
{
  "messages": {
    "idle": ["I'm here to help.", "Ready when you are."],
    "thinking": "Thinking...",
    "processing": "Working on that...",
    "error": "Something went wrong."
  }
}
```

### Window & Appearance
```json
{
  "appearance": {
    "alwaysOnTop": true,
    "opacity": 0.95,
    "hideOnBlur": false,
    "position": "right"
  },
  "window": {
    "width": 350,
    "height": 500
  }
}
```

## State Transitions

### Idle → Thinking
Character pulses gently. Thinking indicator appears. Shows step-by-step reasoning.

```javascript
blossomCompanion.triggerAnimation('thinking', {
  message: 'Analyzing your request...',
  steps: ['Understanding intent', 'Checking knowledge', 'Formulating response']
});
```

### Thinking → Processing
Same as thinking but different visual (glow effect). Used for computational work.

```javascript
blossomCompanion.triggerAnimation('processing', {
  message: 'Running analysis...'
});
```

### Processing → Speaking
Character bounces. Used when delivering response.

```javascript
blossomCompanion.triggerAnimation('speaking', {
  message: 'Here\'s what I found...',
  duration: 3000  // Auto-return to idle
});
```

### Any State → Celebrating
Jump animation. Used for major completions.

```javascript
blossomCompanion.triggerAnimation('celebrating', {
  message: 'Task complete!'
});
```

## Testing Protocol

### Local Testing (Required Before Delivery)

#### 1. Animation Cycles (5+ per state)
```bash
npm run dev
```
In DevTools console:
```javascript
// Test each state 5 times
for (let i = 0; i < 5; i++) {
  setTimeout(() => blossomCompanion.triggerAnimation('thinking', 
    { steps: ['Step 1', 'Step 2', 'Step 3'] }), i * 3000);
}
```

#### 2. Performance Check
- Monitor CPU usage (should be <5% idle)
- Monitor memory (should be <100MB)
- Test with DevTools Performance profiler

#### 3. Accessibility Audit
```javascript
// In DevTools console:
// Check high contrast mode
// Check reduce motion mode (System Prefs → Accessibility)
// Test keyboard navigation (Tab through controls)
// Check screen reader readability
```

#### 4. Configuration Changes
Edit `config.json` while app is running:
```json
{
  "colors": {
    "primary": "#FF0000"  // Change to red
  }
}
```
File changes should hot-reload (manual refresh required).

#### 5. Cross-Platform Tests
- **macOS**: Run on Intel and Apple Silicon
- **Windows**: Run on Windows 10/11
- **Linux**: Run on Ubuntu 20.04+

#### 6. Theme Testing
- Light mode (default)
- Dark mode (system preference)
- High contrast mode
- Reduced motion mode

#### 7. Localization Readiness
Verify all user-visible strings are in `config.json` (not hardcoded):
```json
{
  "messages": {
    "idle": [...],
    "thinking": "...",
    "error": "..."
  }
}
```

#### 8. Integration Testing
- Verify IPC communication with main process
- Verify config persistence (settings survive app restart)
- Verify window position memory
- Verify always-on-top toggle works

## Communication with Blossom OS

### Receiving State Updates
```javascript
window.electronAPI.onStateChange((event, state) => {
  // state = { newState: 'thinking', message: 'Analyzing...' }
  blossomCompanion.setState(state.newState, state.message);
});
```

### Triggering Animations from Blossom OS
```javascript
window.electronAPI.onAnimationEvent((event, { type, params }) => {
  // type = 'thinking', 'speaking', 'celebrating', etc.
  // params = { steps: [...], duration: 3000, etc. }
  blossomCompanion.triggerAnimation(type, params);
});
```

### Sending Messages to Blossom OS
```javascript
window.electronAPI.sendToBlossom({
  type: 'animation-complete',
  animation: 'thinking',
  duration: 2.5
});
```

## UI/UX Updates

To change appearance without rebuilding:

1. **Edit `config.json`** with new settings
2. **Restart the app** (or implement hot-reload)
3. Changes take effect immediately

No code changes needed for:
- Colors
- Animation speeds
- Window size
- Messages
- Opacity
- Font sizes

## Troubleshooting

### App won't start
```bash
# Check Node version
node --version  # Should be 16+

# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Animations stuttering
- Reduce animation speed in settings (config.json)
- Check system performance (other apps using CPU)
- Verify GPU acceleration is enabled

### Window position not saving
- Check if config.json is writable
- Check file permissions in user home directory
- Verify app has write access to config.json

### Settings not persisting
- Verify config.json changes are valid JSON
- Check browser console for errors (DevTools)
- Ensure app closes cleanly (not forced quit)

## Performance Targets

- **CPU Usage (Idle)**: <2%
- **Memory Usage**: 80-120 MB
- **Animation FPS**: 60 FPS
- **State Change Latency**: <100ms
- **Config Load Time**: <500ms

## Accessibility Standards

- **WCAG 2.1**: AA level compliance
- **Color Contrast**: 4.5:1 minimum
- **Motion**: Respects prefers-reduced-motion
- **Keyboard**: All controls keyboard accessible
- **Screen Reader**: Semantic HTML with ARIA labels

## Future Enhancements

- [ ] Voice integration (text-to-speech for states)
- [ ] Gesture recognition (wave hand, custom animations)
- [ ] Multi-monitor support (position on specific display)
- [ ] Chat history display
- [ ] Custom thinking process visualization
- [ ] Notification system integration
- [ ] Time-based state changes (sleep mode, etc.)

## Credits

Built for Lumi — a tool for building with AI efficiently.
