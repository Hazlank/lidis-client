import { spy, assert } from 'sinon';
import { expect } from 'chai';
import Component from 'vue-class-component';
import { ComponentTest } from '../../util/component-test';
import { InputComponent } from './input';
import { Vue } from '.2.5.6@vue/types/vue';

@Component({
  template: require('./input.html')
})
class MockInputComponent extends InputComponent {
  constructor() {
    super();
  }
}

describe('Input component', () => {
  let directiveTest: ComponentTest;
  afterEach(() => {
    directiveTest.destory();
  });

  it('should render correct contents', async () => {
    directiveTest = new ComponentTest(`
      <lidis-input
        @focus="handleFocus"
        :value="inputValue"
        placeholder="请输入内容"
      ></lidis-input>
    `, { 'lidis-input': MockInputComponent });

    const vmOptions = {
      data () {
        return {
          inputFocus: false,
          inputValue: 'input'
        };
      },
      methods: {
        handleFocus () { this.inputFocus = true; }
      }
    };
    directiveTest.createComponent(vmOptions);

    await directiveTest.execute(async (vm) => {
      const inputElm = vm.$el.querySelector('input');
      inputElm.focus();
      expect(vm.$data.inputFocus).be.true;
      expect(inputElm.getAttribute('placeholder')).to.equal('请输入内容');
      expect(inputElm.value).to.equal('input');
      vm.$set(vm, 'inputValue', 'input2');
      await vm.$nextTick();
      expect(inputElm.value).to.equal('input2');
    });
  });

  it ('should render search icon', async () => {
    directiveTest = new ComponentTest(`
      <lidis-input icon="search"></lidis-input>
    `, { 'lidis-input': MockInputComponent });

    directiveTest.createComponent();

    await directiveTest.execute(async (vm) => {
      expect(vm.$el.querySelector('.lidis-icon.lidis-input__icon.fa.fa-search')).be.exist;
    });
  });

  it ('events:focu,blur', async () => {
    directiveTest = new ComponentTest(`
      <lidis-input ref="input"></lidis-input>
    `, { 'lidis-input': MockInputComponent });

    directiveTest.createComponent();

    const spyFocus = spy();
    const spyBlur = spy();

    await directiveTest.execute(async (vm) => {
      const input = vm.$refs.input as Vue;
      const inputEl = vm.$el.querySelector('input');
      input.$on('focus', spyFocus);
      input.$on('blur', spyBlur);
      inputEl.focus();
      inputEl.blur();

      await vm.$nextTick();
      expect(spyFocus.calledOnce).to.be.true;
      expect(spyBlur.calledOnce).to.be.true;
    });
  });

  it ('events:change', async () => {
    directiveTest = new ComponentTest(`
      <lidis-input ref="input" :value="input"></lidis-input>
    `, { 'lidis-input': MockInputComponent });

    directiveTest.createComponent({
      data() {
        return {
          input: 'a'
        };
      }
    });

    await directiveTest.execute(async (vm) => {
      const inputEl = vm.$el.querySelector('input');
      const simulateEvent = (text: string, event: string) => {
        inputEl.value = text;
        inputEl.dispatchEvent(new Event(event));
      };
      const spyChange = spy();
      const spyInput = spy();
      (vm.$refs.input as Vue).$on('change', spyChange);
      (vm.$refs.input as Vue).$on('input', spyInput);

      simulateEvent('1', 'input');
      simulateEvent('2', 'change');

      await vm.$nextTick();
      expect(spyChange.calledWith('2')).to.be.true;
      expect(spyChange.calledOnce).to.be.true;
      expect(spyInput.calledWith('1')).to.be.true;
      expect(spyInput.calledOnce).to.be.true;
    });
  });
});
