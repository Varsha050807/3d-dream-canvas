import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SignupPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-md p-6 rounded-xl border bg-background shadow"
        >
          <h1 className="text-2xl font-bold text-center mb-4">Sign Up</h1>

          <input
            type="text"
            placeholder="Name"
            className="w-full mb-3 p-3 border rounded"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 p-3 border rounded"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-3 p-3 border rounded"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-primary text-primary-foreground py-2 rounded"
          >
            Create Account
          </motion.button>

          <p className="mt-4 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-medium hover:underline">
              Login
            </Link>
          </p>
        </motion.div>
      </main>
      <Footer />
    </>
  );
};

export default SignupPage;