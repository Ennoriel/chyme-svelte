export type SelectablePrimitives = string | number | boolean;

export type SelectableOption = {
	label: SelectablePrimitives;
	value: object | SelectablePrimitives;
};

export type SelectableValue = SelectableOption | SelectablePrimitives;

export type AutocompleteValue = string | number | object;

export type AutocompleteSetValue = undefined | ((v?: AutocompleteValue) => void);

export type ValueOfOption<H> = H extends { label: SelectablePrimitives; value: infer Z } ? Z : H;

export type InnerOption<H> = { label: SelectablePrimitives; value: ValueOfOption<H> };
