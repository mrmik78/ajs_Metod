export default class Character {
  constructor(name, type) {
    // eslint-disable-next-line no-empty
    if (typeof name === 'string' && name.length > 2 && name.length < 10) {

    } else {
      throw new Error('Длина имени должна быть не менее 2-ух и не более 10-ти символов');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
    } else {
      throw new Error('нельзя повысить левел умершего');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('персонаж умер');
    }
  }
}
