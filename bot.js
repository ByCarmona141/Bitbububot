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
    ctx.reply('\nActividades: Muestra las actividades a realizar en este ciclo escolar' + 
    '\nClases: Muestra la fecha de regreso a clases' + 
    '\nExtras: Muestra la fecha de examenes extraordinarios' + 
    '\nHorarios: Muestra un menu con los horarios' + 
    '\nMaterias: Muestra la carga de materias del semestre actual' + 
    '\nReinscripcion: Muestra el periodo de reinscripcion' +
    '\nTutor: Muestra el tutor del grupo');
})

bot.settings((ctx) => {
    // reply recibira como parametro un String
    ctx.reply('Settings');
})

// Menus del bot
bot.command(['Menu', 'menu', 'MENU'], (ctx) => {
    ctx.reply('<b>' + 'Elige una opcion' + '</b>', 
    {
        parse_mode: "HTML", 
        reply_markup: {
            inline_keyboard: [
                [{text: "Actividades", callback_data: "actividades"}, {text: "Clases", callback_data: "clases"}],
                [{text: "Extras", callback_data: "extras"}, {text: "Horarios", callback_data: "horarios"}],
                [{text: "Materias", callback_data: "materias"}, {text: "Reinscripcion", callback_data: "reinscripcion"}],
                [{text: "Tutor", callback_data: "tutor"}]
            ]
        }
    });
})

// Acciones del bot
bot.action('actividades', (ctx) => {
    ctx.reply('<b>' + '09 al 15 de Agosto:' + '</b>' + ' REGISTRO Y CAMBIO DE CONTRASEÑA EN EL SAUA'
    + '\n\n' + '<b>' + ' 15 de agosto:' + '</b>' + ' PUBLICACIÓN DE HORARIOS' 
    + '\n\n' + '<b>' + ' 16 al 20 de agosto:' + '</b>' + ' ALTA DE UNIDADES DE APRENDIZAJE EN EL SAUA' 
    + '\n\n' + '<b>' + '17 al 20 de agosto:' + '</b>' + ' VALIDACIÓN DE CARGA POR PARTE DE LOS TUTORES' 
    + '\n\n' + '<b>' + '15 al 19 de septiembre:' + '</b>' + ' BAJAS DE UNIDADES DE UNIDADES DE APRENDIZAJE', {parse_mode: "HTML"});
})

bot.action('clases', (ctx) => {
    ctx.reply('Regresamos a clases el ' + '<b>' + '23 de Agosto' + '</b>', {parse_mode: "HTML"});
})

bot.action('extras', (ctx) => {
    ctx.reply('<b>' + '20 al 30 de septiembre:' + '</b>' + ' PRIMER PERIODO DE EXÁMENES EXTRAORDINARIOS' 
    + '\n\n' + '<b>' + '08 al 19 de noviembre:' + '</b>' + ' SEGUNDO PERIODO DE EXÁMENES EXTRAORDINARIOS', {parse_mode: "HTML"});
})

bot.action('horarios', (ctx) => {
    ctx.deleteMessage();
    ctx.reply('<b>' + 'Elige un horario' + '</b>', 
    {
        parse_mode: "HTML",
        reply_markup: {
            inline_keyboard: [
                [{text: "101", callback_data: "101"}, {text: "102", callback_data: "102"}, {text: "201", callback_data: "201"}, {text: "202", callback_data: "202"}],
                [{text: "301", callback_data: "301"}, {text: "302", callback_data: "302"}, {text: "401", callback_data: "401"}, {text: "402", callback_data: "402"}],
                [{text: "501", callback_data: "501"}, {text: "502", callback_data: "502"}, {text: "601", callback_data: "601"}, {text: "602", callback_data: "602"}],
                [{text: "701", callback_data: "701"}, {text: "702", callback_data: "702"}, {text: "801", callback_data: "801"}, {text: "802", callback_data: "802"}],
                [{text: "901", callback_data: "901"}, {text: "902", callback_data: "902"}],
                [{text: "Todos", callback_data: "todos"}]
            ]
        }
    });
})

bot.action('materias', (ctx) => {
    ctx.reply('Las materias que llevaremos en este semestre son: ' 
    + '\n\n1.- Sistemas operativos' 
    + '\n2.- Compiladores' 
    + '\n3.- Fundamentos de Inteligencia Artificial' 
    + '\n4.- Lenguaje Ensamblador' 
    + '\n5.-Ingenieria Web' 
    + '\n6.-Microcontroladores');
})

bot.action('reinscripcion', (ctx) => {
    ctx.reply('Por el momento no hay periodo de reinscripción');
})

bot.action('tutor', (ctx) => {
    ctx.reply('El tutor del grupo es ' + '<b>' + 'Jorge Ortega Benitez' + '</b>', {parse_mode: "HTML"});
})

// Acciones de los horarios
bot.action('101', (ctx) => {
    ctx.replyWithChatAction('upload_photo');
    ctx.reply("101");
})

bot.action('102', (ctx) => {
    ctx.replyWithChatAction('upload_photo');
    ctx.reply("102");
})

bot.action('201', (ctx) => {
    ctx.replyWithChatAction('upload_photo');
    ctx.reply("201");
})

bot.action('202', (ctx) => {
    ctx.replyWithChatAction('upload_photo');
    ctx.reply("202");
})

bot.action('301', (ctx) => {
    ctx.replyWithChatAction('upload_photo');
    ctx.reply("301");
})

bot.action('302', (ctx) => {
    ctx.replyWithChatAction('upload_photo');
    ctx.reply("302");
})

bot.action('401', (ctx) => {
    ctx.replyWithChatAction('upload_photo');
    ctx.reply("401");
})

bot.action('402', (ctx) => {
    ctx.replyWithChatAction('upload_photo');
    ctx.reply("402");
})

bot.action('501', (ctx) => {
    ctx.replyWithChatAction('upload_photo');
    ctx.reply("501");
})

bot.action('502', (ctx) => {
    ctx.replyWithChatAction('upload_photo');
    ctx.reply("502");
})

bot.action('601', (ctx) => {
    ctx.replyWithChatAction('upload_photo');
    ctx.reply("601");
})

bot.action('602', (ctx) => {
    ctx.replyWithChatAction('upload_photo');
    ctx.reply("602");
})

bot.action('701', (ctx) => {
    ctx.replyWithChatAction('upload_photo');
    ctx.reply("701");
})

bot.action('702', (ctx) => {
    ctx.replyWithChatAction('upload_photo');
    ctx.reply("702");
})

bot.action('801', (ctx) => {
    ctx.replyWithChatAction('upload_photo');
    ctx.reply("801");
})

bot.action('802', (ctx) => {
    ctx.replyWithChatAction('upload_photo');
    ctx.reply("802");
})

bot.action('901', (ctx) => {
    ctx.replyWithChatAction('upload_photo');
    ctx.reply("901");
})

bot.action('902', (ctx) => {
    ctx.replyWithChatAction('upload_photo');
    ctx.reply("902");
})

bot.action('todos', (ctx) => {
    ctx.replyWithChatAction('upload_photo');
    ctx.reply("Todos");
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