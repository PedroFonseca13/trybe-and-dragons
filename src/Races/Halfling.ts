import Race from './Race';

export default class Halfling extends Race {
  static _instance = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 60;
    Halfling._instance += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._instance;
  }

  public get maxLifePoints(): number { return this._maxLifePoints; }
}
