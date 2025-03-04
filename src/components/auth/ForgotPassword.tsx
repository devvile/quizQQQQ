import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import AuthCard from './ui/AuthCard';
import { useToast } from '../../contexts/ToastContext';
import AuthButton from './ui/AuthButton';
import InputField from './ui/InputField';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();
  const { resetPassword } = useAuth();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);
      await resetPassword(email);
      showToast('success', 'Success', 'Password Recovery email sent');
    } catch (err: unknown) {
      showToast('error', 'Error', 'Failed to reset password');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthCard title={'Password Recovery'}>
      <form onSubmit={handleSubmit} className="space-y-4">
      <InputField
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
        />

        <AuthButton
          type="submit"
          variant="primary"
          disabled={loading}
          fullWidth
        >
          Reset Password
        </AuthButton>
      </form>

      <div className="mt-6 flex justify-center space-x-4">
        <Link
          to="/login"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Back to Login
        </Link>
      </div>
    </AuthCard>
  );
};

export default ForgotPassword;
