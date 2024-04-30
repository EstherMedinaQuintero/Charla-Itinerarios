import('../PDL/p09_egg_interpreter/src/egg-repl.js')
  .then(module => {
    module.eggRepl();
  })
  .catch(error => {
    console.error('Error al cargar el módulo:', error);
  });