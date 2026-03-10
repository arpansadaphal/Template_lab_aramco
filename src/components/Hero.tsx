export default function Hero() {
  return (
    <section className="h-screen relative flex items-center justify-center">

      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover"
      >
        <source src="/hero.mp4" />
      </video>

      <div className="relative text-center text-white">

        <h1 className="text-6xl font-bold">
          Advanced Polymer Solutions
        </h1>

        <p className="mt-6 text-xl">
          Engineering the materials shaping tomorrow.
        </p>

        <button className="mt-8 px-8 py-3 bg-white text-black">
          Explore Products
        </button>

      </div>

    </section>
  )
}