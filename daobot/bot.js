const VkBot  = require('node-vk-bot-api')
const Markup = require('node-vk-bot-api/lib/markup')

const bot = new VkBot('0598285c6ae8d9a74f0b626dbb0e3d9cc06196801898289b80d8502a7b6e95bbb5cc6dff829296b340d22')


// Завершение диалога
const endDialog = Markup.keyboard([
  Markup.button('Благодарю, Захир!', 'positive')
]).oneTime()


// Начать
bot.command('Начать', (ctx) => {
  ctx.reply('Приветствую тебя путник, мнея зовут Захир, я хранитель знаний группы "Нагваль дао" во Вконтакте. Что тебя интересует?',
  null,
  Markup.keyboard([
    [
      Markup.button('С чего начать?', 'primary')
    ],
    [
      Markup.button('Актуальная практика', 'primary')
    ]
  ]).oneTime()
  )
})

// Захир
bot.command('Захир', (ctx) => {
  ctx.reply('Приветствую тебя Воин, что тебя интересует?',
  null,
  Markup.keyboard([
    [
      Markup.button('С чего начать?', 'primary')
    ],
    [
      Markup.button('Актуальная практика', 'primary')
    ]
  ]).oneTime()
  )
})

// С чего начать
bot.command('С чего начать', (ctx) => {
  ctx.reply('Я рекомендую тебе изучить нашу методичку "Новое Начало". В ней описана наша философия и фундаментальные практики. Усердно занимаясь по ней, ты станешь сильным Воином и подготовишься к будующим великим свершениям и прорывам!',
  [
    'doc-149932889_513948567',
    'doc-149932889_513948490'
  ],
  endDialog
  )
})

// Актуальная практика
bot.command('Актуальная практика', (ctx) => {
  ctx.reply('На данный момент актуальная практика описана в статье "Работа по сторонам света и выстраивание тоналя".',
  'doc-149932889_513008945',
  endDialog
  )
})

// Благодарю, Захир
bot.command('Благодарю, Захир', (ctx) => {
  ctx.reply('Рад был помочь тебе Воин!',
  null,
  Markup.keyboard([
    Markup.button('Захир')
  ]).oneTime()
  )
})


bot.startPolling(() => {
  console.log('Бот запущен...')
})