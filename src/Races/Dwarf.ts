import Race from './Race';

export default class Dwarf extends Race {
  static _instance = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 80;
    Dwarf._instance += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf._instance;
  }

  public get maxLifePoints(): number { return this._maxLifePoints; }
}
