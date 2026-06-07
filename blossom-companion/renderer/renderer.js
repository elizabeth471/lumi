// Blossom Companion Renderer
// Handles all UI, animations, and interactions

class BlossomCompanion {
  constructor() {
    this.config = null;
    this.currentState = 'idle';
    this.isThinking = false;
    this.thinkingSteps = [];
    this.animationSpeed = 1;
    this.character = document.getElementById('blossomCharacter');
    this.statusMessage = document.getElementById('statusMessage');
    this.thinkingIndicator = document.getElementById('thinkingIndicator');
    this.thinkingProcess = document.getElementById('thinkingProcess');
    this.thinkingSteps = document.getElementById('thinkingSteps');
    this.settingsPanel = document.getElementById('settingsPanel');

    this.init();
  }

  async init() {
    try {
      // Load configuration
      this.config = await window.electronAPI.getConfig();
      this.applyConfig();

      // Setup event listeners
      this.setupEventListeners();

      // Start idle animation
      this.setState('idle');

      // Get app version
      const version = await window.electronAPI.getAppVersion();
      console.log('Blossom Companion v' + version);
    } catch (err) {
      console.error('Failed to initialize:', err);
      this.showError('Initialization failed');
    }
  }

  applyConfig() {
    // Apply animation speed
    const root = document.documentElement;
    root.style.setProperty('--animation-speed', this.config.animation.speed);
    this.animationSpeed = this.config.animation.speed;

    // Apply colors
    if (this.config.colors) {
      Object.entries(this.config.colors).forEach(([key, value]) => {
        root.style.setProperty(`--${key}`, value);
      });
    }

    // Apply accessibility settings
    if (this.config.accessibility) {
      if (this.config.accessibility.reduceMotion) {
        document.documentElement.style.setProperty('--animation-speed', '0');
      }
      if (this.config.accessibility.highContrast) {
        document.body.style.filter = 'contrast(1.5)';
      }
    }

    // Apply window settings
    if (this.config.appearance) {
      document.getElementById('alwaysOnTopToggle').checked = this.config.appearance.alwaysOnTop;
    }
  }

  setupEventListeners() {
    // Window controls
    document.getElementById('minimizeBtn').addEventListener('click', () => {
      window.electronAPI.minimizeWindow();
    });

    document.getElementById('closeBtn').addEventListener('click', () => {
      window.electronAPI.closeWindow();
    });

    // Settings
    document.getElementById('settingsBtn').addEventListener('click', () => {
      this.toggleSettings();
    });

    document.getElementById('closeSettingsBtn').addEventListener('click', () => {
      this.toggleSettings();
    });

    // Settings controls
    document.getElementById('alwaysOnTopToggle').addEventListener('change', (e) => {
      window.electronAPI.setAlwaysOnTop(e.target.checked);
      this.config.appearance.alwaysOnTop = e.target.checked;
    });

    document.getElementById('animationSpeed').addEventListener('change', (e) => {
      this.config.animation.speed = parseFloat(e.target.value);
      this.applyConfig();
      window.electronAPI.saveConfig(this.config);
    });

    document.getElementById('opacitySlider').addEventListener('change', (e) => {
      const opacity = parseFloat(e.target.value);
      document.querySelector('.blossom-container').style.opacity = opacity;
    });

    document.getElementById('thinkingToggle').addEventListener('change', (e) => {
      this.config.animation.showThinkingProcess = e.target.checked;
      window.electronAPI.saveConfig(this.config);
    });

    // Listen for messages from main process
    window.electronAPI.onBlossonMessage((event, message) => {
      this.handleBlossomMessage(message);
    });

    window.electronAPI.onAnimationEvent((event, { type, params }) => {
      this.triggerAnimation(type, params);
    });

    // Listen for state changes
    window.electronAPI.onStateChange((event, state) => {
      this.setState(state.newState, state.message);
    });
  }

  toggleSettings() {
    this.settingsPanel.classList.toggle('active');
    this.settingsPanel.style.display = this.settingsPanel.classList.contains('active') ? 'flex' : 'none';
  }

  setState(newState, message = null) {
    // Remove previous state class
    this.character.classList.remove(this.currentState);

    // Add new state class
    this.character.classList.add(newState);
    this.currentState = newState;

    // Update status message
    if (message) {
      this.setStatus(message, newState);
    } else {
      const defaultMessages = {
        idle: 'Ready to help',
        thinking: 'Thinking...',
        processing: 'Working on that...',
        speaking: 'Speaking...',
        celebrating: 'Done!'
      };
      this.setStatus(defaultMessages[newState] || 'Ready', newState);
    }

    // Handle thinking indicator
    if (newState === 'thinking') {
      this.thinkingIndicator.classList.add('active');
      if (this.config.animation.showThinkingProcess) {
        this.showThinkingProcess();
      }
    } else {
      this.thinkingIndicator.classList.remove('active');
      this.hideThinkingProcess();
    }

    // Update app status
    const statusElement = document.querySelector('.app-status');
    if (statusElement) {
      statusElement.textContent = newState.charAt(0).toUpperCase() + newState.slice(1);
    }
  }

  setStatus(message, type = '') {
    this.statusMessage.textContent = message;
    this.statusMessage.classList.remove('thinking', 'error', 'success');
    if (type) {
      this.statusMessage.classList.add(type);
    }
  }

  showThinkingProcess() {
    this.thinkingProcess.style.display = 'block';
    this.thinkingProcess.classList.add('active');
  }

  hideThinkingProcess() {
    this.thinkingProcess.classList.remove('active');
    setTimeout(() => {
      this.thinkingProcess.style.display = 'none';
      this.clearThinkingSteps();
    }, 300);
  }

  addThinkingStep(step, isActive = false) {
    const stepDiv = document.createElement('div');
    stepDiv.className = 'thinking-step' + (isActive ? ' active' : '');
    stepDiv.textContent = step;
    this.thinkingSteps.appendChild(stepDiv);

    // Auto-scroll to bottom
    this.thinkingProcess.scrollTop = this.thinkingProcess.scrollHeight;

    // Keep only last 8 steps visible
    const steps = this.thinkingSteps.querySelectorAll('.thinking-step');
    if (steps.length > 8) {
      steps[0].remove();
    }
  }

  clearThinkingSteps() {
    this.thinkingSteps.innerHTML = '';
  }

  updateThinkingStep(stepIndex, update) {
    const steps = this.thinkingSteps.querySelectorAll('.thinking-step');
    if (steps[stepIndex]) {
      const step = steps[stepIndex];
      step.textContent = update;
      step.classList.add('active');
    }
  }

  triggerAnimation(type, params = {}) {
    switch (type) {
      case 'thinking':
        this.setState('thinking', params.message || 'Thinking...');
        if (params.steps) {
          params.steps.forEach((step, i) => {
            setTimeout(() => this.addThinkingStep(step, i === params.steps.length - 1), i * 300);
          });
        }
        break;

      case 'processing':
        this.setState('processing', params.message || 'Processing...');
        break;

      case 'speaking':
        this.setState('speaking', params.message || 'Speaking...');
        if (params.duration) {
          setTimeout(() => this.setState('idle'), params.duration);
        }
        break;

      case 'celebrating':
        this.setState('celebrating', params.message || 'Done!');
        // Run celebration twice for emphasis
        setTimeout(() => {
          this.triggerCelebrationAnimation();
          setTimeout(() => this.setState('idle'), 800);
        }, 800);
        break;

      case 'error':
        this.setStatus(params.message || 'Something went wrong', 'error');
        setTimeout(() => this.setState('idle'), 2000);
        break;

      case 'success':
        this.setState('celebrating', params.message || 'Success!');
        setTimeout(() => this.setState('idle'), 2000);
        break;

      default:
        console.warn('Unknown animation type:', type);
    }
  }

  triggerCelebrationAnimation() {
    // Add visual celebration elements (optional)
    const character = document.querySelector('.blossom-character');
    character.style.animation = 'none';
    setTimeout(() => {
      character.style.animation = '';
    }, 10);
  }

  async handleBlossomMessage(message) {
    // Handle incoming messages from Blossom OS
    console.log('Message from Blossom:', message);

    if (message.type === 'state-update') {
      this.setState(message.state, message.message);
    } else if (message.type === 'animation-trigger') {
      this.triggerAnimation(message.animationType, message.params);
    } else if (message.type === 'thinking-update') {
      this.addThinkingStep(message.step, message.isActive);
    }
  }

  showError(message) {
    this.setStatus(message, 'error');
    this.setState('idle');
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.blossomCompanion = new BlossomCompanion();
});

// Handle window close event
window.addEventListener('beforeunload', () => {
  if (window.blossomCompanion) {
    window.electronAPI.saveConfig(window.blossomCompanion.config);
  }
});
