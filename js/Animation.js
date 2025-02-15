document.addEventListener('DOMContentLoaded', () => {
    const background = document.createElement('div');
    background.classList.add('background');
    document.body.appendChild(background);

    const canvas = document.createElement('canvas');
    background.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    const nodes = [];
    const nodeCount = 100;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();

    class Node {
        constructor(x, y, size, speedX, speedY) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.speedX = speedX;
            this.speedY = speedY;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = 'white';
            ctx.fill();
        }
    }

    function initNodes() {
        for (let i = 0; i < nodeCount; i++) {
            const size = Math.random() * 3 + 1;
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const speedX = (Math.random() - 0.5) * 1;
            const speedY = (Math.random() - 0.5) * 1;
            nodes.push(new Node(x, y, size, speedX, speedY));
        }
    }

    function drawLines() {
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }
    }

    function animateNodes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        nodes.forEach(node => {
            node.update();
            node.draw();
        });
        drawLines();
        requestAnimationFrame(animateNodes);
    }

    window.addEventListener('resize', () => {
        resizeCanvas();
        nodes.length = 0;
        initNodes();
    });

    initNodes();
    animateNodes();
});