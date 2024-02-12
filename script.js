let i = 0;
const x = 20;
const y = 20;
const width = 414;
const height = 736;

class Heart {
    constructor(pos_x, pos_y) {
        this.pos_x = pos_x;
        this.pos_y = pos_y;
        
    }

    writePositionConsole() {
        console.log(`x: ${this.pos_x} y: ${this.pos_y}`)
    }

    moveX(x) {
        this.pos_x += x;
    }

    moveY(y) {
        this.pos_y += y;
    }
}

function draw() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    // Очищення полотна
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Малювання об'єкта на новій позиції
    ctx.fillRect(x + i, 50, 50, 50); // Приклад малювання прямокутника
    
    // Оновлення параметрів для наступного кадру
    if (i + x < width) {
        i += 1; // Зміна позиції об'єкта
    } else {
        i = 0;
    }
    

    // Виклик функції знову для створення наступного кадру
    requestAnimationFrame(draw);
}

let heart = new Heart(20, 20);
for (let i = 0; i < 100; i++) {
    heart.writePositionConsole();
    heart.moveX(i);
    heart.moveY(i);
}

draw()