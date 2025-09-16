// 型定義
interface User {
    name: string;
    age: number;
}

interface AppMethods {
    sayHello(): void;
    showTime(): void;
    randomColor(): void;
    calculate(): void;
}

// メインクラス
class SimpleApp implements AppMethods {
    private resultElement: HTMLElement;
    private users: User[] = [
        { name: "太郎", age: 25 },
        { name: "花子", age: 30 },
        { name: "次郎", age: 22 }
    ];

    constructor() {
        this.resultElement = document.getElementById('result')!;
        this.init();
    }

    private init(): void {
        console.log('TypeScript App が起動しました！');
        this.showMessage('アプリが正常に読み込まれました ✨');
    }

    private showMessage(message: string): void {
        this.resultElement.innerHTML = message;
    }

    // パブリックメソッド
    public sayHello(): void {
        const randomUser = this.users[Math.floor(Math.random() * this.users.length)];
        const message = `こんにちは！${randomUser.name}さん（${randomUser.age}歳）👋`;
        this.showMessage(message);
    }

    public showTime(): void {
        const now = new Date();
        const timeString = now.toLocaleString('ja-JP');
        this.showMessage(`現在時刻: ${timeString} ⏰`);
    }

    public randomColor(): void {
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.background = `linear-gradient(135deg, ${randomColor} 0%, #764ba2 100%)`;
        this.showMessage(`背景色を変更しました！ 🎨`);
    }

    public calculate(): void {
        const numbers: number[] = [10, 20, 30, 40, 50];
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        const average = sum / numbers.length;
        
        this.showMessage(`
            配列: [${numbers.join(', ')}]<br>
            合計: ${sum}<br>
            平均: ${average} 🔢
        `);
    }
}

// アプリケーションの初期化
const app = new SimpleApp();

// グローバルに公開（HTMLから呼び出すため）
(window as any).app = app;