const {Telegraf} = require('telegraf')

// ('Token dado por BothFather')
const bot = new Telegraf('1779149867:AAFdFiZWMIgDOy3OkjONHM1TFXFp-0Nzp_o')

// Ejecutamos una funcion (respuesta del bot hacia el comando)
// Estos comandos telegraf ya los da
bot.start((ctx) => {
    // reply recibira como parametro un String
    ctx.reply('Hola! '+ ctx.from.first_name + ' Soy Bitbububit! Tu asistente académico yo tratare de resolver todas tus preguntas con respecto al ciclo escolar');
    // ctx.reply(`Bienvenido ${ctx.from.first_name}. Has enviado un ${ctx.updateSubTypes[0]}`);
})

bot.help((ctx) => {
    // reply recibira como parametro un String
    ctx.reply('/materias: Muestra la carga de materias del semestre actual' + 
    '\n/clases: Muestra la fecha de regreso a clases' + 
    '\n/actividades: Muestra las actividades a realizar en este ciclo escolar' + 
    '\n/extra: Muestra la fecha de examenes extraordinarios' + 
    '\n/reinscripcion: Muestra el periodo de reinscripcion' +
    '\n/tutor: Muestra el tutor del grupo');
})

bot.settings((ctx) => {
    // reply recibira como parametro un String
    ctx.reply('Settings');
})

// Existen metodos para manipular al chat


// Comandos personalizados
// En dado caso de que queramos que tenga mas comandos se usa una lista
// ('Nombre del comando', Funcion)
bot.command(['materias', 'Materias', 'MATERIAS'], (ctx) => {
    ctx.reply('Las materias que llevaremos en este semestre son: ' 
    + '\n\n1.- Sistemas operativos' 
    + '\n2.- Compiladores' 
    + '\n3.- Fundamentos de Inteligencia Artificial' 
    + '\n4.- Lenguaje Ensamblador' 
    + '\n5.-Ingenieria Web' 
    + '\n6.-Microcontroladores');
})

bot.command(['clases', 'Clases', 'CLASES'], (ctx) => {
    ctx.reply('Regresamos a clases el 23 de Agosto');
})

bot.command(['actividades', 'Actividades', 'ACTIVIDADES'], (ctx) => {
    ctx.reply('09 al 15 de Agosto: REGISTRO Y CAMBIO DE CONTRASEÑA EN EL SAUA'
    + '\n 15 de agosto: PUBLICACIÓN DE HORARIOS' 
    + '\n 16 al 20 de agosto: ALTA DE UNIDADES DE APRENDIZAJE EN EL SAUA' 
    + '\n17 al 20 de agosto: VALIDACIÓN DE CARGA POR PARTE DE LOS TUTORES' 
    + '\n15 al 19 de septiembre: BAJAS DE UNIDADES DE UNIDADES DE APRENDIZAJE');
})

bot.command(['extra', 'Extra', 'EXTRA'], (ctx) => {
    ctx.reply('20 al 30 de septiembre: PRIMER PERIODO DE EXÁMENES EXTRAORDINARIOS' 
    + '\n08 al 19 de noviembre: SEGUNDO PERIODO DE EXÁMENES EXTRAORDINARIOS');
})

bot.command(['horarios', 'Horarios', 'HORARIOS'], (ctx) => {
    ctx.replyWithPhoto({source: "https://s1.1zoom.me/big3/471/Painting_Art_Back_view_Photographer_575380_3840x2400.jpg"});
})

bot.command(['reinscripcion', 'Reinscripcion', 'REINSCRIPCION'], (ctx) => {
    ctx.reply('Por el momento no hay periodo de reinscripción');
})

bot.command(['tutor', 'Tutor', 'TUTOR'], (ctx) => {
    ctx.reply('El tutor del grupo es Jorge Ortega Benitez');
})

// Cuando el usuario typea algo
// Hacemos que el bot este al pendiente de un texto
// En dado caso de que queramos que tenga mas comandos se usa una lista
// ('Texto a escuchar', Funcion)
bot.hears(['carmona', 'Carmona', 'CARMONA'], (ctx) => {
    ctx.reply('Hola! ' + ctx.from.first_name + ' en un momento te atendere, gracias por tu tiempo, suena musica de elevador ;v');
})

bot.hears(['jefe', 'Jefe', 'JEFE'], (ctx) => {
    ctx.reply('Hola! ' + ctx.from.first_name + ' el jefe de grupo es @ByCarmona117 en un momento te atenderá, gracias por tu tiempo, suena musica de elevador ;v');
})

bot.hears(['Robar', 'robar', 'ROBAR', 'desvio', 'Desvio', 'DESVIO', 'desvío', 'Desvío', 'DESVÍO'], (ctx) => {
    ctx.reply('Aqui el único que roba es el Mauricio ;v');
})

// Cuando hay un evento (Cuando el usuario typea cualquier cosa)
// ('Texto a escuchar', Funcion)
//bot.on('text', (ctx) => {
//    ctx.reply('Text message');
//})

// Cuando el usuario envia un sticker
bot.on('sticker', (ctx) => {
    ctx.reply('oh! you like stickers');
})

// Podemos capturar informacion
// mention hace referencia a la mencion de un usuario
// ('Usuario',  Funcion)
bot.mention('ByCarmona117', (ctx) => {
    ctx.reply( 'Hola! ' + ctx.from.first_name + ' en un momento te atiendo, gracias por la espera... suena música de elvador ;v');
})

// hastag es para capturar hastags
bot.hashtag('both', (ctx) => {
    ctx.reply('Hashtag');
})

// Podemos ejecutar el bot
bot.launch()