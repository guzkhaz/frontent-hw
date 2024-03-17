import { observable, action, makeObservable } from 'mobx';

class TodoStore {
    // @ts-ignore
    @observable complete: string[] = [];
    // @ts-ignore
    @observable incomplete: string[] = [];

    constructor() {
        makeObservable(this);
    }

    @action
        // @ts-ignore
    markComplete = (todo: string) => {
        this.incomplete = this.incomplete.filter((item) => item !== todo);
        this.complete.push(todo);
    };

    @action
        // @ts-ignore
    markIncomplete = (todo: string) => {
        this.complete = this.complete.filter((item) => item !== todo);
        this.incomplete.push(todo);
    };

    @action
        // @ts-ignore
    deleteTodo = (todo: string) => {
        this.complete = this.complete.filter((item) => item !== todo);
        this.incomplete = this.incomplete.filter((item) => item !== todo);
    };
}

const todoStore = new TodoStore();
export default todoStore;