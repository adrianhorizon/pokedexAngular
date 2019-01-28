export class Pokemon {
    count: number;
    next: string;
    results: SubArray;
    constructor (
        count: number,
        next: string,
        results: SubArray
    ) {
        this.count = count;
        this.next = next;
        this.results = results
    }
}

export class SubArray {
    name: string;
    url: string;

    constructor (
        name: string,
        url: string
    ) {
        this.name = name;
        this.url = url;
    }
}