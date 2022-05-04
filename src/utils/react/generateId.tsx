import { assoc } from '../js/assoc';
import { nanoid } from 'nanoid';

export const generateId = <O extends object>(obj: O) =>
	assoc('id', nanoid(10))(obj);
