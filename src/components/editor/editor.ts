import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template: require('./editor.html'),
})
export class EditorComponent extends Vue {
  lines: number = 1;
  private addLines (event: Event) {
    let textarea = this.$el.querySelector('textarea');
    let match = textarea.value.match(/\n/g);
    this.lines = match ? match.length + 1 : 1;
    this.$nextTick(function() {
      let div = this.$el.querySelector('.lidis-editor-line__scroll');
      let p = div.querySelector('p');
      div.scrollTo(0, textarea.scrollTop);
    });
  }
  private scrollChange() {
    this.$nextTick(function() {
      let textarea = this.$el.querySelector('textarea');
      let div = this.$el.querySelector('.lidis-editor-line__scroll');
      div.scrollTo(0, textarea.scrollTop);
    });
  }
}
