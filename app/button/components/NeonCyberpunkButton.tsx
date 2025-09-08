const NeonCyberpunkButton = () => {
  return (
    <button
      className="cursor-pointer relative px-8 py-4 bg-black border border-cyan-400 text-cyan-400 font-mono font-bold rounded-none hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:skew-x-2"
      style={{
        boxShadow: "0 0 20px rgba(34, 211, 238, 0.5)",
        textShadow: "0 0 10px rgba(34, 211, 238, 0.8)",
      }}
    >
      &gt; Neon Cyberpunk Button
    </button>
  );
};

export default NeonCyberpunkButton;
