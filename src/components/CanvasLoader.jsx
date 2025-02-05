import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
    const { progress } = useProgress(); // ✅ Fix: Properly call useProgress()

    return (
        <Html as="div" center style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
        }}>
            <span className="canvas-loader" />
            <p style={{ fontSize: 14, color: '#F1F1F1', fontWeight: 800, marginTop: 40 }}>
                {progress !== undefined ? `${progress.toFixed(2)}%` : `Loading...`}  {/* ✅ Fix: Ensure progress is defined */}
            </p>
        </Html>
    );
};

export default CanvasLoader;
