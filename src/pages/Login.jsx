import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';
import GuestGuard from '../guards/GuestGuard';
import Alert from '../components/Alert';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { user, signIn } = UserAuth();

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await signIn(email, password);
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
            Login to Your Account
          </h2>
          <form className="space-y-4" onSubmit={handleLogin}>
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
                value={email}
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
                value={password}
                required
                placeholder="Enter your password"
                className="py-2 px-4 rounded-2xl ring-[1px] ring-gray-200 outline-none focus:ring-blue-600 "
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 text-lg font-bold text-white bg-dark-blue rounded-full"
            >
              {loading ? 'Loading...' : 'Sign In'}
            </button>
          </form>
          <p className="text-neutral-600 mt-4 dark:text-gray-300">
            Don`t have account ?{' '}
            <Link to={'/register'} className="text-blue-700">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </GuestGuard>
  );
}

export default Login;
