import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';
import GuestGuard from '../guards/GuestGuard';
import Alert from '../components/Alert';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState('');
  const { user, signUp } = UserAuth();

  const handleRegister = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await signUp(email, password);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <GuestGuard>
      <Alert />
      <div className="h-screen flex justify-center items-center">
        <div className="max-w-md w-full mx-auto px-4 sm:px-0">
          <h2 className="text-xl text-center font-bold text-neutral-900 mb-4 dark:text-white">
            Register Your Account
          </h2>
          <form className="space-y-4" onSubmit={handleRegister}>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="email"
                className="text-neutral-600 font-bold dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                onChange={(event) => setEmail(event.target.value)}
                required
                placeholder="Enter your email"
                className="py-2 px-4 rounded-2xl ring-[1px] ring-gray-200 outline-none focus:ring-blue-600"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="password"
                className="text-neutral-600 font-bold dark:text-gray-300"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                onChange={(event) => setPassword(event.target.value)}
                required
                placeholder="Enter your password"
                className="py-2 px-4 rounded-2xl ring-[1px] ring-gray-200 outline-none focus:ring-blue-600"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 text-lg font-bold text-white bg-dark-blue rounded-full"
            >
              {loading ? 'Loading...' : 'Sign Up'}
            </button>
          </form>
          <p className="text-neutral-600 mt-4 dark:text-gray-300">
            Alerady have account?{' '}
            <Link to={'/login'} className="text-blue-700">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </GuestGuard>
  );
}

export default Register;
