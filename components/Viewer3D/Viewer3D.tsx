import Script from "next/script";

const Viewer3D = ({ src, className }: { src: string; className?: string }) => {
  return (
    <>
      <Script
        type="module"
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
      />
      <div className={className}>
        {/* @ts-expect-error: 'model-viewer' is a custom element not recognized by TS */}
        <model-viewer
          src={src}
          alt="3D model of RoboGames battle bot"
          auto-rotate
          camera-controls
          style={{ width: "100%", height: "75vh" }}
        />
      </div>
    </>
  );
};

export default Viewer3D;
