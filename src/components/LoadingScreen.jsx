export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center 
                    bg-[rgb(var(--background))] text-[rgb(var(--copy-primary))] 
                    transition-colors duration-300 z-[9999]">
      <img
        src="/Martino-GameDB.png"
        alt="Logo"
        className="w-24 h-24 animate-spin-slow drop-shadow-[0_0_10px_rgb(var(--cta))]"
      />
      <p className="mt-4 text-lg font-semibold">Loading...</p>
    </div>
  )
}
