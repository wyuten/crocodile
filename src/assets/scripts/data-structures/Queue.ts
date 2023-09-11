type QueueItem = string|number|object|boolean

export default class Queue {
  private _elements: QueueItem[] = []
  #head = 0
  #tail = 0

  enqueue(element: QueueItem) {
    this._elements[this.#tail] = element
    this.#tail++
  }

  dequeue() {
    const item = this._elements[this.#head]
    delete this._elements[this.#head]
    this.#head++
    return item
  }

  peek() {
    return this._elements[this.#head]
  }

  empty() {
    this._elements = []
    this.#head = 0
    this.#tail = 0
  }

  get elements() {
    return this._elements.slice(this.#head)
  }

  get length() {
    return this.#tail - this.#head
  }

  get isEmpty() {
    return this.length === 0
  }
}
