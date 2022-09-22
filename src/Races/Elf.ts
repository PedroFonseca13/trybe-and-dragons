import Race from './Race';

export default class Elf extends Race {
  static _instance = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 99;
    Elf._instance += 1;
  }

  static createdRacesInstances(): number {
    return Elf._instance;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
