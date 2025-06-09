class RacketWASM {
    private worker: Worker;
    private callbacks: Map<number, { resolve: Function, reject: Function }> = new Map();
    private nextId = 0;

    constructor() {
        this.worker = new Worker('worker.js', { type: 'module' });
        this.worker.onmessage = this.handleMessage.bind(this);
    }

    private handleMessage(event: MessageEvent) {
        const { id, result, error, type } = event.data;

        if (type === 'ready') {
            console.log('Racket WASM worker is ready');
            return;
        }

        const callback = this.callbacks.get(id);
        if (!callback) return;

        this.callbacks.delete(id);
        if (error) {
            callback.reject(new Error(error));
        } else {
            callback.resolve(result);
        }
    }

    async add(a: number, b: number): Promise<number> {
        return this.callWasm('add', [a, b]);
    }

    private callWasm(func: string, args: any[]): Promise<any> {
        return new Promise((resolve, reject) => {
            const id = this.nextId++;
            this.callbacks.set(id, { resolve, reject });
            this.worker.postMessage({ func, args, id });
        });
    }
}

// Usage
const racket = new RacketWASM();
racket.add(2, 3).then(result => {
    console.log('Result:', result); // Should output 5
});