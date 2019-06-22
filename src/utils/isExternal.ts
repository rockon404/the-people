const isExternal = (s: string): boolean => typeof s === 'string' && ['://', 'mailto:'].some(match => s.includes(match));

export default isExternal;
