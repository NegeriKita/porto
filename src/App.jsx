// src/App.js
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_epxnwn6",
      "template_nvjlcwl",
      form.current,
      "p2Zml2-yH0XS3qLyO"
    ).then(
      (result) => {
        alert("Message sent successfully!");
      },
      (error) => {
        alert("Failed to send message, please try again.");
      }
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white font-sans">
      <header className="p-6 flex justify-between items-center shadow-lg bg-[#1c1f2a]">
        <h1 className="text-2xl font-bold">Raihan Ramadhani</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <main className="px-6 py-12 space-y-20">
        <motion.section id="about" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            Hi, I'm Raihan Ramadhani — a passionate programmer who enjoys building web and mobile applications. 
            I also explore trading during my spare time, combining logic and strategy to analyze the market. 
            My mission is to craft elegant, user-focused experiences with clean and maintainable code.
          </p>
        </motion.section>

        <motion.section id="skills" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl font-semibold mb-4">Skills</h2>
          <div className="space-y-4 max-w-xl">
            {[
              { name: "JavaScript", percent: 90 },
              { name: "React", percent: 85 },
              { name: "Node.js", percent: 80 },
              { name: "Python", percent: 75 },
              { name: "Trading Analysis", percent: 60 },
            ].map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.percent}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-[#00bcd4] h-2.5 rounded-full"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" alt="Bitcoin" className="h-16 mx-auto" />
            <img src="https://cryptologos.cc/logos/binance-coin-bnb-logo.png" alt="Binance" className="h-16 mx-auto" />
            <img src="https://cryptologos.cc/logos/ethereum-eth-logo.png" alt="Ethereum" className="h-16 mx-auto" />
            <img src="https://cryptologos.cc/logos/tether-usdt-logo.png" alt="Tether" className="h-16 mx-auto" />
          </div>
        </motion.section>

        <motion.section id="projects" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1c1f2a] border border-gray-700 p-4 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold">Web Portfolio</h3>
              <p className="mt-2">Responsive personal website showcasing my work, skills, and contact info.</p>
            </div>
            <div className="bg-[#1c1f2a] border border-gray-700 p-4 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold">Trading Bot</h3>
              <p className="mt-2">An automated trading bot using Python and technical indicators.</p>
            </div>
          </div>
        </motion.section>

        <motion.section id="contact" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4 max-w-xl">
            <input type="text" name="user_name" placeholder="Your Name" required className="w-full p-3 rounded bg-[#1c1f2a] border border-gray-600" />
            <input type="email" name="user_email" placeholder="Your Email" required className="w-full p-3 rounded bg-[#1c1f2a] border border-gray-600" />
            <textarea name="message" placeholder="Your Message" required className="w-full p-3 rounded bg-[#1c1f2a] border border-gray-600 h-40"></textarea>
            <button type="submit" className="bg-[#00bcd4] hover:bg-[#0097a7] px-6 py-3 rounded text-white font-bold">Send</button>
          </form>
        </motion.section>
      </main>

      <footer className="text-center py-6 text-gray-400 text-sm bg-[#1c1f2a]">
        &copy; 2025 Raihan Ramadhani. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
