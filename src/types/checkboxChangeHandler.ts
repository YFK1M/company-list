import React from "react";

export type CheckboxChangeHandler = (
	event: React.ChangeEvent<HTMLInputElement>,
	index: number
) => void