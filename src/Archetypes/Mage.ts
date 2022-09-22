import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  static _instance = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';

    Mage._instance += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._instance;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}
