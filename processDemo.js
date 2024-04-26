
//argv good for command line arguments
console.log(process.argv);
console.log(process.argv[2]);


//process.env good for environment variables
console.log(process.env);
console.log(process.env.computername);
console.log(process.env.username);

//pid
console.log(process.pid);

//cwd current working directory
console.log(process.cwd());


//exit
// process.exit(1);
//process.exit(0);
process.on('exit', (code) => {
    console.log('Process exited with code:', code);
});

//title
console.log(process.title);

//memory usage
console.log(process.memoryUsage());

//uptime
console.log(process.uptime());


