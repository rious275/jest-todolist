import { atom } from 'recoil';
import localStorageEffect from './localStorageEffect';

export type todosAtomTypes = Array<{
  id: number;
  todo: string;
  done: boolean;
}>;

export const todosAtom = atom<todosAtomTypes>({
  key: 'todosAtom',
  default: [],
  effects: [localStorageEffect('todos')],
});
