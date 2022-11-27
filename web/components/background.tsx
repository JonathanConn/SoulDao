import Spline from '@splinetool/react-spline';

export default function SplineBackground() {
    return (
        <Spline
            scene="https://prod.spline.design/WuaW8LQC1DMY9vVz/scene.splinecode"
            style={
                {                    
                    height: '100vh',                    
                    fontSize: '50px',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }
            }
        />
    );
}
