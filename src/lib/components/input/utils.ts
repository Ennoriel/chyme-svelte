import type { InnerOption, SelectableValue } from './input.type';

export function rewriteOption<T extends SelectableValue>(option: T): InnerOption<T> {
	if (option instanceof Object && 'label' in option && 'value' in option) {
		return option as InnerOption<T>;
	} else {
		return { label: option, value: option } as InnerOption<T>;
	}
}
