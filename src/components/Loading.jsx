import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
    const { progress } = useProgress();

    return (
        <Html center className="flex flex-col items-center justify-center">
            <span className="canvas-loader"></span>
            <p className="text-sm font-bold text-gray-300 mt-4">
                {progress > 0 ? `${progress.toFixed(2)}%` : 'Loading...'}
            </p>
        </Html>
    );
};

export default CanvasLoader;
