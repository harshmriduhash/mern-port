const size = 200;

export const createPulsingDot = (map) => {
    const pulsingDot = {
        width: size,
        height: size,
        data: new Uint8Array(size * size * 4),
    
        // get rendering context for the map canvas when layer is added to the map
        onAdd: function () {
            let canvas = document.createElement('canvas');
            canvas.width = this.width;
            canvas.height = this.height;
            this.context = canvas.getContext('2d');
        },
    
        // called once before every frame where the icon will be used
        render: function () {
            let duration = 1000;
            let t = (performance.now() % duration) / duration;
    
            let radius = (size / 2) * 0.3;
            let outerRadius = (size / 2) * 0.7 * t + radius;
            let context = this.context;
    
            // draw outer circle
            context.clearRect(0, 0, this.width, this.height);
            context.beginPath();
            context.arc(
                this.width / 2,
                this.height / 2,
                outerRadius,
                0,
                Math.PI * 2
            );
            context.fillStyle = 'rgba(255, 200, 200,' + (1 - t) + ')';
            context.fill();
    
            // draw inner circle
            context.beginPath();
            context.arc(
                this.width / 2,
                this.height / 2,
                radius,
                0,
                Math.PI * 2
            );
            context.fillStyle = 'rgba(255, 100, 100, 1)';
            context.strokeStyle = 'white';
            context.lineWidth = 2 + 4 * (1 - t);
            context.fill();
            context.stroke();
    
            // update this image's data with data from the canvas
            this.data = context.getImageData(
                0,
                0,
                this.width,
                this.height
            ).data;
    
            // continuously repaint the map, resulting in the smooth animation of the dot
            map.triggerRepaint();
    
            // return `true` to let the map know that the image was updated
            return true;
        }
    };

    return pulsingDot;
}