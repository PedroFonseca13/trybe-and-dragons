import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  static _instance = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';

    Necromancer._instance += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._instance;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}
