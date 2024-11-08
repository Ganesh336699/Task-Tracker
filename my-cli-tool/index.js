#!/usr/bin/env node


const args = process.argv.slice(2);

if(args.length === 0 ){

    console.log(`
        
         Usage: mycli <command> [options]
    
    Commands:
      greet <name>   Greet the specified name
      help           Show this help message
        
        
        
        
        `);

        process.exit(0);
}
const command = args[0];

switch (command) {
  case 'greet':
    const name = args[1] || 'World';
    console.log(`Hello, ${name}!`);
    break;
  case 'help':
    console.log(`
      Usage: mycli <command> [options]
      
      Commands:
        greet <name>   Greet the specified name
        help           Show this help message
    `);
    break;
  default:
    console.log(`Unknown command: ${command}`);
    console.log(`Use 'mycli help' to see the list of available commands.`);
    break;
}
