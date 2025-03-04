import React, { useState, useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import AuthCard from './ui/AuthCard';
import GoogleSignInButton from './ui/GoogleSignInButton';
import InputField from './ui/InputField';
import AuthButton from './ui/AuthButton';
import Divider from './ui/Divider';
import { useToast } from '../../contexts/ToastContext';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { signUp, googleSignIn } = useAuth();
  const {showToast} = useToast();
  const navigate = useNavigate();


  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (password !== confirmPassword) {
      showToast('warn', 'Warning', 'Passwords do not match'); 
      return;
    }

    try {
      setLoading(true);
      await signUp(email, password);
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
      setError('');
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
    <AuthCard title={'Create Account'}>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
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
          feedback={true}
          placeholder="Enter your password"
        />

        <InputField
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          feedback={false}
          placeholder="Confirm your password"
        />

        <AuthButton
          type="submit"
          variant="primary"
          disabled={loading}
          fullWidth
        >
          Sign Up
        </AuthButton>
      </form>

      <div className="mt-6">
        <Divider text={
          "Or continue with"
        }/>
        <GoogleSignInButton onClick={handleGoogleSignIn} disabled={loading} />
      </div>

      <p className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{' '}
        <Link
          to="/login"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Log In
        </Link>
      </p>
    </AuthCard>
  );
};

export default SignUp;
