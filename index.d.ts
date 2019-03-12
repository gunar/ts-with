export type With<T, K extends keyof T> = (Required<Pick<T, K>> & Exclude<T, K>)
export type Without<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
