(function() {
  class Templator {
    constructor(template) {
      this._template = template;
    }

    compile(ctx) {
      return "<p>Моя разметка живет тут</p>";
    }
  }

  window.Templator = Templator;
})();
