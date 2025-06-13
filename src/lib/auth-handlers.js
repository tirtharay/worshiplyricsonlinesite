// Backend authentication handlers for the landing page
// Updated to use your VPS backend API

// Utility functions for UI feedback
function showLoading(button, originalText) {
  if (!button) return;
  button.disabled = true;
  button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
  button.dataset.originalText = originalText || button.textContent;
}

function hideLoading(button) {
  if (!button) return;
  button.disabled = false;
  button.innerHTML = button.dataset.originalText || 'Submit';
}

function showToast(message, type = 'info') {
  console.log(`${type.toUpperCase()}: ${message}`);
  
  // Create toast element
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <div class="toast-content">
      <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
      <span>${message}</span>
    </div>
  `;
  
  // Add toast styles if not already present
  if (!document.getElementById('toast-styles')) {
    const style = document.createElement('style');
    style.id = 'toast-styles';
    style.textContent = `
      .toast {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 12px 16px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
      }
      .toast-success { background: #10b981; }
      .toast-error { background: #ef4444; }
      .toast-warning { background: #f59e0b; }
      .toast-info { background: #3b82f6; }
      .toast.show {
        opacity: 1;
        transform: translateX(0);
      }
      .toast-content {
        display: flex;
        align-items: center;
        gap: 8px;
      }
    `;
    document.head.appendChild(style);
  }
  
  document.body.appendChild(toast);
  
  // Show toast
  setTimeout(() => toast.classList.add('show'), 100);
  
  // Remove toast after 4 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 4000);
}

// Backend API service for authentication
const BackendAuthService = {
  apiUrl: 'http://worshiplyrics.online:3001/api/auth',

  async signIn(email, password) {
    try {
      console.log('🔐 Backend: Attempting sign in for:', email);
      
      const response = await fetch(`${this.apiUrl}/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Network error' }));
        throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('✅ Backend: Sign in successful');
      
      // Store the token
      if (data.data?.session?.access_token) {
        localStorage.setItem('access_token', data.data.session.access_token);
        console.log('💾 Token stored in localStorage');
      }

      return { success: true, data };
    } catch (error) {
      console.error('❌ Backend: Sign in error:', error);
      
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        return { 
          success: false, 
          error: `Cannot connect to backend server. Please ensure the backend is running.` 
        };
      }
      
      return { success: false, error: error.message };
    }
  },

  async signUp(email, password, fullName, churchName, country) {
    try {
      console.log('📝 Backend: Attempting sign up for:', email);
      
      const response = await fetch(`${this.apiUrl}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email, 
          password, 
          fullName, 
          churchName: churchName || '', 
          country: country || '' 
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Network error' }));
        throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('✅ Backend: Sign up successful');
      
      // Store the token
      if (data.data?.session?.access_token) {
        localStorage.setItem('access_token', data.data.session.access_token);
        console.log('💾 Token stored in localStorage');
      }

      return { success: true, data };
    } catch (error) {
      console.error('❌ Backend: Sign up error:', error);
      
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        return { 
          success: false, 
          error: `Cannot connect to backend server. Please ensure the backend is running.` 
        };
      }
      
      return { success: false, error: error.message };
    }
  },

  async resetPassword(email) {
    try {
      console.log('🔄 Backend: Attempting password reset for:', email);
      
      const response = await fetch(`${this.apiUrl}/reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Network error' }));
        throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('✅ Backend: Password reset email sent');
      return { success: true, data };
    } catch (error) {
      console.error('❌ Backend: Reset password error:', error);
      return { success: false, error: error.message };
    }
  }
};

// Export functions to match your existing interface
export const signIn = async (email, password) => {
  return await BackendAuthService.signIn(email, password);
};

export const signUp = async (email, password, fullName, churchName, country) => {
  return await BackendAuthService.signUp(email, password, fullName, churchName, country);
};

export const resetPassword = async (email) => {
  return await BackendAuthService.resetPassword(email);
};

export const getUser = async () => {
  try {
    const token = localStorage.getItem('access_token');
    if (!token) {
      return { success: false, error: 'No authentication token found' };
    }

    const response = await fetch(`${BackendAuthService.apiUrl}/user`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        localStorage.removeItem('access_token');
        return { success: false, error: 'Authentication required' };
      }
      
      const errorData = await response.json().catch(() => ({ error: 'Network error' }));
      throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('❌ Get user error:', error);
    return { success: false, error: error.message };
  }
};

export const signOut = async () => {
  try {
    console.log('👋 Attempting sign out');
    
    localStorage.removeItem('access_token');
    
    const response = await fetch(`${BackendAuthService.apiUrl}/signout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json().catch(() => ({ success: true }));
    console.log('✅ Sign out successful');
    return { success: true };
  } catch (error) {
    console.error('❌ Sign out error:', error);
    return { success: true }; // Always succeed for logout
  }
};

// Validate invitation token (placeholder implementation)
export const validateInvitation = async (token) => {
  try {
    // This would typically call your backend API to validate the token
    // For now, we'll simulate the validation
    if (!token || token.length < 10) {
      throw new Error('Invalid invitation token');
    }
    
    console.log('✅ Invitation token validated');
    return { success: true, data: { valid: true }, error: null };
  } catch (error) {
    console.error('❌ Validate invitation failed:', error);
    return { success: false, data: null, error: error.message };
  }
};

// Handle sign in form submission
async function handleSignIn(event) {
  event.preventDefault();
  
  const form = event.target;
  const email = form.querySelector('input[type="email"]').value;
  const password = form.querySelector('input[type="password"]').value;
  const submitButton = form.querySelector('button[type="submit"]');
  
  if (!email || !password) {
    showToast('Please enter both email and password', 'error');
    return;
  }
  
  const originalText = submitButton.textContent;
  showLoading(submitButton, originalText);
  
  try {
    const result = await signIn(email, password);
    
    if (result.success) {
      showToast('Successfully signed in! Redirecting...', 'success');
      setTimeout(() => {
        window.location.href = '/app/';
      }, 1500);
    } else {
      let errorMessage = result.error;
      
      // Provide user-friendly error messages
      if (result.error.includes('Invalid login credentials')) {
        errorMessage = 'Invalid email or password. Please check your credentials.';
      } else if (result.error.includes('Cannot connect to backend')) {
        errorMessage = 'Unable to connect to the server. Please try again later.';
      }
      
      showToast(errorMessage, 'error');
    }
  } catch (error) {
    showToast('An unexpected error occurred. Please try again.', 'error');
    console.error('Sign in error:', error);
  } finally {
    hideLoading(submitButton);
  }
}

// Handle sign up form submission
async function handleSignUp(event) {
  event.preventDefault();
  
  const form = event.target;
  const fullName = form.querySelector('input[placeholder*="name"], input[name="name"], input[name="fullName"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const password = form.querySelector('input[type="password"]').value;
  const churchName = form.querySelector('input[placeholder*="church"], input[name="church"]')?.value || '';
  const country = form.querySelector('select[name="country"], input[name="country"]')?.value || '';
  const submitButton = form.querySelector('button[type="submit"]');
  
  if (!fullName || !email || !password) {
    showToast('Please fill in all required fields', 'error');
    return;
  }
  
  if (password.length < 6) {
    showToast('Password must be at least 6 characters long', 'error');
    return;
  }
  
  const originalText = submitButton.textContent;
  showLoading(submitButton, originalText);
  
  try {
    const result = await signUp(email, password, fullName, churchName, country);
    
    if (result.success) {
      showToast('Account created successfully! Redirecting to app...', 'success');
      // Reset form
      form.reset();
      // Close modal if it exists
      closeModal();
      // Redirect to app after successful registration
      setTimeout(() => {
        window.location.href = '/app/';
      }, 1500);
    } else {
      let errorMessage = result.error;
      
      if (result.error.includes('already exists')) {
        errorMessage = 'An account with this email already exists. Try signing in instead.';
      } else if (result.error.includes('Password')) {
        errorMessage = 'Password must be at least 6 characters long.';
      } else if (result.error.includes('Invalid email')) {
        errorMessage = 'Please enter a valid email address.';
      } else if (result.error.includes('Cannot connect to backend')) {
        errorMessage = 'Unable to connect to the server. Please try again later.';
      }
      
      showToast(errorMessage, 'error');
    }
  } catch (error) {
    showToast('An unexpected error occurred. Please try again.', 'error');
    console.error('Sign up error:', error);
  } finally {
    hideLoading(submitButton);
  }
}

// Handle forgot password form submission
async function handleForgotPassword(event) {
  event.preventDefault();
  
  const form = event.target;
  const email = form.querySelector('input[type="email"]').value;
  const submitButton = form.querySelector('button[type="submit"]');
  
  if (!email) {
    showToast('Please enter your email address', 'error');
    return;
  }
  
  const originalText = submitButton.textContent;
  showLoading(submitButton, originalText);
  
  try {
    const result = await resetPassword(email);
    
    if (result.success) {
      showToast('Password reset instructions sent! Check your email.', 'success');
      closeModal();
    } else {
      showToast(result.error || 'Failed to send reset email. Please try again.', 'error');
    }
  } catch (error) {
    showToast('An unexpected error occurred. Please try again.', 'error');
    console.error('Reset password error:', error);
  } finally {
    hideLoading(submitButton);
  }
}

// Handle invitation link processing
function handleInvitationLink() {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');
  
  if (token && token.length > 5) {
    showToast('Processing invitation...', 'info');
    setTimeout(() => {
      window.location.href = `/app/auth?token=${token}`;
    }, 1000);
  }
}

// Helper function to close modals
function closeModal() {
  const modals = document.querySelectorAll('.modal, .popup, [class*="modal"], [id*="modal"]');
  modals.forEach(modal => {
    modal.style.display = 'none';
    modal.classList.remove('active', 'show', 'open');
  });
  
  // Also try to close Bootstrap modals if present
  if (typeof window.bootstrap !== 'undefined') {
    const openModals = document.querySelectorAll('.modal.show');
    openModals.forEach(modal => {
      const modalInstance = window.bootstrap.Modal.getInstance(modal);
      if (modalInstance) {
        modalInstance.hide();
      }
    });
  }
}

// Initialize authentication handlers when DOM is loaded
function initializeAuthHandlers() {
  console.log('🚀 Initializing authentication handlers...');
  
  // Handle invitation links
  handleInvitationLink();
  
  // Attach form handlers
  const signinForms = document.querySelectorAll('#signin-form, .signin-form, form[data-auth="signin"]');
  signinForms.forEach(form => {
    form.addEventListener('submit', handleSignIn);
    console.log('✅ Sign in form handler attached');
  });
  
  const signupForms = document.querySelectorAll('#signup-form, .signup-form, form[data-auth="signup"]');
  signupForms.forEach(form => {
    form.addEventListener('submit', handleSignUp);
    console.log('✅ Sign up form handler attached');
  });
  
  const forgotPasswordForms = document.querySelectorAll('#forgot-password-form, .forgot-password-form, form[data-auth="forgot"]');
  forgotPasswordForms.forEach(form => {
    form.addEventListener('submit', handleForgotPassword);
    console.log('✅ Forgot password form handler attached');
  });
  
  // Check if user is already authenticated
  const token = localStorage.getItem('access_token');
  if (token) {
    console.log('👤 User token found in localStorage');
    // Optionally redirect to app or show different UI
  }
  
  console.log('✅ Authentication handlers initialized');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeAuthHandlers);
} else {
  initializeAuthHandlers();
}

// Make functions globally available for inline event handlers
window.handleSignIn = handleSignIn;
window.handleSignUp = handleSignUp;
window.handleForgotPassword = handleForgotPassword;
window.showToast = showToast;
window.closeModal = closeModal;
window.BackendAuthService = BackendAuthService;

// Export the showToast function to match your existing interface
export { showToast };
