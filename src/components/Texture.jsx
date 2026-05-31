import texture from "../assets/noir-texture.png"

export default function Texture() {
  return (
    <>
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url(${texture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.9,
          filter: "grayscale(100%) contrast(140%)"
        }}
      />

      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, transparent 40%, rgba(0,0,0,0.85) 100%)"
        }}
      />
    </>
  )
}