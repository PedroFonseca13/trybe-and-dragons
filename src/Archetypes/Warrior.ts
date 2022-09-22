import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  static _instance = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';

    Warrior._instance += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._instance;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}
