import SimpleFighter from './SimpleFighter';
import Energy from '../Energy';

export default interface IFighter extends SimpleFighter {
  // lifePoints: number;
  // strength: number;
  defense: number;
  energy?: Energy;
  // attack: (enemy: IFighter) => void;
  special?: (enemy: IFighter) => void;
  levelUp: () => void;
  // receiveDamage: (attackPoints: number) => number;
}
