import "tailwindcss/tailwind.css";
import GmailIcon from "../../public/images/icons/gmail.png";
import FacebookIcon from "../../public/images/icons/facebook.png";
import AppleIcon from "../../public/images/icons/apple.png";
import Image from "next/image";

const SignOptions = () => {
  const headerStyles = {
    position: "absolute",
    top: "180px",
    left: "50%",
    transform: "translateX(-50%)",
  };
  const socialsStyles = {
    position: "absolute",
    top: "225px",
    right: "55px",
  };
  const spanStyles = {
    position: "absolute",
    top: "332px",
    left: "50%",
    transform: "translateX(-50%)",
  };

  return (
    <div className="font-roboto text-primary">
      <div className="flex justify-center" style={headerStyles}>
        <p className="text-sm">
          Please Login To Your Account
        </p>
      </div>
      <div style={socialsStyles} className="flex justify-center">
        <Image
          src={GmailIcon}
          width={80}
          height={70}
          alt="GmailIcon"
          className="mr-4"
        />
        <Image
          src={FacebookIcon}
          width={80}
          height={70}
          alt="FacebookIcon"
          className="mr-4"
        />
        <Image src={AppleIcon} width={80} height={70} alt="AppleIcon" />
      </div>
      <div className="flex justify-center" style={spanStyles}>
        <span className="text-sm">or</span>
      </div>
    </div>
  );
};

export default SignOptions;