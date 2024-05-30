const args = process.argv.slice(2);
console.log("args:",args);

const params = args.reduce((acc, arg) => {
    const [key, value] = arg.split('=');
    acc[key] = value;
    return acc;
}, {});
console.log("params:",params);

const { a, b } = params;
console.log("name:",a);   
console.log("age:",b);