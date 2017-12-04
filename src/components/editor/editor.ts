import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template: require('./editor.html'),
})
export class EditorComponent extends Vue {

  private numberOfRows: number = 1;

  private handleInput (event: Event) {
    const editor = this.$refs.editor as HTMLTextAreaElement;
    const matchResult = editor.value.match(/\n/g) || '';
    this.numberOfRows = matchResult.length + 1;
    this.scrollToTop();
  }

  private scrollChange() {
    this.scrollToTop();
  }

  private async scrollToTop() {
    await this.$nextTick();
    const { countContainer: container, editor } = this.$refs;
    (container as HTMLElement).scrollTo(0, (editor as HTMLTextAreaElement).scrollTop);
  }
}
