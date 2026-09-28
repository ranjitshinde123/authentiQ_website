import React, { useState, useEffect } from 'react';
import { X, UserCheck, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';

export const AccountModal: React.FC = () => {
  const {
    userAccount,
    isLoginModalOpen,
    closeLoginModal,
    saveAccountStep1,
    saveAccountComplete,
    logout
  } = useAuth();

  const { showToast } = useCart();

  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const [name, setName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  useEffect(() => {
    if (userAccount) {
      setEmail(userAccount.email || '');
      setMobile(userAccount.mobile || '');
      if (userAccount.address) {
        setName(userAccount.address.name || '');
        setStreet(userAccount.address.street || '');
        setCity(userAccount.address.city || '');
        setState(userAccount.address.state || '');
        setZip(userAccount.address.zip || '');
      }
    }
  }, [userAccount]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isLoginModalOpen) {
        closeLoginModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLoginModalOpen, closeLoginModal]);

  if (!isLoginModalOpen) return null;

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !mobile.trim()) {
      showToast('Please enter both email and mobile number.');
      return;
    }
    saveAccountStep1(email.trim(), mobile.trim());
    setStep(2);
  };

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !street.trim() || !city.trim() || !state.trim() || !zip.trim()) {
      showToast('Please fill in all address details.');
      return;
    }

    saveAccountComplete({
      name: name.trim(),
      street: street.trim(),
      city: city.trim(),
      state: state.trim(),
      zip: zip.trim()
    });

    showToast(`Account saved successfully for ${name}!`);
    closeLoginModal();
    setStep(1);
  };

  const handleLogout = () => {
    logout();
    setEmail('');
    setMobile('');
    setName('');
    setStreet('');
    setCity('');
    setState('');
    setZip('');
    setStep(1);
    showToast('Logged out successfully.');
    closeLoginModal();
  };

  return (
    <div className="modal active" onClick={closeLoginModal}>
      <div
        className="modal-content login-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={closeLoginModal} aria-label="Close modal">
          <X size={20} />
        </button>

        {userAccount?.address ? (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  padding: '1rem',
                  borderRadius: '50%',
                  background: 'rgba(230, 57, 70, 0.1)',
                  color: 'var(--accent-red)',
                  marginBottom: '1rem'
                }}
              >
                <UserCheck size={36} />
              </div>
              <h2 style={{ fontFamily: 'var(--font-heading)' }}>
                Welcome, {userAccount.address.name}!
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Your authentiQ profile and delivery address are saved.
              </p>
            </div>

            <div
              style={{
                background: 'rgba(14, 165, 233, 0.04)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '1.2rem',
                marginBottom: '1.5rem',
                fontSize: '0.9rem'
              }}
            >
              <p style={{ marginBottom: '0.4rem' }}><strong>Email:</strong> {userAccount.email}</p>
              <p style={{ marginBottom: '0.4rem' }}><strong>Mobile:</strong> {userAccount.mobile}</p>
              <p style={{ marginBottom: '0.4rem' }}>
                <strong>Shipping Address:</strong><br />
                {userAccount.address.street}, {userAccount.address.city}, {userAccount.address.state} - {userAccount.address.zip}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.8rem' }}>
              <button
                className="btn-secondary"
                style={{ flex: 1 }}
                onClick={() => setStep(1)}
              >
                Edit Details
              </button>
              <button
                className="btn-primary"
                style={{ flex: 1, background: '#64748b' }}
                onClick={handleLogout}
              >
                <LogOut size={16} /> Log Out
              </button>
            </div>
          </div>
        ) : step === 1 ? (
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', marginBottom: '0.5rem', textAlign: 'center' }}>
              Welcome to authentiQ
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', textAlign: 'center', marginBottom: '1.5rem' }}>
              Enter your email and mobile number to verify your account.
            </p>

            <form onSubmit={handleStep1Submit}>
              <div className="form-group">
                <label htmlFor="loginEmail">Email Address</label>
                <input
                  type="email"
                  id="loginEmail"
                  placeholder="e.g. alex@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="loginMobile">Mobile Number</label>
                <input
                  type="tel"
                  id="loginMobile"
                  placeholder="e.g. +91 98765 43210"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn-primary login-btn">
                Continue to Delivery Address
              </button>
            </form>
          </div>
        ) : (
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', marginBottom: '0.5rem', textAlign: 'center' }}>
              Shipping Address
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', textAlign: 'center', marginBottom: '1.5rem' }}>
              Please provide your delivery address for orders.
            </p>

            <form onSubmit={handleStep2Submit}>
              <div className="form-group">
                <label htmlFor="shippingName">Full Name</label>
                <input
                  type="text"
                  id="shippingName"
                  placeholder="e.g. Alex Johnson"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="shippingStreet">Street Address</label>
                <input
                  type="text"
                  id="shippingStreet"
                  placeholder="e.g. Apt 4B, Balewadi High Street"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  required
                />
              </div>
              <div className="form-grid-2">
                <div className="form-group">
                  <label htmlFor="shippingCity">City</label>
                  <input
                    type="text"
                    id="shippingCity"
                    placeholder="Pune"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="shippingState">State</label>
                  <input
                    type="text"
                    id="shippingState"
                    placeholder="Maharashtra"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="shippingZip">ZIP / PIN Code</label>
                <input
                  type="text"
                  id="shippingZip"
                  placeholder="411045"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  required
                />
              </div>
              <div style={{ display: 'flex', gap: '0.8rem', marginTop: '1rem' }}>
                <button
                  type="button"
                  className="btn-secondary"
                  style={{ flex: '0 0 auto' }}
                  onClick={() => setStep(1)}
                >
                  Back
                </button>
                <button type="submit" className="btn-primary login-btn" style={{ marginTop: 0 }}>
                  Save & Complete Account
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
