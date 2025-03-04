import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import Divider from './ui/Divider';
import AuthButton from './ui/AuthButton';
import InputField from './ui/InputField';
import AuthCard from './ui/AuthCard';
import GoogleSignInButton from './ui/GoogleSignInButton';
import { useToast } from '../../contexts/ToastContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();
  const { logIn, googleSignIn } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);
      await logIn(email, password);
      navigate('/');
    } catch (err: unknown) {
      showToast('error', 'Error', 'Failed to create an account'); 
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleSignIn() {
    try {
      setLoading(true);
      await googleSignIn();
      navigate('/');
    } catch (err: unknown) {
      showToast('error', 'Error', 'Failed to sign in with Google'); 
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthCard title={'Log in'}>
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

        <InputField
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          feedback={false}
          placeholder="Enter your password"
        />

        <div className="flex items-center justify-between">
          <div className="text-sm">
            <Link
              to="/forgot-password"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot your password?
            </Link>
          </div>
        </div>

        <AuthButton
          type="submit"
          variant="primary"
          disabled={loading}
          fullWidth
        >
          Sign In
        </AuthButton>
      </form>

      <div className="mt-6">
        <Divider text={'Or continue with'} />
        <GoogleSignInButton onClick={handleGoogleSignIn} disabled={loading} />
      </div>

      <p className="mt-6 text-center text-sm text-gray-600">
        Need an account?{' '}
        <Link
          to="/signup"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Sign Up
        </Link>
      </p>
    </AuthCard>
  );
};

export default Login;
