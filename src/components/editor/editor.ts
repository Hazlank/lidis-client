import Vue from 'vue';
import Component from 'vue-class-component';
import debounce from 'lodash.debounce';

@Component({
  template: require('./editor.html')
})
export class EditorComponent extends Vue {
  private numberOfRows: number = 1;

  private handleInput(event: Event) {
    const editor = this.$refs.editor as HTMLTextAreaElement;
    const matchResult = editor.value.match(/\n/g) || '';
    this.numberOfRows = matchResult.length + 1;
    this.scrollToTop();
  }

  private async scrollToTop() {
    await this.$nextTick();
    const { countContainer: container, editor } = this.$refs as {
      countContainer: HTMLElement;
      editor: HTMLTextAreaElement;
    };
    container.scrollTo(0, editor.scrollTop);
  }

  private mounted() {
    const editor = this.$refs.editor as Element;
    editor.addEventListener('scroll', debounce(this.scrollToTop));
    editor.addEventListener('input', debounce(this.handleInput));
  }
}
