import React, {useEffect, useRef} from 'react';
import { fabric } from 'fabric';

const BardCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = new fabric.Canvas(canvasRef.current, {
            width: 800,
            height: 600,
            backgroundColor: 'white',
        });

        // Example: Add a rectangle
        const rect = new fabric.Rect({
            left: 100,
            top: 100,
            fill: 'red',
            width: 200,
            height: 100,
        });
        canvas.add(rect);

        // Example: Add a circle
        const circle = new fabric.Circle({
            left: 300,
            top: 150,
            radius: 50,
            fill: 'blue',
        });
        canvas.add(circle);

        // Example: Add a triangle
        const triangle = new fabric.Triangle({
            left: 500,
            top: 200,
            width: 100,
            height: 100,
            fill: 'green',
        });
        canvas.add(triangle);

        // Example: Add text
        const text = new fabric.Text('Customized Text', {
            left: 150,
            top: 200,
            fontSize: 40,
            fill: 'purple',
            fontFamily: 'Comic Sans MS',
            fontWeight: 'bold',
            textAlign: 'center',
        });
        canvas.add(text);

        // Example: Add image
        fabric.Image.fromURL('https://via.placeholder.com/150', function(img) {
            img.set({
                left: 350,
                top: 100,
                angle: 0,
                opacity: 0.85,
            });
            canvas.add(img);
        });

    }, []);

    // Function to save canvas state
    const saveCanvasState = () => {
        const json = canvas.ToJSON();
        
        // Save JSON to localStorage (or send it to a server)
        localStorage.setItem('canvasState', JSON.stringify(json));
        alert("Canvas state saved!");
    };

    // Function to load canvas state
    const loadCanvasState = () => {
        const savedState = localStorage.getItem('canvasState');
        if (savedState) {
            canvas.loadFromJSON(JSON.parse(savedState), () => {
                canvas.renderAll();
            });
            alert("No saved canvas state found!");
        }
    };

    //return <canvas ref={canvasRef} />;
    return (
        <div>
            <canvas ref={cancasRef} />
            <div>
                <button onClick={saveCanvasState}>Save Canvas</button>
                <button onClick={loadCanvasState}>Load Canvas</button>
            </div>
        </div>
    );
};

export default BoardCanvas;