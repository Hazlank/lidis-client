import { spy, assert } from 'sinon';
import { expect } from 'chai';
import Component from 'vue-class-component';
import { ComponentTest, MockLogger } from '../../util/component-test';
import { InputComponent } from './input';

@Component({
  template: require('./input.html')
})
class MockInputComponent extends InputComponent {
  constructor() {
    super();
  }
}

describe('About component', () => {
  let directiveTest: ComponentTest;

  beforeEach(() => {
    directiveTest = new ComponentTest(`
      <lidis-input
        @focus="handleFocus"
        placeholder="请输入内容"
        value="input"
      >
      </lidis-input>
    `, { 'lidis-input': MockInputComponent });
  });

  it('should render correct contents', async () => {

    directiveTest.createComponent({
      data () {
        return {
          inputFocus: false
        };
      },
      methods: {
        handleFocus () {
          this.inputFocus = true;
        }
      }
    });

    await directiveTest.execute(async (vm) => {
      const inputElm = vm.$el.querySelector('input');
      inputElm.focus();
      expect(vm.$data.inputFocus).be.true;
      expect(inputElm.getAttribute('placeholder')).to.equal('请输入内容');
      expect(inputElm.value).to.equal('input');
    });
  });
});
