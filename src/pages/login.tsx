import 'tailwindcss/tailwind.css';
import SignOptions from '@/components/SignOptions';
import LoginForm from '@/components/LoginForm';

const LoginPage = () => {
    return (
      
      <div className="bg-login-bg bg-cover bg-no-repeat bg-center min-h-screen">

     <SignOptions/>
     <LoginForm/>

      </div>
    );
  };

  export default LoginPage;