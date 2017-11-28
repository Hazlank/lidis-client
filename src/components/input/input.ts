import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';

@Component({
  template: require('./input.html'),
})
export class InputComponent extends Vue {

  innerValue: string | number  = '';

  @Prop({ type: [Number, String] })
  public readonly value: number | string ;
  @Prop({ type: String })
  public readonly type: string;
  @Prop({ type: String })
  public readonly icon: string ;
  @Prop({ type: String })
  public readonly placeholder: string ;

  @Watch('value')
  private valueChange(newVal: string | number) {
    this.setCurrentValue(newVal);
  }

  private handleBlur (event) {
    this.$emit('blur', event);
  }
  private handleFocus (event) {
    this.$emit('focus', event);
  }
  private handleInput (event) {
    const value = event.target.value;
    this.$emit('input', value);
    this.setCurrentValue(value);
  }
  private handleChange (event) {
    this.$emit('change', event.target.value);
  }

  private setCurrentValue (value: string | number) {
    this.innerValue = value;
  }

  private created () {
    if (this.value) this.setCurrentValue(this.value);
  }
}
