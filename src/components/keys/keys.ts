import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component({
  template: require('./keys.html'),
})
export class KeysComponent extends Vue {
  @Prop({
    type: Array
  })
  private readonly keys;
}
