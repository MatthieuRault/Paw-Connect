export default function Association() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="hero h-96 mt-8 mb-8 w-11/12 align-middle"
        style={{
          backgroundImage: 'url(/chien.webp)',
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="relative  p-8 rounded-lg">
            <h1 className="text-center text-5xl mt-8 mb-8">Les associations</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
