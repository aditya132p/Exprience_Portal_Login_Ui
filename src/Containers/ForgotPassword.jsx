import { ArrowRight, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Input from "../Components/Common/Input";
import Button from "../Components/Common/Button";
import Text from "../Components/Common/Text";
import Card from "../Components/Common/Card";

function ForgotPassword() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your register email");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div className="flex justify-center items-center min-h-screen text-center bg-gray-200 border-2">
      <Card>
        <h1 className="text-3xl font-bold mb-10">Forgot Password</h1>

        <div>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <Input
                  type="text"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full border px-2 outline-none py-2 rounded-md border-gray-200 ${error&& 'border-red-500'}`}
                />
                {error && (
                  <p className="text-red-500 text-left text-sm mt-1">{error}</p>
                )}
              </div>
              <Button
                type="submit"
                className="flex items-center justify-center  py-3 rounded-md w-full bg-black text-white hover:bg-gray-900"
              >
                Next <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          ) : (
            <div className="text-center">
              {/* <div className="mx-auto h-12 w-12 text-green-500 mb-4" /> */}
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <BadgeCheck className="mx-auto h-12 w-12 text-green-500 mb-4" />
              </motion.div>
              <Text className="text-lg font-semibold">
                Check your registered email
              </Text>
              <Text className="text-gray-600">
                We ve sent a link to reset your password.
              </Text>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}

export default ForgotPassword;
