(function() {
  let liArray = []

  class Templator {
    constructor(template) {
      this._template = template;
    }

    compile(ctx) {
      if (this._template.match(/<li>/)) {
        liArray.push(this._template.replace('{{name}}', ctx.name))
      }
      window.handleClick = ctx.handleClick
      if (this._template.match(/ul/)) {
        return this._template
          .replace('{{ className }}', ctx.className)
          .replace('{{chat.id}}', ctx.chat.id)
          .replace('{{handleClick}}', 'window.handleClick()')
          .replace('{{ items }}', liArray.join(''))
      }
    }
  }

  window.Templator = Templator;
})();

