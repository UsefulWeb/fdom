export default fn => ( ...args ) => fn.apply( null, args.reverse());