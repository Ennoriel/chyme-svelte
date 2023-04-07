import type { InnerOption, SelectableValue } from './input.type';

export function rewriteOption<T extends SelectableValue>(option: T): InnerOption<T> {
	if (typeof option === 'object' && 'label' in option && 'value' in option) {
		return option as InnerOption<T>;
	} else {
		return { label: option, value: option } as InnerOption<T>;
	}
}

export function makeOption(str: string): { label: string; value: string } {
	return {
		label: str,
		value: str
	};
}

export function makeOptions(arr: Array<string>): Array<{ label: string; value: string }> {
	return arr.map(makeOption);
}
