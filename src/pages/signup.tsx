import 'tailwindcss/tailwind.css';
import SignOptions from '@/components/SignOptions';
import LoginForm from '@/components/LoginForm';
import SignUpOptions from '@/components/SignupOptions';
import SignupForm from '@/components/SignupForm';

const LoginPage = () => {
    return (
      
      <div className="bg-login-bg bg-cover bg-no-repeat bg-center min-h-screen">

     <SignUpOptions/>
     <SignupForm/>

      </div>
    );
  };

  export default LoginPage;