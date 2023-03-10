export class User {
  #rank;

  #progress;

  constructor() {
    this.#rank = -8;
    this.#progress = 0;
  }

  get rank() {
    return this.#rank;
  }

  get progress() {
    return this.#progress;
  }

  /**
   * @param {number} rank
   */
  incProgress(rank) {
    if (rank < -8 || rank > 8 || rank === 0) {
      throw new Error();
    }

    if (this.#rank !== 8) {
      if (rank === this.#rank) {
        this.#progress += 3;
      } else if (rank === this.#rank - 1 || (rank === -1 && this.#rank === 1)) {
        this.#progress += 1;
      } else if (rank > this.#rank) {
        let difference = rank - this.#rank;
        if ((difference + this.#rank >= 0) && this.#rank < 0) {
          difference--;
        }

        this.#progress += 10 * difference * difference;
      }

      if (this.#progress >= 100) {
        const levelsToUp = Math.floor(this.#progress / 100);

        this.#rank += levelsToUp;
        if (this.#rank === 0) {
          this.#rank = 1;
        }

        this.#progress -= levelsToUp * 100;
        if (this.#rank === 8 && this.#progress > 0) {
          this.#progress = 0;
        }
      }
    }
  }
}
