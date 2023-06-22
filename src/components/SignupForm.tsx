import "tailwindcss/tailwind.css";

const SignupForm = () => {
  return (
    <div className="font-roboto flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center mt-[8.4rem]">
        <form className="mt-24">
        <div className="mb-6 text-sm">
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="     Enter Your Name"
              required
              className="m w-full px-3 py-2 bg-secondary border-[0.1rem] border-primary rounded-[1rem] focus:outline-none focus:border-primary placeholder-primary"
             
            />
          </div>

          <div className="mb-6 text-sm">
            <label htmlFor="email"></label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="     Enter Your Email"
              required
              className="w-full px-3 py-2 bg-secondary border-[0.1rem] border-primary rounded-[1rem] focus:outline-none focus:border-primary placeholder-primary"
             
            />
          </div>

          <div className="mb-6 text-sm">
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="     Enter Your Password"
              required
              className="w-full px-3 py-2 bg-secondary border-[0.1rem] border-primary rounded-[1rem]	focus:outline-none focus:border-primary placeholder-primary"
              
            />
          </div>

          <button
            type="submit"
            className="w-full bg-secondary text-primary text-base font-bold py-1 px-4 border-[0.1rem] border-primary rounded-[1rem]" 
            
          >
            Create Account
          </button>
        </form>
        <p className="text-primary text-sm py-4 ">Already Have An Account? <span className="font-bold">Login!</span></p>
      </div>


    </div>
  );
};

export default SignupForm;
