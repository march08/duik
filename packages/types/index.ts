import * as React from 'react'

/**
 * string or react component
 */
export type AnyTag = keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>

/**
 * Get props of string or react component
 */
export type TagProps<T extends AnyTag> = React.ComponentProps<T>

/**
 * Merge props with tag props
 */
export type PropsWithTagProps<T extends AnyTag, Props> = Props & React.ComponentProps<T>

export default () => { console.log('hello')}